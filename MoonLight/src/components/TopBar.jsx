import React from 'react'
import { Bell, Search } from 'lucide-react'


export default function TopBar() {
return (
<header className="mb-6 flex items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight">대시보드</h1>
<div className="flex items-center gap-3">
<div className="relative">
<input
className="peer w-72 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
placeholder="검색"
/>
<Search className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
</div>
<button className="rounded-xl border border-gray-200 bg-white p-2 transition hover:bg-gray-50">
<Bell className="size-5 text-gray-600" />
</button>
<div className="grid size-9 place-items-center rounded-full bg-brand-700 font-semibold text-white">A</div>
</div>
</header>
)
}