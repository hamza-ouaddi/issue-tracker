import React from "react";
import Skeleton from "../ui/Skeleton";
import Button from "../ui/Button";
import { Avatar, Box, Flex } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

const SideBarAuthStatus = () => {
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
        <Flex direction="column" align="stretch" gap="6">
          <Box className="min-w-full space-x-6">
            <Avatar src={session.user!.image!} fallback="U" size="4" />
            <p className="inline-block base-semibold text-primary900_light900">
              {session.user?.name}
            </p>
          </Box>
          <Button
            theme="secondary"
            href="/api/auth/signout"
            title="Sign out"
            radius="rounded-[4px]"
          />
        </Flex>
      )}
    </>
  );
};

export default SideBarAuthStatus;
