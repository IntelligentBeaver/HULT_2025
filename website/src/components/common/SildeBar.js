"use client";
import React, { useState } from "react";
import Menu from "./Menu";
function SlideBar() {
  const [active, setActive] = useState(false);
  function toggleSidebar() {
    setActive(!active);
  }
  return (
    <div>
      {/* Hamburger Menu Icon */}
      <span
        className="block md:hidden ml-2 cursor-pointer text-2xl"
        onClick={toggleSidebar}
      >
        <i className="fa-solid fa-bars"></i>
      </span>
      {/* Sidebar */}
      <div
        className={`fixed bg-white top-0 right-0 bottom-0 w-[300px] backdrop-blur-xl opacity-95 transform ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-400 ease-in-out `}
      >
        <div className="p-4">
          {/* Close Button */}
          <span
            className="block text-left text-black cursor-pointer text-2xl"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-times hover:text-accent hover:transition-colors duration-400"></i>
          </span>
          <div className="mt-10 z-50 h-full w-full flex flex-col justify-center items-start">
            <Menu hidden={"flex"} flex={"flex-col"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
