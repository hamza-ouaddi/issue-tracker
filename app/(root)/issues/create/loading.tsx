import IssueFormSkeleton from "@/components/shared/IssueFormSkeleton";
import Skeleton from "@/components/ui/Skeleton";
import React from "react";

const Loading = () => {
  return <IssueFormSkeleton pageTitle="Create an Issue" />;
};

export default Loading;
