"use client";
import React, { useState } from "react";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { deleteIssue } from "@/lib/actions/issue.action";
import { useRouter } from "next/navigation";
import Spinner from "../ui/Spinner";

const DeleteIssueModal = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      await deleteIssue({ issueId });

      router.push("/issues");
      router.refresh();
    } catch (error) {
      setIsDeleting(false);
      setIsError(true);
    }
  };
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button
            className={`text-light-900 bg-grey-secondary px-4 py-3 base-semibold rounded-lg min-w-fit ${
              isDeleting && "opacity-50"
            }`}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                {"Deleting"} <Spinner />
              </>
            ) : (
              "Delete Issue"
            )}
          </button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Confirm Delete</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            <div className="space-y-4">
              <p className="base-medium leading-6">
                Are you sure you want to delete this Issue?
                <br />
                This Process cannot be undone.
              </p>
            </div>
          </Dialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button color="red" onClick={handleDelete}>
                Delete
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button className="!bg-grey-secondary">Cancel</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
      <Dialog.Root open={isError}>
        <Dialog.Content>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description>
            <p className="base-medium">The issue cannot be deleted.</p>
          </Dialog.Description>
          <Flex justify="end">
            <Dialog.Close>
              <Button
                className="!bg-grey-secondary"
                mt="2"
                onClick={() => setIsError(false)}
              >
                Okay
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};

export default DeleteIssueModal;
