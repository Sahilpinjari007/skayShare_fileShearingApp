"use Client";
import React, { useState } from "react";
import { Upload } from "lucide-react";
import { File } from "lucide-react";
import { Shield } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideNav = ({ clsoeSideBar }) => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
  ];

  return (
    <div className="shadow-sm border-r drop-shadow-sm h-full">
      <div className="p-5 border-b h-[69px]">
        <img src="/logo.png" className="w-[150px] relative top-[-13px] " />
      </div>

      <div className="flex flex-col float-left w-full mt-5">
        {menuList.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => `flex gap-2 p-4 px-6
            hover:bg-gray-100 w-full text-gray-500 
            ${isActive ? " text-primary bg-blue-50" : null} `}
       
            onClick={() => {
              clsoeSideBar();
            }}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
