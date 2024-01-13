import IssueForm from "@/components/forms/IssueForm";
import { getIssueById } from "@/lib/actions/issue.action";
import React from "react";

const page = async ({ params }: any) => {
  const result = await getIssueById({ issueId: params.id });
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Edit Issue</h1>
      <IssueForm issue={result.issue} />
    </div>
  );
};

export default page;
