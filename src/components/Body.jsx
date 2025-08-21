import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-16 left-0 w-60 h-full">
        <SideBar />
      </div>

      {/* Main Content with margin for header + sidebar */}
      <div className="flex-1 ml-60 mt-16 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
