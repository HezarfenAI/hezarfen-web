"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks, Book,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  teams: [
    {
      name: "Hezarfen AI 1.0",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Arama",
      url: "#",
      icon: Search,
    },
    {
      title: "Ana Sayfa",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Gelen Kutusu",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Eğit Beni",
      url: "#",
      icon: Book,
    },
  ],
  favorites: [
    {
      name: "Henüz Yapım Aşamasında",
      url: "/",
      emoji: "📊",
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        { /* <NavWorkspaces workspaces={data.workspaces} /> */ }
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
