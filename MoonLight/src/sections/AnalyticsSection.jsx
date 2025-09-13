import React from 'react'
import Card from '../components/ui/Card'


export default function AnalyticsSection() {
return (
<div id="analytics" className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
<Card title="월별 예약 수요">
<div className="h-56 grid place-items-center text-gray-400">라인 차트 자리</div>
</Card>
<Card title="주간 예약률">
<div className="h-56 grid place-items-center text-gray-400">도넛 차트 자리</div>
</Card>
<Card title="실시간 지표">
<ul className="space-y-3 text-sm">
<li className="flex items-center justify-between"><span>대기</span><b>18건</b></li>
<li className="flex items-center justify-between"><span>예약</span><b>325건</b></li>
<li className="flex items-center justify-between"><span>완료</span><b>287건</b></li>
</ul>
</Card>
</div>
)
}