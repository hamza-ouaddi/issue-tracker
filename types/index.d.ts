import { Status } from "@prisma/client";
import { ReactElement } from "react";

export interface SidebarLink {
  icon: ReactElement;
  label: string;
  url: string;
}

export interface GetIssueByIdParams {
  issueId: string;
}

export interface DeleteIssueParams {
  issueId: number;
}

export interface Author {
  name: string | null;
  image: string | null;
}

export interface IssuesStats {
  label: string;
  value: number;
  status: Status;
  icon: ReactElement;
}

export interface IssuesStatusCount {
  open: number;
  inProgress: number;
  closed: number;
}
