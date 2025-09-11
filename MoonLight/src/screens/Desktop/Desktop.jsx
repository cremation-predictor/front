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
    <div className="w-[1440px] h-[1024px] bg-[#fafafb] relative overflow-hidden" data-model-id="2:2">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Top Analytics Card */}
      <TopAnalyticsCard />
      
      {/* Reports Section - 수요 예상 그래프 */}
      <ReportsSection />
      
      {/* Analytics Section - 주간예약율 */}
      <AnalyticsSection />
      
      {/* Recent Orders Section - 실시간 예약현황 */}
      <RecentOrdersSection />
      
      {/* Top Selling Products Section - 인접지역 예약 현황 */}
      <TopSellingProductsSection />
    </div>
  );
};
