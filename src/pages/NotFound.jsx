import React from "react";
import { Link } from "react-router-dom";
import spiral from "../assets/spiral.svg";

const NotFound = () => {
  return (
    <div>
      <Link
        to={"/"}
        className=" absolute left-[15px] top-[15px] w-[52px] h-[29px] box-border"
      >
        <img
          src="/logo.black.svg"
          className="box-border"
        />
      </Link>
      <main className=" max-w-[60%] h-screen m-auto flex flex-col justify-center items-center">
        <img src={spiral} className=" max-h-[40%] mb-[2em] box-border" />
        <h1 className="mx-0 mt-[1em] mb-[0.2em] text-[1em] box-border font-bold">
          Yikes, that page can't be found.
        </h1>
        <p>
          {"Head back to "}
          <Link to={"/"} className="underline">
            skayshare.vercel.app
          </Link>{" "}
          {" or cheer up your eyes with some "}
          <span className="underline">nice things we wrote</span>
        </p>
      </main>
    </div>
  );
};

export default NotFound;
