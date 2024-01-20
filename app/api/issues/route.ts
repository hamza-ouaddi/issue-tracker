import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { DefaultSession, getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

const issueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

interface User extends DefaultSession {
  id: string;
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;
  const userId = user?.id;

  console.log("user id: ", userId);

  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const body = await request.json();
  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
      authorId: userId,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
