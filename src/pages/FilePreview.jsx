import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "../services/firebaseConfig";
import { AwardIcon, CircleArrowLeft, Copy } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { useUser } from "@clerk/clerk-react";
import { toast, ToastContainer } from "react-toastify";

const FilePreview = () => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(true);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
  const [showBtnLoader, setShowBtnLoader] = useState(false);
  const [showEmailBtnLoader, setShowEmailBtnLoader] = useState(false);

  const user = useUser();
  const db = getFirestore(app);
  const { fileId } = useParams();

  useEffect(() => {
    setLoader(true);
    fileId && getFileInfo();
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

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(file?.shortUrl);
      toast.success("Link Copy to clipboard.");
    } catch (err) {
      toast.error("Link Copy to clipboard failed");
    }
  };

  const onPasswordSave = async (password) => {
    setShowBtnLoader(true);
    const docRef = doc(db, "uploadedFile", fileId);

    await updateDoc(docRef, {
      password: password,
    });
    setShowBtnLoader(false);
  };

  const onEmailSend = async (email) => {};

  if (loader)
    return (
      <div className="w-full h-[calc(100vh-70px)] bg-red flex items-center justify-center">
        <MoonLoader size={30} color="#007dfc" />
      </div>
    );

  if (!file && !loader)
    return (
      <div className="flex justify-center flex-col items-center mt-52">
        <h2 className=" text-[20px] text-center m-5">
          File Not <strong className=" text-primary">Exists!!</strong>
        </h2>
        <Link
          to={"/upload"}
          className="flex flex-row gap-2 items-center w-max mb-[20px]"
        >
          <CircleArrowLeft />
          <span className=" font-medium text-[17px]">Go to Upload</span>
        </Link>
      </div>
    );

  return (
    <div className="w-full md:h-[calc(100vh-70px)] box-border z-[-1] flex items-center justify-center pb-10 ">
      <div className=" w-full max-w-[900px] mx-auto  flex flex-col md:flex-row box-border my-[80px] p-5">
        <ToastContainer />
        <div className="w-screen max-w-[300px] m-auto h-full box-border p-2">
          <Link
            to={"/upload"}
            className="flex flex-row gap-2 items-center w-max mb-[20px]"
          >
            <CircleArrowLeft />
            <span className=" font-medium text-[17px]">Go to Upload</span>
          </Link>

          <div className="rounded-md border-2 border-blue-400">
            <img
              src="/file.svg"
              className="w-screen max-w-[200px] my-5 mx-auto"
            />
            <div className="flex flex-col justify-center items-center mt-[-px] mb-[15px]">
              <span className="font-medium text-[19px] text-black max-w-[200px] text-ellipsis overflow-hidden">
                {file?.fileName}
              </span>
              <span className="text-[17px] text-gray-400 max-w-[150px] text-ellipsis overflow-hidden">
                {file?.fileType}/{file?.fileSize}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[500px] h-full m-auto">
          <div className="flex flex-col items-center w-ful p-2 mt-6">
            <div className=" w-full">
              <label className=" text-gray-500 font-medium text-[17px]">
                Short Url
              </label>
              <div className=" w-full h-[43px] rounded-md border border-gray-400 flex items-center  gap-1 p-2 mt-1">
                <span className=" text-gray-500 w-full text-ellipsis max-w-full overflow-hidden block text-[18px]">
                  {file?.shortUrl}
                </span>
                <Copy
                  onClick={handleCopyText}
                  className=" w-[50px] mr-[-5px] cursor-pointer right-0"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full p-2 mb-5 mt-1">
            <div className="w-full flex flex-row gap-3 h-max justify-start mt-1 mb-1.5">
              <input
                type="checkbox"
                onChange={(e) => setIsPasswordEnabled(e.target.checked)}
                className="w-[17px] text-primary"
              />
              <span className=" font-medium text-[19px]">Enable Password?</span>
            </div>
            <div className=" w-full">
              {isPasswordEnabled ? (
                <div className=" w-full h-[43px] flex items-center gap-2">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-[43px] text-gray-500 text-[18px] outline-none rounded-md border border-gray-400 p-2 "
                  />
                  {!showBtnLoader ? (
                    <button
                      disabled={password?.length < 6}
                      onClick={() => onPasswordSave(password)}
                      className="h-full disabled:bg-gray-400 bg-primary px-4 rounded-md font-medium text-white"
                    >
                      Save
                    </button>
                  ) : (
                    <div className="px-5">
                      <MoonLoader size={20} color="#007dfc" />
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-md border border-gray-400 box-border mx-2 p-4">
            <div className="flex flex-col items-center w-ful box-border ">
              <div className=" w-full">
                <label className=" text-gray-500 font-medium text-[17px]">
                  Send File to Email
                </label>
                <div className=" w-full">
                  <div className=" w-full h-[43px] flex items-center gap-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full h-[43px] text-gray-500 text-[18px] outline-none rounded-md border border-gray-400 p-2 mt-1"
                    />
                  </div>
                  {!showEmailBtnLoader ? (
                    <button
                      onClick={() => onEmailSend(email)}
                      className=" mt-[20px] w-full p-2 h-full bg-primary px-4 rounded-md font-[400] text-white text-[19px]"
                    >
                      Send Email
                    </button>
                  ) : (
                    <div className="flex justify-center w-full mb-1 mt-[20px]">
                      <MoonLoader size={20} color="#007dfc" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilePreview;
