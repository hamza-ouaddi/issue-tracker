import StatusBadge from "@/components/ui/StatusBadge";
import { getIssueById } from "@/lib/actions/issue.action";
import { Flex, Heading, Separator } from "@radix-ui/themes";
import React from "react";
import CustomMarkdown from "@/components/shared/CustomMarkdown";

const page = async ({ params }: any) => {
  const result = await getIssueById({ issueId: params.id });

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Issues</h1>
      <div className="mt-16">
        <div className="card-wrapper background-light900_dark200">
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
            <div className="flex justify-end">
              <p className="body-semibold text-primary900_light900">
                {result.issue.createdAt.toDateString()}
              </p>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default page;
