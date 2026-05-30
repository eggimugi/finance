"use client";

import React, { useState } from "react";
import Container from "@/components/layout/container";
import Card from "@/components/ui/card";
import AnalyticsBarChart from "@/components/ui/charts/monthly-bar";
import SpendingTrend from "@/components/ui/charts/spending-tren-line";
import SpendingByCategory from "@/components/ui/charts/spending-category-pie";
import {
  Wallet,
} from "lucide-react";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("month");

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

      <div className="bg-[#f5fef9] p-5 rounded-2xl shadow-sm">
        {/* Header */}
        <div className="mb-5 flex justify-between items-center">
          <h1 className="font-black">Analytics</h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {/* Spending Trend Chart */}
          <SpendingTrend />

          {/* Category Breakdown */}
          <SpendingByCategory />
        </div>

        {/* Detailed Statistics */}
        <div className="grid grid-cols-2 gap-5">
          {/* Top Spending Categories */}
          <div className="bg-[#f5fef9] p-5 rounded-2xl shadow-sm">
            <h2 className="text-sm font-black mb-4">Top Spending Categories</h2>
            <div className="space-y-3">
              {[
                { category: "Food & Beverages", amount: 1500000, percentage: 30 },
                { category: "Transport", amount: 1200000, percentage: 24 },
                { category: "Shopping", amount: 600000, percentage: 12 },
                { category: "Bills", amount: 600000, percentage: 12 },
                { category: "Entertainment", amount: 800000, percentage: 16 },
                { category: "Others", amount: 134000, percentage: 18 },
              ].map((item) => (
                <div key={item.category}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-600">
                      Rp{item.amount.toLocaleString("id-ID")}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-950 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Biggest Transactions */}
          <div className="bg-[#f5fef9] p-5 rounded-2xl shadow-sm">
            <h2 className="text-sm font-black mb-4">Biggest Transactions</h2>
            <div className="space-y-3">
              {[
                { desc: "Salary", amount: 5000000, date: "2024-05-27" },
                { desc: "Monthly Rent", amount: -1500000, date: "2024-05-01" },
                { desc: "Shopping Spree", amount: -800000, date: "2024-05-20" },
                {
                  desc: "Freelance Project",
                  amount: 2500000,
                  date: "2024-05-15",
                },
                { desc: "Groceries", amount: -450000, date: "2024-05-29" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b border-gray-300 last:border-0"
                >
                  <div>
                    <p className="text-sm font-semibold">{item.desc}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <span
                    className={`text-sm font-bold ${
                      item.amount > 0 ? "text-green-700" : "text-red-800"
                    }`}
                  >
                    {item.amount > 0 ? "+" : ""}
                    Rp{Math.abs(item.amount).toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <AnalyticsBarChart />
      </div>
    </Container>
  );
}
