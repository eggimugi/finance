import Container from "@/components/layout/container";
import Card from "@/components/ui/card";
import SpendingOverview from "@/components/ui/charts/spending-pie";
import {
  Wallet,
  Brain,
  Lightbulb,
  Send,
  BadgePlus,
  HandHelping,
  BellDot,
} from "lucide-react";

export default function Home() {
  return (
    <Container>
      <div className="flex gap-5 mb-5">
        <Card
          size="md"
          background="dark"
          icon={<Wallet className="w-5 h-5" />}
          title="Total Balance"
          value="Rp12,345"
          comparison="5.2%"
          trend="up"
        />

        <Card
          size="sm"
          background="light"
          icon={<Wallet className="w-5 h-5" />}
          title="Monthly Income"
          value="Rp12,345"
          comparison="5.2%"
          trend="up"
        />

        <Card
          size="sm"
          background="light"
          icon={<Wallet className="w-5 h-5" />}
          title="Monthly Expenses"
          value="Rp12,345"
          comparison="5.2%"
          trend="down"
        />

        <Card
          size="sm"
          background="light"
          icon={<Wallet className="w-5 h-5" />}
          title="Monthly Savings"
          value="Rp12,345"
          comparison="5.2%"
          trend="up"
        />
      </div>

      <div className="flex gap-5">
        <SpendingOverview className="w-[80%]" />
        <div className="flex flex-col gap-5">
          <div className="bg-emerald-950 p-5 rounded-2xl shadow-sm text-white text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5" />
              <h1 className="text-sm font-black">Smart Insight</h1>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-between gap-2">
                <p>
                  You spent 35% more on food this week. Want tips to reduce it?
                </p>
                <button className="bg-emerald-700 py-1 rounded-xl w-1/2">
                  View Suggestions
                </button>
              </div>
              <Lightbulb className="w-24 h-24 mx-auto text-gray-300" />
            </div>
          </div>

          <div className="bg-emerald-50/20 flex flex-col justify-between rounded-2xl p-5 shadow-sm h-[50%]">
            <div>
              <h2 className="text-sm font-black mb-2">Quick Actions</h2>
            </div>
            <div className="flex gap-5">
              <div className="flex-1 flex flex-col items-center bg-gray-200 rounded-xl py-4">
                <div className="bg-white rounded p-3 mb-2">
                  <Send className="w-4 h-4 text-emerald-800" />
                </div>
                <p className="text-tiny text-center ">Send Money</p>
              </div>
              <div className="flex-1 flex flex-col items-center bg-gray-200 rounded-xl py-4">
                <div className="bg-white rounded p-3 mb-2">
                <BadgePlus className="w-4 h-4 text-emerald-800" />
                </div>
                <p className="text-tiny text-center ">Add Funds</p>
              </div>
              <div className="flex-1 flex flex-col items-center bg-gray-200 rounded-xl py-4">
                <div className="bg-white rounded p-3 mb-2">
                <HandHelping className="w-4 h-4 text-emerald-800" />
                </div>
                <p className="text-tiny text-center ">Receive Funds</p>
              </div>
              <div className="flex-1 flex flex-col items-center bg-gray-200 rounded-xl py-4">
                <div className="bg-white rounded p-3 mb-2">
                <BellDot className="w-4 h-4 text-emerald-800" />
                </div>
                <p className="text-tiny text-center ">Schedule Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
