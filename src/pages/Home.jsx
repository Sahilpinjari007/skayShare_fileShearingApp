import React, { useContext, useEffect } from "react";
import TransferWindow from "../components/TransferWindow";
import DownloadWindow from "../components/DownloadWindow";
import { useLocation } from "react-router-dom";
import { Context } from "../context/AppContext";
import { DOWNLOAD, TRANSFER } from "../utils/Constant";
import ADRender from "../components/ADRender";

const Home = () => {
  const { privousIntraction, setPrivousIntraction } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") setPrivousIntraction(TRANSFER);
    if (location.pathname.includes("download")) setPrivousIntraction(DOWNLOAD);
  }, []);


  return (
    <>
      <ADRender/>
      {location.pathname === "/" || privousIntraction == TRANSFER ? (
        <TransferWindow />
      ) : (
        <DownloadWindow />
      )}
    </>
  );
};

export default Home;
