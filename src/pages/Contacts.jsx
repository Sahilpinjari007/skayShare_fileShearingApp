import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AppContext";

const Contacts = () => {
  const { setPageOpen, setPricingPage } = useContext(Context);
  const [showAddContact, setShowAddContact] = useState(false);

  useEffect(() => {
    setPageOpen(true);
    setPricingPage(false);
  });
  return (
    <div className=" pb-6 min-h-[calc(100%-4.0625em)] pt-[3.5em] px-[80px] my-0 mx-auto max-w-[80rem] box-border">
      <div>
        <div className="relative box-border">
          <h1 className=" font-normal text-[2.5em] m-0">Contacts</h1>
          <span className="mt-2 font-normal text-[#6a6d70] block text-[.875em] box-border">
            2 Contacts <span> · </span>
            <button onClick={()=>setShowAddContact(true)} className=" font-normal text-[1em] text-[#484a4d] cursor-pointer underline bg-none border-none p-0 box-border">
              Add contact
            </button>
          </span>
          <div className=" inline-block m-0 align-top w-[18.75em] absolute top-0 right-0 font-normal bg-[#fff] border border-[#babcbf] rounded-[5px] clear-both text-[#6a6d40] h-[50px]">
            <input
              type="text"
              placeholder="search for email or name"
              className=" pl-11 pt-0 font-normal bg-[rgba(0,0,0,0)] border-0 rounded-[5px] text-[.875em] h-full left-0 pr-[8%] pb-0 absolute text-ellipsis w-full z-[2] box-border outline-none focus:shadow-[0_0_0_0.0625em_#5268ff]"
            />

            <svg
              class="h-[.875em] w-[.875em] left-[1em] absolute top-[1.125em] box-border font-normal text-[#6a6d70]"
              viewBox="19 18 14 14"
            >
              <path
                d="M28.198 23.62c0-.984-.35-1.826-1.05-2.526-.7-.7-1.542-1.05-2.527-1.05-.984 0-1.826.35-2.526 1.05-.7.7-1.05 1.542-1.05 2.527 0 .986.35 1.828 1.05 2.528.7.7 1.542 1.05 2.527 1.05.986 0 1.828-.35 2.528-1.05.7-.7 1.05-1.542 1.05-2.527zm4.088 6.644c0 .277-.1.516-.304.718-.202.203-.44.304-.718.304-.288 0-.527-.1-.72-.304l-2.737-2.73c-.953.66-2.015.99-3.186.99-.76 0-1.488-.148-2.183-.443-.694-.297-1.293-.696-1.796-1.2-.502-.502-.9-1.1-1.197-1.795-.295-.695-.443-1.423-.443-2.184 0-.76.148-1.488.443-2.183.296-.694.695-1.293 1.198-1.796.504-.502 1.103-.9 1.797-1.197.695-.295 1.423-.443 2.184-.443.762 0 1.49.148 2.185.443.694.296 1.293.695 1.796 1.198.504.504.903 1.103 1.2 1.797.294.695.442 1.423.442 2.184 0 1.172-.33 2.234-.99 3.187l2.738 2.738c.197.197.296.437.296.72z"
                fill="#6a6d70"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {showAddContact && (
          <div className="mt-5">
            <form className=" pt-[.9375rem] mx-0 mb-0 relative w-full box-border">
              <div className="flex box-border">
                <div className="rounded-[3px] inline-block h-[2.25em] mr-[.625em] mt-0 w-[calc((100%-54px)/3-10px)] font-normal bg-[#fff] border border-[#babcbf] clear-both relative text-[#6a6d70]">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="rounded-[3px] pl-[.7142857143em] pr-[1.7857142857em] pt-0 font-normal bg-[rgba(0,0,0,0)] border-0 text-[.875em] h-full left-0 pb-0 absolute text-ellipsis w-full z-[2] box-border  outline-none focus:shadow-[0_0_0_0.0625em_#5268ff]"
                  />
                </div>

                <div className="rounded-[3px] inline-block h-[2.25em] mr-[.625em] mt-0 w-[calc((100%-54px)/3-10px)] font-normal bg-[#fff] border border-[#babcbf] clear-both relative text-[#6a6d70]">
                  <input
                    type="name"
                    placeholder="Name"
                    className="rounded-[3px] pl-[.7142857143em] pr-[1.7857142857em] pt-0 font-normal bg-[rgba(0,0,0,0)] border-0 text-[.875em] h-full left-0 pb-0 absolute text-ellipsis w-full z-[2] box-border  outline-none focus:shadow-[0_0_0_0.0625em_#5268ff]"
                  />
                </div>

                <div className="flex items-center justify-between flex-grow box-border max-w-[54.04px]">
                  <svg
                    class="cursor-pointer h-[1.5em] w-[1.5em] box-border outline-none"
                    tabindex="0"
                    viewBox="0 0 24 24"
                    data-testid="check-circle-icon"
                  >
                    <path
                      d="M10.44 16.733c.454.448 1.203.377 1.567-.148l1.15-1.666 3.69-5.335c.322-.467.205-1.108-.262-1.43-.467-.324-1.108-.207-1.43.26l-4.145 6.018-2.288-2.278c-.405-.398-1.056-.393-1.455.012-.398.404-.393 1.056.01 1.454l3.162 3.113z"
                      fill="#babcbf"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      fill="#babcbf"
                      fill-rule="evenodd"
                    ></path>
                  </svg>

                  <svg
                    onClick={() => setShowAddContact(false)}
                    viewBox="0 0 24 24"
                    class=" cursor-pointer h-[1.5em] w-[1.5em] box-border outline-none"
                    tabindex="0"
                    data-testid="close-icon"
                  >
                    <path
                      fill="#babcbf"
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10-1.414L9.875 8.46c-.38-.38-1.02-.386-1.41.004-.394.394-.393 1.023-.004 1.41L10.587 12 8.46 14.125c-.38.38-.386 1.02.004 1.41.394.394 1.023.393 1.41.004L12 13.413l2.125 2.125c.38.38 1.02.386 1.41-.004.394-.394.393-1.023.004-1.41L13.413 12l2.125-2.125c.38-.38.386-1.02-.004-1.41-.394-.394-1.023-.393-1.41-.004L12 10.587zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
                    ></path>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        )}

        <ul className=" list-none mt-[2.5em] mx-0 mb-[1.875em] box-border">
          <li className="text-[#6a6d70] text-[1rem] font-bold leading-[1.5rem] h-[2.9285714286em] pt-[1.0714285714em] px-0 pb-0 border-b border-[#e8ebed]">
            A
          </li>
          <li className=" h-auto py-[.625rem] box-border">
            <div className="relative flex items-center justify-between box-border">
              <div className="inline-block h-auto align-middle">
                <span className=" font-normal text-[1rem] leading-6 pointer-events-none text-[#17181a]">
                  asifpinjari51209@gmail.com
                </span>
                <div className=" font-normal text-[#6a6d70] text-[.875rem] leading-[1.3125rem]">
                  <span className=" box-border font-normal text-[#6a6d70] text-[.875rem] leading-[1.3125rem]">
                    asif
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
