"use client";
import { sideBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 p-8 flex flex-col gap-8 sm:min-w-[300px]">
      <Link href="/">
        <Image
          src="/assets/images/dark-logo.svg"
          alt="Logo"
          width={200}
          height={40}
          className="max-sm:hidden"
        />

        <Image
          src="/assets/images/logo-icon.svg"
          alt="Logo"
          width={40}
          height={40}
          className="sm:hidden"
        />
      </Link>
      <hr className="w-full h-[1px] background-grey-secondary_dark100" />
      <div className="flex flex-col gap-4">
        {sideBarLinks.map((link) => {
          const isActive =
            pathname === link.url ||
            (pathname.includes(link.url) && link.url.length > 1);

          return (
            <Link
              key={link.url}
              href={link.url}
              className={`${
                isActive
                  ? "primary-gradient text-light-900 rounded-lg"
                  : "text-grey-secondary"
              } flex items-center justify-start p-4 gap-3 max-sm:w-fit`}
            >
              {link.icon}
              <p className="base-semibold max-sm:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
