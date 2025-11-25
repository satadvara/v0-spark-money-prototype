"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar } from "lucide-react"

interface SavingsCompletedProps {
  onNavigate: (screen: number) => void
}

export default function SavingsCompleted({ onNavigate }: SavingsCompletedProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-white" />
          <span className="text-white font-medium text-lg">Day 30</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success Animation */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-[#D4A017]/5 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#D4A017]/30 to-[#D4A017]/10 flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>
        </div>

        {/* Balance Info */}
        <p className="text-gray-500 mb-2">Total Balance in Gold Savings</p>
        <h1 className="text-5xl font-bold text-[#D4A017] mb-4">₹15,000</h1>

        <div className="bg-green-50 border border-green-200 rounded-xl px-6 py-3 mb-8">
          <p className="text-green-700 font-medium">🎉 Goal Achieved!</p>
        </div>

        {/* Savings Journey Card */}
        <div className="w-full bg-gray-50 rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-3">Your Savings Journey</p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0B4DA1]">30</p>
              <p className="text-xs text-gray-500">Days</p>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#0B4DA1]">₹500</p>
              <p className="text-xs text-gray-500">Per Day</p>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">100%</p>
              <p className="text-xs text-gray-500">Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <Button
          onClick={() => onNavigate(8)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-6 text-lg font-medium rounded-xl"
        >
          Pay Loan EMI
        </Button>
      </div>
    </div>
  )
}
