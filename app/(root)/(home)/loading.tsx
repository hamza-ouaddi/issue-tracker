import Skeleton from "@/components/ui/Skeleton";
import { Flex } from "@radix-ui/themes";
import React from "react";

const loading = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Dashboard</h1>
      <div className="mt-16">
        <Flex
          justify="between"
          direction={{ initial: "column", sm: "row" }}
          gap="5"
        >
          {[...Array(3)].map((_, index) => (
            <Skeleton
              key={index}
              size="h-[120px] max-w-[410px]"
              radius="rounded-2xl"
            />
          ))}
        </Flex>
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {[...Array(2)].map((_, index) => (
            <Skeleton
              key={index}
              size="h-[420px] w-[625px]"
              radius="rounded-2xl"
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <Skeleton size="h-[282px] w-[625px]" radius="rounded-2xl" />
          <Skeleton size="h-[532px] w-[625px]" radius="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default loading;
