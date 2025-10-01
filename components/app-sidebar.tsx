"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session, status } = useSession();

  // This is sample data.
  const data = {
    user: {
      name: session?.user?.name as string,
      email: session?.user?.email as string,
      avatar: "/images/user.png",
    },
    navMain: [
      {
        title: "Blogs",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Add Blog",
            url: "/dashboard/add-blog",
          },
          {
            title: "All Blogs",
            url: "/dashboard/all-blogs",
          },
        ],
      },
      {
        title: "Projects",
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: "Add Project",
            url: "/dashboard/add-project",
          },
          {
            title: "All Projects",
            url: "/dashboard/all-projects",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
