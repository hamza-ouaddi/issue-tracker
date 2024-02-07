import { issueStatus } from "@/constants";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
  additionalStyle?: string;
}
const StatusBadge = ({ status, additionalStyle }: Props) => {
  return (
    <Badge
      className={`h-fit ${additionalStyle}`}
      color={issueStatus[status].color}
    >
      {issueStatus[status].label}
    </Badge>
  );
};

export default StatusBadge;
