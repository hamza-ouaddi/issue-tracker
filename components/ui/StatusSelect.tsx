"use client";
import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  issueId: string;
  defaultStatus: Status;
}

const StatusSelect = ({ issueId, defaultStatus }: Props) => {
  const [status, setStatus] = useState(defaultStatus);
  const statusValues: Status[] = ["OPEN", "IN_PROGRESS", "CLOSED"];

  const handleStatusChange = (newValue: Status) => {
    try {
      axios.patch(`/api/issues/` + issueId, {
        status: newValue as Status,
      });
      setStatus(newValue);
      toast.success("Issue status updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Oops! Something went wrong. Please try again later.");
    }
  };
  return (
    <Select.Root defaultValue={status} onValueChange={handleStatusChange}>
      <Select.Trigger
        placeholder="Unassigned"
        variant="soft"
        className="background-light900_dark200 !flex !justify-center !gap-2 focus-visible:outline-none !cursor-pointer"
        radius="large"
      />
      <Select.Content position="popper">
        <Select.Group>
          {statusValues.map((status, index) => (
            <Select.Item
              key={index}
              className="hover:backgorund-light800_dark300 !cursor-pointer focus-within:backgorund-light800_dark300"
              value={status}
            >
              <StatusBadge status={status} additionalStyle="!cursor-pointer" />
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default StatusSelect;
