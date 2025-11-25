"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface GoldRewardSuccessProps {
  onNavigate: (screen: number) => void
}

export default function GoldRewardSuccess({ onNavigate }: GoldRewardSuccessProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#D4A017]/10 to-white">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success Icon */}
        <div className="relative mb-6">
          <div className="w-32 h-32 relative">
            <img src="/golden-pot-with-gold-coins-celebration-sparkles.jpg" alt="Gold reward" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
          <span className="text-[#D4A017]">₹150</span> added
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">to your digital gold balance</p>

        {/* Gold Balance Card */}
        <div className="w-full bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Gold Balance</p>
              <p className="text-2xl font-bold text-[#D4A017]">₹1,150</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#D4A017]" viewBox="0 0 24 24" fill="currentColor">
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
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-6 text-lg font-medium rounded-xl"
        >
          Save for the next EMI
        </Button>
      </div>
    </div>
  )
}
