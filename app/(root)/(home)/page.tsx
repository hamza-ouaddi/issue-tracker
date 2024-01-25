import LatestIssues from "@/components/LatestIssues";
import SummaryChart from "@/components/charts/SummaryChart";
import IssuesStats from "@/components/shared/IssuesStats";
import prisma from "@/prisma/client";
import React from "react";

export default async function Home() {
  const openIssues = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Dashboard</h1>
      <div className="mt-16">
        <IssuesStats
          open={openIssues}
          inProgress={inProgressIssues}
          closed={closedIssues}
        />
        <div className="mt-8">
          <SummaryChart
            open={openIssues}
            inProgress={inProgressIssues}
            closed={closedIssues}
          />
        </div>
        <div className="mt-8">
          <LatestIssues />
        </div>
      </div>
    </div>
  );
}
