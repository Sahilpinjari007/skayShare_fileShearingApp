import React, { useContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { expiresIn, formatDate, timeAgo, transferSize } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Context } from "../context/AppContext";
import { deleteTransfer, resetTransfer } from "../features/transfer/transferSlice";
import { Link } from "react-router-dom";

const TranasferCard = ({ transfer, index }) => {
  
  const { data, loading, error, success } = useSelector(
    (state) => state.transfer
  );
  
  const dispatch = useDispatch();
  const { transfers, setTransfers, user } = useContext(Context);
  const [deletingTransferId, setDeletingTransferId] = useState(null);

  const copyDownloadLink = (e, transferId) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard
      .writeText(`${import.meta.env.VITE_API_APP_URL}/download/${transferId}`)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy");
      });
  };

  const onTransferDelete = (e, transferId) => {
    e.preventDefault();
    e.stopPropagation();
    setDeletingTransferId(transferId);
    dispatch(deleteTransfer(transferId));
  };

  useEffect(() => {
    if (success) {
      if (data?.transferDeleted) {
        setDeletingTransferId(null);
        if (transfer._id === data.transferId)
          toast.success("Transfer Deleted!");
        setTransfers((prevTransfers) =>
          prevTransfers.filter((transfer) => transfer._id !== data?.transferId)
        );
      }
    }

    dispatch(resetTransfer())
  }, [error, success, dispatch, data]);

  const currentDate = formatDate(transfer?.createdAt);
  const previousDate =
    index > 0 ? formatDate(transfers[index - 1]?.createdAt) : null;
  const showDateLabel = currentDate !== previousDate;

  return (
    <>
      {showDateLabel && (
        <div className="text-[#6a6d70] text-[1rem] h-[1.5714285714em] w-full flex items-center mb-[.6875rem] box-border">
          <span>{currentDate}</span>
        </div>
      )}
      <Link
        to={user.email === transfer.emailFrom ? `sent/${transfer?._id}` : `recived/${transfer?._id}`}
        index={index}
        className="group/transfer w-full h-full no-underline border border-[#f1f1f1] rounded-[12px] py-4 px-5 flex justify-between cursor-pointer bg-[#fff] items-center shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.05)] relative overflow-hidden mb-2 mt-0"
      >
        <span className="flex flex-col w-full relative box-border cursor-pointer">
          <span className="flex gap-[.5rem] w-full font-medium text-[#161616] text-[1rem] leading-[1.5rem] mb-[.25rem] item-center box-border">
            <span className=" text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%] font-medium text-[#161616] text-[1rem] leading-6 cursor-pointer">
              {transfer.title}
            </span>
          </span>

          <span
            className={`${
              loading && deletingTransferId === transfer._id ? "hidden" : "flex"
            } group-hover/transfer:hidden items-center flex-wrap text-[#676767] text-[.875rem] leading-[1.25rem] w-[95%] font-normal box-border`}
          >
            {user.email === transfer.emailTo && (
              <>
                <span className=" text-[.875rem] box-border text-[#676767] leading-5 font-normal cursor-pointer">
                  {transfer?.emailFrom}
                </span>
                <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>
              </>
            )}
            <span className=" text-[.875rem] box-border text-[#676767] leading-5 font-normal cursor-pointer">
              {user?.email === transfer?.emailTo ? "Received " : "Sent "}{" "}
              {timeAgo(transfer?.createdAt)}
            </span>
            <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

            {transferSize(transfer?.files)}

            {` (${
              transfer?.files?.length === 1 && transfer?.files[0]?.isFolder
                ? transfer?.files[0]?.files
                : transfer?.files?.length
            } files)`}

            <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

            <span className="flex items-center gap-[.375rem] text-[#676767] box-border text-[.875rem] leading-5 font-normal cursor-pointer">
              {transfer.isDownloaded ? "Downloaded" : "Not yet downloaded"}
            </span>

            <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

            <span className="text-[#b82b00] font-normal text-[.875rem] leading-5">
              {expiresIn(transfer.expireAt)}
            </span>
          </span>

          <span
            className={` ${
              loading && deletingTransferId === transfer._id ? "flex" : "hidden"
            } group-hover/transfer:flex relative text-[.875rem] items-center text-[#6a6d70] flex-wrap capitalize leading-5 box-border cursor-pointer`}
          >
            <span className="flex whitespace-nowrap items-center text-[2rem] box-border text-[#6a6d70] capitalize leading-5 cursor-pointer after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]">
              <span className=" mr-1 text-base items-center inline-flex justify-center leading-[1] box-border whitespace-nowrap text-[#6a6d70] capitalize cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  className="h-[1em] w-[1em] box-border overflow-hidden text-base whitespace-nowrap text-[#6a6d70] cursor-pointer"
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
              <button
                onClick={(e) => {
                  copyDownloadLink(e, transfer?._id);
                }}
                className="text-[#676767] cursor-pointer underline whitespace-nowrap bg-[rgba(0,0,0,0)] border-0 p-0 font-normal text-sm leading-[1.2] box-border transition-[background-color_0.1s_ease-out,border-color_0.1s_ease-out,box-shadow_0.1s_ease-out hover:text-[#3767ea]"
              >
                Copy link
              </button>
            </span>

            {user.email === transfer.emailFrom && (
              <span className="flex whitespace-nowrap items-center text-[2rem] box-border text-[#6a6d70] capitalize leading-5 cursor-pointer after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf] z-10">
                <span className=" mr-1 text-base items-center inline-flex justify-center leading-[1] box-border whitespace-nowrap text-[#6a6d70] capitalize cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    className="h-[1em] w-[1em] box-border overflow-hidden text-base whitespace-nowrap text-[#6a6d70] cursor-pointer"
                    role="img"
                    viewBox="0 0 32 32"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 8h2.667m0 0H28M6.667 8h18.666v17.333a4 4 0 0 1-4 4H10.667a4 4 0 0 1-4-4zm4 0V5.333a2.667 2.667 0 0 1 2.666-2.666h5.334a2.667 2.667 0 0 1 2.666 2.666V8m-2.666 6.667v8m-5.334-8v8"
                    ></path>
                  </svg>
                </span>
                <button
                  onClick={(e) => {
                    onTransferDelete(e, transfer?._id);
                  }}
                  disabled={loading && deletingTransferId === transfer._id}
                  className={`text-[#676767] cursor-pointer underline whitespace-nowrap bg-[rgba(0,0,0,0)] border-0 p-0 font-normal text-sm leading-[1.2] box-border transition-[background-color_0.1s_ease-out,border-color_0.1s_ease-out,box-shadow_0.1s_ease-out ${
                    deletingTransferId === transfer._id &&
                    "disabled:text-[#3767ea]"
                  } hover:text-[#3767ea]`}
                >
                  Delete
                </button>
              </span>
            )}
          </span>
        </span>
        <span className="text-[#909090] text-inherit items-center inline-flex justify-center leading-[1] box-border cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            className="text-[1rem] h-[1em] w-[1em] box-border text-[#909090]"
            role="img"
            viewBox="0 0 32 32"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.333 5.333 24 16 13.333 26.666"
            ></path>
          </svg>
        </span>
        {loading && deletingTransferId === transfer._id && (
          <div className=" absolute top-0 left-0 w-full h-full bg-[rgba(238,238,238,.5)] flex items-center justify-center z-50 select-none">
            <MoonLoader size={20} color="#000000" />
          </div>
        )}
      </Link>
    </>
  );
};

export default TranasferCard;
