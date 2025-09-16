import React, { useContext, useEffect } from "react";
import { Context } from "../context/AppContext";

const Pricing = () => {
  const { setPageOpen, setPricingPage } = useContext(Context);

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(true);
  }, []);
  return (
    <div className="my-0 mx-auto px-[24px] max-w-[1440px] static min-h-[calc(100%-4.0625em)] pt-[3.5em] pb-[6.5625em] box-border">
      <div className="flex flex-col items-center text-center box-border">
        <h2 className="text-[64px] flex flex-col font-normal leading-[90%] tracking-[-.02em] mt-6 box-border m-0 p-0">
          <span>You’ve got the ideas,</span>
          <span>we’ve got the plans</span>
        </h2>
        <h3 className=" text-[18px] mt-[32px] font-normal leading-[150%] max-w-[700px] m-0 p-0 box-border">
          Whether you’re sending big files for fun or delivering work for
          clients—keep creative projects moving forward with WeTransfer.
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center gap-[40px] mt-[12px box-border]">
        <div className="flex py-[40px] px-0 items-center gap-[40px] box-border">
          <div className="flex flex-col lg:flex-row gap-[12px]">
            <div className="flex flex-col md:flex-row gap-[12px] box-border">
              <div className="flex flex-row justify-stretch pt-[30px] pb-[4px] rounded-[20px] box-border">
                <div className="w-[320px] py-[28px] px-[20px] lg:w-[250px] lg:py-[28px] lg:px-[14px] flex flex-col items-start rounded-[16px] border border-[##f1f1f1] bg-[#fff] flex-grow gap-[20px]">
                  <div className="flex flex-col">
                    <p className=" self-stretch text-[#161616] font-bold text-[20px] leading-[1.2] m-0 p-0 box-border">
                      Free
                    </p>
                    <p className=" min-h-[94px] text-[15.8px] text-[#161616] mt-[8px] font-normal leading-[1.5]">
                      Perfect for occasional users or anyone exploring skayShare
                      for the first time.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className=" text-[28px] text-[#161616] flex items-center gap-2 font-bold">
                      $0
                    </p>
                    <p className="text-[14px] min-h-[36px] text-[#161616] leading-[1.5]">
                      Enjoy skayShare for free
                    </p>
                  </div>

                  <div className="w-full box-border">
                    <button className="w-full opacity-[.4] pointer-events-none rounded-[1rem] text-[16px] font-medium h-[3.5rem] leading-[1] p-4 items-center shadow-none box-border cursor-pointer flex gap-2 justify-center outline-none no-underline select-none bg-transparent border border-[#3767ea] text-[#3767ea] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105">
                      Current plan
                    </button>
                    <span className=" text-[#676767] text-center w-full block mt-1 font-normal text-sm leading-[1.5]">
                      For individual, non-commercial use only
                    </span>
                  </div>

                  <div className=" w-full h-[1px] bg-[#d6d6d6] box-border"></div>

                  <ul className=" mt-[12px] p-0 box-border m-0">
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Share and receive up to 3 GB / month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>10 transfers per month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Transfer expiry up to 3 days</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>No Password protection</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Basic upload support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-[6px] rounded-[20px] pt-[6px] px-[4px] pb-[6px] bg-[rgba(78,125,247)] justify-center box-border">
                <span className="block text-[rgba(255,255,255)] text-center font-medium text-[12px]  leading-[1.5] box-border">
                  Most popluar
                </span>
                <div className="w-[320px] py-[28px] px-[20px] lg:w-[250px] lg:py-[28px] lg:px-[14px] flex flex-col items-start rounded-[16px] border border-[##f1f1f1] bg-[#fff] flex-grow gap-[20px]">
                  <div className="flex flex-col">
                    <p className=" self-stretch text-[#161616] font-bold text-[20px] leading-[1.2] m-0 p-0 box-border">
                      Ultimate
                    </p>
                    <p className=" min-h-[94px] text-[15.8px] text-[#161616] mt-[8px] font-normal leading-[1.5]">
                      The ultimate choice for power users who send big files all
                      day, every day.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className=" text-[28px] text-[#161616] flex items-center gap-2 font-bold">
                      $23
                    </p>
                    <p className="text-[14px] min-h-[36px] text-[#161616] leading-[1.5]">
                      Per month, billed monthly.
                    </p>
                  </div>

                  <div className="w-full box-border">
                    <button className="w-full rounded-[1rem] text-[16px] font-medium h-[3.5rem] leading-[1] p-4 items-center shadow-none box-border cursor-pointer flex gap-2 justify-center outline-none no-underline select-none bg-[#3767ea] border-0 text-[#f5f8ff] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105">
                      Continue
                    </button>
                    <span className=" text-[#676767] text-center w-full block mt-1 font-normal text-sm leading-[1.5]">
                      For individual use only
                    </span>
                  </div>

                  <div className=" w-full h-[1px] bg-[#d6d6d6] box-border"></div>
                  <ul className="mt-[12px] p-0 box-border m-0">
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Share and receive up to 100 GB / month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>100 transfers per month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Transfer expiry up to 30 days</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Password protection</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Email notifications</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Automatic malware scanning</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Download stats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[6px] rounded-[20px] p-[6px_4px_4px] justify-center bg-[#ecf2ff] w-[512px ">
            <span className="block text-[#4e7df7] text-center font-medium text-[12px]  leading-[1.5] box-border">
                  Best for Businesses
                </span>

                <div className="flex flex-col md:flex-row gap-[12px] box-border ">
              <div className="flex flex-row justify-stretch pb-[4px] rounded-[20px] box-border">
                <div className="w-[320px] py-[28px] px-[20px] lg:w-[250px] lg:py-[28px] lg:px-[14px] flex flex-col items-start rounded-[16px] border border-[##f1f1f1] bg-[#fff] flex-grow gap-[20px]">
                  <div className="flex flex-col">
                    <p className=" self-stretch text-[#161616] font-bold text-[20px] leading-[1.2] m-0 p-0 box-border">
                      Business
                    </p>
                    <p className=" min-h-[94px] text-[15.8px] text-[#161616] mt-[8px] font-normal leading-[1.5]">
                     Ideal for small Business that need a powerful and robust file sharing solution
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className=" text-[28px] text-[#161616] flex items-center gap-2 font-bold">
                      $29
                    </p>
                    <p className="text-[14px] min-h-[36px] text-[#161616] leading-[1.5]">
                      Per user / month, with a minimum of 2 users. Billed monthly.
                    </p>
                  </div>

                  <div className="w-full box-border">
                    <button className="w-full rounded-[1rem] text-[16px] font-medium h-[3.5rem] leading-[1] p-4 items-center shadow-none box-border cursor-pointer flex gap-2 justify-center outline-none no-underline select-none bg-transparent border border-[#3767ea] text-[#3767ea] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105">
                      Continue
                    </button>
                    <span className=" text-[#676767] text-center w-full block mt-1 font-normal text-sm leading-[1.5]">
                      Up to 25 members
                    </span>
                  </div>

                  <div className=" w-full h-[1px] bg-[#d6d6d6] box-border"></div>

                   <ul className="mt-[12px] p-0 box-border m-0">
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Share and receive up to 500 GB / month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>1000 transfers per month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Transfer expiry up to 60 days</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Password protection</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Email notifications</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Automatic malware scanning</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Request payment</span>
                    </li>
                     <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Download stats</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-row justify-stretch pb-[4px] rounded-[20px] box-border">
                <div className="w-[320px] py-[28px] px-[20px] lg:w-[250px] lg:py-[28px] lg:px-[14px] flex flex-col items-start rounded-[16px] border border-[##f1f1f1] bg-[#fff] flex-grow gap-[20px]">
                  <div className="flex flex-col">
                    <p className=" self-stretch text-[#161616] font-bold text-[20px] leading-[1.2] m-0 p-0 box-border">
                      Enterprise
                    </p>
                    <p className=" min-h-[94px] text-[15.8px] text-[#161616] mt-[8px] font-normal leading-[1.5]">
                      Our most scalable and secure solution, customizable to your needs.
                    </p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className=" text-[28px] text-[#161616] flex items-center gap-2 font-bold">
                      Custome
                    </p>
                    <p className="text-[14px] min-h-[36px] text-[#161616] leading-[1.5]">
                      Price tailored to your business
                    </p>
                  </div>

                  <div className="w-full box-border">
                    <button className="w-full rounded-[1rem] text-[16px] font-medium h-[3.5rem] leading-[1] p-4 items-center shadow-none box-border cursor-pointer flex gap-2 justify-center outline-none no-underline select-none bg-transparent border border-[#3767ea] text-[#3767ea] transition-all duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105">
                      Contact us
                    </button>
                    <span className=" text-[#676767] text-center w-full block mt-1 font-normal text-sm leading-[1.5]">
                      Unlimited members
                    </span>
                  </div>

                  <div className=" w-full h-[1px] bg-[#d6d6d6] box-border"></div>
                 
                   <ul className="mt-[12px] p-0 box-border m-0">
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Share and receive limitless</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited transfers per month</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Unlimited transfer expiration</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Full Password protection</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Email notifications</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Automatic malware scanning</span>
                    </li>
                    <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Request payment</span>
                    </li>
                     <li className="text-base flex font-normal leading-[150%]">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[-4px] w-[16px] h-[16px] text-[#c2c2c2] mr-2 flex-shrink-0 box-border text-[14px] font-normal leading-[150%]"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 11.167 10.895 17 19 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>Download stats</span>
                    </li>
                  </ul>
                </div>
              </div> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
