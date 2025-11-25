"use client"

import { Home, User } from "lucide-react"

interface BottomNavProps {
  activeTab: "home" | "profile"
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-2 safe-area-bottom">
      <div className="flex justify-around items-center">
        <button className="flex flex-col items-center py-2 px-6">
          <div className={`p-2 rounded-xl ${activeTab === "home" ? "bg-[#0B4DA1]/10" : ""}`}>
            <Home className={`w-6 h-6 ${activeTab === "home" ? "text-[#0B4DA1]" : "text-gray-400"}`} />
          </div>
          <span className={`text-xs mt-1 ${activeTab === "home" ? "text-[#0B4DA1] font-medium" : "text-gray-400"}`}>
            Home
          </span>
        </button>
        <button className="flex flex-col items-center py-2 px-6">
          <div className={`p-2 rounded-xl ${activeTab === "profile" ? "bg-[#0B4DA1]/10" : ""}`}>
            <User className={`w-6 h-6 ${activeTab === "profile" ? "text-[#0B4DA1]" : "text-gray-400"}`} />
          </div>
          <span className={`text-xs mt-1 ${activeTab === "profile" ? "text-[#0B4DA1] font-medium" : "text-gray-400"}`}>
            Profile
          </span>
        </button>
      </div>
    </div>
  )
}
