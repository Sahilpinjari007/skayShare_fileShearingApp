import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mineAdsData from "../../skayshareAdsData.json";
import { Context } from "../context/AppContext";

const MineAds = ({ onLoaded }) => {
  const { isPageOpend } = useContext(Context);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * mineAdsData.length);
    setIndex(randomNum);
    onLoaded();
  }, []);
  return (
    <div>
      <div>
        <div className={`cursor-pointer select-none m-0 p-0 border-0 text-inherit align-baseline absolute top-0 right-0 bottom-0 left-0 z-0 ${isPageOpend && "translate-x-[-10%]"} transition-all duration-[500ms] ease-[cubic-bezier(.77,0,.175,1)]`}>
          <img
            className="cursor-pointer select-none m-0 p-0 border-0 align-baseline w-full h-full object-[50%_50%] object-cover bg-[#999999] bg-position-[50%_50%] bg-no-repeat bg-cover"
            src={mineAdsData[index].bgUrl}
          ></img>
        </div>
      </div>

      <div
        style={{
          left: `calc((100% - 360px) / 2 + 360px + calc(${mineAdsData[index].captionLayerXOffset} * ${mineAdsData[index].scale}))`,
          top: `calc(50% + calc(${mineAdsData[index].captionLayerYOffset} * ${mineAdsData[index].scale}))`,
          transform: `translate(calc(-50% - (100vw - 360px - 100%) * 0.05), -50%)`,
        }}
        className={`cursor-pointer select-none m-0 p-0 border-0 align-baseline absolute`}
      >
        <div>
          <img
            style={{
              width: `calc(${mineAdsData[index].captionImageLayerSize} * ${mineAdsData[index].scale})`,
              maxWidth: `calc(100vw * ${mineAdsData[index].scale})`,
            }}
            className={`cursor-pointer select-none m-0 p-0 border-0 text-inherit align-baselineobject-contain ${isPageOpend && "translate-x-[-20%]"} transition-all duration-[500ms] ease-[cubic-bezier(.77,0,.175,1)]`}
            src={mineAdsData[index].captionUrl}
          ></img>
        </div>
      </div>

      <div
        style={{
          left: `calc((100% - 360px) / 2 + 360px + calc(${mineAdsData[index].buttonLayerXOffset} * ${mineAdsData[index].scale}))`,
          top: `calc(50% + calc(${mineAdsData[index].buttonLayerYOffset}*${mineAdsData[index].scale}))`,
          transform: `translate(calc(-50% - (100vw - 360px - 100%) * 0.05), -50%)`,
        }}
        className={`cursor-pointer select-none m-0 p-0 border-0 text-inherit align-baseline absolute`}
      >
        <div>
          <Link to={"/pricing"}>
            <img
              style={{
                maxWidth: `calc(100vw * ${mineAdsData[index].scale})`,
                width: `calc(${mineAdsData[index].buttonImageLayerSize} * ${mineAdsData[index].scale})`,
              }}
              className={`cursor-pointer select-none m-0 p-0 border-0 text-inherit align-baseline object-contain hover:scale-110 ${isPageOpend && "translate-x-[-50%]"} transition-all duration-[500ms] ease-[cubic-bezier(.77,0,.175,1)]`}
              src={mineAdsData[index].buttonUrl}
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MineAds;
