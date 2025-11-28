"use client"

import { Smartphone, Car, Banknote } from "lucide-react"
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-6 py-6">
        {/* Top 1/3: Quick Actions */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex justify-center gap-6">
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
            <button onClick={() => onNavigate(2)} className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#0B4DA1] flex items-center justify-center mb-2 shadow-lg">
                <Banknote className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-[#0B4DA1] font-semibold text-center leading-tight">
                Loan
                <br />
                Repayment
              </span>

              {/* ⭐ UPDATED CTA LINE */}
              <span className="text-[10px] text-black font-semibold mt-1 text-center">
                 Pay Loan & Earn Free Gold 🪙
              </span>
            </button>
          </div>
        </div>

        {/* Middle 1/3: Gold Pot Section */}
        <div className="flex-1 flex flex-col items-center justify-center mt-8">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <img
              src="/golden-pot-overflowing-with-gold-coins-traditional.jpg"
              alt="Gold pot with coins"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-lg font-bold text-gray-900 leading-tight text-center">
            You have <span className="text-[#D4A017]">₹1,000</span> worth of gold with you
          </h1>
        </div>

        {/* Bottom 1/3: Third Party Logos */}
        <div className="flex-1 flex flex-col items-center justify-center mt-8">
          <p className="text-xs text-gray-400 text-center mb-3">Third-Party Partners</p>
          <div className="flex justify-center gap-4 opacity-50">
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-[7px] text-gray-500">HDFC</span>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-[7px] text-gray-500">ICICI</span>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-[7px] text-gray-500">SBI</span>
            </div>
            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-[7px] text-gray-500">Axis</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  )
}
