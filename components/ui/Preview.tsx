"use client"

export default function Preview() {
    return (
        <div className="flex h-100 gap-4 px-10 mx-auto">
            <div className="w-1/3 border ">preivewImage</div>
            <div className="w-2/3">
                <div className="">
                    최근 본 상품
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="w-30 h-30 rounded-full bg-amber-100">item1</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item2</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item3</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item4</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item5</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item6</div>
                    <div className="w-30 h-30 rounded-full bg-amber-100">item7</div>
                </div>
            </div>
        </div>
    )
}