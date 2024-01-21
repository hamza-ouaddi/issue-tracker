"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  allItems: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ allItems, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pagesCount = Math.ceil(allItems / pageSize);

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());

    router.push("?" + params.toString());
  };
  if (pagesCount <= 1) return null;
  return (
    <Flex align="center" gap="2">
      <p className="body-medium text-grey-secondary">
        Page {currentPage} of {pagesCount}
      </p>
      <Button
        size="2"
        color="gray"
        variant="soft"
        className="!p-1.5"
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
      >
        <ChevronsLeft size={20} className="text-grey-secondary" />
      </Button>
      <Button
        size="2"
        color="gray"
        variant="soft"
        className="!p-1.5"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} className="text-grey-secondary" />
      </Button>
      <Button
        size="2"
        color="gray"
        variant="soft"
        className="!p-1.5"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pagesCount}
      >
        <ChevronRight size={20} className="text-grey-secondary" />
      </Button>
      <Button
        size="2"
        color="gray"
        variant="soft"
        className="!p-1.5"
        onClick={() => changePage(pagesCount)}
        disabled={currentPage === pagesCount}
      >
        <ChevronsRight size={20} className="text-grey-secondary" />
      </Button>
    </Flex>
  );
};

export default Pagination;
