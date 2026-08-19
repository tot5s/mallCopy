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

    const [items, setItems] = useState(cardItems);
    const [loadCount, setLoadCount] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);




    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting && !isEnd) {
                    if(loadCount >= 10) {
                     setIsEnd(true);
                     return    
                    }
                    setItems((prev) => [...prev, ...cardItems])
                    setLoadCount((prev) => prev + 1);
                }
            }, {rootMargin: "100px"}
        )

        const bottom = bottomRef.current;
        if (bottom) observer.observe(bottom);

        return () => observer.disconnect()
    }, [cardItems, loadCount, isEnd])


    return (
        <div className="grid grid-cols-4 w-full gap-2">
            {items.map((card, idx) => (
                <div key={`${card.id}-${idx}`} className="relative aspect-6/9">
                    <Image src={card.imageUrl} alt={card.title} fill className="object-cover" quality={65} preload={idx === 0}></Image>
                </div>
            ))}


            {!isEnd && (
                <div ref={bottomRef} className="h-1"></div>
            )}
        </div>
    )
}