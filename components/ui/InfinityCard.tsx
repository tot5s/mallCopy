import Image from "next/image"
import { useState, useRef, useEffect } from "react"
type CardItem = {
    id: string,
    imageUrl: string,
    title: string,
    subTitle: string,
    description: string,
    price: number,
    salePrice: number
}

type CardItemProps = {
    cardItems : CardItem[]
}
export default function InfiityCard({cardItems}: CardItemProps) {

    const [items, setItems] = useState(cardItems)
    const bottomRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setItems((prev) => [...prev, ...cardItems])
                }
            }, {rootMargin: "100px"}
        )

        const bottom = bottomRef.current;
        if (bottom) observer.observe(bottom);

        return () => observer.disconnect()
    }, [cardItems])


    return (
        <div className="grid grid-cols-4 w-full gap-2">
            {items.map((card, idx) => (
                <div key={`${card.id}-${idx}`} className="relative aspect-6/9">
                    <Image src={card.imageUrl} alt={card.title} fill className="object-cover"></Image>
                </div>
            ))}

            <div ref={bottomRef} className="h-1"></div>
        </div>
    )
}