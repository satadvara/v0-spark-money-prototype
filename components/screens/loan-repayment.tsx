"use client"

import { ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BottomNav from "@/components/ui/bottom-nav"

interface LoanRepaymentProps {
  onNavigate: (screen: number) => void
}

export default function LoanRepayment({ onNavigate }: LoanRepaymentProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-[#0B4DA1] px-4 py-4 flex items-center gap-3">
        <button onClick={() => onNavigate(1)}>
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <span className="text-white font-medium text-lg">Loan Repayment</span>
      </div>

      <div className="flex-1 p-4">
        {/* Loan Card */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-start gap-4">
            {/* Shriram Finance Logo */}
            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
              <img src="/images/shriram-20finance.webp" alt="Shriram Finance" className="w-full h-full object-cover" />
            </div>

            {/* Loan Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Shriram Finance Ltd</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Suresh</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#D4A017] flex-shrink-0" />
              </div>

              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Loan ID</span>
                  <span className="text-xs font-medium text-gray-900">123456XXXX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Bill Amount</span>
                  <span className="text-base font-bold text-gray-900">₹15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-gray-500">Due Date</span>
                  <span className="text-xs font-medium text-red-500">Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-4 bg-white border-t">
        <Button
          onClick={() => onNavigate(3)}
          className="w-full bg-[#0B4DA1] hover:bg-[#093d81] text-white py-5 text-base font-medium rounded-xl"
        >
          Proceed to Pay
        </Button>
      </div>

      <BottomNav activeTab="home" />
    </div>
  )
}
