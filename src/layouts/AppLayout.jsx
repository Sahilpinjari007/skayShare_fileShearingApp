import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";

const AppLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
