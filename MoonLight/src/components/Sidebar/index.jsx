import React from 'react'
import { Monitor, BarChart3, CalendarDays, BookOpen, Settings } from 'lucide-react'


const items = [
{ icon: Monitor, label: '실시간 현황', href: '#', active: true },
{ icon: BarChart3, label: '지표 분석', href: '#analytics' },
{ icon: CalendarDays, label: '가동 스케줄', href: '#schedule' },
{ icon: BookOpen, label: '업무 관리', href: '#tasks' },
{ icon: Settings, label: '관리자 설정', href: '#settings' },
]


export default function Sidebar() {
return (
<div className="w-[218px] rounded-2xl border border-gray-200 bg-white shadow-card">
<div className="border-b border-gray-200 p-5 text-center">
<img src="/logo.png" alt="로고" className="mx-auto mb-3 h-[41px] w-[177px] object-contain" />
<p className="text-xs text-gray-500">대구광역시립검진랩 연동 프로젝트</p>
</div>
<nav className="p-2">
{items.map(({ icon: Icon, label, href, active }) => (
<a
key={label}
href={href}
className={[
'group flex items-center gap-3 rounded-xl px-3 py-2 text-sm',
active ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50',
].join(' ')}
>
<Icon className="size-4 opacity-80 group-hover:opacity-100" />
<span className="font-medium">{label}</span>
</a>
))}
</nav>
</div>
)
}