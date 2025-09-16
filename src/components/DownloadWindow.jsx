import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getTransferById,
  resetTransfer,
  validateTransferPassowrd,
} from "../features/transfer/transferSlice";
import { toast } from "react-toastify";
import { expiresIn, formatFileSize } from "../utils/helper";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import transfer_pass from "../assets/transfer_password.mp4";
import transfer_expired from "../assets/transfer_expired.mp4";

const DownloadWindow = () => {
  const { data, loading, error, success } = useSelector(
    (state) => state.transfer
  );

  const { isPageOpend, isPricingPage } = useContext(Context);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passFocus, setPassFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [transfer, setTransfer] = useState(null);

  const handleDownloadSingleFile = async (file) => {
    try {
      const response = await fetch(file?.url);
      const blob = await response.blob();
      saveAs(blob, file?.fileName);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDownloadAll = async () => {
    if (!transfer?.files?.length) return;

    // if only 1 file, just download it
    if (transfer.files.length === 1) {
      return handleDownloadSingleFile(transfer.files[0]);
    }

    const zip = new JSZip();

    for (const file of transfer?.files) {
      try {
        const response = await fetch(file.url);
        const blob = await response.blob();

        // add file to zip
        zip.file(file.fileName, blob);
      } catch (err) {
        toast.error("Something went wrong!");
      }
    }

    // generate zip
    const zipBlob = await zip.generateAsync({ type: "blob" });

    // ---- Custom Filename ----
    const firstFile = transfer.files[0]?.fileName;
    const baseName = firstFile.toLowerCase().replace(/\./g, "-"); // replace dots with -

    const now = new Date();
    const timestamp = now
      .toISOString()
      .slice(0, 16) // "2025-09-10T06:15"
      .replace("T", "_") // "2025-09-10_06:15"
      .replace(":", ""); // "2025-09-10_0615"

    const zipName = `skayshare_${baseName}_${timestamp}.zip`;

    // download zip
    saveAs(zipBlob, zipName);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }

    if (success) {
      if (data?.isTransferFeatchd) {
        setTransfer(data?.transfer);
        console.log(data);
      }

      if (data?.validated) {
        setIsPasswordValidate(true);
      }
    }

    dispatch(resetTransfer());
  }, [error, success, dispatch, data]);

  useEffect(() => {
    dispatch(getTransferById(id));
  }, [id]);

  return (
    <>
      <div
        className={`backdrop-blur-none top-1/2 bg-[#fff] z-30 shadow-[0_0_12px_0_rgba(0,0,0,0.1)]  transition-all h-[25.625em] left-[5em] m-[-12.8125em_0_0] rounded-2xl flex flex-col absolute box-borde duration-[.4s] overflow-hidden w-[17.5em] ${
          isPageOpend
            ? isPricingPage
              ? "translate-x-[-150%] scale-75"
              : "translate-x-[-150%] lg:translate-x-[-3.4375em] xl:translate-x-0"
            : "translate-x-0 "
        }`}
      >
        <div className="visible opacity-100 h-full lfex flex-col box-border transition-opacity duration-100 ease-in delay-125">
          <div className=" h-full rounded-2xl box-border visible">
            {!transfer ? (
              <div>
                <div className="flex flex-col items-center justify-center py-0 px-4 gap-3 ">
                  <video
                    className="w-full h-auto mt-0 bg-[position:50%_50%] bg-no-repeat bg-[length:100%] inline-block opacity-100 transition-opacity duration-100 ease-out"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    src={transfer_expired}
                  ></video>

                  {!transfer && !loading && (
                    <div className="flex flex-col items-center justify-center gap-2 px-4">
                      <h2 className="font-normal text-[#17181a] text-[1.125em] leading-[1.2] m-0 mb-[.1875em] text-center px-[.454545em]">
                        Transfer not available
                      </h2>
                      <p className="text-[#484a4d] leading-[1.4] m-0 mb-[.625em] py-0 px-[1.875em text-center text-[.8125em]">
                        This transfer is no longer available on our servers. It
                        has either expired and cannot be recovered, or was
                        deleted by the sender. To receive the content again,
                        please contact the sender directly.
                      </p>
                    </div>
                  )}
                  {!transfer && loading && (
                    <h2 className="font-normal text-[#17181a] text-[1.125em] leading-[1.2] m-0 mb-[.1875em] text-center px-[.454545em] mt-[40px]">
                      Transfer Finding...
                    </h2>
                  )}
                </div>
                {!transfer && !loading && (
                  <div className=" fixed bottom-0 left-0 right-0 flex p-3 gap-2 rounded-b-2xl">
                    <button
                      onClick={() => navigate("/")}
                      className="w-full items-center rounded-2xl shadow-none box-border cursor-pointer flex text-base font-medium gap-2 h-12 justify-center leading-[1] outline-0 p-4 no-underline select-none bg-[#3767ea] border-0 text-[#f5f8ff] transition-all duration-150 ease-in-out disabled:opacity-[.4] disabled:pointer-events-none"
                    >
                      Sent a file?
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {transfer?.password && !isPasswordValidate ? (
                  <div>
                    <div className="flex flex-col items-center justify-center py-0 px-4 gap-3 ">
                      <video
                        className="w-full h-auto mt-0 bg-[position:50%_50%] bg-no-repeat bg-[length:100%] inline-block opacity-100 transition-opacity duration-100 ease-out"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                        src={transfer_pass}
                      ></video>

                      <div className="flex flex-col items-center justify-center gap-2 px-4">
                        <h2 className=" font-normal text-[#17181a] text-[1.375em] leading-[1.2] m-0 my-0 mx-[.4545454545em] text-center">
                          Enter password
                        </h2>
                        <p className=" font-normal text-[#6a6d70] text-[.8125em] m0- p-0">
                          You need a password to download this transfer
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <label className=" h-0 opacity-0 block box-border font-normal">
                          password
                        </label>
                        <div
                          className={`h-[48px] items-center bg-[#fff] border-0 rounded-2xl text-[#161616] flex text-base font-normal gap-2 leading-[1.2] m-[2px] outline-none px-4 relative shadow-[0_0_0_1px_#d6d6d6] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] text-center no-underline w-[15em] ${
                            passFocus && "shadow-[0_0_0_2px_#353535]"
                          }`}
                        >
                          <input
                            type="password"
                            placeholder="Passwrod"
                            className="appearance-none bg-none border-0 text-[16px] font-normal h-full leading-6 outline-0 w-full py-px px-[2px]"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            onFocus={() => setPassFocus(true)}
                            onBlur={() => setPassFocus(false)}
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className=" fixed bottom-0 left-0 right-0 flex p-3 gap-2 rounded-b-2xl">
                      <button
                        onClick={() =>
                          dispatch(validateTransferPassowrd({ password, id }))
                        }
                        disabled={password === "" || loading}
                        className="w-full items-center rounded-2xl shadow-none box-border cursor-pointer flex text-base font-medium gap-2 h-12 justify-center leading-[1] outline-0 p-4 no-underline select-none bg-[#3767ea] border-0 text-[#f5f8ff] transition-all duration-150 ease-in-out disabled:opacity-[.4] disabled:pointer-events-none"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="h-[20.125rem] rounded-t-[1rem] font-normal overflow-hidden relative overflow-x-hidden w-full before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[10px] before:z-[999] before:transition-shadow before:duration-300 before:ease-in-out after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[10px] after:z-[999] after:transition-shadow after:duration-300 after:ease-in-out after:shadow-[inset_0_-6px_6px_-6px_rgba(23,24,26,0.25)] group hover:pr-[2px] scrollable_content">
                      <div className="scrollbar-custom m-[0px_2px_0px_5px] group-hover:mr-0 box-border h-full left-0 my-0 overflow-x-hidden overflow-y-scroll p-0 right-0 top-0 font-normal">
                        <div className="h-auto min-h-[15.25em] pt-[1.875em] items-center border-b border-[#8ebed] block pb-[.75em] px-0 font-normal">
                          <svg
                            className="h-[8.75em] w-[8.75em] block mt-0 mx-auto mb-[.75em] box-border font-normal"
                            viewBox="0 0 170 170"
                          >
                            <g fill="#d4d7d9" fillRule="evenodd">
                              <path d="M145.104 24.896c33.195 33.194 33.195 87.014 0 120.208-33.194 33.195-87.014 33.195-120.208 0C-8.3 111.91-8.3 58.09 24.896 24.896 58.09-8.3 111.91-8.3 145.104 24.896zm-7.071 7.071c-29.29-29.29-76.777-29.29-106.066 0-29.29 29.29-29.29 76.777 0 106.066 29.29 29.29 76.777 29.29 106.066 0 29.29-29.29 29.29-76.777 0-106.066z"></path>
                              <path d="M82 100.843V59.007A4.006 4.006 0 0 1 86 55c2.21 0 4 1.794 4 4.007v41.777l15.956-15.956a4.003 4.003 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.657l-22.628 22.628a3.99 3.99 0 0 1-3.017 1.166 3.992 3.992 0 0 1-3.012-1.166L60.328 90.485a4.003 4.003 0 0 1 0-5.657 4.004 4.004 0 0 1 5.657 0L82 100.843z"></path>
                            </g>
                          </svg>
                          <h2 className=" mt-0 mx-0 mb-[.0625em] py-0 px-[.9090909091em] font-normal text-[#17181a] text-[1.375em] leading-[1.2] text-center box-border">
                            Your files are ready
                          </h2>
                          <p className="text-[.8125em] leading-[1.3846153846em] py-0 px-[1.53846153885em] text-center font-normal text-[#6a6d70] m-0">
                            {/* Expires in about 24 hours */}
                            {expiresIn(transfer?.expireAt)}
                          </p>
                          <div className="pt-[1.25rem] px-[1.25rem] pb-0 box-border">
                            <p className="pl-[0] text-[#484a4d] text-left break-words py-0 pr-[1.5384615385em] m-0">
                              {transfer?.title}
                            </p>
                          </div>
                        </div>
                        <div className=" box-border font-normal">
                          <ul className=" bg-[#f1f1f1] rounded-lg m-0 p-0 list-none box-border">
                            {transfer?.files?.map((file, key) => {
                              return (
                                <li>
                                  <div className=" border-b-0 pl-0 pr-0 flex justify-between cursor-default my-0 mx-[.625em] py-2 px-[.625em] relative select-none max-w-full">
                                    <div className="flex flex-col max-w-[50%]  cursor-default select-none">
                                      <span className=" cursor-default select-none">
                                        <h6 className="text-[#161616] font-normal text-[15px] m-0 block leading-[1.4285714286em] overflow-hidden p-0 text-ellipsis whitespace-nowrap box-border cursor-default select-none">
                                          {file?.fileName}
                                        </h6>
                                      </span>
                                      <div className=" text-[#676767] flex text-[0.75em] leading-[1.1667em] font-normal m-0 box-border cursor-default select-none ">
                                        <span className="text-[#676767] text-[13px] leading-[1.1667em] font-normal cursor-default select-none after:content-['·'] after:inline-block after:py-0 after:px-[0.375em] after:no-underline box-border ">
                                          {file?.isFolder ? (
                                            <>
                                              <svg
                                                viewBox="0 0 9 7"
                                                width="9"
                                                height="7"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  d="M0 6.14285714V.85714286C0 .38375593.38375593 0 .85714286 0h2.26447876c1.33783784 0 .74324324 1.23673511 2.08108108 1.23673511h2.94015444C8.61624407 1.23673511 9 1.62049104 9 2.09387797v4.04897917C9 6.61624407 8.61624407 7 8.14285714 7H.85714286C.38375593 7 0 6.61624407 0 6.14285714z"
                                                  fill="#6a6d70"
                                                ></path>
                                              </svg>
                                              <span>Folder</span>
                                            </>
                                          ) : (
                                            formatFileSize(file?.size)
                                          )}
                                        </span>
                                        <span className="text-[#676767] text-[13px] leading-[1.16667em] font-normal cursor-pointer select-none">
                                          {file?.isFolder
                                            ? `${file?.files} items`
                                            : file?.fileName.split(".").pop()}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex justify-between gap-2 items-center box-border cursor-default select-none">
                                      <button
                                        onClick={() =>
                                          handleDownloadSingleFile(file)
                                        }
                                        className="rounded-[50%] text-sm font-medium h-6 leading-[1.2] w-6 shadow-none box-border cursor-pointer outline-0 p-0 no-underline select-none items-center flex gap-2 justify-center bg-transparent border border-[#3767ea] text-[#3767ea] transition-all duration-150 ease-in-out"
                                      >
                                        <span className=" w-4 items-center inline-flex justify-center leading-[1] box-border font-medium cursor-pointer select-none text-[#3767ea]">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            fill="none"
                                            className=" h-[1em] w-[1em] text-base font-medium leading-[1] cursor-pointer select-none text-[#3767ea]"
                                            role="img"
                                            viewBox="0 0 32 32"
                                          >
                                            <path
                                              stroke="currentColor"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="1.5"
                                              d="M16 6.667v18.666m0 0 9.333-9.143M16 25.333 6.667 16.19"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <a className="text-[5268ff] box-border cursor-pointer font-normal">
                          <div className=" font-normal leading-[1.3125rem] text-[.875rem] m-0 py-[1em] px-[1.25em] bg-[#f9f9f9] text-center text-[#676767] box-border">
                            <span className=" pr-2 text-balance items-center inline-flex justify-center leading-[1] box-border font-normal text-center text-[#676767] cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className=" h-[1em] w-[1em] box-border fill-none text-base leading-[1] text-center text-[#676767]"
                                role="img"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M7 28v-9.333m0 0V4h4.626a9 9 0 0 1 5.526 1.896l.268.208A9 9 0 0 0 22.945 8H25v14.667h-2.055a9 9 0 0 1-5.525-1.896l-.268-.209a9 9 0 0 0-5.526-1.895z"
                                ></path>
                              </svg>
                            </span>
                            <div className=" inline-block align-text-bottom box-border font-normal text-[.875rem] text-center text-[#676767] ">
                              Report this transfer
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* button area  */}
                    <div className="h-[5.5em] p-5 relative box-border">
                      <button
                        onClick={handleDownloadAll}
                        className="w-full items-center rounded-2xl shadow-none box-border cursor-pointer flex text-base font-medium gap-2 h-12 justify-center leading-[1] outline-0 p-4 no-underline select-none bg-[#3767ea] border-0 text-[#f5f8ff] transition-all duration-150 ease-in-out"
                      >
                        {transfer?.files?.length > 1
                          ? "Download all files"
                          : "Download"}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadWindow;
