import { tableHeaderCells } from "@/constants";
import { Flex, Avatar, Table } from "@radix-ui/themes";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";
import StatusBadge from "./ui/StatusBadge";
import Link from "next/link";
import { Issue, Status } from "@prisma/client";
import { Author } from "@/types";

export interface IssueQuery {
  status: Status;
  orderBy: keyof Issue;
  order: "asc" | "desc";
  page: string;
}

interface IssueWithAuthor extends Issue {
  author: Author | null;
}

interface Props {
  searchParams: IssueQuery;
  issues: IssueWithAuthor[];
}

const IssueTable = ({ searchParams, issues }: Props) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {tableHeaderCells.map((cell) => (
            <Table.ColumnHeaderCell
              key={cell.value}
              className={`body-medium text-grey-secondary ${cell.className}`}
            >
              <Link
                href={{
                  query: {
                    ...searchParams,
                    orderBy: cell.value,
                    order: searchParams.order === "desc" ? "asc" : "desc",
                  },
                }}
              >
                {cell.title}
                {cell.value === searchParams.orderBy && (
                  <span className="inline">
                    {searchParams.order === "desc" ? (
                      <ChevronUp className="inline" size={18} />
                    ) : (
                      <ChevronDown className="inline" size={18} />
                    )}
                  </span>
                )}
              </Link>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row
            key={issue.id}
            className="hover:bg-light-800 dark:hover:bg-dark-100 transition-all ease-in"
          >
            <Table.RowHeaderCell className="body-semibold text-primary900_light900">
              <Link
                href={`/issues/${issue.id}`}
                className="hover:text-primary-600 transition-all ease-in delay-75"
              >
                {issue.title}
              </Link>

              <span className="block md:hidden mt-2">
                <StatusBadge status={issue.status} />
              </span>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell">
              <StatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="body-semibold text-primary900_light900 hidden md:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>

            <Table.Cell className="body-semibold text-primary900_light900 ">
              <Flex align="center" gap="2">
                <Avatar src={issue.author?.image!} fallback="U" radius="full" />

                <p>{issue.author?.name}</p>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssueTable;
