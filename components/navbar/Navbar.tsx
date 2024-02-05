import React from "react";
import { Box, Flex } from "@radix-ui/themes";
import AuthStatus from "./AuthStatus";
import ThemeSwitch from "./ThemeSwitch";
import MobileSideBar from "../shared/MobileSideBar";

const Navbar = () => {
  return (
    <div className="absolute right-0 background-light900_dark200 p-2 rounded-lg primary-box-shadow">
      <Flex gap="6" align="center">
        <Box mx="2">
          <ThemeSwitch />
        </Box>
        <Box mx="2" className="md:hidden">
          <MobileSideBar />
        </Box>
        <Box className="min-w-[120px] max-md:hidden">
          <AuthStatus />
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
