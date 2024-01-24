import { IssuesStats } from "@/types";
import { Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import { CheckSquare, MessageSquareWarning, ScanLine } from "lucide-react";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssuesStats = ({ open, inProgress, closed }: Props) => {
  const issuesStatus: IssuesStats[] = [
    {
      label: "Open Issues",
      value: open,
      status: "OPEN",
      icon: <MessageSquareWarning size={48} strokeWidth={1.4} />,
    },
    {
      label: "In Progress Issues",
      value: inProgress,
      status: "IN_PROGRESS",
      icon: <ScanLine size={48} strokeWidth={1.4} />,
    },
    {
      label: "Open Issues",
      value: closed,
      status: "CLOSED",
      icon: <CheckSquare size={48} strokeWidth={1.4} />,
    },
  ];
  return (
    <Flex justify="between" wrap="wrap" gap="5">
      {issuesStatus.map((status) => (
        <Flex
          key={status.label}
          align="center"
          gap="4"
          className="card-wrapper background-light900_dark200 lg:w-[32%] w-full"
        >
          <div className="background-light800_dark100 text-primary-600 p-3 rounded-full">
            {status.icon}
          </div>
          <div>
            <p className="base-semibold text-grey-secondary">{status.label}</p>
            <h2 className="h2-bold text-primary900_light900">{status.value}</h2>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default IssuesStats;
