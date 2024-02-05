"use client";
import { sideBarLinks } from "@/constants";
import * as Dialog from "@radix-ui/react-dialog";
import { Box, Flex, Separator } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AuthStatus from "../navbar/AuthStatus";
import Button from "../ui/Button";
import SideBarAuthStatus from "../navbar/SideBarAuthStatus";

const MobileSideBar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const logoSrc =
    theme === "light"
      ? "/assets/images/dark-logo.svg"
      : "/assets/images/light-logo.svg";
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">
          <Menu />
        </button>
      </Dialog.Trigger>

      <Dialog.Overlay className="DialogOverlay z-40" />
      <Dialog.Content className="DialogContent background-light900_dark200 flex flex-col p-8 gap-8 z-50">
        <Box className="mx-auto">
          <Link href="/">
            <Image
              priority={true}
              src={logoSrc}
              alt="Logo"
              width={200}
              height={40}
            />
          </Link>
        </Box>
        <Separator
          orientation="horizontal"
          className="background-grey-secondary_dark100 !w-auto -mx-8"
        />
        <Flex
          direction="column"
          gap="6"
          justify="between"
          className="min-h-[75vh]"
        >
          <Flex direction="column" gap="4">
            {sideBarLinks.map((link) => {
              const isActive =
                pathname === link.url ||
                (pathname.includes(link.url) && link.url.length > 1);

              return (
                <Dialog.Close key={link.label} asChild>
                  <Link
                    href={link.url}
                    className={`${
                      isActive
                        ? "primary-gradient text-light-900 rounded-lg"
                        : "text-grey-secondary"
                    } flex items-center justify-start p-4 gap-3`}
                  >
                    {link.icon}
                    <p className="base-semibold">{link.label}</p>
                  </Link>
                </Dialog.Close>
              );
            })}
          </Flex>

          <Box className="">
            <SideBarAuthStatus />
          </Box>
        </Flex>

        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <X />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default MobileSideBar;
