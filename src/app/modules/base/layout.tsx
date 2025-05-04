import type { Metadata } from "next";
import "@/app/globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { OrgProvider } from "@/app/providers/OrgProvider";

export const metadata: Metadata = {
  title: "Treko",
  description: "Your best donation history",
};

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
          <div className="flex flex-1 flex-col w-full h-full">
            <div className="@container/main flex flex-1 flex-col gap-2 w-full h-full">
              <div className="flex flex-col gap-4 py-2 md:gap-6 md:py-6 w-full h-full">
                <OrgProvider>
                  {children}
                </OrgProvider>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
