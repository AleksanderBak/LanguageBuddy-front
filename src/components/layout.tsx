import React from "react";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-950 flex h-screen w-full flex-row">
      <LeftSidebar />
      <main className="flex h-full w-full">{children}</main>
      <RightSidebar />
    </div>
  );
};

export default Layout;
