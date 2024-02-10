import Navbar from "@/components/navbar/Navbar";
import LeftSideBarSkeleton from "@/components/ui/LeftSideBarSkeleton";
import dynamic from "next/dynamic";
import React from "react";

const LeftSideBar = dynamic(() => import("@/components/shared/LeftSideBar"), {
  ssr: false,
  loading: () => <LeftSideBarSkeleton />,
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="flex">
        <LeftSideBar />
        <section className="flex h- flex-1 min-h-screen px-4 sm:px-16 2xl:px-40 py-8 background-light800_dark100">
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
