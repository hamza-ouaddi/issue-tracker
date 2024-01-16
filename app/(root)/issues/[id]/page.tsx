import StatusBadge from "@/components/ui/StatusBadge";
import { getIssueById } from "@/lib/actions/issue.action";
import { Box, Flex, Grid, Heading, Separator } from "@radix-ui/themes";
import React from "react";
import CustomMarkdown from "@/components/shared/CustomMarkdown";
import Button from "@/components/ui/Button";
import { PenSquare } from "lucide-react";
import DeleteIssueModal from "@/components/modals/DeleteIssueModal";

const page = async ({ params }: any) => {
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
              <StatusBadge status={result.issue.status} />
            </Flex>
            <Separator size="4" className="background-light800_dark100" />
            <CustomMarkdown content={result.issue.description} />
            <Separator size="4" className="background-light800_dark100" />
            <Flex justify="end">
              <p className="body-semibold text-primary900_light900">
                {result.issue.createdAt.toDateString()}
              </p>
            </Flex>
          </Flex>
        </Box>
        <Box className="min-w-[200px]">
          <Flex direction={{ initial: "row", md: "column" }} gap="4">
            <Button
              theme="primary"
              href={`/issues/${result.issue.id}/edit`}
              title="Edit Issue"
              icon={<PenSquare size={18} />}
            />
            <DeleteIssueModal issueId={result.issue.id} />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default page;
