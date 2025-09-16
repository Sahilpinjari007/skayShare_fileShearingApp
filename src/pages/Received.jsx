import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransferById,
  resetTransfer,
} from "../features/transfer/transferSlice";
import { useParams } from "react-router-dom";
import { formatFileSize, timeAgo, transferSize } from "../utils/helper";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Recived = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading, error, success } = useSelector(
    (state) => state.transfer
  );

  const { setPageOpen, setPricingPage } = useContext(Context);
  const [transfer, setTransfer] = useState({});
  const [loaders, setLoader] = useState({
    downloadfileLoading: false,
  });

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
    setLoader((prev) => ({ ...prev, downloadfileLoading: true }));

    // if only 1 file, just download it
    if (transfer.files.length === 1) {
      handleDownloadSingleFile(transfer.files[0]);
      return setLoader((prev) => ({ ...prev, downloadfileLoading: false }));
    }

    const zip = new JSZip();

    for (const file of transfer.files) {
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
    setLoader((prev) => ({ ...prev, downloadfileLoading: false }));
  };

  const copyDownloadLink = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard
      .writeText(`${import.meta.env.VITE_API_APP_URL}/download/${transfer._id}`)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };

  useEffect(() => {
    if (success) {
      if (data?.isTransferFeatchd) {
        setTransfer(data?.transfer);
      }
    }

    dispatch(resetTransfer());
  }, [error, success, dispatch, data]);

  useEffect(() => {
    dispatch(getTransferById(id));
  }, [id]);

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  }, []);

  return (
    <div className=" pb-6 min-h-[calc(100%-4.0625em)] pt-[3.5em] px-[80px] my-0 mx-auto max-w-[80rem] box-border">
      <div className="box-border">
        <div className="flex items-center box-border">
          <h1 className=" font-normal text-[2.5em] m-0 overflow-hidden text-ellipsis whitespace-nowrap pt-0 px-0 pb-[0.5625rem] box-border">
            {transfer?.title}
          </h1>
        </div>

        <span className="mb-[1.5625em] border-b-[0.0625em] border-[rgb(232,235,237)] font-normal text-[#6a6d70] block text-[.875em] box-border">
          <div className="flex items-center mb-[1.5625rem] box-border font-normal text-[#6a6d70] text-[.875em]">
            <span className=" box-border font-normal text-[#6a6d70] text-sm after:content-['·'] after:inline-block after:px-1.5 after:no-underline">
              {`${
                transfer?.files?.length === 1 && transfer?.files[0]?.isFolder
                  ? transfer?.files[0]?.files
                  : transfer?.files?.length
              } files`}
            </span>
            <span className=" box-border font-normal text-[#6a6d70] text-sm after:content-['·'] after:inline-block after:px-1.5 after:no-underline">
              {transferSize(transfer?.files)}
            </span>
            <span className=" font-normal text-[#6a6d70] text-sm">
              {timeAgo(transfer?.createdAt)}
            </span>
          </div>
        </span>

        <div className="flex flex-row border-b-[0.0625em] border-[rgb(232,235,237)] pb-[1.5625em] justify-between box-border">
          <div className=" text-ellipsis w-[25em] overflow-hidden whitespace-nowrap box-border">
            <div className=" h-[48px] overflow-hidden box-border whitespace-nowrap">
              <div>
                <div>
                  <div className="h-[48px] border border-[#d6d6d6] flex flex-row items-center justify-between box-border whitespace-nowrap rounded-2xl">
                    <span className=" overflow-hidden text-ellipsis whitespace-nowrap p-4 font-normal text-base leading-[1.2] box-border">
                      {`https://ss.tl/t-${transfer?._id}`}
                    </span>
                    <div
                      onClick={(e) => copyDownloadLink(e)}
                      className="text-[#3767ea] cursor-pointer flex flex-row items-center gap-2 border-l border-[#d6d6d6] p-4 font-medium text-sm leading-[1.2] box-border whitespace-nowrap"
                    >
                      <span className=" text-inherit items-center inline-flex justify-center leading-[1] box-border text-#3767ea] cursor-pointer font-medium whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          className="w-[1.5em] h-[1.5em] box-border leading-[1] text-[#3767ea] cursor-pointer font-bold whitespace-nowrap"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="m24.466 15.436.564-.565a5.587 5.587 0 0 0-7.9-7.901l-4.239 4.238a4.38 4.38 0 0 0 0 6.198l1.417 1.416m-6.773-2.258-.564.565a5.587 5.587 0 1 0 7.901 7.901l4.239-4.238a4.38 4.38 0 0 0 0-6.198l-1.417-1.416"
                          ></path>
                        </svg>
                      </span>
                      <span className=" box-border text-[#3767ea] cursor-pointer font-bold text-base whitespace-nowrap">
                        Copy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-full flex gap-5 justify-end box-border">
            <button
              onClick={() => handleDownloadAll()}
              className=" border-none text-[rgb(82,104,255)] cursor-pointer inline-block relative bg-[rgba(0,0,0,0)] outline-0 "
            >
              {loaders.downloadfileLoading ? (
                <svg
                  className="animate-spinner-rotate origin-center  h-[1.5rem] w-[1.5rem] left-[30%] absolute translate-x-[-50%] box-border text-[rgb(82,104,255)]"
                  shape-rendering="geometricPrecision"
                  viewBox="0 0 170 170"
                >
                  <circle
                    className="[stroke-dasharray:502.655] [stroke-dashoffset:0] stroke-[10] stroke-[#e8ebed] pointer-events-none box-border"
                    r="80"
                    cx="85"
                    cy="85"
                    fill="transparent"
                  ></circle>
                  <circle
                    className={`[stroke-dasharray:502.655] stroke-[10] stroke-[#5268ff]  [strokeLinecap:round] pointer-events-none box-border rounded-[10px]  transition-[stroke-dashoffset,stroke]duration-200 ease-linear`}
                    r="80"
                    cx="85"
                    cy="85"
                    fill="transparent"
                    strokeDashoffset={250}
                  ></circle>
                </svg>
              ) : (
                <svg
                  className="h-[1.5rem] w-[1.5rem] left-[50%] absolute translate-x-[-50%] box-border text-[rgb(82,104,255)] cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-9 1.492V7.998C13 7.446 12.552 7 12 7c-.556 0-1 .447-1 .998v5.48l-2.53-2.53c-.385-.385-1.022-.39-1.413.002-.393.393-.39 1.022-.002 1.412l4.247 4.247c.192.19.447.288.702.288.26.003.514-.095.708-.29l4.247-4.246c.383-.385.387-1.022-.003-1.412-.394-.393-1.023-.392-1.413-.002L13 13.492zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                    fill="#5268ff"
                    fillRule="evenodd"
                  ></path>
                </svg>
              )}
              <span className=" font-medium text-[0.8125rem] inline-block pt-[1.85rem] w-full box-border text-[rgb(82,104,255)] cursor-pointer">
                Download
              </span>
            </button>
          </div>
        </div>

        <div className=" box-border before:content-[''] before:table after:clear-both after:content-[''] after:table">
          <div className="pl-0 mr-[8%] w-[46%] box-border float-left py-0 px-[1em] ">
            <span className=" box-border">
              <div className=" cursor-pointer lfex items-center box-border">
                <div className="flex flex-col relative box-border cursor-pointer">
                  <h2 className=" mb-2 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5] box-border cursor-pointer">
                    <span className=" mb-0 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5] box-border">
                      Expiration date
                    </span>
                    <span className=" mb-0 box-border text-[#161616] font-bold text-base leading-[1.5] cursor-pointer">
                      <span className=" mb-0 ml-2 flex h-4 w-4 cursor-pointer text-[#464646] box-border font-bold text-base leading-[1.5]">
                        <img
                          src="/alert logo.svg"
                          className=" w-4 h-4 block box-border overflow-clip cursor-pointer text-[#464646]  font-bold text-base leading-[1.5]"
                        ></img>
                      </span>
                    </span>
                  </h2>
                  <div className="flex items-center text-[.875rem] box-border cursor-pointer">
                    <span className="text-[#b82b00] font-normal text-[16px] cursor-pointer">
                      {dayjs(transfer?.expireAt).format("MMMM D, YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            </span>

            {transfer?.emailTo !== "" && (
              <div className="mt-[2.1875em] box-border">
                <h2 className="mb-2 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5]">
                  Recived from person
                </h2>
                <ul className="pt-[.125em] px-0 pb-0 mt-0 box-border">
                  <li className=" h-[inherit] leading-[1.625em] list-none mb-[.625em] relative">
                    <div className="block font-normal text-[16px] leading-[1.2857142857em] max-w-full overflow-hidden relative text-ellipsis whitespace-nowrap text-[#484a4d] box-border list-none">
                      {transfer?.emailTo}
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="mr-0 pr-0 w-[46%] box-border float-left py-0 px-[1em] ">
            <div className=" mt-0 w-full">
              <h2 className="mt-[.9375em] text-[#161616] font-bold text-[18px] leading-[1.5] ">
                {transfer?.files?.length} file
              </h2>

              <div>
                <ul className=" bg-[#f1f1f1] rounded-[.5rem] list-none m-0 p-0 box-border">
                  {transfer?.files?.map((file, key) => {
                    return (
                      <li key={key}>
                        <div
                          className={`pl-0 pr-0 border-b-0  flex  justify-between cursor-default my-0 mx-[.625em] py-[.5em] px-[.625em] relative select-none box-border group/file ${
                            key > 0 && "border-t border-[#d6d6d6]"
                          } `}
                        >
                          <div className="flex flex-col max-w-[50%]  cursor-default select-none">
                            <span className=" cursor-default select-none">
                              <h6 className="text-[#161616] font-normal text-[15px] m-0 block leading-[1.4285714286em] overflow-hidden p-0 text-ellipsis whitespace-nowrap box-border cursor-default select-none">
                                {file.fileName}
                              </h6>
                            </span>
                            <div className=" text-[#676767] flex text-[0.75em] leading-[1.1667em] font-normal m-0 box-border cursor-default select-none ">
                              <span className="text-[#676767] text-[13px] leading-[1.1667em] font-normal cursor-default select-none after:content-['·'] after:inline-block after:py-0 after:px-[0.375em] after:no-underline box-border flex items-center gap-1">
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
                                  formatFileSize(file.size)
                                )}
                              </span>
                              <span className="text-[#676767] text-[13px] leading-[1.16667em] font-normal cursor-pointer select-none">
                                {file?.isFolder
                                  ? `${file.files} items`
                                  : file.fileName.split(".").pop()}
                              </span>
                            </div>
                          </div>

                          {transfer.files.length > 1 && (
                            <div className="flex justify-between gap-2 items-center box-border cursor-default select-none">
                              <button
                                onClick={() => handleDownloadSingleFile(file)}
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
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recived;
