"use client"

import { useState } from "react"
import LandingPage from "@/components/screens/landing-page"
import LoanRepayment from "@/components/screens/loan-repayment"
import MpinEntry from "@/components/screens/mpin-entry"
import GoldRewardSuccess from "@/components/screens/gold-reward-success"
import SetupSavings from "@/components/screens/setup-savings"
import MpinEntrySecond from "@/components/screens/mpin-entry-second"
import SavingsCompleted from "@/components/screens/savings-completed"
import WhatsAppScreen from "@/components/screens/whatsapp-screen"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1)

  const navigateTo = (screen: number) => {
    setCurrentScreen(screen)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-md min-h-screen">
        {currentScreen === 1 && <LandingPage onNavigate={navigateTo} />}
        {currentScreen === 2 && <LoanRepayment onNavigate={navigateTo} />}
        {currentScreen === 3 && <MpinEntry onNavigate={navigateTo} />}
        {currentScreen === 4 && <GoldRewardSuccess onNavigate={navigateTo} />}
        {currentScreen === 5 && <SetupSavings onNavigate={navigateTo} />}
        {currentScreen === 6 && <MpinEntrySecond onNavigate={navigateTo} />}
        {currentScreen === 7 && <SavingsCompleted onNavigate={navigateTo} />}
        {currentScreen === 8 && <WhatsAppScreen onNavigate={navigateTo} />}
      </div>
    </div>
  )
}
