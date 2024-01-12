import Skeleton from "@/components/ui/Skeleton";
import React from "react";

const Loading = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Create an Issue</h1>
      <div className="card-wrapper max-w-fit background-light900_dark200 flex flex-col gap-6 mt-16">
        <div className="flex flex-col items-start gap-2">
          <Skeleton size="h-6 w-24" />
          <Skeleton size="h-12 w-[440px]" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Skeleton size="h-6 w-32" />
          <Skeleton size="h-96 w-[440px]" radius="rounded-xl" />
        </div>
        <div className="flex justify-start">
          <Skeleton size="h-10 w-32" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
