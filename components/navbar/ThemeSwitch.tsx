"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Skeleton from "../ui/Skeleton";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  console.log("Theme: ", theme)

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Skeleton radius="rounded-full" size="h-4 w-4" />;
  }

  if (typeof window !== "undefined") {
    if (theme === "dark") {
      return (
        <Image
          src="/assets/images/Sun.svg"
          width={18}
          height={18}
          alt="Sun Icon"
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        />
      );
    }

    if (theme === "light") {
      return (
        <Image
          src="/assets/images/Moon.svg"
          width={18}
          height={18}
          alt="Moon Icon"
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        />
      );
    }

    return <h1>Theme Switch</h1>;
  }
};

export default ThemeSwitch;
