import LatestIssues from "@/components/LatestIssues";
import ReportChart from "@/components/charts/ReportChart";
import SummaryChart from "@/components/charts/SummaryChart";
import IssuesStats from "@/components/shared/IssuesStats";
import { groupByMonthAndYear } from "@/lib/utils";
import prisma from "@/prisma/client";
import React from "react";

export default async function Home() {
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
        <div className="mt-8 flex gap-8">
          <SummaryChart
            open={openIssues}
            inProgress={inProgressIssues}
            closed={closedIssues}
          />
          <ReportChart issuesData={issuesDataPerMonth} />
        </div>
        <div className="mt-8">
          <LatestIssues />
        </div>
      </div>
    </div>
  );
}
