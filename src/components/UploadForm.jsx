import React, { useEffect, useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreviewBar from "./FilePreviewBar";
import ProgressBar from "./ProgressBar";
import { MoonLoader } from "react-spinners";

const UploadForm = ({ progress, onUploadBtnClick }) => {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showBtnLoader, setShowBtnLoader] = useState(false);

  const onFileSelect = (file) => {
    if (file && file.size > 20000000) {
      setErrorMsg("Maximum File Upload Size is 200MB!");
      return;
    }
    setFile(file);
    setErrorMsg(null);
  };

  useEffect(()=>{
    if(progress>0) setShowBtnLoader(false)
  }, [progress])

  return (
    <div className=" text-center">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 hover:bg-gray-100 "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl  text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className=" text-primary">drag</strong> and{" "}
              <strong className=" text-primary">drop</strong>{" "}
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (Max Size: 200Mb)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errorMsg ? <AlertMsg msg={errorMsg} /> : null}
      {file ? (
        <FilePreviewBar file={file} removeFile={() => setFile(null)} />
      ) : null}

      {progress ? (
        <ProgressBar progress={progress} />
      ) : (
        <div className="flex flex-col items-center  mt-5">
          {!showBtnLoader ? (
            <button
              onClick={() => {
                onUploadBtnClick(file);
                setShowBtnLoader(true);
              }}
              disabled={!file}
              className="p-2 bg-primary text-white w-[30%] rounded-full disabled:bg-gray-400"
            >
              Upload
            </button>
          ) : (
            <MoonLoader size={20} color="#007dfc" />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadForm;
