import React from "react";

const Skeleton = ({ size, radius }: { size?: string; radius?: string }) => {
  return (
    <div role="status" className="animate-pulse">
      <div
        className={`bg-gray-300  dark:bg-gray-700 mx-auto ${
          size ? size : "h-2.5 w-full"
        } ${radius ? radius : "rounded-full"}`}
      ></div>
    </div>
  );
};

export default Skeleton;
