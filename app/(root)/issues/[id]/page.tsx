import StatusBadge from "@/components/ui/StatusBadge";
import { getIssueById } from "@/lib/actions/issue.action";
import { Avatar, Box, Flex, Grid, Heading, Separator } from "@radix-ui/themes";
import React, { useState } from "react";
import CustomMarkdown from "@/components/shared/CustomMarkdown";
import Button from "@/components/ui/Button";
import { PenSquare } from "lucide-react";
import DeleteIssueModal from "@/components/modals/DeleteIssueModal";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";
import DepartmentSelect from "@/components/ui/DepartmentSelect";
import StatusSelect from "@/components/ui/StatusSelect";

const page = async ({ params }: any) => {
  const session = await getServerSession(authOptions);

  const result = await getIssueById({ issueId: params.id });

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <Flex
        direction={{ initial: "column", md: "row" }}
        gap="5"
        className="mt-16"
      >
        <Box className="card-wrapper background-light900_dark200 w-full">
          <Flex direction="column" gap="5">
            <Flex gap="4" justify="between">
              <Heading className="h3-semibold text-primary900_light900">
                {result.issue.title}
              </Heading>
              <StatusSelect
                defaultStatus={result.issue.status}
                issueId={params.id}
              />
            </Flex>
            <Separator size="4" className="background-light800_dark100" />
            <CustomMarkdown content={result.issue.description} />
            <Separator size="4" className="background-light800_dark100" />
            <Flex justify="between">
              <Flex align="center" gap="2">
                <Avatar
                  src={result.issue.author?.image!}
                  fallback="U"
                  radius="medium"
                />
                <p className="body-semibold text-primary900_light900">
                  {result.issue.author?.name}
                </p>
              </Flex>

              <p className="body-semibold text-primary900_light900">
                {result.issue.createdAt.toDateString()}
              </p>
            </Flex>
          </Flex>
        </Box>

        {session && (
          <Box className="min-w-[200px]">
            <Flex direction={{ initial: "row", md: "column" }} gap="4">
              <DepartmentSelect issue={result.issue} />
              <Button
                theme="primary"
                href={`/issues/${result.issue.id}/edit`}
                title="Edit Issue"
                icon={<PenSquare size={18} />}
              />
              <DeleteIssueModal issueId={result.issue.id} />
            </Flex>
          </Box>
        )}
      </Flex>
    </div>
  );
};

export default page;
