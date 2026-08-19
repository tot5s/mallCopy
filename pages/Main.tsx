"use client"
import SlideImage from "@/components/ui/SlideImage"
import ShortsMenu from "@/components/ui/ShortsMenu"
import slideData from '@/public/itemdata/item.json'
import Preview from "@/components/ui/Preview"
import ItemPreiview from "@/components/ui/ItemPreview"
import InfiityCard from "@/components/ui/InfinityCard"


import { CaretRightIcon } from "@phosphor-icons/react"
export default function Main() {

    const outter = [
         {
    id: "outer-01",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    title: "울 블렌드 싱글 코트",
    subTitle: "Wool Single Coat",
    description: "부드러운 울 혼방 소재의 클래식 싱글 코트",
    price: 219000,
    salePrice: 175200,
  },
  {
    id: "outer-02",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    title: "오버핏 레더 재킷",
    subTitle: "Oversized Leather Jacket",
    description: "여유로운 실루엣의 빈티지 레더 재킷",
    price: 189000,
    salePrice: 151200,
  },
  {
    id: "outer-03",
    imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f",
    title: "퀼팅 패딩 점퍼",
    subTitle: "Quilted Padded Jumper",
    description: "가볍고 따뜻한 데일리 퀼팅 점퍼",
    price: 139000,
    salePrice: 111200,
  },
  {
    id: "outer-04",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    title: "코튼 워크 재킷",
    subTitle: "Cotton Work Jacket",
    description: "탄탄한 코튼 소재의 캐주얼 워크 재킷",
    price: 109000,
    salePrice: 87200,
  },
  {
    id: "outer-05",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    title: "트위드 크롭 재킷",
    subTitle: "Tweed Crop Jacket",
    description: "세련된 분위기를 더하는 크롭 기장 트위드 재킷",
    price: 159000,
    salePrice: 127200,
  },
    ]

    const topItem = [
         {
    id: "top-01",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    title: "에센셜 코튼 티셔츠",
    subTitle: "Essential Cotton Tee",
    description: "탄탄한 원단의 베이직 반팔 티셔츠",
    price: 39000,
    salePrice: 31200,
  },
  {
    id: "top-02",
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    title: "소프트 브이넥 니트",
    subTitle: "Soft V-neck Knit",
    description: "부드러운 촉감의 데일리 브이넥 니트웨어",
    price: 69000,
    salePrice: 55200,
  },
  {
    id: "top-03",
    imageUrl: "https://images.unsplash.com/photo-1605763240000-7e93b172d754",
    title: "스트라이프 셔츠",
    subTitle: "Classic Stripe Shirt",
    description: "깔끔한 실루엣의 클래식 스트라이프 셔츠",
    price: 79000,
    salePrice: 63200,
  },
  {
    id: "top-04",
    imageUrl: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    title: "하프 집업 스웨트셔츠",
    subTitle: "Half Zip Sweatshirt",
    description: "편안한 착용감의 하프 집업 스웨트셔츠",
    price: 89000,
    salePrice: 71200,
  },
  {
    id: "top-05",
    imageUrl: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e",
    title: "립 슬림 탑",
    subTitle: "Rib Slim Top",
    description: "몸에 자연스럽게 감기는 골지 슬림 탑",
    price: 49000,
    salePrice: 39200,
  },
    ]
    const bottomItem = [
{
    id: "bottom-01",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    title: "스트레이트 데님 팬츠",
    subTitle: "Straight Denim Pants",
    description: "어떤 상의와도 잘 어울리는 스트레이트 데님",
    price: 89000,
    salePrice: 71200,
  },
  {
    id: "bottom-02",
    imageUrl: "https://images.unsplash.com/photo-1506629905607-d405b7a30db6",
    title: "와이드 슬랙스",
    subTitle: "Wide Slacks",
    description: "여유로운 핏으로 완성한 모던 와이드 슬랙스",
    price: 99000,
    salePrice: 79200,
  },
  {
    id: "bottom-03",
    imageUrl: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
    title: "플리츠 미디 스커트",
    subTitle: "Pleated Midi Skirt",
    description: "움직임마다 자연스럽게 흐르는 플리츠 스커트",
    price: 109000,
    salePrice: 87200,
  },
  {
    id: "bottom-04",
    imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    title: "코튼 카고 팬츠",
    subTitle: "Cotton Cargo Pants",
    description: "실용적인 포켓 디테일의 코튼 카고 팬츠",
    price: 79000,
    salePrice: 63200,
  },
  {
    id: "bottom-05",
    imageUrl: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea",
    title: "니트 밴딩 팬츠",
    subTitle: "Knit Banded Pants",
    description: "편안한 밴딩 허리의 소프트 니트 팬츠",
    price: 69000,
    salePrice: 55200,
  },
    ]

    const lookbook = [
  {
    id: "item-001",
    imageUrl:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    title: "Essential Oversized Shirt",
    subTitle: "에센셜 오버핏 셔츠",
    description:
      "여유로운 실루엣과 깔끔한 디자인으로 데일리하게 활용하기 좋은 오버핏 셔츠입니다.",
    price: 69000,
    salePrice: 49000,
  },
  {
    id: "item-002",
    imageUrl:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80",
    title: "Daily Cotton Jacket",
    subTitle: "데일리 코튼 자켓",
    description:
      "가볍고 탄탄한 코튼 소재로 제작되어 간절기부터 초여름까지 활용하기 좋은 자켓입니다.",
    price: 129000,
    salePrice: 89000,
  },
  {
    id: "item-003",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    title: "Soft Knit Cardigan",
    subTitle: "소프트 니트 가디건",
    description:
      "부드러운 촉감과 자연스러운 컬러감이 돋보이는 베이직 니트 가디건입니다.",
    price: 79000,
    salePrice: 59000,
  },
  {
    id: "item-004",
    imageUrl:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    title: "Classic Minimal Dress",
    subTitle: "클래식 미니멀 드레스",
    description:
      "군더더기 없는 실루엣으로 다양한 장소에서 세련된 스타일을 연출할 수 있는 원피스입니다.",
    price: 99000,
    salePrice: 69000,
  },
  {
    id: "item-005",
    imageUrl:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
    title: "Relaxed Wide Pants",
    subTitle: "릴렉스 와이드 팬츠",
    description:
      "편안한 착용감과 와이드한 실루엣으로 데일리룩에 자연스럽게 어울리는 팬츠입니다.",
    price: 72000,
    salePrice: 52000,
  },
  {
    id: "item-006",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    title: "Modern Basic Tee",
    subTitle: "모던 베이직 티셔츠",
    description:
      "적당히 여유로운 핏과 탄탄한 소재로 단독 또는 레이어드하기 좋은 베이직 티셔츠입니다.",
    price: 39000,
    salePrice: 29000,
  },
  {
    id: "item-007",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    title: "Linen Summer Blazer",
    subTitle: "린넨 썸머 블레이저",
    description:
      "가볍고 통기성이 좋은 린넨 혼방 소재로 여름철에도 부담 없이 착용할 수 있습니다.",
    price: 139000,
    salePrice: 99000,
  },
  {
    id: "item-008",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    title: "Essential White Tee",
    subTitle: "에센셜 화이트 티",
    description:
      "매일 손이 가는 깔끔한 화이트 티셔츠로 다양한 스타일링에 활용하기 좋은 아이템입니다.",
    price: 35000,
    salePrice: 25000,
  },
  {
    id: "item-009",
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    title: "Urban Denim Jacket",
    subTitle: "어반 데님 자켓",
    description:
      "빈티지한 무드와 현대적인 실루엣을 조합한 데님 자켓으로 캐주얼한 룩에 잘 어울립니다.",
    price: 109000,
    salePrice: 79000,
  },
  {
    id: "item-010",
    imageUrl:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
    title: "Minimal Pleated Skirt",
    subTitle: "미니멀 플리츠 스커트",
    description:
      "자연스럽게 떨어지는 플리츠 라인으로 여성스럽고 세련된 분위기를 연출할 수 있습니다.",
    price: 68000,
    salePrice: 48000,
  },
    ];
    const mainSlides = slideData.mainSlide
    return (
        <div className="w-full space-y-10">
            <div className="">
                <SlideImage slides={mainSlides}/>
            </div>
            <div>
                <ShortsMenu/>
            </div>
            <div>
                <Preview/>
            </div>
            <div className="space-y-8">
                <div className="space-y-4">
                <div className="border-b border-gray-300 flex items-center justify-between text-gray-500">
                    <div>
                        OUTER
                    </div>
                    <div className="flex items-center gpa-3"> 
                        <div>
                            더보기
                        </div>
                        <CaretRightIcon size={20} />
                    </div>
                </div>
                <ItemPreiview shopItems={outter}/>
            </div>
            <div className="space-y-4">
                <div className="border-b border-gray-300 flex items-center justify-between text-gray-500">
                    <div>
                        TOP
                    </div>
                    <div className="flex items-center gpa-3"> 
                        <div>
                            더보기
                        </div>
                        <CaretRightIcon size={20} />
                    </div>
                </div>
                <ItemPreiview shopItems={topItem}/>
            </div>
            <div className="space-y-4">
                <div className="border-b border-gray-300 flex items-center justify-between text-gray-500">
                    <div>
                        BOTTOM
                    </div>
                    <div className="flex items-center gpa-3"> 
                        <div>
                            더보기
                        </div>
                        <CaretRightIcon size={20} />
                    </div>
                </div>
                <ItemPreiview shopItems={bottomItem}/>
            </div>
            </div>
            <div className="space-y-8">
                LOOCK BOOK
                <div>
                    <InfiityCard cardItems={lookbook}/>
                </div>
            </div>
        </div>
    )
}