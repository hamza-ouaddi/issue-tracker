import Skeleton from "@/components/ui/Skeleton";
import { Flex, Separator } from "@radix-ui/themes";
import React from "react";

const Loading = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <div className="mt-16">
        <div className="card-wrapper background-light900_dark200">
          <Flex direction="column" gap="5">
            <div className="flex justify-between flex-1 w-full">
              <Skeleton size="h-6 w-80" />

              <Skeleton size="h-5 w-16" />
            </div>
            <Separator size="4" className="background-light800_dark100" />
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} size="h-3.5 w-full" />
            ))}
            <Separator size="4" className="background-light800_dark100" />
            <div className="flex justify-end">
              <Skeleton size="h-5 w-32" />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Loading;
