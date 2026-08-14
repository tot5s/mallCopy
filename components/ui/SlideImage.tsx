"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

type Slide = {
    id: string,
    title: string,
    imageUrl: string,
    subTitle: string,
    description: string,
    price: string,
    salePrice: string
}

type SlideImageProps = {
    slides: Slide[]
}
export default function SlideImage ({slides} : SlideImageProps) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [activeSlide, setActiveSlide] = useState(true)

    const displaySlides = [...slides, slides[0]]

    useEffect(() => {

        const timer = window.setInterval(() => {
            setCurrentIndex(index => index + 1)
        }, 5000)

        return () => window.clearInterval(timer)
    },[])


    const handleTransitionEnd = () => {
        if(currentIndex === slides.length) {
            setActiveSlide(false)
            setCurrentIndex(0)
        }
    }

    useEffect(() => {
        if(!activeSlide) {
            requestAnimationFrame(() => setActiveSlide(true))
        }
    }, [activeSlide])

    if(slides.length === 0) return null


    return (
        <div className="relative h-[70vh] w-full overflow-hidden">
             <div
                className={`flex h-full ${
                activeSlide ? "transition-transform duration-500 ease-in-out" : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTransitionEnd={handleTransitionEnd}
            >
                {displaySlides.map((slide, i) => (
                      <div
                        key={`${slide.id}-${i}`}
                        className="relative h-full w-full shrink-0"
                    >
                        <div className=""></div>
                        <Image
                            src={slide.imageUrl}
                            alt={slide.title}
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,transparent_30%,transparent_70%,rgba(0,0,0,0.7)_100%)]" />
                        <div className="absolute right-0 top-0 text-white p-4">
                            <div className="text-2xl">
                                {slide.title}
                            </div>
                            <div className="text-gray-100/50">
                                {slide.subTitle}
                            </div>
                            <div>
                                {slide.description}
                            </div>
                            <div>
                                <span className="line-through">
                                    {slide.price}
                                </span> 
                                    / 
                                <span className="text-xl">{slide.salePrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}