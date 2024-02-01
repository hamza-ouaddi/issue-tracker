"use client";

import { AreaChart, Title } from "@tremor/react";

const valueFormatter = (number: number) => {
  return number.toString();
};

interface IssueData {
  date: Date;
  issues: number;
}

const ReportChart = ({ issuesData }: { issuesData: IssueData[] }) => {
  const chartData = issuesData?.map((dataPoint) => ({
    date: dataPoint.date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    "Number of issues": dataPoint.issues,
  }));

  return (
    <div className="card-wrapper background-light900_dark200 md:w-[50%] w-full">
      <Title>Monthly Report</Title>
      <AreaChart
        className="mt-6"
        data={chartData}
        index="date"
        yAxisWidth={22}
        categories={["Number of issues"]}
        colors={["indigo"]}
        showAnimation={true}
        curveType="natural"
        intervalType="preserveStartEnd"
        allowDecimals={false}
        valueFormatter={valueFormatter}
      />
    </div>
  );
};

export default ReportChart;
