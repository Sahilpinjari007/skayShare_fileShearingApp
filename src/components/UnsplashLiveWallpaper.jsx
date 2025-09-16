import { useContext, useEffect, useRef, useState } from "react";
import MineAds from "./MineAds";
import { Context } from "../context/AppContext";
import { unsplashQueries } from "../utils/Constant";

export default function UnsplashLiveWallpaper({ onLoaded }) {
  const { isPageOpend } = useContext(Context);
  const [img, setImg] = useState(null);
  const [isError, setIsError] = useState(false);
  const hasFetched = useRef(false);

  const fetchImage = async () => {
    try {
      const querieIndex = Math.floor(Math.random() * unsplashQueries.length);
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=${unsplashQueries[querieIndex]}`,
        {
          headers: {
            Authorization: `Client-ID ${
              import.meta.env.VITE_API_UNSPLASH_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!res.ok) {
        console.error(`Unsplash error: ${res.status} ${res.statusText}`);
        setIsError(true);
      }

      const data = await res.json();
      const url = data.urls?.regular;

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setImg(url);
        onLoaded();
      };

      img.onerror = () => {
        console.error("Image failed to load");
        setIsError(true);
      };
    } catch (err) {
      console.error("Fetch failed:", err);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    fetchImage();
  }, []);

  return img ? (
    <div>
      <div
        className={`cursor-pointer select-none m-0 p-0 border-0 text-inherit align-baseline absolute top-0 right-0 bottom-0 left-0 z-0 ${
          isPageOpend && "translate-x-[-10%]"
        } transition-all duration-[500ms] ease-[cubic-bezier(.77,0,.175,1)]`}
      >
        <img
          src={img}
          alt="Unsplash"
          className="cursor-pointer select-none m-0 p-0 border-0 align-baseline w-full h-full object-[50%_50%] object-cover bg-[#999999] bg-position-[50%_50%] bg-no-repeat bg-cover"
        />
      </div>
    </div>
  ) : (
    isError && <MineAds onLoaded={onLoaded} />
  );
}
