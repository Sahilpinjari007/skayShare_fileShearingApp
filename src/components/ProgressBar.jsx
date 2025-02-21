import React from "react";

const ProgressBar = ({progress=40}) => {
  return (
    <div className="bg-gray-400 w-full h-4 mt-5 rounded-full ">
      <div className="bg-primary h-4 rounded-full text-[10px] text-white" style={{width: `${progress}%`}}>
      {`${Number(progress).toFixed(0)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
