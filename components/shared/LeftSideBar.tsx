"use client";
import { sideBarLinks } from "@/constants";
import { Box, Separator } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftSideBar = () => {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();

  console.log("Theme in Leftsidebar: ", theme);
  console.log("resolvedTheme: ", resolvedTheme);

  let logoSrc =
    resolvedTheme === "dark"
      ? "/assets/images/light-logo.svg"
      : "/assets/images/dark-logo.svg";

  return (
    <section className="background-light900_dark200 p-8 flex flex-col gap-8 lg:min-w-[300px] max-md:hidden max-lg:px-4">
      <Box className="mx-auto">
        <Link href="/">
          <Image
            priority={true}
            src={logoSrc}
            alt="Logo"
            width={200}
            height={40}
            className="max-lg:hidden"
          />

          <Image
            src="/assets/images/logo-icon.svg"
            alt="Logo"
            width={40}
            height={40}
            className="lg:hidden"
          />
        </Link>
      </Box>
      <Separator
        orientation="horizontal"
        className="background-grey-secondary_dark100 !w-auto -mx-8"
      />
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
              } flex items-center justify-start p-4 gap-3 max-md:w-fit`}
            >
              {link.icon}
              <p className="base-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSideBar;
