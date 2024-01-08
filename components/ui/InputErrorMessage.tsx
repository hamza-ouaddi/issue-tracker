import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

export const InputErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;

  return (
    <Text color="red" size="2">
      {children}
    </Text>
  );
};
