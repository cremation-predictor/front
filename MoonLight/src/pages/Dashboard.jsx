import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { Sidebar } from "../components/Sidebar";
import { AnalyticsSection } from "../components/sections/AnalyticsSection";
import { ReportsSection } from "../components/sections/ReportsSection";
import { RecentOrdersSection } from "../components/sections/RecentOrdersSection";
import { TopSellingProductsSection } from "../components/sections/TopSellingProductsSection";

export default function Dashboard() {
  return (
    <AppLayout sidebar={<Sidebar />}>
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-8 space-y-6">
          <AnalyticsSection />
          <ReportsSection />
        </div>

        {/* Right Column */}
        <div className="col-span-4 space-y-6">
          <RecentOrdersSection />
          <TopSellingProductsSection />
        </div>
      </div>
    </AppLayout>
  );
}