import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { useUser } from "@clerk/clerk-react";
import { MoonLoader } from "react-spinners";

const Download = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const db = getFirestore(app);
  const { fileId } = useParams();

  useEffect(() => {
    fileId && getFileInfo();
    setLoader(true);
  }, [fileId]);

  const getFileInfo = async () => {
    const docRef = doc(db, "uploadedFile", fileId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setFile(docSnap.data());
    } else {
      setFile(null);
      console.log("No such document!");
    }
    setLoader(false);
  };

  const handleDownload = async (url, fileName) => {
    fetch(url)
      .then((response) => response.blob()) // Convert to Blob
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = blobURL;
        link.setAttribute("download", fileName || "downloaded-file"); // Force download with filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobURL); // Clean up
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  if (loader)
    return (
      <div className="w-full h-[calc(100vh-70px)] bg-red flex items-center justify-center">
        <MoonLoader size={30} color="#007dfc" />
      </div>
    );

  if (!loader && !file)
    return (
      <div className="w-full mt-[200px] bg-red flex items-center justify-center flex-col">
        <img src="/file-missing.png" className="w-[100px]" />
        <strong className="text-2xl font-medium mt-5">
          File was not <strong className=" text-primary">Found!... </strong>
        </strong>
      </div>
    );

  return (
    <div className=" bg-gray-100 h-screen w-full flex justify-center items-center flex-col gap-4">
      <Link to={"/upload"}>
        <img
          alt="logo"
          loading="lazy"
          width="150"
          height="100"
          decoding="async"
          data-nimg="1"
          src="/logo.png"
        />
      </Link>
      <div>
        <div className="p-5 rounded-md bg-white flex flex-col items-center">
          <div className="text-center flex-col gap-3 items-center flex">
            <h2 className="text-[20px] text-gray-600">
              <strong className="text-primary">{file?.userName} </strong>Shared
              the file with You
            </h2>
            <h2 className="text-[10px] text-gray-400">
              Find File details below
            </h2>
            <img
              alt="download"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              data-nimg="1"
              className="w-[150px] h-[150px]  p-5 "
              src="/download-file.gif"
              // style="color: transparent;"
            />
            <h2 className="text-gray-500 text-[15px]">
              {file?.fileName} ⚡ {file?.fileType} ⚡ {file?.fileSize} Bytes
            </h2>
          </div>
          {file?.password.length >= 6 ? (
            <input
              className="p-2 border rounded-md text-[14px] mt-5 text-center  outline-blue-400"
              placeholder="Enter password to access "
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : null}

          <button
            href=""
            className="flex mt-5 gap-2 p-2 bg-primary text-white rounded-full w-full items-center hover:bg-blue-600 text-[14px]  text-center  justify-center disabled:bg-gray-300"
            onClick={() => handleDownload(file?.fileUrl, file?.fileName)}
            disabled={password !== file?.password}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download h-4 w-4"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>{" "}
            Download
          </button>
          <h2 className="text-gray-400 text-[12px]">
            *Term and Condition apply
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Download;
