"use client"
import Image from "next/image"


type ShopItem = {
    id: string,
    imageUrl: string,
    title: string,
    subTitle: string,
    description: string,
    price: number,
    salePrice: number
}

type ShopItemProps = {
    shopItems: ShopItem[]
}
export default function ItemPreiview({shopItems}: ShopItemProps) {

    return(
        <div className="w-full h-100">
            <div className="flex items-center justify-between gap-2 h-full">
                {
                shopItems.map((item) => (
                    <div key={item.id} className="w-100 h-full relative rounded-xl overflow-hidden">
                        <div className="w-full h-full">
                            <Image src={item.imageUrl} alt={item.title} fill className="object-cover"/>
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,transparent_70%,rgba(0,0,0,0.7)_100%)] z-10 w-full h-full"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 text-white z-20 px-2 py-3">
                            <div className="text-xl font-semibold">
                                {item.title}
                            </div>
                            <div className="text-sm text-gray-500/50">
                                {item.subTitle}
                            </div>
                            <div className="text-sm">
                                {item.description}
                            </div>
                            <div>
                                {item.price} / {item.salePrice}
                            </div>
                        </div>
                    </div>
                ))
            }
                
            </div>
        </div>
    )

}