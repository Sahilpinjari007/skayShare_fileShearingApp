import React, { useEffect, useState } from "react";
import MineAds from "./MineAds";
import UnsplashLiveWallpaper from "./UnsplashLiveWallpaper";

const ADRender = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [adVersion, setAdVersion] = useState(0);
  const components = ["main", "unsplash"];

  const nextAd = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setLoading(true);
      setCurrent(Math.floor(Math.random() * components.length));
      setAdVersion((v) => v + 1);
    }, 500);
  };

  const handleLoaded = () => {
    setLoading(false);
    setShowOverlay(false);
  };

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => nextAd(), 30000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    setCurrent(Math.floor(Math.random() * components.length));
  }, []);

  return (
    <ss-wallpaper className="w-screen h-screen block relative overflow-hidden bg-transparent">
      {components[current] === "main" ? (
        <MineAds key={`main-${adVersion}`} onLoaded={handleLoaded} />
      ) : (
        <UnsplashLiveWallpaper
          key={`unsplash-${adVersion}`}
          onLoaded={handleLoaded}
        />
      )}
      {showOverlay && (
        <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-100" />
      )}
    </ss-wallpaper>
  );
};
export default ADRender;
