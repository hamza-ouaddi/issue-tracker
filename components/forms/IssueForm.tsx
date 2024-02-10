"use client";
import * as Form from "@radix-ui/react-form";
import React, { useRef, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "@/components/ui/Button";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Callout, Text } from "@radix-ui/themes";
import { Info } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { IssueSchema } from "@/lib/validations";
import { z } from "zod";
import { InputErrorMessage } from "@/components/ui/InputErrorMessage";
import { Issue } from "@prisma/client";
import toast from "react-hot-toast";

type IssueFormData = z.infer<typeof IssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(IssueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);

      if (issue) {
        //If there is data, update issue
        await axios.patch("/api/issues/" + issue.id, data);
        toast.success("Issue updated successfully!");
      } else {
        //If there is no data, create new issue
        await axios.post("/api/issues", data);
        toast.success("New issue successfully created!");
      }

      router.push("/issues");
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occured.");
      toast.error("Oops! Something went wrong. Please try again later.");
    }
  });

  return (
    <div className="card-wrapper max-w-[480px] background-light900_dark200 flex flex-col gap-6 mt-16">
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <Info size={16} />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <Form.Root className="flex flex-col gap-6" onSubmit={onSubmit}>
        <Form.Field className="space-y-2" name="title">
          <Form.Label className="base-semibold text-primary900_light900">
            Title
          </Form.Label>

          <Form.Control asChild>
            <input
              defaultValue={issue?.title}
              className="w-full p-3 background-light900_dark300 border border-gray-200 dark:border-dark-400 rounded-lg  "
              type="text"
              {...register("title")}
            />
          </Form.Control>
          <InputErrorMessage>{errors.title?.message}</InputErrorMessage>
        </Form.Field>
        <Form.Field className="space-y-2" name="description">
          <Form.Label className="base-semibold text-primary900_light900">
            Description
          </Form.Label>

          <Form.Control asChild>
            <Controller
              defaultValue={issue?.description}
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE className="background-light900_dark300" {...field} />
              )}
            />
          </Form.Control>
          <InputErrorMessage>{errors.description?.message}</InputErrorMessage>
        </Form.Field>
        <Form.Submit asChild>
          <Button
            theme="primary"
            title={issue ? "Edit Issue" : "Create Issue"}
            isSubmitting={isSubmitting}
            isSubmittingText={issue ? "Editing" : "Creating"}
          />
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default IssueForm;
