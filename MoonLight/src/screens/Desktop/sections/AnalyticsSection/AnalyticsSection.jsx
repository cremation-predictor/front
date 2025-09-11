import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card.jsx";

export const AnalyticsSection = () => {
  const legendItems = [
    {
      label: "Sale",
      color: "bg-[#5b92ff]",
    },
    {
      label: "Distribute",
      color: "bg-[#ffd56b]",
    },
    {
      label: "Return",
      color: "bg-[#ff8f6b]",
    },
  ];

  return (
    <div className="w-[430px] h-[408px] absolute top-[270px] left-[978px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <Card className="relative w-full bg-white rounded-[10px] shadow-sm">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <h3 className="opacity-70 font-bold text-text text-lg [font-family:'Nunito',Helvetica] tracking-[0] leading-[normal]">
              주간 예약률
            </h3>
            <MoreHorizontalIcon className="w-3.5 h-4 text-gray-400" />
          </div>

          {/* Chart Container */}
          <div className="relative flex justify-center items-center mb-8">
            <div className="relative w-[220px] h-[216px]">
              {/* Outer ring */}
              <div className="absolute w-[216px] h-[216px] top-0 left-0 rounded-[108px] border-[15px] border-solid border-[#5b92ff0d]" />

              {/* Chart segments */}
              <img
                className="absolute w-[65px] h-[146px] top-[53px] left-0"
                alt="Chart segment"
                src="https://c.animaapp.com/mfezchw6vowRLg/img/ellipse-31.svg"
              />
              <img
                className="absolute w-[138px] h-[54px] top-[162px] left-[50px]"
                alt="Chart segment"
                src="https://c.animaapp.com/mfezchw6vowRLg/img/ellipse-30.svg"
              />
              <img
                className="absolute w-[116px] h-48 top-px left-[104px]"
                alt="Chart segment"
                src="https://c.animaapp.com/mfezchw6vowRLg/img/ellipse-29.svg"
              />

              {/* Center text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="[font-family:'Nunito',Helvetica] font-extrabold text-text text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
                  80%
                </div>
                <div className="opacity-70 [font-family:'Nunito',Helvetica] font-normal text-text text-base tracking-[0] leading-[normal] mt-1">
                  Transactions
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-8">
            {legendItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`w-[15px] h-[15px] ${item.color} rounded-[5px]`}
                />
                <span className="opacity-70 [font-family:'Nunito',Helvetica] font-semibold text-text text-base tracking-[0] leading-[normal]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
