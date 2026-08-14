

export default function ShortsMenu() {
    return (
        <div className="flex items-center gap-3 justify-center py-4 mx-auto">
            <div className="w-20 h-20 flex items-center justify-center text-white rounded-full bg-amber-300">new</div>
            <div className="w-20 h-20 flex items-center justify-center text-white rounded-full bg-rose-400">event</div>
            <div className="w-20 h-20 flex items-center justify-center text-white rounded-full bg-blue-400">Top</div>
            <div className="w-20 h-20 flex items-center justify-center text-white rounded-full bg-green-300">bottom</div>
        </div>
    )
}