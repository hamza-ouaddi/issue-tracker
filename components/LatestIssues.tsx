import prisma from "@/prisma/client";
import { Avatar, Box, Flex } from "@radix-ui/themes";
import React from "react";
import StatusBadge from "./ui/StatusBadge";
import Link from "next/link";

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    include: { author: { select: { name: true, image: true } } },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const truncateTitle = (title: string, maxLength: number): string => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  return (
    <div className="card-wrapper background-light900_dark200 max-w-[490px]">
      <Flex justify="between" align="center">
        <h3 className="base-semibold text-primary900_light900">
          Latest Issues
        </h3>
        <Link
          href="/issues"
          className="flex items-center justify-center body-medium text-primary-600 bg-light-800 dark:bg-dark-300 dark:text-white w-20 h-8 rounded"
        >
          See All
        </Link>
      </Flex>
      <div className="space-y-2 mt-4">
        {issues.map((issue, index) => (
          <Link href={`/issues/${issue.id}`}>
            <Flex
              key={issue.id}
              align="center"
              gap="6"
              className={`p-4 !w-full hover:bg-light-800 dark:hover:bg-dark-100 rounded-2xl ${
                index === 0 &&
                "shadow-secondaryLight dark:shadow-secondaryDark mb-9"
              }`}
            >
              <Avatar src={issue.author?.image!} fallback="U" />
              <Flex justify="between" align="center" width="100%">
                <div className="w-full">
                  <p className="base-semibold text-primary900_light900">
                    {truncateTitle(issue.title, 20)}
                  </p>
                  <span className="body-normal text-grey-secondary">
                    By {issue.author?.name}
                  </span>
                </div>
                <div className="text-end">
                  <span className="body-normal text-grey-secondary">
                    {issue.createdAt.toDateString()}
                  </span>
                  <StatusBadge status={issue.status} />
                </div>
              </Flex>
            </Flex>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestIssues;
