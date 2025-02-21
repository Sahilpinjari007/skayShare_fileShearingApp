"use Client"

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopHeader from "../components/TopHeader";

const Home = () => {

  const [toggle, setToggle] = useState(false);


  return (
    <div className="flex w-full h-screen">
      <div className={`h-full w-64 flex-col fixed inset-y-0 z-50 lg:flex hidden bg-white `}>
        <SideNav clsoeSideBar={()=>setToggle(false)} />
      </div>

      {toggle ? <div className={`h-full w-64 flex-col fixed inset-y-0 z-50 bg-white flex`}>
        <SideNav clsoeSideBar={()=>setToggle(false)} />
      </div> : null}
      <div className="w-full lg:ml-64">
        <TopHeader setToggleBar={()=>setToggle(!toggle)} toggle={toggle} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
