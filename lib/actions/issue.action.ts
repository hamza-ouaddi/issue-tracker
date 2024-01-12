import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface GetIssueByIdParams {
  issueId: string;
}

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
