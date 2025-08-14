import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/AppContext";

const Transfers = () => {
  const [isSearchBlur, setSearchBlur] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const { setPageOpen, setPricingPage } = useContext(Context);

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  });

  return (
    <>
      <div className="w-full h-[56px]"></div>
      <div className="pt-[2em] pb-[1.5em] px-[80px] min-h-[calc(100%-4.0625em)] relative my-0 mx-auto max-w-[80rem] box-border">
        <article className=" box-border">
          <span className=" text-sm uppercase text-[#707070] block mb-[12px] font-bold box-border tracking-widest">
            sahilpinjari51209@gmail.com
          </span>
          <div className="relatvie box-border">
            <h1 className=" font-normal text-[2.5em] m-0">Transfers</h1>
            <div className="flex flex-row gap-2 justify-between items-baseline w-full box-border"></div>
            <div className=" mt-6 box-border"></div>
            <div className=" mt-[1.5625rem] mb-4 box-border"></div>
            <div className="mt-[1.5625rem] mb-4 box-border">
              <ul className=" border-b border-[#d4d7d9] flex p-0 mb-0 box-border">
                <li className="mr-[2.5rem] list-none pb-[.625rem] box-border">
                  <button className=" font-medium text-[#17181a] bg-[rgba(0,0,0,0)] text-[1rem] h-auto m-0 py-0 px-[.375rem] outline-none cursor-pointer relative no-underline transition-[border-color_0.2s_cubic-bezier(.77,0,.175,1),background-color_0.2s_cubic-bezier(.77,0,.175,1),color_0.2s_cubic-bezier(.77,0,.175,1)]">
                    Sent
                  </button>
                </li>

                <li className="mr-[2.5rem] list-none pb-[.625rem] box-border">
                  <button className=" font-medium text-[#17181a] bg-[rgba(0,0,0,0)] text-[1rem] h-auto m-0 py-0 px-[.375rem] outline-none cursor-pointer relative no-underline transition-[border-color_0.2s_cubic-bezier(.77,0,.175,1),background-color_0.2s_cubic-bezier(.77,0,.175,1),color_0.2s_cubic-bezier(.77,0,.175,1)]">
                    Received
                  </button>
                </li>
              </ul>

              <div className="max-w-[47px] translate-x-0 translate-y-0 border-b-[2px] border-[#17181a] mt-[-.125rem] box-border transition-[all] duration-[300ms] ease-[cubic-bezier(.18,.89,.32,1.1)]"></div>
            </div>
          </div>
          <div className="list-none m-0 p-0 relative box-border">
            <span className="relative flex items-center box-border">
              <span className=" absolute left-[1.0625rem] w-[.875rem] h-[.875rem] flex items-center box-border list-none">
                <svg viewBox="19 18 14 14">
                  <path
                    d="M28.198 23.62c0-.984-.35-1.826-1.05-2.526-.7-.7-1.542-1.05-2.527-1.05-.984 0-1.826.35-2.526 1.05-.7.7-1.05 1.542-1.05 2.527 0 .986.35 1.828 1.05 2.528.7.7 1.542 1.05 2.527 1.05.986 0 1.828-.35 2.528-1.05.7-.7 1.05-1.542 1.05-2.527zm4.088 6.644c0 .277-.1.516-.304.718-.202.203-.44.304-.718.304-.288 0-.527-.1-.72-.304l-2.737-2.73c-.953.66-2.015.99-3.186.99-.76 0-1.488-.148-2.183-.443-.694-.297-1.293-.696-1.796-1.2-.502-.502-.9-1.1-1.197-1.795-.295-.695-.443-1.423-.443-2.184 0-.76.148-1.488.443-2.183.296-.694.695-1.293 1.198-1.796.504-.502 1.103-.9 1.797-1.197.695-.295 1.423-.443 2.184-.443.762 0 1.49.148 2.185.443.694.296 1.293.695 1.796 1.198.504.504.903 1.103 1.2 1.797.294.695.442 1.423.442 2.184 0 1.172-.33 2.234-.99 3.187l2.738 2.738c.197.197.296.437.296.72z"
                    fill="#6a6d70"
                    fill-rule="evenodd"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
            <div className="text-[#6a6d70] text-[1rem] h-[1.5714285714em] w-full flex items-center mb-[.6875rem] box-border">
              <span>August 2025</span>
            </div>

            <div className="relative mb-2 box-border">
              <Link className="mt-0 w-full h-full no-underline border border-[#f1f1f1] rounded-[12px] py-4 px-5 flex justify-between cursor-pointer bg-[#fff] items-center shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(255,255,255,0.3),0_1px_2px_0_rgba(0,0,0,0.05)]">
                <span className="flex flex-col w-full relative box-border cursor-pointer">
                  <span className="flex gap-[.5rem] w-full font-medium text-[#161616] text-[1rem] leading-[1.5rem] mb-[.25rem] item-center box-border">
                    <span className=" text-left overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%] font-medium text-[#161616] text-[1rem] leading-6 cursor-pointer">
                      Screenshot 2025-07-27 121821.png
                    </span>
                  </span>

                  <span className="flex items-center flex-wrap text-[#676767] text-[.875rem] leading-[1.25rem] w-[95%] font-normal box-border">
                    <span className=" text-[.875rem] box-border text-[#676767] leading-5 font-normal cursor-pointer">
                      Sent about 21 hours ago
                    </span>
                    <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

                    {"243.8 KB (1 file)"}

                    <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

                    <span className="flex items-center gap-[.375rem] text-[#676767] box-border text-[.875rem] leading-5 font-normal cursor-pointer">
                      Not yet downloaded
                    </span>

                    <span className=" uppercase flex flex-nowrap text-[2rem] box-border text-[#676767] leading-[1.25rem] font-normal after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]"></span>

                    <span className="text-[#b82b00] font-normal text-[.875rem] leading-5">
                      Expires in 4 hours
                    </span>
                  </span>
                  <span className="flex relative text-[.875rem] items-center text-[#6a6d70] flex-wrap capitalize leading-5 box-border cursor-pointer">
                    <span className="flex whitespace-nowrap items-center text-[2rem] box-border text-[#6a6d70] capitalize leading-5 cursor-pointer after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]">
                      <span className=" mr-1 text-base items-center inline-flex justify-center leading-[1] box-border whitespace-nowrap text-[#6a6d70] capitalize cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          class="h-[1em] w-[1em] box-border overflow-hidden text-base whitespace-nowrap text-[#6a6d70] cursor-pointer"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="m24.466 15.436.564-.565a5.587 5.587 0 0 0-7.9-7.901l-4.239 4.238a4.38 4.38 0 0 0 0 6.198l1.417 1.416m-6.773-2.258-.564.565a5.587 5.587 0 1 0 7.901 7.901l4.239-4.238a4.38 4.38 0 0 0 0-6.198l-1.417-1.416"
                          ></path>
                        </svg>
                      </span>
                      <button className="text-[#676767] cursor-pointer underline whitespace-nowrap bg-[rgba(0,0,0,0)] border-0 p-0 font-normal text-sm leading-[1.2] box-border transition-[background-color_0.1s_ease-out,border-color_0.1s_ease-out,box-shadow_0.1s_ease-out">
                        Copy link
                      </button>
                    </span>

                    <span className="flex whitespace-nowrap items-center text-[2rem] box-border text-[#6a6d70] capitalize leading-5 cursor-pointer after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]">
                      <span className=" mr-1 text-base items-center inline-flex justify-center leading-[1] box-border whitespace-nowrap text-[#6a6d70] capitalize cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          class="h-[1em] w-[1em] box-border overflow-hidden text-base whitespace-nowrap text-[#6a6d70] cursor-pointer"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-width="1.5"
                            d="m23.333 12.667-4-4m-13.61 9.61L19.449 4.551a2.667 2.667 0 0 1 3.77 0l4.23 4.23a2.667 2.667 0 0 1 0 3.77L13.724 26.276c-.25.25-.59.39-.943.39H6.667a1.333 1.333 0 0 1-1.334-1.333V19.22c0-.354.14-.693.39-.943z"
                          ></path>
                        </svg>
                      </span>
                      <button className="text-[#676767] cursor-pointer underline whitespace-nowrap bg-[rgba(0,0,0,0)] border-0 p-0 font-normal text-sm leading-[1.2] box-border transition-[background-color_0.1s_ease-out,border-color_0.1s_ease-out,box-shadow_0.1s_ease-out">
                        Edit title
                      </button>
                    </span>

                    <span className="flex whitespace-nowrap items-center text-[2rem] box-border text-[#6a6d70] capitalize leading-5 cursor-pointer after:content-['·'] after:inline-block after:mx-[0.3125rem] after:text-[#bfbfbf]">
                      <span className=" mr-1 text-base items-center inline-flex justify-center leading-[1] box-border whitespace-nowrap text-[#6a6d70] capitalize cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          class="h-[1em] w-[1em] box-border overflow-hidden text-base whitespace-nowrap text-[#6a6d70] cursor-pointer"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M4 8h2.667m0 0H28M6.667 8h18.666v17.333a4 4 0 0 1-4 4H10.667a4 4 0 0 1-4-4zm4 0V5.333a2.667 2.667 0 0 1 2.666-2.666h5.334a2.667 2.667 0 0 1 2.666 2.666V8m-2.666 6.667v8m-5.334-8v8"
                          ></path>
                        </svg>
                      </span>
                      <button className="text-[#676767] cursor-pointer underline whitespace-nowrap bg-[rgba(0,0,0,0)] border-0 p-0 font-normal text-sm leading-[1.2] box-border transition-[background-color_0.1s_ease-out,border-color_0.1s_ease-out,box-shadow_0.1s_ease-out">
                        Copy link
                      </button>
                    </span>
                  </span>
                </span>
                <span className="text-[#909090] text-inherit items-center inline-flex justify-center leading-[1] box-border cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    class="text-[1rem] h-[1em] w-[1em] box-border text-[#909090]"
                    role="img"
                    viewBox="0 0 32 32"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13.333 5.333 24 16 13.333 26.666"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Transfers;
