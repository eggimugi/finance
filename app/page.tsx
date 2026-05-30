import Container from "@/components/layout/container";
import Card from "@/components/ui/card";
import SpendingOverview from "@/components/ui/charts/spending-overview-pie";
import {
  Wallet,
  Brain,
  Lightbulb,
  Send,
  BadgePlus,
  HandHelping,
  BellDot,
  Hamburger,
  ShoppingBag,
  Ellipsis,
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

      <div className="flex gap-5 mb-5 w-full items-stretch">
        <div className="w-[65%]">
          <SpendingOverview className="w-full" />
        </div>
        <div className="flex flex-col gap-5 w-[35%]">
          <div className="bg-emerald-950 p-5 rounded-2xl shadow-sm text-white text-sm">
            <div className="flex items-center gap-2 mb-5">
              <Brain className="w-5 h-5" />
              <h1 className="text-base font-black">Smart Insight</h1>
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

          <div className="bg-[#f5fef9] flex flex-col justify-between rounded-2xl p-5 shadow-sm flex-1">
            <div>
              <h2 className="font-black mb-5">Quick Actions</h2>
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

      <div className="flex gap-5">
        <div className="bg-[#f5fef9] rounded-2xl p-5 shadow-sm w-[65%]">
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <h1 className="font-black">AI Recommendations</h1>
            </div>
            <button className="border border-gray-300 px-2 py-1 rounded-lg text-xs font-black">
              View All
            </button>
          </div>

          <ul className="text-sm flex gap-5">
            <li className="border border-gray-300 rounded-xl px-4 py-2">
              <h2 className="font-bold">Save Rp10.000.000</h2>
              <p className="text-xs text-gray-500">
                This is to get that laptop
              </p>
            </li>
            <li className="border border-gray-300 rounded-xl px-4 py-2">
              <h2 className="font-bold">Save Rp10.000.000</h2>
              <p className="text-xs text-gray-500">
                This is to get that laptop
              </p>
            </li>
            <li className="border border-gray-300 rounded-xl px-4 py-2">
              <h2 className="font-bold">Save Rp10.000.000</h2>
              <p className="text-xs text-gray-500">
                This is to get that laptop
              </p>
            </li>
            <li className="border border-gray-300 rounded-xl px-4 py-2">
              <h2 className="font-bold">Save Rp10.000.000</h2>
              <p className="text-xs text-gray-500">
                This is to get that laptop
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-[#f5fef9] rounded-2xl p-5 shadow-sm w-[35%]">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-black">Recent Transactions</h1>
            <button className="border border-gray-300 px-2 py-1 rounded-lg text-xs font-black">
              View All
            </button>
          </div>

          <ul className="flex flex-col gap-5">
            <li className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded p-2">
                  <Hamburger className="w-6 h-6 text-emerald-950" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Food & Beverages</p>
                  <p className="text-xs text-gray-500">May 24, 2:30 PM</p>
                </div>
              </div>
              <p className="text-red-500 font-bold">-Rp150.000</p>
            </li>
            <li className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded p-2">
                  <ShoppingBag className="w-6 h-6 text-emerald-950" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Shopping</p>
                  <p className="text-xs text-gray-500">May 24, 2:30 PM</p>
                </div>
              </div>
              <p className="text-red-500 font-bold">-Rp150.000</p>
            </li>
            <li className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="bg-gray-200 rounded p-2">
                  <Ellipsis className="w-6 h-6 text-emerald-950" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold">Others</p>
                  <p className="text-xs text-gray-500">May 24, 2:30 PM</p>
                </div>
              </div>
              <p className="text-red-500 font-bold">-Rp150.000</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
