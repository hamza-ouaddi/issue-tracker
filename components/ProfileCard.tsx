"use client";

import { IssuesStats } from "@/types";
import { Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

interface Props {
  userOpenIssues: number;
  userInProgressIssues: number;
  userClosedIssues: number;
}

const ProfileCard = ({
  userOpenIssues,
  userInProgressIssues,
  userClosedIssues,
}: Props) => {
  const { status, data: session } = useSession();

  const userIssues: IssuesStats[] = [
    {
      label: "Open Issues",
      value: userOpenIssues,
      status: "OPEN",
    },
    {
      label: "In Progress Issues",
      value: userInProgressIssues,
      status: "IN_PROGRESS",
    },
    {
      label: "Closed Issues",
      value: userClosedIssues,
      status: "IN_PROGRESS",
    },
  ];

  return (
    <>
      <div className="card-wrapper background-light900_dark200 h-fit lg:max-w-[50%] w-full">
        <h3 className="base-semibold text-primary900_light900">Profile</h3>
        {status === "authenticated" && (
          <Flex
            direction={{
              initial: "column",
              xs: "row",
              sm: "column",
              md: "row",
            }}
            mt="4"
            gap="5"
          >
            <div className="sm:max-lg:mx-auto">
              <Image
                src={session.user!.image!}
                height={200}
                width={200}
                alt={`${session.user?.name}'s profile picture`}
                className="rounded-2xl h-fit"
              />
            </div>

            <div className="space-y-2">
              <h2 className="h2-semibold text-primary900_light900">
                {session.user?.name}
              </h2>

              {userIssues.map((issue) => (
                <div className="space-y-1">
                  <p className="body-semibold text-grey-secondary ">
                    {issue.label}
                  </p>
                  <span className="inline-block h3-semibold text-primary900_light900">
                    {issue.value}
                  </span>
                </div>
              ))}
            </div>
          </Flex>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
