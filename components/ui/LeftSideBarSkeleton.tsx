import { Box, Flex } from "@radix-ui/themes";
import React from "react";
import Skeleton from "./Skeleton";

const LeftSideBarSkeleton = () => {
  return (
    <Box className="max-md:hidden block">
      <Flex
        direction="column"
        gap="8"
        className="background-light900_dark200 p-8 max-lg:p-4"
      >
        <Skeleton
          size="h-14 w-60 max-lg:w-14 max-md:hidden"
          radius="rounded-lg"
        />

        <Flex direction="column" gap="4" className="max-md:hidden">
          <Skeleton
            size="h-14 w-60 max-lg:w-14 max-md:hidden"
            radius="rounded-lg"
          />
          <Skeleton
            size="h-14 w-60 max-lg:w-14 max-md:hidden"
            radius="rounded-lg"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LeftSideBarSkeleton;
