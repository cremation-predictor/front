// src/screens/Desktop/Desktop.jsx
import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import { TopAnalyticsCard } from "../../components/TopAnalyticsCard/TopAnalyticsCard.jsx";
import { ReportsSection } from "../../components/ReportsSection/ReportsSection.jsx";
import { AnalyticsSection } from "./sections/AnalyticsSection/AnalyticsSection.jsx";
import { RecentOrdersSection } from "./sections/RecentOrdersSection/RecentOrdersSection.jsx";
import { TopSellingProductsSection } from "./sections/TopSellingProductsSection/TopSellingProductsSection.jsx";


export const Desktop = () => {
  return (
    <div className="w-full min-h-screen bg-[#fafafb]">
      {/* Sidebar - 고정 */}
      <div className="fixed top-0 left-0 h-screen z-20">
        <Sidebar />
      </div>

      {/* Main Content - Sidebar 옆에 위치, 스크롤 가능 */}
      <main className="pl-[218px] min-h-screen max-h-screen overflow-y-auto px-8 py-8 w-full flex flex-col gap-6 items-start justify-center">
        {/* Top Analytics Card */}
        <TopAnalyticsCard />

        <div className="flex flex-row gap-6 w-full items-stretch">
          {/* Reports Section - 수요 예상 그래프 */}
          <ReportsSection />
          {/* Analytics Section - 주간예약율 */}
          <AnalyticsSection />
        </div>

        <div className="flex flex-row gap-6 w-full items-stretch">
          {/* Recent Orders Section - 실시간 예약현황 */}
          <RecentOrdersSection />
          {/* Top Selling Products Section - 인접지역 예약 현황 */}
          <TopSellingProductsSection />
        </div>
      </main>
    </div>
  );
};
