"use client";
import * as Form from "@radix-ui/react-form";
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "@/components/ui/Button";

const Page = () => {
  return (
    <div>
      <h1 className="h1-bold text-primary900_light900">Create an Issue</h1>
      <div className="card-wrapper max-w-fit background-light900_dark200 flex flex-col gap-6 mt-16">
        <Form.Root className="flex flex-col gap-6">
          <Form.Field className="space-y-2" name="title">
            <Form.Label className="base-semibold text-primary900_light900">
              Title
            </Form.Label>

            <Form.Control asChild>
              <input
                className="w-full p-3 background-light900_dark300 border border-gray-200 dark:border-dark-400 rounded-lg  "
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="space-y-2" name="description">
            <Form.Label className="base-semibold text-primary900_light900">
              Description
            </Form.Label>

            <Form.Control asChild>
              <SimpleMDE className="background-light900_dark300" />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button title="Create Issue" />
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default Page;
