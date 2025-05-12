"use client";

import * as React from "react";
import { IconDashboard, IconSettings } from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Building, DollarSign, User } from "lucide-react";
import Image from "next/image";

import TrekoLogo from "@/app/assets/treko_logo.svg";
import { NavCollapsable } from "./nav-collapsable";

const data = {
  user: {
    name: "Pepo",
    email: "pepo@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/modules/base/dashboards",
      icon: IconDashboard,
    },

    {
      title: "Representantes",
      url: "#",
      icon: User,
    },
    {
      title: "Doações",
      url: "/modules/base/donations",
      icon: DollarSign,
    },
  ],

  navSecondary: [
    {
      title: "Configurações",
      url: "#",
      icon: IconSettings,
    },
  ],

  navCollapsable: [
    {
      title: "Entidades",
      url: "/modules/base/orgs/",
      icon: Building,
      items: [
        {
          title: "Todas",
          url: "/modules/base/orgs/all",
        },
        {
          title: "Centro Acadêmico",
          url: "/modules/base/orgs/academic_center",
        },
        {
          title: "Diretório Central",
          url: "/modules/base/orgs/central_directory",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-transparent focus:bg-transparent"
            >
              <a href="/modules/base/dashboards">
                <Image
                  src={TrekoLogo}
                  width={120}
                  height={50}
                  alt={"Treko"}
                ></Image>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavCollapsable items={data.navCollapsable} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
