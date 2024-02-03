import authOptions from "@/app/auth/authOptions";
import LatestIssues from "@/components/LatestIssues";
import ProfileCard from "@/components/ProfileCard";
import ReportChart from "@/components/charts/ReportChart";
import SummaryChart from "@/components/charts/SummaryChart";
import IssuesStats from "@/components/shared/IssuesStats";
import { groupByMonthAndYear } from "@/lib/utils";
import prisma from "@/prisma/client";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;
  const userId = user?.id;

  //To count User's issues
  let userOpenIssues = 0;
  let userInProgressIssues = 0;
  let userClosedIssues = 0;

  if (session) {
    userOpenIssues = await prisma.issue.count({
      where: { authorId: userId, status: "OPEN" },
    });
    userInProgressIssues = await prisma.issue.count({
      where: { authorId: userId, status: "IN_PROGRESS" },
    });
    userClosedIssues = await prisma.issue.count({
      where: { authorId: userId, status: "CLOSED" },
    });
  }

  //To count total issues status
  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  //To get all issues dates
  const issues = await prisma.issue.findMany({
    select: {
      createdAt: true,
    },
    orderBy: { createdAt: "asc" },
  });

  //To count issues per month
  const issuesDataPerMonth = groupByMonthAndYear(issues);

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Dashboard</h1>
      <div className="mt-16">
        <IssuesStats
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        />
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <SummaryChart
            open={openIssues}
            inProgress={inProgressIssues}
            closed={closedIssues}
          />
          <ReportChart issuesData={issuesDataPerMonth} />
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <ProfileCard
            userOpenIssues={userOpenIssues}
            userInProgressIssues={userInProgressIssues}
            userClosedIssues={userClosedIssues}
          />
          <LatestIssues />
        </div>
      </div>
    </div>
  );
}
