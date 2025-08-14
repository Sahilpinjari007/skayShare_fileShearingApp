import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../context/AppContext";

const TransferWindow = () => {
  const { isPageOpend, isPricingPage } = useContext(Context);
  const contentRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);

  const fileInputRef = useRef(null);
  const folderInputRef = useRef(null);

  const [isSendEmail, setIsSendEmail] = useState(true);
  const [isRecoverable, setIsRecoverable] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isExpiryPopUpOpen, setIsExpiryPopUpOpen] = useState(false);
  const [isAddMorePopupOpen, setIsAddMorePopupOpen] = useState(false);
  const [onFocuse, setOnFocuse] = useState({
    email: false,
    title: false,
    message: false,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTranslateY, setStartTranslateY] = useState(0);

  const updateThumbPosition = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    const track = trackRef.current;

    if (!content || !thumb || !track) return;

    const contentHeight = content.scrollHeight;
    const visibleHeight = content.clientHeight;
    const scrollTop = content.scrollTop;

    const scrollRatio = scrollTop / (contentHeight - visibleHeight);
    const trackHeight = track.clientHeight - thumb.clientHeight;

    thumb.style.transform = `translateY(${scrollRatio * trackHeight}px)`;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;

    const track = trackRef.current;
    const thumb = thumbRef.current;
    const content = contentRef.current;

    const deltaY = e.clientY - startY;
    const newTranslateY = Math.min(
      Math.max(startTranslateY + deltaY, 0),
      track.clientHeight - thumb.clientHeight
    );

    thumb.style.transform = `translateY(${newTranslateY}px)`;

    const scrollRatio =
      newTranslateY / (track.clientHeight - thumb.clientHeight);
    content.scrollTop =
      scrollRatio * (content.scrollHeight - content.clientHeight);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    document.body.style.userSelect = "";
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    content.addEventListener("scroll", updateThumbPosition);
    updateThumbPosition();
    return () => content.removeEventListener("scroll", updateThumbPosition);
  }, []);
  return (
    <>
      <div
        className={`backdrop-blur-none scale-100 top-1/2 bg-[#fff] z-30 shadow-[0_0_12_0_rgba(0,0,0,.1)] transition-all h-[25.625em] left-[5em] m-[-12.8125em_0_0] rounded-2xl flex flex-col absolute box-borde-0 duration-[.4s] ${
          isDrawerOpen ? "w-[17.5em w-[calc(17.5em+18.75em)]" : "w-[17.5em]"
        } ${isPageOpend ? isPricingPage ? "translate-x-[-150%]" : "translate-x-[-150%] lg:translate-x-[-3.4375em] xl:translate-x-0" : "translate-x-0"}`}
      >
        <div className="invisible opacity-0 transition-[visibility,opacity] duration-[0s,0s] delay-[125ms,125ms] ease-[linear,ease-in] h-[2.5625rem] border-0 rounded-tl-[1rem] rounded-tr-[1rem] absolute top-0 left-0 right-0 z-20 box-border block">
          <button className="h-[2.5625rem] border-0 rounded-tl-[1rem] rounded-tr-[1rem] absolute top-0 left-0 right-0 z-20 w-full cursor-pointer text-[#353535] bg-[rgba(255,255,255,.65)] transition-all font-bold text-sm leading-[1.5] box-border">
            Send files
          </button>
        </div>

        <div className="visible opacity-100 transition-[visibility,opacity] duration-[0s,.1s] delay-[0ms,125ms] ease-[ease,ease-in] h-full flex flex-col box-border">
          <div
            className={`flex flex-col h-full relative w-[17.5em] bg-[#fff] rounded-[1rem] z-10 box-border visible transition-shadow duration-400 ease-in-out shadow-[4px_0_16px_0_rgba(0,0,0,0.08)] ${
              isDrawerOpen
                ? " rounded-tr-none rounded-br-none"
                : "rounded-[1rem]"
            }`}
          >
            <div className=" overflow-auto h-full rounded-tl-[1rem] rounded-tr-[1rem] font-normal relative w-full box-border block visible before:bottom-0 before:content-[''] before:transition-[box-shadow] before:duration-300 before:ease-in-out before:h-[10px] before:left-0 before:absolute before:right-0 before:z-[999] before:box-border before:font-normal after:content-[''] after:absolute  after:bottom-0  after:left-0 after:right-0 after:h-[10px] after:z-[999] after:transition-shadow after:duration-300 after:ease-in-out after:shadow-[inset_0_-6px_6px_-6px_rgba(23,24,26,0.25)] group">
              <div
                ref={contentRef}
                className=" mr-0 flex flex-col box-border h-full left-0 m-[0px_-17px_0px_0px] overflow-x-hidden overflow-y-scroll p-0 right-0 top-0 visible no-scrollbar"
              >
                <div className=" border-b-0 relative box-border block font-normal visible">
                  <form>
                    <input
                      type="file"
                      multiple=""
                      aria-hidden="true"
                      data-testid="file-input"
                      className="hidden"
                      ref={fileInputRef}
                    />
                    <input
                      tabIndex="-1"
                      aria-hidden="true"
                      type="file"
                      multiple=""
                      webkitdirectory="webkitdirectory"
                      directory="directory"
                      className="hidden"
                      ref={folderInputRef}
                    />
                  </form>
                  <div className="bg-none p-2 min-h-0 relative box-border">
                    {/* <div className="h-[4.375rem] flex flex-row justify-stretch items-stretch gap-1 m-2 box-border font-normal">
                      <div className="flex flex-col items-center justify-center gap-1 w-full cursor-pointer bg-[#e0eaff] rounded-[.5rem] box-border font-normal visible">
                        <img
                          src="/add-files-v2.svg"
                          className=" h-[1.5rem] box-border overflow-clip cursor-pointer font-normal visible"
                        />
                        <span className=" font-medium text-[.75rem] text-[@161616] box-border cursor-pointer">
                          Add files
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center gap-1 w-full cursor-pointer bg-[#e0eaff] rounded-[.5rem] box-border font-normal visible">
                        <img
                          src="/add-folders-v2.svg"
                          className=" h-[1.5rem] box-border overflow-clip cursor-pointer font-normal visible"
                        />
                        <span className=" font-medium text-[.75rem] text-[@161616] box-border cursor-pointer">
                          Add folders
                        </span>
                      </div>
                    </div> */}
                    <div className="box-border">
                      <ul className="bg-[#f1f1f1] rounded-[.5rem] list-none m-0 p-0 box-border">
                        <li>
                          <div className=" pl-0 pr-0 border-b-0 flex  justify-between cursor-default my-0 mx-[.625em] py-[.5em] px-[.625em] relative select-none box-border">
                            <div className=" flex flex-col max-w-[50%] box-border cursor-default">
                              <span>
                                <h6 className="text-[#161616] font-normal m-0 block text-[.875em] leading-[1.4285714286em] overflow-hidden p-0 text-ellipsis whitespace-nowrap box-border">
                                  Screenshot 2025-07-27 121821.png
                                </h6>
                              </span>
                              <div className="text-[#676767] flex text-[.75em] leading-[1.1667em] font-normal m-0 box-border cursor-default select-none">
                                <span className="text-[#676767] box-border text-[#0.75em] leading-[1.16667em] font-normal cursor-default after:content-['·'] after:inline-block after:px-[0.375em] after:no-underline">
                                  244 KB
                                </span>
                                <span className=" box-border text-[#676767] font-normal cursor-default select-none">
                                  png
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className=" bg-[#ecf2ff] rounded-[.5rem] flex flex-row justify-between items-center py-2 px-3 my-1 mx-0 box-border font-normal">
                      <div className="flex flex-row gap-[10px] box-border">
                        <span className="text-[16px] text-[#3767ea] text-inherit items-center inline-flex justify-center leading-[1] box-border">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            className="h-[1em] w-[1em] text-[#3767ea] box-border overflow-hidden leading-[1] stroke-2"
                            role="img"
                            viewBox="0 0 32 32"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m6.667 14.889 7.86 7.778L25.332 9.333"
                            ></path>
                          </svg>
                        </span>
                        <span className="text-[#3767ea] text-[.875rem] font-normal">
                          1 item
                        </span>
                      </div>

                      <span>
                        <button
                          className="flex flex-row gap-2 border-none bg-none p-0 items-center cursor-pointer box-border group/addMoreBtn"
                          onClick={() =>
                            setIsAddMorePopupOpen(!isAddMorePopupOpen)
                          }
                        >
                          <span className="text-[#3767ea] text-[.875rem] font-medium cursor-pointer group-hover/addMoreBtn:text-[#1842ce]">
                            Add more
                          </span>
                          <span className="text-[#3767ea] text-2xl items-center inline-flex justify-center leading-[1] box-border cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              fill="none"
                              className="h-[1em] w-[1em] text-[#3767ea] group-hover/addMoreBtn:text-[#1842ce]"
                              role="img"
                              viewBox="0 0 32 32"
                            >
                              <g clipPath="url(#wt_add_circle_fill_svg__a)">
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0m.75 10.667a.75.75 0 0 0-1.5 0v4.583h-4.583a.75.75 0 0 0 0 1.5h4.583v4.583a.75.75 0 0 0 1.5 0V16.75h4.583a.75.75 0 0 0 0-1.5H16.75z"
                                  clipRule="evenodd"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="wt_add_circle_fill_svg__a">
                                  <path fill="#fff" d="M0 0h32v32H0z"></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center text-[.75rem] leading-[1.125rem] gap-[4px] pb-2 pl-[25px] pr-[25px] box-border visible">
                    <span className="text-[#6a6d70] box-border text-[.75rem] leading-[1.125rem] font-normal">
                      Get unlimited transfers
                    </span>
                    <a className="text-[#8e21cc] no-underline flex items-center font-medium text-[12px] box-border leading-[1.2] cursor-pointer">
                      <span className=" text-base items-center inline-flex justify-center leading-[1] box-border text-[#8e21cc] visible">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          className=" mr-1 h-4 w-4 box-border fill-none overflow-hidden text-base leading-[1] text-[#8e21cc] font-medium cursor-pointer"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M15.797 28.892c-.371.54-1.217.277-1.216-.378l.012-9.58H5.358a.667.667 0 0 1-.528-1.075l11.576-14.98c.389-.503 1.194-.228 1.194.407v9.78h7.8c.537 0 .853.602.55 1.045L15.796 28.89z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      Increase limit
                    </a>
                  </div>
                </div>
                <div className=" py-0 px-[.625em] flex-col flex-grow box-border font-normal visible">
                  {isSendEmail && (
                    <div className=" box-border block font-normal visible">
                      <div className="visible relative z-20 box-border block font-normal">
                        <div className="border-[#d4d7d9] h-[47px] m-0  rounded-none border-b font-medium clear-both bg-[#fff] border-[#babacbf] text-[#6a6d70] relative box-border block visible">
                          <lable
                            htmlFor="email"
                            className={`text-[#6a6d70] font-normal absolute select-none transition-all duration-200 ease-[cubic-bezier(.77,0,.175,1)] ${
                              onFocuse.email
                                ? "top-[.4375em] left-[.8125em] text-[.75em] z-[3]"
                                : "top-[1.0714285714em] left-[.8125em] text-[.875em] z-[1]"
                            }`}
                          >
                            Email to
                          </lable>
                          <input
                            className="p-[1.1428571429em_8%_0_.7142857143em] font-normal bg-[rgba(0,0,0,0)] bg-position-[150%_50%] border-0 rounded-[5px] text-[.875em] h-full left-0 absolute text-ellipsis w-full z-[2] box-border outline-none"
                            id="email"
                            name="email"
                            onFocus={(e) =>
                              setOnFocuse({
                                ...onFocuse,
                                [e.target.name]: true,
                              })
                            }
                            onBlur={(e) =>
                              setOnFocuse({
                                ...onFocuse,
                                [e.target.name]: false,
                              })
                            }
                          />
                        </div>
                        <span className="absolute top-4 right-[.625rem] text-[#676767] text-[.75rem] transition-all duration-200 ease-[cubic-bezier(.77,0,.175,1)] box-border font-normal">
                          0 of 10
                        </span>
                      </div>
                    </div>
                  )}

                  <div className=" border-b border-[#d4d7d9] text-[.875rem] p-[1.5rem_.75rem_.625rem] relative flex flex-row items-center box-border font-normal">
                    <span className="text-[#6a6d70] text-[.8571428571em] left-[.8571428571em] absolute top-[.5714285714em] select-none z-[1] box-border font-normal visible">
                      Your emial
                    </span>
                    <span className=" overflow-hidden pr-[1em] text-ellipsis block outline-none flex-1 pt-[.2857142857em] box-border text-[.875rem] font-normal">
                      sahilpinjari51209@gmail.com
                    </span>

                    <span className="text-[.875rem] font-normal visible">
                      <span className=" text-2xl items-center inline-flex justify-center leading-[1] w-[1.25rem] text-[#3767ae] box-border font-normal visible">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          className="h-[1em] w-[1em] box-border fill-none overflow-hidden text-2xl leading-[1] text-[#3767ea] font-normal"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <g clipPath="url(#wt_check_circle_svg__a)">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m9.333 15.968 5.104 5.556L22.667 12M16 30.667C7.9 30.667 1.333 24.1 1.333 16S7.9 1.333 16 1.333 30.667 7.9 30.667 16 24.1 30.667 16 30.667"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="wt_check_circle_svg__a">
                              <path fill="#fff" d="M0 0h32v32H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className=" box-border block font-normal visible">
                    <div className="visible relative z-20 box-border block font-normal">
                      <div className="border-[#d4d7d9] h-[47px] m-0  rounded-none border-b font-medium clear-both bg-[#fff] border-[#babacbf] text-[#6a6d70] relative box-border block visible">
                        <lable
                          htmlFor="title"
                          className={`text-[#6a6d70] font-normal absolute select-none transition-all duration-200 ease-[cubic-bezier(.77,0,.175,1)] ${
                            onFocuse.title
                              ? "top-[.4375em] left-[.8125em] text-[.75em] z-[3]"
                              : "left-[.8125em] top-[1.0714285714em] text-[.875em] z-[1]"
                          }`}
                        >
                          Title
                        </lable>
                        <input
                          id="title"
                          className="p-[1.1428571429em_8%_0_.7142857143em] font-normal bg-[rgba(0,0,0,0)] bg-position-[150%_50%] border-0 rounded-[5px] text-[.875em] h-full left-0 absolute text-ellipsis w-full z-[2] box-border outline-none"
                          name="title"
                          onFocus={(e) =>
                            setOnFocuse({ ...onFocuse, [e.target.name]: true })
                          }
                          onBlur={(e) =>
                            setOnFocuse({ ...onFocuse, [e.target.name]: false })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" p-0 relative w-full z-10 flex flex-col flex-grow box-border font-normal">
                    <div className="visible relative z-20 box-border block font-normal">
                      <div className="border-[#d4d7d9] h-[47px] m-0  rounded-none font-medium clear-both bg-[#fff] border-[#babacbf] text-[#6a6d70] relative box-border block visible">
                        <lable
                          htmlFor="message"
                          className={`text-[#6a6d70] font-normal absolute select-none transition-all duration-200 ease-[cubic-bezier(.77,0,.175,1)] ${
                            onFocuse.message
                              ? "top-[.4375em] left-[.8125em] text-[.75em] z-[3]"
                              : "left-[.8125em] top-[1.0714285714em] text-[.875em] z-[1]"
                          }`}
                        >
                          Message
                        </lable>
                        <input
                          id="message"
                          className="p-[1.1428571429em_8%_0_.7142857143em] font-normal bg-[rgba(0,0,0,0)] bg-position-[150%_50%] border-0 rounded-[5px] text-[.875em] h-full left-0 absolute text-ellipsis w-full z-[2] box-border outline-none"
                          name="message"
                          onFocus={(e) =>
                            setOnFocuse({ ...onFocuse, [e.target.name]: true })
                          }
                          onBlur={(e) =>
                            setOnFocuse({ ...onFocuse, [e.target.name]: false })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={trackRef}
                className="opacity-100 bottom-[10px] absolute right-[2px] top-[10px] w-1 z-[999] box-border font-normal visible transition-opacity duration-300 ease-in-out"
              >
                <div
                  className={`h-[209.995px] rounded-[20px] min-h-[20px] w-full transition-colors duration-200 ease-in-out box-border font-normal visible ${
                    isSendEmail && "group-hover:bg-[rgba(0,0,0,.25)]"
                  }`}
                  ref={thumbRef}
                  onMouseDown={(e) => {
                    setIsDragging(true);
                    setStartY(e.clientY);
                    setStartTop(
                      parseInt(
                        window.getComputedStyle(thumbRef.current).top,
                        10
                      )
                    );
                  }}
                ></div>
              </div>
            </div>

            <div className="flex p-3 flex-col gap-[.5rem] rounded-b-[1rem] border-t border-[#d6d6d6] box-border visible">
              <div className="flex z-[1000] relative flex-row gap-2 self-stretch box-border visible">
                <span className="w-full box-border visible ">
                  <button
                    onClick={() => setIsExpiryPopUpOpen(!isExpiryPopUpOpen)}
                    className=" box-border flex py-2 px-4 justify-between items-center rounded-[1em] border border-[#d6d6d6] cursor-pointer bg-[rgba(0,0,0,0)] w-full h-[3.125rem] gap-2 visible hover:border-[#3767ea] hover:shadow-[inset_0_0_0_1px_#3767ea]"
                  >
                    <div className="flex h-8 py-4 px-0 items-center gap-2 box-border">
                      <span className=" text-inherit items-center inline-flex justify-center leading-[1rem] box-border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          className="w-[1.2em] h-[1.2em] font-extrabold stroke-2"
                          role="img"
                          viewBox="0 0 32 32"
                        >
                          <g
                            stroke="currentColor"
                            strokeWidth="1.5"
                            clipPath="url(#wt_calendar_svg__a)"
                          >
                            <rect
                              width="26.667"
                              height="24"
                              x="2.667"
                              y="5.333"
                              rx="5.333"
                            ></rect>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 2.667V8m12-5.333V8"
                            ></path>
                            <path d="M2.667 13.333h26.666"></path>
                          </g>
                          <defs>
                            <clipPath id="wt_calendar_svg__a">
                              <path fill="#fff" d="M0 0h32v32H0z"></path>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <p
                        className="text-[.875rem] m-0 text-[#
                    161616] cursor-pointer font-normal leading-[1.5] box-border"
                      >
                        Expires in
                      </p>
                    </div>
                    <span className=" text-inherit items-center inline-flex justify-center leading-[1] box-border cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        className="h-[1em] w-[1em] box-border fill-none overflow-hidden text-inherit leading-[1] cursor-pointer visible"
                        role="img"
                        viewBox="0 0 32 32"
                      >
                        <g clipPath="url(#wt_chevron_up_svg__a)">
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M26.667 21.333 16 10.667 5.333 21.333"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="wt_chevron_up_svg__a">
                            <path fill="#fff" d="M0 0h32v32H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </span>
                <button
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  className={`rounded-[1rem] flex w-[3.125rem] min-w-[3.125rem] justify-center items-center border border-[#d6d6d6] bg-[rgba(0,0,0,0)] cursor-pointer relative px-3 box-border visible hover:border-[#3767ea] hover:shadow-[inset_0_0_0_1px_#3767ea] hover:bg-[#ecf2ff] hover:text-[#3767ea] ${
                    isDrawerOpen &&
                    "border-[#3767ea] shadow-[inset_0_0_0_1px_#3767ea] bg-[#ecf2ff] text-[#3767ea]"
                  }`}
                >
                  <span className=" text-2xl items-center inline-flex justify-center leading-[1] box-border cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="none"
                      className="w-[1em] h-[1em] box-border fill-none overflow-hidden text-2xl leading-[1] cursor-pointer"
                      role="img"
                      viewBox="0 0 32 32"
                    >
                      <g fill="currentColor">
                        <circle cx="8" cy="16" r="2"></circle>
                        <circle cx="16" cy="16" r="2"></circle>
                        <circle cx="24" cy="16" r="2"></circle>
                      </g>
                    </svg>
                  </span>
                </button>
              </div>

              <div className="flex w-full gap-[10px] box-border visible">
                <button className=" text-[1rem] w-full items-center rounded-[1rem] box-border cursor-pointer flex font-medium gap-2 h-12 justify-center leading-[1] p-4 no-underline select-none transition-all duration-150 ease-in-out bg-[#3767ea] border-0 text-[#f5f8ff]">
                  Continue
                </button>
              </div>
            </div>
          </div>

          {isDrawerOpen && (
            <div className="opacity-100 absolute bottom-0 right-0 h-full w-[18.75rem] transition-opacity duration-[350ms] bg-[#f9f9f9] rounded-tr-[1rem] rounded-br-[1rem] box-border animate-fadeIn pointer-events-auto visible">
              <div className="flex flex-col relative h-full box-border pointer-events-auto visible">
                <div className="h-full overflow-hidden overflow-x-hidden relative w-full box-border pointer-events-auto before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[10px] before:z-[999] before:transition-shadow before:duration-300 before:ease-in-out *:  after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[10px] after:z-[999] after:transition-shadow after:duration-300 after:ease-in-out">
                  <div className=" mr-0 box-border h-full left-0 overflow-x-hidden overflow-y-scroll p-0 absolute top-0 right-0 pointer-events-auto visible no-scrollbar">
                    <div className="flex flex-col p-[20px] gap-1 box-border pointer-events-auto visible">
                      <div className="flex py-[7px] px-2 flex-col justify-center self-start gap-[.3rem] box-border pointer-events-auto">
                        <div className="flex flex-row gap-2 items-center cursor-pointer justify-start h-[1.6rem] box-border">
                          <input
                            id="transfer-type-email"
                            name="transfer-type"
                            type="radio"
                            value="Send email"
                            className={`m-0 h-[1.6rem] w-[1.6rem] animate-wt-radio-circle appearance-none bg-clip-padding border border-[rgba(0,0,0,.2)] rounded-[50%] cursor-pointer box-border shadow-[inset_0_0_0_5px_#fff] ${
                              isSendEmail
                                ? "bg-[#3767ea]"
                                : "bg-[hsla(0,0,0,.2)]"
                            }`}
                            onClick={() => setIsSendEmail(true)}
                          />
                          <lable
                            htmlFor="transfer-type-email"
                            className="text-[15px] cursor-pointer font-normal leading-[1.5] box-border"
                          >
                            Send email
                          </lable>
                        </div>

                        <div className="flex flex-row gap-2 items-center cursor-pointer justify-start h-[1.6rem] box-border">
                          <input
                            id="transfer-type-link"
                            name="transfer-type"
                            type="radio"
                            value="Create Link"
                            className={`m-0 h-[1.6rem] w-[1.6rem] animate-wt-radio-circle appearance-none bg-clip-padding border border-[rgba(0,0,0,.2)] rounded-[50%] cursor-pointer box-border shadow-[inset_0_0_0_5px_#fff] ${
                              !isSendEmail
                                ? "bg-[#3767ea]"
                                : "bg-[hsla(0,0,0,.2)]"
                            }`}
                            onClick={() => setIsSendEmail(false)}
                          />
                          <lable
                            htmlFor="transfer-type-link"
                            className="text-[15px] cursor-pointer font-normal leading-[1.5] box-border"
                          >
                            Create Link
                          </lable>
                        </div>
                      </div>

                      <div className=" h-[1px] w-full shadow-[inset_0_-1px_0_0_#d4d7d9] box-border pointer-events-auto visible"></div>

                      <div className="flex py-0 px-2 flex-col z-[1000] box-border pointer-events-auto">
                        <div className="flex items-center gap-1 box-border pointer-events-auto visible">
                          <div className="flex text-[#676767] font-normal text-[12px] leading-[1.2] pointer-events-auto">
                            Access control
                          </div>
                          <div className="text-[#676767] flex pt-[2px] gap-[10px] pointer-events-auto visible">
                            <span className=" box-border text-[#676767] pointer-events-auto visible">
                              <span className="text-[16px] items-center inline-flex justify-center leading-[1] box-border text-[#676767] pointer-events-auto visible">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="none"
                                  className="h-[1em] w-[1em] box-border overflow-hidden text-base leading-[1] pointer-events-auto"
                                  role="img"
                                  viewBox="0 0 32 32"
                                >
                                  <g clipPath="url(#wt_help_circle_svg__a)">
                                    <circle
                                      cx="16"
                                      cy="22.667"
                                      r="1.333"
                                      fill="currentColor"
                                    ></circle>
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="M12.12 12a4 4 0 0 1 7.773 1.333c0 2.667-4 4-4 4M16 30.667C7.9 30.667 1.333 24.1 1.333 16S7.9 1.333 16 1.333 30.667 7.9 30.667 16 24.1 30.667 16 30.667"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="wt_help_circle_svg__a">
                                      <path
                                        fill="#fff"
                                        d="M0 0h32v32H0z"
                                      ></path>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-start self-start cursor-pointer box-border pointer-events-auto visible">
                          <span className=" box-border cursor-pointer visible">
                            <div className="flex flex-row justify-center items-center gap-1 box-border cursor-pointer pointer-events-auto visible">
                              <div className="text-[#353535] font-normal text-sm leading-[1.5] box-border">
                                Anonymous
                              </div>
                              <span className=" text-base items-center inline-flex justify-center leading-[1] box-border cursor-pointer pointer-events-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  fill="none"
                                  className="h-[1em] w-[1em] box-border overflow-hidden text-base leading-[1] visible"
                                  role="img"
                                  viewBox="0 0 32 32"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M26.667 10.667 16 21.333 5.333 10.667"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>

                      <div className=" h-[1px] w-full shadow-[inset_0_-1px_0_0_#d4d7d9] box-border pointer-events-auto visible"></div>

                      <div className="flex py-0 px-2 flex-col z-[1000] box-border pointer-events-auto">
                        <lable className="text-[#676767] flex py-[2px] px-0 font-normal text-[12px] leading-[1.2] pointer-events-auto">
                          Appearance
                        </lable>

                        <div className="flex flex-row cursor-pointer items-center gap-[2px] pointer-events-auto visible justify-between">
                          <span className="text-[#a4a4a4] inline-flex items-center gap-[4px] font-normal text-sm leading-[1.5] cursor-pointer pointer-event-all">
                            Customize background
                            <span className="text-base items-center inline-flex justify-center leading-[1] box-border cursor-pointer pointer-events-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className="w-[1em] h-[1em] box-border text-base leading-[1] text-[#a4a4a4]"
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
                          </span>
                          <span className="flex text-[#8e21cc] box-border cursor-pointer pointer-events-auto visible">
                            <span className=" text-base items-center inline-flex justify-center leading-[1] box-border text-[#8e21cc] cursor-pointer pointer-events-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className="w-[1em] h-[1em] box-border overflow-hidden text-base leading-[1] text-[#8e21cc] cursor-pointer pointer-events-auto"
                                role="img"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M15.797 28.892c-.371.54-1.217.277-1.216-.378l.012-9.58H5.358a.667.667 0 0 1-.528-1.075l11.576-14.98c.389-.503 1.194-.228 1.194.407v9.78h7.8c.537 0 .853.602.55 1.045L15.796 28.89z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className=" h-[1px] w-full shadow-[inset_0_-1px_0_0_#d4d7d9] box-border pointer-events-auto visible"></div>

                      <div className="flex py-0 px-2 flex-col z-[1000] box-border pointer-events-auto">
                        <label className="text-[#676767] flex py-[2px] px-0 font-normal text-[12px] leading-[1.2] pointer-events-auto">
                          Price
                        </label>

                        <div className="flex flex-row cursor-pointer items-center gap-[2px] pointer-events-auto visible justify-between">
                          <span className="text-[#a4a4a4] inline-flex items-center gap-[4px] font-normal text-sm leading-[1.5] cursor-pointer pointer-event-all">
                            Request Payment
                            <span className="text-base items-center inline-flex justify-center leading-[1] box-border cursor-pointer pointer-events-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className="w-[1em] h-[1em] box-border text-base leading-[1] text-[#a4a4a4]"
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
                          </span>
                          <span className="flex text-[#8e21cc] box-border cursor-pointer pointer-events-auto visible">
                            <span className=" text-base items-center inline-flex justify-center leading-[1] box-border text-[#8e21cc] cursor-pointer pointer-events-auto">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className="w-[1em] h-[1em] box-border overflow-hidden text-base leading-[1] text-[#8e21cc] cursor-pointer pointer-events-auto"
                                role="img"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M15.797 28.892c-.371.54-1.217.277-1.216-.378l.012-9.58H5.358a.667.667 0 0 1-.528-1.075l11.576-14.98c.389-.503 1.194-.228 1.194.407v9.78h7.8c.537 0 .853.602.55 1.045L15.796 28.89z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className=" h-[1px] w-full shadow-[inset_0_-1px_0_0_#d4d7d9] box-border pointer-events-auto visible"></div>

                      <div className="flex px-2 py-0 flex-col box-border pointer-events-auto  visible">
                        <lable
                          className="flex text-[#676767] py-[2px] px-[0px] font-normal text-[12px] leading-[1.2] box-border cursor-default pointer-events-auto visible"
                          htmlFor="transfer_password"
                        >
                          Password
                        </lable>
                        <input
                          type="text"
                          id="transfer_password"
                          placeholder="Set password"
                          className=" bg-none border-0 text-[#676767] m-0 outline-0 p-0 w-full font-normal text-sm leading-[1.5] box-border"
                        />
                      </div>

                      <div className=" h-[1px] w-full shadow-[inset_0_-1px_0_0_#d4d7d9] box-border pointer-events-auto visible"></div>

                      <div className="py-[10px] px-2 flex-row justify-between items-center inline-flex box-border pointer-events-auto visible">
                        <div className="text-[#676767] flex gap-1 items-center font-normal text-[12px] leading-[1.2] pointer-events-auto visible">
                          <div className="text-[#353535] font-normal text-[14px] box-border">
                            <label htmlFor="recoverable">Recoverable</label>
                          </div>
                          <span className="text-[#676767] font-normal text-[12px] pointer-events-auto">
                            <span className=" align-middle text-base items-center inline-flex justify-center leading-[1] box-border text-[#676767] font-normal pointer-events-auto visible">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                                className="w-[1em] h-[em] box-border overflow-hidden text-base leaidng-[1] text-[#676767]"
                                role="img"
                                viewBox="0 0 32 32"
                              >
                                <g clipPath="url(#wt_help_circle_svg__a)">
                                  <circle
                                    cx="16"
                                    cy="22.667"
                                    r="1.333"
                                    fill="currentColor"
                                  ></circle>
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12.12 12a4 4 0 0 1 7.773 1.333c0 2.667-4 4-4 4M16 30.667C7.9 30.667 1.333 24.1 1.333 16S7.9 1.333 16 1.333 30.667 7.9 30.667 16 24.1 30.667 16 30.667"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="wt_help_circle_svg__a">
                                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </span>
                        </div>
                        <input
                          id="recoverable"
                          name="recoverable"
                          type="checkbox"
                          className={`bg-[position:50%_50%] bg-no-repeat text-[#fff] appearance-none bg-clip-padding border border-[rgba(0,0,0,.2)] rounded-lg cursor-pointer h-6 w-6 m-0 box-border outline-none ${
                            isRecoverable
                              ? "bg-[#3767ea]  bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI5IiBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMy40NDggOC43MDZhMS4wMjMgMS4wMjMgMCAwIDAgMS41NTgtLjE0N2w0LjgxMi02Ljk1NkExLjAyMiAxLjAyMiAwIDEgMCA4LjEzNi40NDFsLTQuMTIgNS45NTVMMS43NCA0LjE1N0ExLjAyMyAxLjAyMyAwIDAgMCAuMzA1IDUuNjE0bDMuMTQzIDMuMDkyWiIvPjwvc3ZnPg==')]"
                              : "bg-[hsla(0,0%,100%,0.8)]"
                          }`}
                          onClick={() => setIsRecoverable(!isRecoverable)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isExpiryPopUpOpen && (
        <div className="fixed visible top-0 left-0 translate-x-[99px] translate-y-[139px] z-[90] w-[11.5rem] box-border">
          <div className="w-auto maxh-[784px] max-w-[1536px] overflow-auto mb-4 p-4 bg-[#f9f9f9] rounded-2xl box-border shadow-[0_32px_64px_0_rgba(0,0,0,0.2),_inset_0_1px_0_0_#fff,_inset_0_-1px_0_0_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-start self-stretch box-border gap-[4px] ">
              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    Keep forever
                  </p>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    1 Year
                  </p>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    60 days
                  </p>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    30 days
                  </p>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    7 days
                  </p>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    3 days
                  </p>
                  <span className=" bg-[#f5f8ff] text-[#3767ea] rounded-[6px] text-[10px] px-[0.375rem] pt-[.1875rem] pb-[.25rem] font-bold leading-[1.2] items-center justify-center box-border ">
                    Free
                  </span>
                </div>
              </div>

              <div className="flex py-[5.5px] px-0 items-center gap-2 self-stretch justify-between box-border">
                <div className="flex flex-row items-center gap-2 box-border">
                  <p className="text-[.875rem] m-0 text-[#161616] cursor-pointer font-normal">
                    1 day
                  </p>
                  <span className=" bg-[#f5f8ff] text-[#3767ea] rounded-[6px] text-[10px] px-[0.375rem] pt-[.1875rem] pb-[.25rem] font-bold leading-[1.2] items-center justify-center box-border ">
                    Free
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isAddMorePopupOpen && (
        <div className="fixed visible top-0 left-0 translate-y-[237px] translate-x-[266px] z-[90] box-border">
          <div className=" bg-[#f9f9f9] rounded-2xl mt-[.875rem] mr-[-2rem] p-[.5rem] box-border shadow-[0_32px_64px_0_rgba(0,0,0,0.2),_inset_0_1px_0_0_#fff,_inset_0_-1px_0_0_rgba(0,0,0,0.1)]">
            <div>
              <button
                onClick={() => fileInputRef?.current.click()}
                className=" w-full h-4 rounded-lg justify-start py-4 px-[.625rem] text-[.875rem] items-center shadow-none box-border cursor-pointer flex font-medium gap-2 leading-[1] outline-none no-underline select-none bg-neutral-50 border-0 text-[#353535] transition-all duration-150 ease-in-out hover:bg-[#fff]"
              >
                Files
              </button>

              <button
                onClick={() => folderInputRef?.current.click()}
                className=" w-full h-4 rounded-lg justify-start py-4 px-[.625rem] text-[.875rem] items-center shadow-none box-border cursor-pointer flex font-medium gap-2 leading-[1] outline-none no-underline select-none bg-neutral-50 border-0 text-[#353535] transition-all duration-150 ease-in-out hover:bg-[#fff]"
              >
                Folders
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TransferWindow;
