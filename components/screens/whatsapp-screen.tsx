"use client"

import { ArrowLeft, Phone, Video, MoreVertical, CheckCheck } from "lucide-react"

interface WhatsAppScreenProps {
  onNavigate: (screen: number) => void
}

export default function WhatsAppScreen({ onNavigate }: WhatsAppScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#ECE5DD] max-w-md mx-auto">
      {/* WhatsApp Header */}
      <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
        <ArrowLeft className="w-5 h-5 text-white" />
        <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden">
          <img src="/spark-money-logo-blue.jpg" alt="SparkMoney" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm">SparkMoney</p>
          <p className="text-white/70 text-xs">online</p>
        </div>
        <Video className="w-5 h-5 text-white" />
        <Phone className="w-5 h-5 text-white ml-3" />
        <MoreVertical className="w-5 h-5 text-white ml-3" />
      </div>

      {/* Chat Background Pattern */}
      <div
        className="flex-1 p-3 overflow-y-auto"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23c8c8c8' fillOpacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {/* Incoming Message */}
        <div className="flex justify-start mb-3">
          <div className="bg-white rounded-lg rounded-tl-none shadow-sm p-3 max-w-[85%]">
            <p className="text-gray-800 text-sm leading-relaxed">
              Hello Suresh,
              <br />
              <br />
              You have successfully saved <span className="font-semibold">₹15,000</span> for your loan.
              <br />
              <br />
              Click here to pay
            </p>
            <button onClick={() => onNavigate(2)} className="text-[#0B4DA1] underline text-sm mt-2 block">
              sparkmoney.com/payloan
            </button>
            <div className="flex items-center justify-end gap-1 mt-2">
              <span className="text-[10px] text-gray-500">10:30 AM</span>
            </div>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex justify-end mb-3">
          <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none shadow-sm p-3 max-w-[85%]">
            <p className="text-gray-800 text-sm">Thank you! I'll pay now</p>
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-[10px] text-gray-500">10:31 AM</span>
              <CheckCheck className="w-4 h-4 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-[#F0F0F0] px-2 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
          <input type="text" placeholder="Type a message" className="flex-1 bg-transparent outline-none text-sm" />
        </div>
        <button className="w-10 h-10 bg-[#075E54] rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
