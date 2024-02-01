"use client";
import React from "react";
import { BarChart, Title } from "@tremor/react";
import { IssuesStatusCount } from "@/types";

const SummaryChart = ({ open, inProgress, closed }: IssuesStatusCount) => {
  const chartdata = [
    {
      name: "Open",
      "Open Issues": open,
    },
    {
      name: "In Progress",
      "In Progress Issues": inProgress,
    },
    {
      name: "Closed",
      "Closed Issues": closed,
    },
  ];
  return (
    <div className="card-wrapper background-light900_dark200 md:w-[50%] w-full">
      <Title>Summary</Title>
      <BarChart
        className="mt-6"
        data={chartdata}
        index="name"
        categories={["Open Issues", "In Progress Issues", "Closed Issues"]}
        colors={["blue", "yellow", "green"]}
        yAxisWidth={22}
        stack={true}
        showAnimation={true}
      />
    </div>
  );
};

export default SummaryChart;
