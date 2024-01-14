import IssueFormSkeleton from "@/components/shared/IssueFormSkeleton";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/components/forms/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const Page = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Create an Issue</h1>
      <IssueForm />
    </div>
  );
};

export default Page;
