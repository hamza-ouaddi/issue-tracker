import prisma from "@/prisma/client";
import { DeleteIssueParams, GetIssueByIdParams } from "@/types";
import axios from "axios";
import { notFound } from "next/navigation";

export async function getIssueById(params: GetIssueByIdParams) {
  try {
    const { issueId } = params;

    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(issueId) },
    });

    if (!issue) {
      notFound();
    }

    return { issue };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteIssue(params: DeleteIssueParams) {
  try {
    const { issueId } = params;

    await axios.delete("/api/issues/" + issueId);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
