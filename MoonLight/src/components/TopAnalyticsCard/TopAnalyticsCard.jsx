import React from "react";
import { Card, CardContent } from "../ui/card";

export const TopAnalyticsCard = () => {
  return (
    <div className="w-[1162px] h-[116px] absolute top-[122px] left-[243px]">
      <Card className="w-full h-full bg-white rounded-[10px] border-0 shadow-sm">
        <CardContent className="p-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">전체 가동률</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">1,234</div>
              <div className="text-sm text-gray-600">오늘 예약</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">567</div>
              <div className="text-sm text-gray-600">대기 중</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">89</div>
              <div className="text-sm text-gray-600">취소</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-gray-800">실시간 현황</div>
            <div className="text-sm text-gray-500">2024.01.15 14:30</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
