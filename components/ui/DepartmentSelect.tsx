"use client";

import { Department } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Skeleton from "./Skeleton";

const DepartmentSelect = () => {
  const {
    data: departments,
    error,
    isLoading,
  } = useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: () => axios.get("/api/departments").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  if (isLoading) return <Skeleton size="w-[200px] h-10" radius="rounded-lg" />;

  if (error) return null;

  return (
    <Select.Root>
      <Select.Trigger
        placeholder="Unassigned"
        variant="soft"
        className="background-light900_dark200 !py-5 !flex !justify-center !gap-2 !cursor-pointer"
        radius="large"
      />
      <Select.Content position="popper" color="indigo">
        <Select.Group>
          <Select.Label>Department</Select.Label>
          {departments?.map((dep) => (
            <Select.Item key={dep.id} value={dep.id}>
              {dep.title}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default DepartmentSelect;
