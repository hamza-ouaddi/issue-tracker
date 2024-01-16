"use client";

import { Flex, DropdownMenu, Avatar } from "@radix-ui/themes";
import React from "react";
import Button from "../ui/Button";
import { useSession } from "next-auth/react";
import Skeleton from "../ui/Skeleton";

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton size="h-10 rounded-md" />;

  if (status === "unauthenticated") {
    return (
      <Button
        theme="secondary"
        href="/api/auth/signin"
        title="Sign in"
        radius="rounded-[4px]"
      />
    );
  }
  return (
    <>
      {status === "authenticated" && (
        <Flex align="center" gap="6">
          <p className="base-semibold text-primary900_light900">
            {session.user?.name}
          </p>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src={session.user!.image!}
                fallback="U"
                className="cursor-pointer"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="!bg-light-800 dark:!bg-dark-300 !mt-2 !absolute !-right-12 ">
              <DropdownMenu.Label>
                <p className="body-semibold text-primary900_light900 mb-2">
                  {session.user?.email}
                </p>
              </DropdownMenu.Label>
              <Button
                theme="secondary"
                href="/api/auth/signout"
                title="Sign out"
                radius="rounded-[4px]"
              />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      )}
    </>
  );
};

export default AuthStatus;
