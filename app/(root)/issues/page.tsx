import { Table } from "@radix-ui/themes";
import { Plus } from "lucide-react";
import React from "react";
import prisma from "@/prisma/client";
import { tableHeaderCells } from "@/constants";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";
import Link from "next/link";

const page = async () => {
  const issues = await prisma.issue.findMany();

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <div className="card-wrapper w-full background-light900_dark200 flex flex-col gap-5 mt-16">
        <div className="flex justify-end">
          <Button
            href="/issues/create"
            title="Add Issue"
            icon={<Plus scale={30} />}
          />
        </div>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              {tableHeaderCells.map((cell, index) => (
                <Table.ColumnHeaderCell
                  key={cell.value}
                  className={`body-medium text-grey-secondary ${
                    index === 1 && "hidden md:table-cell"
                  } ${index === 2 && "hidden md:table-cell"}`}
                >
                  {cell.title}
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
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default page;
