import React from 'react'
import AppLayout from './components/layouts/AppLayout'
import Sidebar from './components/Sidebar'      // 폴더 → index.jsx 자동 사용
import TopBar from './components/TopBar'
import AnalyticsSection from './sections/AnalyticsSection'
import RecentOrdersSection from './sections/RecentOrdersSection'
import TopSellingProductsSection from './sections/TopSellingProductsSection'

export default function App() {
  return (
    <AppLayout sidebar={<Sidebar />} header={<TopBar />}>
      <div className="space-y-6">
        <AnalyticsSection />
        <RecentOrdersSection />
        <TopSellingProductsSection />
      </div>
    </AppLayout>
  )
}