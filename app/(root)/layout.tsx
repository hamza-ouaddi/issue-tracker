import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex">
        <LeftSideBar />
        <section className="flex flex-1 min-h-screen px-16 py-8 background-light800_dark100">
          <div className="relative w-full">
            <Navbar />
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
