"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MpinEntryProps {
  onNavigate: (screen: number) => void
}

export default function MpinEntry({ onNavigate }: MpinEntryProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-4 flex items-center gap-3">
        <button onClick={() => onNavigate(2)}>
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-white font-medium text-lg">Enter MPIN</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-16 h-16 rounded-full bg-[#0B4DA1]/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[#0B4DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-1">Enter your MPIN</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Enter your 4-digit MPIN to confirm payment</p>

        {/* MPIN Boxes */}
        <div className="flex gap-3 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-12 h-12 rounded-xl border-2 border-[#0B4DA1] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0B4DA1]" />
            </div>
          ))}
        </div>

        <p className="text-sm text-[#0B4DA1] cursor-pointer">Forgot MPIN?</p>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <Button
          onClick={() => onNavigate(4)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-5 text-base font-medium rounded-xl"
        >
          Pay ₹15,000
        </Button>
      </div>
    </div>
  )
}
