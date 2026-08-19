"use client"

import { useState } from "react";
import Image from "next/image";

const product = {
  id: "item-002",
  imageUrl:
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
  title: "Daily Cotton Jacket",
  subTitle: "데일리 코튼 자켓",
  description:
    "가볍고 탄탄한 코튼 소재로 제작되어 간절기부터 초여름까지 활용하기 좋은 자켓입니다.",
  price: 129000,
  salePrice: 89000,
};

export default function ProductDetail() {
  const [qty, setQty] = useState(1);
  const { id, imageUrl, title, subTitle, description, price, salePrice } =
    product;
  const hasSale = salePrice && salePrice < price;
  const discount = hasSale ? Math.round(((price - salePrice) / price) * 100) : 0;
  const itemNo = id.split("-")[1] ?? id;

  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#1C1A17] font-[Pretendard,sans-serif]">
      <div className="mx-auto max-w-md pb-28">
        {/* 이미지 */}
        <div className="relative aspect-4/5 w-full overflow-hidden bg-[#E5E1D8]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
          <span className="absolute left-4 top-4 font-serif text-[11px] tracking-[0.2em] text-[#F7F5F1]/90">
            ITEM&nbsp;/&nbsp;{itemNo}
          </span>
          {hasSale && (
            <span className="absolute right-4 top-4 bg-[#9B4B3F] px-2.5 py-1 text-[11px] font-medium tracking-wide text-[#F7F5F1]">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* 정보 */}
        <div className="border-b border-[#E5E1D8] px-6 pb-6 pt-5">
          <p className="text-[13px] tracking-wide text-[#8A8478]">
            {subTitle}
          </p>
          <h1 className="mt-1 font-serif text-[22px] leading-tight text-[#1C1A17]">
            {title}
          </h1>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-[20px] font-semibold">
              {(salePrice ?? price).toLocaleString()}
              <span className="ml-0.5 text-[14px] font-normal">원</span>
            </span>
            {hasSale && (
              <span className="text-[13px] text-[#8A8478] line-through">
                {price.toLocaleString()}원
              </span>
            )}
          </div>
        </div>

        {/* 설명 */}
        <div className="px-6 py-6">
          <h2 className="mb-2 font-serif text-[15px] text-[#1C1A17]">
            Description
          </h2>
          <p className="text-[14px] leading-[1.7] text-[#5C574E]">
            {description}
          </p>
        </div>

        {/* 수량 */}
        <div className="flex items-center justify-between border-t border-[#E5E1D8] px-6 py-5">
          <span className="text-[14px] text-[#8A8478]">수량</span>
          <div className="flex items-center gap-4 border border-[#E5E1D8] px-3 py-1.5">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="text-[16px] text-[#8A8478]"
              aria-label="수량 감소"
            >
              −
            </button>
            <span className="w-4 text-center text-[14px]">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="text-[16px] text-[#8A8478]"
              aria-label="수량 증가"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* 하단 구매 바 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto flex max-w-md gap-2 border-t border-[#E5E1D8] bg-[#F7F5F1]/95 px-6 py-4 backdrop-blur">
        <button className="flex-1 border border-[#1C1A17] py-3.5 text-[14px] tracking-wide text-[#1C1A17] transition hover:bg-[#1C1A17] hover:text-[#F7F5F1]">
          장바구니
        </button>
        <button className="flex-1 bg-[#1C1A17] py-3.5 text-[14px] tracking-wide text-[#F7F5F1] transition hover:bg-[#9B4B3F]">
          {((salePrice ?? price) * qty).toLocaleString()}원 구매
        </button>
      </div>
    </div>
  );
}