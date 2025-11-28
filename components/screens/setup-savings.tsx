"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface SetupSavingsProps {
  onNavigate: (screen: number) => void
}

export default function SetupSavings({ onNavigate }: SetupSavingsProps) {
  const [activeTab, setActiveTab] = useState<"daily" | "weekly">("daily")
  const [dailyAmount, setDailyAmount] = useState(500)
  const [weeklyAmount, setWeeklyAmount] = useState(3500)

  const dailyTotal = dailyAmount * 30
  const weeklyTotal = weeklyAmount * 4.5

  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-4 flex items-center gap-3">
        <button onClick={() => onNavigate(4)}>
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-white font-medium text-lg">Setup Savings</span>
      </div>

      <div className="flex-1 px-5 py-6">
        {/* Goal */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 mb-1">Your EMI Goal</p>
          <h1 className="text-3xl font-bold text-[#0B4DA1]">₹15,000</h1>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
          <button
            onClick={() => setActiveTab("daily")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "daily" ? "bg-[#0B4DA1] text-white shadow-sm" : "text-gray-600"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setActiveTab("weekly")}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === "weekly" ? "bg-[#0B4DA1] text-white shadow-sm" : "text-gray-600"
            }`}
          >
            Weekly
          </button>
        </div>

        {/* Amount Input */}
        {activeTab === "daily" ? (
          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 block mb-2">Daily Savings Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-600">₹</span>
                <input
                  type="number"
                  value={dailyAmount}
                  onChange={(e) => setDailyAmount(Number(e.target.value))}
                  className="w-full pl-9 pr-4 py-3 text-xl font-semibold border-2 border-gray-200 rounded-xl focus:border-[#0B4DA1] focus:outline-none"
                />
              </div>
            </div>
            <div className="bg-[#0B4DA1]/5 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs">In 30 days, you'll save</p>
              <p className="text-2xl font-bold text-[#0B4DA1]">₹{dailyTotal.toLocaleString()}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="text-xs text-gray-500 block mb-2">Weekly Savings Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-gray-600">₹</span>
                <input
                  type="number"
                  value={weeklyAmount}
                  onChange={(e) => setWeeklyAmount(Number(e.target.value))}
                  className="w-full pl-9 pr-4 py-3 text-xl font-semibold border-2 border-gray-200 rounded-xl focus:border-[#0B4DA1] focus:outline-none"
                />
              </div>
            </div>
            <div className="bg-[#0B4DA1]/5 rounded-xl p-4 text-center">
              <p className="text-gray-500 text-xs">In ~4.5 weeks, you'll save</p>
              <p className="text-2xl font-bold text-[#0B4DA1]">₹{Math.round(weeklyTotal).toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="p-4">
        <Button
          onClick={() => onNavigate(6)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-5 text-base font-medium rounded-xl"
        >
          Start Saving
        </Button>
      </div>
    </div>
  )
}
