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
                    <InfiityCard/>
                </div>
            </div>
        </div>
    )
}