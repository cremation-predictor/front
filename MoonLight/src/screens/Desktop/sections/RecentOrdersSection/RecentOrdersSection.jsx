import { ChevronDownIcon, MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge.jsx";
import { Card, CardContent } from "../../../../components/ui/card.jsx";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../../components/ui/table.jsx";

export const RecentOrdersSection = () => {
  const orderData = [
    {
      trackingNo: "11호기",
      productName: "Camera Lens",
      productImage:
        "https://c.animaapp.com/mfezchw6vowRLg/img/rectangle-91.png",
      price: "$178",
      totalOrder: "325",
      totalAmount: "$1,46,660",
      isHighlighted: false,
    },
    {
      trackingNo: "10호기",
      productName: "Black Sleep Dress",
      productImage:
        "https://c.animaapp.com/mfezchw6vowRLg/img/rectangle-90.png",
      price: "$14",
      totalOrder: "53",
      totalAmount: "$46,660",
      isHighlighted: true,
    },
    {
      trackingNo: "7호기",
      productName: "Argan Oil",
      productImage:
        "https://c.animaapp.com/mfezchw6vowRLg/img/rectangle-111.png",
      price: "$21",
      totalOrder: "78",
      totalAmount: "$3,46,676",
      isHighlighted: false,
    },
    {
      trackingNo: "8호기",
      productName: "EAU DE Parfum",
      productImage:
        "https://c.animaapp.com/mfezchw6vowRLg/img/rectangle-110.png",
      price: "$32",
      totalOrder: "98",
      totalAmount: "$3,46,981",
      isHighlighted: true,
    },
  ];

  const tableHeaders = [
    { label: "Tracking no", hasSort: true },
    { label: "Product Name", hasSort: true },
    { label: "Price", hasSort: true },
    { label: "Total Order", hasSort: true },
    { label: "Total Amount", hasSort: false },
  ];

  return (
    <section className="w-[702px] h-[335px] absolute top-[663px] left-[243px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <Card className="w-full bg-white rounded-[10px] border-0 shadow-sm">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="[font-family:'Nunito',Helvetica] font-bold text-text text-lg opacity-70">
              실시간 예약 현황
            </h2>
            <MoreHorizontalIcon className="w-3.5 h-4 text-gray-400" />
          </div>

          <div className="px-6">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  {tableHeaders.map((header, index) => (
                    <TableHead
                      key={index}
                      className="[font-family:'Nunito',Helvetica] font-normal text-text text-xs h-4 pb-4 px-0"
                    >
                      <div className="flex items-center gap-1">
                        {header.label}
                        {header.hasSort && (
                          <ChevronDownIcon className="w-1.5 h-[5px]" />
                        )}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderData.map((order, index) => (
                  <TableRow
                    key={index}
                    className={`border-0 ${order.isHighlighted ? "bg-[#fafafb] opacity-50" : ""}`}
                  >
                    <TableCell className="[font-family:'Nunito',Helvetica] font-normal text-text text-xs py-4 px-0">
                      {order.trackingNo}
                    </TableCell>
                    <TableCell className="py-4 px-0">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-[30px] h-[30px] rounded-[5px] object-cover"
                          alt="Product"
                          src={order.productImage}
                        />
                        <span className="[font-family:'Nunito',Helvetica] font-normal text-text text-xs">
                          {order.productName}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="[font-family:'Nunito',Helvetica] font-normal text-text text-xs py-4 px-0">
                      {order.price}
                    </TableCell>
                    <TableCell className="py-4 px-0">
                      <Badge
                        variant="secondary"
                        className="bg-badge bg-opacity-10 text-badge [font-family:'Nunito',Helvetica] font-bold text-xs rounded-lg h-[30px] w-[61px] flex items-center justify-center"
                      >
                        {order.totalOrder}
                      </Badge>
                    </TableCell>
                    <TableCell className="[font-family:'Nunito',Helvetica] font-normal text-text text-xs text-right py-4 px-0">
                      {order.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
