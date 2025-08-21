import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      {/* Sidebar - only render if menu is open */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-60 h-full">
          <SideBar />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 mt-16 p-4 transition-all duration-200 ${
          isMenuOpen ? "ml-60" : "ml-0"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
