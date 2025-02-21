import { X } from "lucide-react";
import React from "react";

const FilePreviewBar = ({ file, removeFile }) => {
  return (
    <div className="flex items-center gap-2 mt-5 border rounded-md p-2 border-blue-200 justify-between">
      <div className="flex items-center p-2 justify-between">
        <img src="/file.svg" className="w-[80px]" alt="file" />

        <div className=" text-left">
          <h2>{file.name}</h2>
          <h2 className=" text-[12px] text-gray-400">
            {file.type} / {(file.size / 1024 / 1024).toFixed(2)}MB
          </h2>
        </div>
      </div>
      <X
        className=" text-red-500 cursor-pointer"
        onClick={() => removeFile()}
      />
    </div>
  );
};

export default FilePreviewBar;
