import React from "react";
import { Box } from "@radix-ui/themes";
import AuthStatus from "./AuthStatus";

const Navbar = () => {
  return (
    <div className="absolute right-0 background-light900_dark200 p-2 rounded-lg primary-box-shadow">
      <Box className="min-w-[120px]">
        <AuthStatus />
      </Box>
    </div>
  );
};

export default Navbar;
