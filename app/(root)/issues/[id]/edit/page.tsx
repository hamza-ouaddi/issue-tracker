import IssueFormSkeleton from "@/components/shared/IssueFormSkeleton";
import { getIssueById } from "@/lib/actions/issue.action";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/components/forms/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

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
