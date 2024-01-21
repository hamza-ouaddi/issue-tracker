"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statusFilter: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  //To chenge url query parameter according to selected fitler and sorting column
  const handleSelectValueChange = (status: Status | "ALL") => {
    const params = new URLSearchParams();
    if (status && status !== "ALL" && Object.values(Status).includes(status)) {
      params.append("status", status);
    }
    if (searchParams.get("orderBy")) {
      params.append("orderBy", searchParams.get("orderBy")!);
    }

    const query = params.size ? "?" + params.toString() : "";

    router.push("/issues/" + query);
  };
  return (
    <Select.Root
      defaultValue={searchParams.get("status") || "ALL"}
      onValueChange={handleSelectValueChange}
    >
      <Select.Trigger
        variant="soft"
        className="!flex !gap-4 !px-4 !py-3 text-primary600_light900 backgorund-light800_dark300 !cursor-pointer"
      />
      <Select.Content color="indigo">
        {statusFilter.map((status) => (
          <Select.Item
            key={status.value}
            value={status.value || "ALL"}
            className="!cursor-pointer"
          >
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
