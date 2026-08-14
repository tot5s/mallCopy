"use client"

import Image from "next/image"
import { UserIcon , ShoppingCartIcon, MagnifyingGlassIcon} from "@phosphor-icons/react"

export default function Header() {
    return (
        <div className="h-20 border-b border-gray-300 bg-white">
            <div className="flex items-center justify-between h-full px-5">
                <div>
                    <Image src={"https://firebasestorage.googleapis.com/v0/b/tot5sblog.firebasestorage.app/o/creater%2Fac885525-f287-4556-b0a9-279654e48c39-ChatGPT%20Image%202026%E1%84%82%E1%85%A7%E1%86%AB%208%E1%84%8B%E1%85%AF%E1%86%AF%2014%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2001_12_40.png?alt=media&token=74938480-3d77-4ff1-81b0-77c0cb713ec4"} alt={'로고 이미지'} width={100} height={80}/>
                </div>
                
                <div className="flex items-center gap-2"> 
                    <div>
                        <MagnifyingGlassIcon size={24} />
                    </div>
                    <div>
                        <ShoppingCartIcon size={24} />
                    </div>
                    <div>
                        <UserIcon size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}
