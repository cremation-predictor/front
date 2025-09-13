import React from 'react'
import Card from '../components/ui/Card'


export default function TopSellingProductsSection() {
return (
<Card title="인접지역 예약 현황">
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
{[1,2].map((n) => (
<div key={n} className="flex gap-4 rounded-xl border border-gray-200 p-4">
<div className="h-20 w-28 rounded-lg bg-gray-100" />
<div className="flex-1">
<div className="mb-1 text-sm font-semibold">샘플 카드 {n}</div>
<p className="text-sm text-gray-500">설명 텍스트가 들어갑니다.</p>
<div className="mt-2 text-sm font-semibold">$987</div>
</div>
</div>
))}
</div>
</Card>
)
}