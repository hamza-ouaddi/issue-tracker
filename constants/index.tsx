import { SidebarLink } from "@/types";
import { Issue, Status } from "@prisma/client";
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

export const tableHeaderCells: {
  title: string;
  value: keyof Issue;
  className?: string;
}[] = [
  {
    title: "Title",
    value: "title",
  },
  {
    title: "Status",
    value: "status",
    className: "hidden md:table-cell",
  },
  {
    title: "Created At",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
  {
    title: "Author",
    value: "authorId",
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
