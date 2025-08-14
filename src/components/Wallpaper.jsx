import React, { useEffect, useState } from "react";

const Wallpaper = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=znPyvmHRcWWGq6Sft6EFiGH7E5nkDSKdAqty8BmLMkc`
    );
    const data = await res.json();
    setImageUrl(data.urls.full);
  };

  useEffect(() => {
    fetchImage(); // first load
    const interval = setInterval(fetchImage, 30000); // change every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        transition: "background-image 1s ease-in-out",
      }}
    ></div>
  );
};

export default Wallpaper;
