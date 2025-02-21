import React from "react";
import { AlignJustify, X } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

const TopHeader = ({ setToggleBar, toggle }) => {
  return (
    <div className="flex sticky top-0 z-[99] bg-white px-5 py-2.5 lg:py-5 border-b items-center justify-between lg:justify-end">
      {toggle ? (
        <X
          className="lg:hidden  cursor-pointer"
          onClick={() => setToggleBar()}
        />
      ) : (
        <AlignJustify
          className="lg:hidden cursor-pointer"
          onClick={() => setToggleBar()}
        />
      )}
      <img src="/logo.png" className=" lg:hidden w-[150px]" />
      <UserButton afterSignOutUrl="/auth/login" />
    </div>
  );
};

export default TopHeader;
