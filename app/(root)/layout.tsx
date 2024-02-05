import Navbar from "@/components/navbar/Navbar";
import Skeleton from "@/components/ui/Skeleton";
import { Flex } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import React from "react";

const LeftSideBar = dynamic(() => import("@/components/shared/LeftSideBar"), {
  ssr: false,
  loading: () => (
    <Flex
      direction="column"
      p="6"
      gap="8"
      className="background-light900_dark200"
    >
      <Skeleton size="h-14 w-60" radius="rounded-lg" />

      <Flex direction="column" gap="4">
        <Skeleton size="h-14 w-60" radius="rounded-lg" />
        <Skeleton size="h-14 w-60" radius="rounded-lg" />
      </Flex>
    </Flex>
  ),
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
