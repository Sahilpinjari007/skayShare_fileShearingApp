import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className=" text-[150px] text-primary">404</h1>
        <h2 className=" font-medium text-[20px] mt-[-30px]">
          Page Not Found Back to{" "}
          <Link to={"/upload"} className=" text-primary underline">
            Upload!
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
