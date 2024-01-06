import LeftSideBar from "@/components/shared/LeftSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex">
        <LeftSideBar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
