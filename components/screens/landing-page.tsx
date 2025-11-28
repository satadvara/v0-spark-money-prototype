"use client"

import { Smartphone, Car, Banknote, Coins } from "lucide-react"
import BottomNav from "@/components/ui/bottom-nav"

interface LandingPageProps {
  onNavigate: (screen: number) => void
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#0B4DA1]/80 flex items-center justify-center border border-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <span className="text-white font-medium text-lg">Suresh Kumar</span>
      </div>

      <div className="bg-[#0B4DA1] px-4 pb-6 text-background bg-card">
        <div className="bg-gradient-to-r from-[#D4A017] to-[#F5C842] rounded-2xl p-4 flex items-center gap-4 leading-[1.88rem]">
          <div className="w-12 h-12 rounded-full bg-[#C49516] flex items-center justify-center">
            <Coins className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-white/90 text-sm font-medium">Your Gold Balance</p>
            <p className="text-white text-2xl font-bold">₹1,150</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-8">
        {/* Quick Actions */}
        <div className="flex justify-center gap-8">
          {/* Mobile Recharge */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-2">
              <Smartphone className="w-7 h-7 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600 text-center leading-tight">
              Mobile
              <br />
              Recharge
            </span>
          </div>

          {/* FASTag Recharge */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-2">
              <Car className="w-7 h-7 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600 text-center leading-tight">
              FASTag
              <br />
              Recharge
            </span>
          </div>

          {/* Loan Repayment - Highlighted */}
          <div className="flex flex-col items-center relative">
            <button onClick={() => onNavigate(2)} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0B4DA1] flex items-center justify-center mb-2 shadow-lg">
                <Banknote className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-[#0B4DA1] font-semibold text-center leading-tight">
                Loan
                <br />
                Repayment
              </span>
            </button>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#FFF9E6] border border-[#D4A017] rounded-lg px-3 py-1.5 whitespace-nowrap shadow-sm">
              <span className="text-xs text-gray-800 font-medium">Pay Loan & Earn Free Gold</span>
              <span className="ml-1">🪙</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  )
}
