"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface GoldRewardSuccessProps {
  onNavigate: (screen: number) => void
}

export default function GoldRewardSuccess({ onNavigate }: GoldRewardSuccessProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D4A017]/10 to-white max-w-md mx-auto">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
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

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">
          <span className="text-[#D4A017]">₹150</span> added
        </h1>
        <p className="text-base text-gray-600 text-center mb-6">to your digital gold balance</p>

        {/* Gold Balance Card */}
        <div className="w-full bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Total Gold Balance</p>
              <p className="text-xl font-bold text-[#D4A017]">₹1,150</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4A017]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
        </div>
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
    </div>
  )
}
