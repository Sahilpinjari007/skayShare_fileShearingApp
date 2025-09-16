import React from "react";
import { useNavigate } from "react-router-dom";


const PageTopbar = () => {

  const navigate = useNavigate();

  const handleOnBackPress = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#fff] border-b border-[#e8ebed] h-[5em] left-0 relative top-0 w-full z-[37] box-border">
      <button
        onClick={() => handleOnBackPress()}
        className=" cursor-pointer h-12 left-4 absolute w-6 bg-none p-0 text-[#fff] border-0 rounded-[5px] text-[.875em] mt-[1.2857142857em] no-underline transition-[border-color_0.2s_cubic-bezier(.77,0,.175,1),background-color_0.2s_cubic-bezier(.77,0,.175,1),color_0.2s_cubic-bezier(.77,0,.175,1)] box-border"
      >
        <svg
          className=" box-border cursor-pointer text-[#fff] font-medium text-[.875em]"
          viewBox="0 0 24 24"
          aria-label="Close panel"
          data-testid="close-icon"
        >
          <path
            fill="#babcbf"
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10-1.414L9.875 8.46c-.38-.38-1.02-.386-1.41.004-.394.394-.393 1.023-.004 1.41L10.587 12 8.46 14.125c-.38.38-.386 1.02.004 1.41.394.394 1.023.393 1.41.004L12 13.413l2.125 2.125c.38.38 1.02.386 1.41-.004.394-.394.393-1.023.004-1.41L13.413 12l2.125-2.125c.38-.38.386-1.02-.004-1.41-.394-.394-1.023-.393-1.41-.004L12 10.587zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default PageTopbar;
