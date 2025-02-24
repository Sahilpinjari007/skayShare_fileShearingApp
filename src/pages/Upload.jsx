"use client";

import React, { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm.jsx";
import { app } from "../services/firebaseConfig.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useUser } from "@clerk/clerk-react";
import { genrateRandomStr } from "../utils/genrateRandomStr.js";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [fileDocId, setFileDocId] = useState(null);

  const db = getFirestore(app);
  const storage = getStorage(app);

  const uploadFile = async (file) => {
    try {
      const storageRef = ref(storage, "file-upload/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, file.type);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          progress == 100 &&
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              saveInfo(file, downloadURL);
            });
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const saveInfo = async (file, fileUrl) => {
    

    const docId = genrateRandomStr().toString();
    setFileDocId(docId);

    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        id: docId,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress.emailAddress,
        userName: user?.username || user?.firstName+" "+user?.lastName,
        password: "",
        shortUrl: import.meta.env.VITE_APP_BASE_URL + "/f/" + docId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    progress == 100 &&
      setTimeout(() => {
        setUploadComplete(true);
      }, 2000);
  }, [progress == 100]);

  useEffect(() => {
    uploadComplete &&
      setTimeout(() => {
        setUploadComplete(false);
        navigate(`/file-preview/${fileDocId}/`);
      }, 2000);
  }, [uploadComplete == true]);

  if (uploadComplete)
    return (
      <div className="w-full mt-[100px] bg-red flex items-center justify-center flex-col">
        <img src="/verified.gif" className="w-[100px] mix-blend-multiply" />
        <strong className="text-2xl font-medium">
          {" "}
          File<strong className=" text-primary"> Uploaded </strong>Successfully
        </strong>
      </div>
    );

  return (
    <div className="p-5 md:px-28 mt-[30px]">
      <h2 className=" text-[20px] text-center m-5">
        Start <strong className=" text-primary">Uploading</strong> Files and{" "}
        <strong className=" text-primary">Share</strong> it
      </h2>
      <UploadForm
        progress={progress}
        onUploadBtnClick={(file) => uploadFile(file)}
      />
    </div>
  );
};

export default Upload;
