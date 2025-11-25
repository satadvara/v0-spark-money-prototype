"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MpinEntrySecondProps {
  onNavigate: (screen: number) => void
}

export default function MpinEntrySecond({ onNavigate }: MpinEntrySecondProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-4 flex items-center gap-3">
        <button onClick={() => onNavigate(5)}>
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-white font-medium text-lg">Confirm Setup</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-20 h-20 rounded-full bg-[#0B4DA1]/10 flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-[#0B4DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2">Enter your MPIN</h2>
        <p className="text-gray-500 mb-8 text-center">Confirm your savings plan setup</p>

        {/* MPIN Boxes */}
        <div className="flex gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-14 h-14 rounded-xl border-2 border-[#0B4DA1] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#0B4DA1]" />
            </div>
          ))}
        </div>

        <p className="text-sm text-[#0B4DA1] cursor-pointer">Forgot MPIN?</p>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <Button
          onClick={() => onNavigate(7)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-6 text-lg font-medium rounded-xl"
        >
          Proceed
        </Button>
      </div>
    </div>
  )
}
