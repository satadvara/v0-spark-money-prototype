"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Home } from "lucide-react"

interface GoldRewardSuccessProps {
  onNavigate: (screen: number) => void
}

export default function GoldRewardSuccess({ onNavigate }: GoldRewardSuccessProps) {
  const currentBalance = 150
  const goalAmount = 15000
  const progressPercent = (currentBalance / goalAmount) * 100
  const remaining = goalAmount - currentBalance
 

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D4A017]/10 to-white max-w-md mx-auto">
      <div className="p-4">
        <button
          onClick={() => onNavigate(1)}
          className="flex items-center gap-2 text-[#0B4DA1] hover:text-[#093d81] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-sm font-medium">Home</span>
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <h2 className="text-base font-medium text-gray-700 text-center mb-4">
          Congratulations! You have paid for your loan!
        </h2>

        {/* Success Icon */}
        <div className="relative mb-5">
          <div className="w-28 h-28 relative">
            <img
              src="/golden-pot-with-gold-coins-celebration-sparkles.jpg"
              alt="Gold reward"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-1">
          <span className="text-[#D4A017]">₹150</span> <span className="text-gray-700 font-normal">Free Gold</span>{" "}
          <span className="text-green-600">added</span>
        </h1>
        <p className="text-base text-gray-600 text-center mb-6">to your gold balance</p>

        {/* Gold Balance Card */}
        <div className="w-full bg-white rounded-xl shadow-md p-5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Total Gold Balance</p>
              <p className="text-xl font-bold text-[#D4A017]">₹150</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4A017]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar with Golden Animation */}
        <div className="w-full bg-white rounded-xl shadow-md p-5 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">EMI Goal</span>
            <span className="text-xs text-gray-500">₹{goalAmount.toLocaleString()}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full relative"
              style={{
                width: `${30}%`,
                background: "linear-gradient(90deg, #D4A017, #F5C842)",
              }}
            >
              {/* Shimmer Animation */}
              <div
                className="absolute inset-0 animate-pulse"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  animation: "shimmer 2s infinite",
                }}
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-3">
            <span className="font-semibold text-[#D4A017]">₹{remaining.toLocaleString()}</span> to go
          </p>
        </div>

        <p className="text-gray-600 text-center mb-6 font-bold text-lg">
          ₹150 gold will help you save for your next EMI
        </p>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <Button
          onClick={() => onNavigate(5)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-5 text-base font-medium rounded-xl"
        >
          Save for the next EMI
        </Button>
      </div>

      {/* Shimmer Keyframe Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
