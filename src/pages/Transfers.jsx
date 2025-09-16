import { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecivedTransfers,
  getSentTransfers,
  resetTransfer,
  searchTransfers,
} from "../features/transfer/transferSlice";
import TranasferCard from "../components/TranasferCard";
import { MoonLoader } from "react-spinners";

const Transfers = () => {
  const dispatch = useDispatch();
  const { data, loading, error, success } = useSelector(
    (state) => state.transfer
  );

  const { setPageOpen, setPricingPage, transfers, setTransfers, user } =
    useContext(Context);

  const [isSearchBlur, setSearchBlur] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTab, setCurrentTab] = useState(0);
  const [transferTabs] = useState([
    {
      lable: "Sent",
      style: {
        maxWidth: "47px",
        transform: "translate(0px)",
        sentTransfers: [],
      },
    },
    {
      lable: "Received",
      style: {
        maxWidth: "81px",
        transform: "translate(80px)",
        recivedTransfers: [],
      },
    },
  ]);

  useEffect(() => {
    currentTab === 0
      ? dispatch(getSentTransfers())
      : dispatch(getRecivedTransfers());
  }, [currentTab]);

  useEffect(() => {
    if (success) {
      if (data?.isTransferFeatchd) {
        setTransfers(data?.transfers);
      }
    }  

    dispatch(resetTransfer());
  }, [error, success, dispatch, data]);


  useEffect(()=>{
    const action = currentTab === 0 ? "emailFrom" : "emailTo"
    dispatch(searchTransfers({searchQuery, action}))
  }, [searchQuery])

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  }, []);

  return (
    <>
      <div className="w-full h-[56px]"></div>
      <div className="pt-[2em] pb-[1.5em] px-[80px] min-h-[calc(100%-4.0625em)] relative my-0 mx-auto max-w-[80rem] box-border">
        <article className=" box-border">
          <span className=" text-sm uppercase text-[#707070] block mb-[12px] font-bold box-border tracking-widest">
            {user?.email}
          </span>
          <div className="relatvie box-border">
            <h1 className=" font-normal text-[2.5em] m-0">Transfers</h1>
            <div className="flex flex-row gap-2 justify-between items-baseline w-full box-border"></div>
            <div className=" mt-6 box-border"></div>
            <div className=" mt-[1.5625rem] mb-4 box-border"></div>
            <div className="mt-[1.5625rem] mb-4 box-border">
              <ul className=" border-b border-[#d4d7d9] flex p-0 mb-0 box-border">
                {transferTabs.map((tab, key) => {
                  return (
                    <li
                      key={key}
                      className="mr-[2.5rem] list-none pb-[.625rem] box-border"
                    >
                      <button
                        onClick={() => setCurrentTab(key)}
                        className=" font-medium text-[#17181a] bg-[rgba(0,0,0,0)] text-[1rem] h-auto m-0 py-0 px-[.375rem] outline-none cursor-pointer relative no-underline transition-[border-color_0.2s_cubic-bezier(.77,0,.175,1),background-color_0.2s_cubic-bezier(.77,0,.175,1),color_0.2s_cubic-bezier(.77,0,.175,1)]"
                      >
                        {tab.lable}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div
                style={transferTabs[currentTab].style}
                className="max-w-[47px] translate-x-0 translate-y-0 border-b-[2px] border-[#17181a] mt-[-.125rem] box-border transition-[all] duration-[300ms] ease-[cubic-bezier(.18,.89,.32,1.1)]"
              ></div>
            </div>
          </div>
          <div className="list-none m-0 p-0 relative box-border">
            <span className="relative flex items-center box-border">
              <span className=" absolute left-[1.0625rem] w-[.875rem] h-[.875rem] flex items-center box-border list-none">
                <svg viewBox="19 18 14 14">
                  <path
                    d="M28.198 23.62c0-.984-.35-1.826-1.05-2.526-.7-.7-1.542-1.05-2.527-1.05-.984 0-1.826.35-2.526 1.05-.7.7-1.05 1.542-1.05 2.527 0 .986.35 1.828 1.05 2.528.7.7 1.542 1.05 2.527 1.05.986 0 1.828-.35 2.528-1.05.7-.7 1.05-1.542 1.05-2.527zm4.088 6.644c0 .277-.1.516-.304.718-.202.203-.44.304-.718.304-.288 0-.527-.1-.72-.304l-2.737-2.73c-.953.66-2.015.99-3.186.99-.76 0-1.488-.148-2.183-.443-.694-.297-1.293-.696-1.796-1.2-.502-.502-.9-1.1-1.197-1.795-.295-.695-.443-1.423-.443-2.184 0-.76.148-1.488.443-2.183.296-.694.695-1.293 1.198-1.796.504-.502 1.103-.9 1.797-1.197.695-.295 1.423-.443 2.184-.443.762 0 1.49.148 2.185.443.694.296 1.293.695 1.796 1.198.504.504.903 1.103 1.2 1.797.294.695.442 1.423.442 2.184 0 1.172-.33 2.234-.99 3.187l2.738 2.738c.197.197.296.437.296.72z"
                    fill="#6a6d70"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span
                onClick={() => setSearchQuery("")}
                className=" absolute right-[.625rem] w-[1.125rem] h-[1.125rem] flex items-center box-border list-none cursor-pointer"
              >
                {searchQuery !== "" && (
                  <svg viewBox="0 0 24 24" fill="none">
                    <g id="wt.x">
                      <path
                        id="Subtract"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.53033 7.46967C8.23744 7.17678 7.76256 7.17678 7.46967 7.46967C7.17678 7.76256 7.17678 8.23744 7.46967 8.53033L10.9393 12L7.46967 15.4697C7.17678 15.7626 7.17678 16.2374 7.46967 16.5303C7.76256 16.8232 8.23744 16.8232 8.53033 16.5303L12 13.0607L15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L13.0607 12L16.5303 8.53033C16.8232 8.23744 16.8232 7.76256 16.5303 7.46967C16.2374 7.17678 15.7626 7.17678 15.4697 7.46967L12 10.9393L8.53033 7.46967Z"
                        fill="#babcbf"
                      ></path>
                    </g>
                  </svg>
                )}
              </span>
              <input
                maxLength={255}
                placeholder="Search by title, file name or email"
                id="search-input"
                className={`pr-7 pl-9  outline-none w-full h-[3.125rem] text-ellipsis text-[.875em] rounded-[5px] border-[.0625rem] text-[#17181a] box-border ${
                  isSearchBlur ? "border-[#babacbf]" : "border-[#5268ff]"
                }`}
                onBlur={() => setSearchBlur(true)}
                onSelect={() => setSearchBlur(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </span>
          </div>
          <div className="my-[2.625rem] px-0 relative">
            <div className="relative mb-2 box-border">
              {transfers?.map((transfer, index) => {
                return (
                  <TranasferCard
                    transfer={transfer}
                    key={index}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        </article>

        {loading && transfers?.lenght === 0 && (
          <div className="flex items-center justify-center w-full h-full">
            <MoonLoader size={20} color="#000000" />
          </div>
        )}
      </div>
    </>
  );
};

export default Transfers;
