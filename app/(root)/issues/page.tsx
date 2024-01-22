import { Avatar, Box, Flex, Table } from "@radix-ui/themes";
import { ChevronUp, Plus } from "lucide-react";
import React, { useState } from "react";
import prisma from "@/prisma/client";
import { tableHeaderCells } from "@/constants";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import Link from "next/link";
import IssueStatusFilter from "@/components/IssueStatusFilter";
import { Issue, Status } from "@prisma/client";
import Pagination from "@/components/shared/Pagination";
import IssueTable, { IssueQuery } from "@/components/IssueTable";

interface Props {
  searchParams: IssueQuery
}

const page = async ({ searchParams }: Props) => {
  //To check if the selected status filter is available
  const issuesStatus = Object.values(Status);
  console.log(issuesStatus);
  const status = issuesStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  //To sort issues table columns
  const orderBy = tableHeaderCells
    .map((cell) => cell.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "desc" }
    : undefined;

  //For Pagination
  const page = parseInt(searchParams.page) || 1;
  const pagesSize = 10;

  const issues = await prisma.issue.findMany({
    where: { status },
    include: { author: { select: { name: true, image: true } } },
    orderBy: orderBy,
    skip: (page - 1) * pagesSize,
    take: pagesSize,
  });

  const issuesCount = await prisma.issue.count({
    where: { status },
  });

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <div className="card-wrapper w-full background-light900_dark200 flex flex-col gap-5 mt-16">
        <div className="flex justify-between items-center">
          <IssueStatusFilter />
          <Button
            theme="primary"
            href="/issues/create"
            title="Add Issue"
            icon={<Plus scale={18} />}
          />
        </div>
        <IssueTable searchParams={searchParams} issues={issues} />
      </div>
      <Box mt="6">
        <Pagination
          allItems={issuesCount}
          pageSize={pagesSize}
          currentPage={page}
        />
      </Box>
    </div>
  );
};

export default page;
