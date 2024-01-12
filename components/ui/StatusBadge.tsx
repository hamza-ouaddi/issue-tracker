import { issueStatus } from "@/constants";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge className="h-fit" color={issueStatus[status].color}>
      {issueStatus[status].label}
    </Badge>
  );
};

export default StatusBadge;
