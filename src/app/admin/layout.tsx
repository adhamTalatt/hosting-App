import React from "react";
import AdminSlidar from "./AdminSlidar";
import type { Metadata } from "next";
interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is admin dashboard",
};
export default function layout({ children }: AdminDashboardLayoutProps) {
  return (
    <div className=" overflow-height flex items-start justify-between overflow-hidden">
      <div className=" overflow-height w-15 lg:w-1/5 bg-[#F7E7DC]  p-1 lg:p-5">
        <AdminSlidar />
      </div>
      <div className=" overflow-height w-full lg:w-4/5 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
