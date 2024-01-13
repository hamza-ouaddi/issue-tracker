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
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occured.");
    }
  });

  return (
    <div className="card-wrapper max-w-fit background-light900_dark200 flex flex-col gap-6 mt-16">
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
            title="Create Issue"
            isSubmitting={isSubmitting}
            isSubmittingText="Creating"
          />
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default IssueForm;
