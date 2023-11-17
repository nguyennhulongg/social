import React from "react";
import SideBar from "./SideBar";
import FollowBar from "./FollowBar";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-[black] p-2">
      <div className="h-full xl:px-30">
        <div className="grid grid-cols-5 h-full">
          <SideBar />
          <div className="col-span-3 lg:col-span-3">
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
