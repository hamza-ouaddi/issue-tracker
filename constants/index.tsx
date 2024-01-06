import { SidebarLink } from "@/types";
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
