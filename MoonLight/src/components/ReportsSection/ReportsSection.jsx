import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export const ReportsSection = () => {
  return (
  <div className="flex-1 min-w-0 h-[408px] w-full">
      <Card className="w-full h-full bg-white rounded-[10px] border-0 shadow-sm">
        <CardContent className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="[font-family:'Nunito',Helvetica] font-bold text-text text-lg opacity-70">
              수요 예상 그래프(x축 : 달)
            </h2>
            <MoreHorizontalIcon className="w-3.5 h-4 text-gray-400" />
          </div>

          {/* Chart Area */}
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="w-full h-full p-4">
              {/* Mock Chart - You can replace this with actual chart library */}
              <div className="w-full h-full relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
                  <span>1000</span>
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>

                {/* Chart bars */}
                <div className="ml-8 h-full flex items-end justify-between px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-32 bg-blue-500 rounded-t"></div>
                    <span className="text-xs text-gray-600">1월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-24 bg-blue-400 rounded-t"></div>
                    <span className="text-xs text-gray-600">2월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-40 bg-blue-600 rounded-t"></div>
                    <span className="text-xs text-gray-600">3월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-28 bg-blue-500 rounded-t"></div>
                    <span className="text-xs text-gray-600">4월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-36 bg-blue-400 rounded-t"></div>
                    <span className="text-xs text-gray-600">5월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-44 bg-blue-600 rounded-t"></div>
                    <span className="text-xs text-gray-600">6월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-48 bg-blue-700 rounded-t"></div>
                    <span className="text-xs text-gray-600">7월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-46 bg-blue-600 rounded-t"></div>
                    <span className="text-xs text-gray-600">8월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-38 bg-blue-500 rounded-t"></div>
                    <span className="text-xs text-gray-600">9월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-30 bg-blue-400 rounded-t"></div>
                    <span className="text-xs text-gray-600">10월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-26 bg-blue-400 rounded-t"></div>
                    <span className="text-xs text-gray-600">11월</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-22 bg-blue-300 rounded-t"></div>
                    <span className="text-xs text-gray-600">12월</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">월별 예약 수요</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
