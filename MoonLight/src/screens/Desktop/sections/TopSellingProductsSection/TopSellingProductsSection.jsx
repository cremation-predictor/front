import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card.jsx";

export const TopSellingProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "NIKE Shoes Black Pattern",
      price: "$87",
      image: "https://c.animaapp.com/mfezchw6vowRLg/img/mask-group-1.png",
      rating: "https://c.animaapp.com/mfezchw6vowRLg/img/group-525.png",
    },
    {
      id: 2,
      name: "iPhone 12",
      price: "$987",
      image: "https://c.animaapp.com/mfezchw6vowRLg/img/mask-group.png",
      productImage:
        "https://c.animaapp.com/mfezchw6vowRLg/img/iphone-12-2-removebg-preview-1.png",
      rating: "https://c.animaapp.com/mfezchw6vowRLg/img/group-573.png",
    },
  ];

  return (
    <div className="w-[430px] h-[335px] absolute top-[663px] left-[978px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <Card className="bg-white rounded-[10px] border-0 shadow-sm">
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="opacity-70 font-bold text-black text-lg [font-family:'Nunito',Helvetica] tracking-[0] leading-[normal]">
              인접지역 예약 현황
            </h2>
            <MoreHorizontalIcon className="w-3.5 h-4 text-gray-600" />
          </div>

          <div className="space-y-6">
            {products.map((product, index) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  {product.id === 2 ? (
                    <div className="w-24 h-24 bg-[url(https://c.animaapp.com/mfezchw6vowRLg/img/mask-group.png)] bg-[100%_100%] rounded-lg">
                      <img
                        className="w-16 h-16 absolute top-4 left-4 object-cover"
                        alt="iPhone product"
                        src={product.productImage}
                      />
                    </div>
                  ) : (
                    <img
                      className="w-24 h-24 rounded-lg object-cover"
                      alt="Product"
                      src={product.image}
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="[font-family:'Nunito',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal] mb-2">
                    {product.name}
                  </h3>

                  <img
                    className="w-[83px] h-3.5 mb-2"
                    alt="Rating"
                    src={product.rating}
                  />

                  <p className="[font-family:'Nunito',Helvetica] font-bold text-black text-[15px] tracking-[0] leading-[normal]">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gray-200 mt-6">
            <img
              className="w-[379px] h-px object-cover"
              alt="Divider line"
              src="https://c.animaapp.com/mfezchw6vowRLg/img/line-58.svg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
