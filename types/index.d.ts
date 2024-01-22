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

export interface Author{
  name: string | null,
  image: string | null
}