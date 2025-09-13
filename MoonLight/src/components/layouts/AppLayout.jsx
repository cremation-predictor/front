import React from 'react'


export default function AppLayout({ sidebar, header, children }) {
return (
<div className="mx-auto max-w-[1280px] px-6 py-6">
<div className="grid grid-cols-[218px_1fr] gap-8 items-start">
{/* Sidebar: 세로만 고정, z-index로 본문 카드 위에 오도록 */}
<aside className="sticky top-6 h-min self-start z-10">{sidebar}</aside>


{/* Main: 그리드 셀 수축 허용 + 내부만 가로 스크롤 */}
<div className="min-w-0">
{header}
<div className="space-y-6">
{children}
</div>
</div>
</div>
</div>
)
}