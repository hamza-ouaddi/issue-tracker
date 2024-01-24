import LatestIssues from "@/components/LatestIssues";
import React from "react";

export default async function Home() {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Dashboard</h1>
      <div className="mt-16">
        <LatestIssues />
      </div>
    </div>
  );
}
