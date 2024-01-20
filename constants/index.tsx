import { SidebarLink } from "@/types";
import { Status } from "@prisma/client";
import { LayoutDashboard, MessageSquareMore } from "lucide-react";

export const sideBarLinks: SidebarLink[] = [
  {
    icon: <LayoutDashboard size={20} />,
    label: "Dashboard",
    url: "/",
  },
  {
    icon: <MessageSquareMore size={20} />,
    label: "Issues",
    url: "/issues",
  },
];

export const tableHeaderCells = [
  {
    title: "Title",
    value: "title",
  },
  {
    title: "Status",
    value: "status",
  },
  {
    title: "Created At",
    value: "created_at",
  },
  {
    title: "Author",
    value: "author",
  },
];

export const issueStatus: Record<
  Status,
  { label: string; color: "blue" | "orange" | "mint" }
> = {
  OPEN: { label: "Open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "orange" },
  CLOSED: { label: "Closed", color: "mint" },
};
