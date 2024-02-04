import authOptions from "@/app/auth/authOptions";
import Skeleton from "@/components/ui/Skeleton";
import { groupByMonthAndYear } from "@/lib/utils";
import prisma from "@/prisma/client";
import { User } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";

//Lazy loading for client components
const IssuesStats = dynamic(() => import("@/components/IssuesStats"), {
  ssr: false,
  loading: () => (
    <Flex
      justify="between"
      direction={{ initial: "column", sm: "row" }}
      gap="5"
    >
      {[...Array(3)].map((_, index) => (
        <Skeleton key={index} size="h-[120px] w-[410px]" radius="rounded-2xl" />
      ))}
    </Flex>
  ),
});

const SummaryChart = dynamic(() => import("@/components/charts/SummaryChart"), {
  ssr: false,
  loading: () => <Skeleton size="h-[420px] w-[625px]" radius="rounded-2xl" />,
});

const ReportChart = dynamic(() => import("@/components/charts/ReportChart"), {
  ssr: false,
  loading: () => <Skeleton size="h-[420px] w-[625px]" radius="rounded-2xl" />,
});

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  ssr: false,
  loading: () => <Skeleton size="h-[282px] w-[625px]" radius="rounded-2xl" />,
});

const LatestIssues = dynamic(() => import("@/components/LatestIssues"), {
  ssr: false,
  loading: () => <Skeleton size="h-[532px] w-[625px]" radius="rounded-2xl" />,
});

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
