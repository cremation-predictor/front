import React from 'react'
import Card from '../components/ui/Card'

export default function RecentOrdersSection() {
  return (
    <Card title="실시간 예약 현황">
      <div className="-mx-3 overflow-x-auto">
        <table className="min-w-[880px] w-full table-auto">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="px-3 py-2">Tracking</th>
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Order</th>
              <th className="px-3 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i} className="border-t text-sm">
                <td className="px-3 py-2">{10 + i}호기</td>
                <td className="px-3 py-2">Sample {i + 1}</td>
                <td className="px-3 py-2">$99</td>
                <td className="px-3 py-2">{80 + i}</td>
                <td className="px-3 py-2">$7,650</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}