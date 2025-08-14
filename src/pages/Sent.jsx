import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";

const Sent = () => {
  const { setPageOpen, setPricingPage } = useContext(Context);
  const [showPassInput, setShowPassInput] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  });

  return (
    <div className=" pb-6 min-h-[calc(100%-4.0625em)] pt-[3.5em] px-[80px] my-0 mx-auto max-w-[80rem] box-border">
      <div className="box-border">
        <div className="flex items-center box-border">
          <h1 className=" font-normal text-[2.5em] m-0 overflow-hidden text-ellipsis whitespace-nowrap pt-0 px-0 pb-[0.5625rem] box-border">
            Screenshot 2025-07-08 130344.png
          </h1>
        </div>

        <span className="mb-[1.5625em] border-b-[0.0625em] border-[rgb(232,235,237)] font-normal text-[#6a6d70] block text-[.875em] box-border">
          <div className="flex items-center mb-[1.5625rem] box-border font-normal text-[#6a6d70] text-[.875em]">
            <span className=" box-border font-normal text-[#6a6d70] text-sm after:content-['·'] after:inline-block after:px-1.5 after:no-underline">
              1 file
            </span>
            <span className=" box-border font-normal text-[#6a6d70] text-sm after:content-['·'] after:inline-block after:px-1.5 after:no-underline">
              92.1 KB
            </span>
            <span className=" font-normal text-[#6a6d70] text-sm">
              Sent 19 minutes ago
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
                      https://we.tl/t-RsufV2MqV6
                    </span>
                    <div className="text-[#3767ea] cursor-pointer flex flex-row items-center gap-2 border-l border-[#d6d6d6] p-4 font-medium text-sm leading-[1.2] box-border whitespace-nowrap">
                      <span className=" text-inherit items-center inline-flex justify-center leading-[1] box-border text-#3767ea] cursor-pointer font-medium whitespace-nowrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          class="w-[1.5em] h-[1.5em] box-border leading-[1] text-[#3767ea] cursor-pointer font-bold whitespace-nowrap"
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
            <button className=" border-none text-[rgb(82,104,255)] cursor-pointer inline-block relative bg-[rgba(0,0,0,0)] outline-0 ">
              <svg
                className="h-[1.5rem] w-[1.5rem] left-[50%] absolute translate-x-[-50%] box-border text-[rgb(82,104,255)] cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-9 1.492V7.998C13 7.446 12.552 7 12 7c-.556 0-1 .447-1 .998v5.48l-2.53-2.53c-.385-.385-1.022-.39-1.413.002-.393.393-.39 1.022-.002 1.412l4.247 4.247c.192.19.447.288.702.288.26.003.514-.095.708-.29l4.247-4.246c.383-.385.387-1.022-.003-1.412-.394-.393-1.023-.392-1.413-.002L13 13.492zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                  fill="#5268ff"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span className=" font-medium text-[0.8125rem] inline-block pt-[1.85rem] w-full box-border text-[rgb(82,104,255)] cursor-pointer">
                Download
              </span>
            </button>

            <button className=" border-none text-[rgb(82,104,255)] cursor-pointer inline-block relative bg-[rgba(0,0,0,0)] outline-0 ">
              <svg
                className="h-[1.5rem] w-[1.5rem] left-[50%] absolute translate-x-[-50%] box-border text-[rgb(106,109,112)] cursor-pointer"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.083 12.003h-.813c-.655 0-1.355 0-2.064-.002h-1.162c-.982.042-1.032.09-1.044 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2.013c.026-2.007.937-2.898 3-2.987h1.207l2.064.003h.82l-1.297-1.296c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l3 3c.39.39.39 1.024 0 1.414l-3 3c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.29-1.29zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  fill="#6a6d70"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span className=" font-medium text-[0.8125rem] inline-block pt-[1.85rem] w-full box-border text-[rgb(106,109,112)] cursor-pointer">
                Download
              </span>
            </button>

            <button className=" border-none text-[rgb(82,104,255)] cursor-pointer inline-block relative bg-[rgba(0,0,0,0)] outline-0 ">
              <svg
                className="h-[1.5rem] w-[1.5rem] left-[50%] absolute translate-x-[-50%] box-border text-[rgb(82,104,255)] cursor-pointer"
                viewBox="0 0 24 24"
                data-testid="close-icon"
              >
                <path
                  fill="#5268ff"
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10-1.414L9.875 8.46c-.38-.38-1.02-.386-1.41.004-.394.394-.393 1.023-.004 1.41L10.587 12 8.46 14.125c-.38.38-.386 1.02.004 1.41.394.394 1.023.393 1.41.004L12 13.413l2.125 2.125c.38.38 1.02.386 1.41-.004.394-.394.393-1.023.004-1.41L13.413 12l2.125-2.125c.38-.38.386-1.02-.004-1.41-.394-.394-1.023-.393-1.41-.004L12 10.587zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                ></path>
              </svg>
              <span className=" font-medium text-[0.8125rem] inline-block pt-[1.85rem] w-full box-border text-[rgb(82,104,255)] cursor-pointer">
                Delete
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
                      Expiration data
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
                      August 14, 2025
                    </span>
                  </div>
                </div>
              </div>
            </span>

            <div className=" relative mt-6 box-border">
              <div className=" box-border">
                <h2 className=" mb-2 text-[#161616] flex items-center font-bold text-base leading-[1.5] box-border cursor-pointer">
                  <span className=" mb-0 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5] box-border">
                    Password
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
                <div className=" w-full box-border">
                  {showPassInput ? (
                    <div className="flex items-center box-border">
                      <div className="flex flex-col w-full mr-[1.125rem] box-border">
                        <div className=" h-8 w-full mt-0 font-normal bg-opacity-0 border border-[#babacbf] clear-both rounded-[5px] text-[#6a6d70] relative box-border">
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="setPassword"
                            type="password"
                            className=" outline-none pt-0 font-normal bg-[rgba(0,0,0,0)] border-0 rounded-[5px] text-[.875rem] h-full left-0 pr-[8%] pb-0 pl-[1.4285714286em] absolute text-ellipsis w-full z-[2] box-border focus:shadow-[0_0_0_0.0625em_#5268ff]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-[.5rem] box-border">
                        <span className=" box-border">
                          <button className="p-0 h-auto m-0 bg-none border-0 outline-none font-medium rounded-[5px] text-[.875em] relative noun'  text-[#fff] box-border transition-[border-color,background-color,color] duration-[0.2s] ease-[cubic-bezier(.77,0,.175,1)]">
                            <svg
                              className={`w-6 h-6 box-border outline-none text-[.875em] ${
                                password === ""
                                  ? "fill-[#babcbf] cursor-not-allowed"
                                  : " cursor-pointer fill-[rgb(106,109,112)] hover:fill-[#5268ff]"
                              }`}
                              viewBox="0 0 24 24"
                              data-testid="check-circle-icon"
                            >
                              <path
                                d="M10.44 16.733c.454.448 1.203.377 1.567-.148l1.15-1.666 3.69-5.335c.322-.467.205-1.108-.262-1.43-.467-.324-1.108-.207-1.43.26l-4.145 6.018-2.288-2.278c-.405-.398-1.056-.393-1.455.012-.398.404-.393 1.056.01 1.454l3.162 3.113z"
                                fill-rule="evenodd"
                              ></path>
                              <path
                                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                fill-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </span>

                        <span className="box-border">
                          <button
                            onClick={() => setShowPassInput(false)}
                            className="p-0 h-auto m-0 bg-none border-0 outline-none font-medium rounded-[5px] text-[.875em] relative text-[#fff] box-border transition-[border-color,background-color,color] duration-[0.2s] ease-[cubic-bezier(.77,0,.175,1)] hover:text-[rgb(82,104,255)"
                          >
                            <svg
                              class="w-6 h-6 box-border outline-none cursor-pointer  fill-[rgb(106,109,112)] hover:fill-[#5268ff]"
                              viewBox="0 0 24 24"
                              data-testid="close-icon"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10-1.414L9.875 8.46c-.38-.38-1.02-.386-1.41.004-.394.394-.393 1.023-.004 1.41L10.587 12 8.46 14.125c-.38.38-.386 1.02.004 1.41.394.394 1.023.393 1.41.004L12 13.413l2.125 2.125c.38.38 1.02.386 1.41-.004.394-.394.393-1.023.004-1.41L13.413 12l2.125-2.125c.38-.38.386-1.02-.004-1.41-.394-.394-1.023-.393-1.41-.004L12 10.587zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                              ></path>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowPassInput(true)}
                      className=" cursor-pointer underline border-0 bg-none p-0 font-normal text-[#484a4d] text-[16px] leading-[1.4] mt-0 box-border hover:text-[#5268ff]"
                    >
                      Set password
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-[2.1875em] box-border">
              <h2 className="mb-2 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5]">
                Sent to 1 person
              </h2>
              <ul className="pt-[.125em] px-0 pb-0 mt-0 box-border">
                <li className=" h-[inherit] leading-[1.625em] list-none mb-[.625em] relative">
                  <div className="block font-normal text-[16px] leading-[1.2857142857em] max-w-full overflow-hidden relative text-ellipsis whitespace-nowrap text-[#484a4d] box-border list-none">
                    sahilpinjari9823@gmail.com
                  </div>
                </li>
              </ul>
            </div>

            <div className=" relative mt-6 box-border block">
              <h2 className="mb-2 text-[#161616] flex items-center font-bold text-[18px] leading-[1.5]">
                Total downloads
              </h2>
              <span className="text-[#484a4d] font-normal text-[16px] leading-[1.5] box-border">
                0
              </span>
            </div>
          </div>

          <div className="mr-0 pr-0 w-[46%] box-border float-left py-0 px-[1em] ">
            <div className=" mt-0 w-full">
              <h2 className="mt-[.9375em] text-[#161616] font-bold text-[18px] leading-[1.5] ">
                1 file
              </h2>

              <div>
                <ul className=" bg-[#f1f1f1] rounded-[.5rem] list-none m-0 p-0 box-border">
                  <li>
                    <div className=" border-b-0 pl-0 pr-0 flex justify-between cursor-default my-0 mx-[.625em] py-2 px-[.625em] relative select-none max-w-full">
                      <div className="flex flex-col max-w-[50%]  cursor-default select-none">
                        <span className=" cursor-default select-none">
                          <h6 className="text-[#161616] font-normal text-[15px] m-0 block leading-[1.4285714286em] overflow-hidden p-0 text-ellipsis whitespace-nowrap box-border cursor-default select-none">
                            Screenshot 2025-07-08 130344.png
                          </h6>
                        </span>
                        <div className=" text-[#676767] flex text-[0.75em] leading-[1.1667em] font-normal m-0 box-border cursor-default select-none ">
                          <span className="text-[#676767] text-[13px] leading-[1.1667em] font-normal cursor-default select-none after:content-['·'] after:inline-block after:py-0 after:px-[0.375em] after:no-underline box-border ">
                            92 KB
                          </span>
                          <span className="text-[#676767] text-[13px] leading-[1.16667em] font-normal cursor-pointer select-none">
                            png
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between gap-2 items-center box-border cursor-default select-none">
                        <button className="rounded-[50%] text-sm font-medium h-6 leading-[1.2] w-6 shadow-none box-border cursor-pointer outline-0 p-0 no-underline select-none items-center flex gap-2 justify-center bg-transparent border border-[#3767ea] text-[#3767ea] transition-all duration-150 ease-in-out">
                          <span className=" w-4 items-center inline-flex justify-center leading-[1] box-border font-medium cursor-pointer select-none text-[#3767ea]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="none"
                              class=" h-[1em] w-[1em] text-base font-medium leading-[1] cursor-pointer select-none text-[#3767ea]"
                              role="img"
                              viewBox="0 0 32 32"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                d="M16 6.667v18.666m0 0 9.333-9.143M16 25.333 6.667 16.19"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sent;
