"use client";

import { Pie, PieChart, Cell } from "recharts";
import { useState } from "react";
import {
  Utensils,
  Truck,
  ShoppingBag,
  FileText,
  Gamepad2,
  ChevronDown,
} from "lucide-react";

const data = [
  {
    name: "Food & Beverages",
    value: 1200000,
    color: "#002c22",
    icon: Utensils,
  },
  { name: "Transport", value: 450000, color: "#004f3b", icon: Truck },
  { name: "Shopping", value: 800000, color: "#006045", icon: ShoppingBag },
  { name: "Bills", value: 600000, color: "#007a55", icon: FileText },
  {
    name: "Entertainment",
    value: 300000,
    color: "#009966",
    icon: Gamepad2,
  },
  { name: "Others", value: 150000, color: "#00bc7d", icon: ChevronDown },
];

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function SpendingOverview({ className = "" }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState<"today" | "week" | "month" | "year">(
    "month",
  );
  const [isOpen, setIsOpen] = useState(false);

  const filterOptions = [
    { value: "today" as const, label: "Today" },
    { value: "week" as const, label: "This Week" },
    { value: "month" as const, label: "This Month" },
    { value: "year" as const, label: "This Year" },
  ];

  const currentLabel = filterOptions.find((opt) => opt.value === filter)?.label;

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`bg-[#f5fef9] rounded-2xl p-5 shadow-sm flex flex-col w-full ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-black">Spending Overview</h1>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-1 text-xs font-semibold rounded-md border border-gray-300 hover:bg-gray-50/50 cursor-pointer transition flex items-center gap-2"
          >
            {currentLabel}
            <ChevronDown className="w-4 h-4" />
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setFilter(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-xs font-semibold transition ${
                    filter === option.value
                      ? "bg-emerald-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-400 font-medium">Total Spending</p>
        <p className="text-xl font-black">{formatRupiah(total)}</p>
      </div>

      <div className="flex items-center gap-2 -mt-5">
        <PieChart width={280} height={280}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="75%"
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>

          <text
            x={140}
            y={130}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={13}
            fill="#6b7280"
          >
            {data[activeIndex].name}
          </text>
          <text
            x={140}
            y={150}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={15}
            fontWeight={700}
            fill="#111827"
          >
            {formatRupiah(data[activeIndex].value)}
          </text>
          <text
            x={140}
            y={170}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={12}
            fill="#9ca3af"
          >
            {((data[activeIndex].value / total) * 100).toFixed(1)}%
          </text>
        </PieChart>

        {/* Legend */}
        <div className="flex flex-col gap-2 flex-1 ml-4">
          {data.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-2 py-2 rounded border-b border-gray-200"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <IconComponent
                  className="w-4 h-4 shrink-0"
                  style={{ color: item.color }}
                />
                <span className="text-sm font-bold flex-1 min-w-25">
                  {item.name}
                </span>
                <span className="text-sm font-bold w-24 text-right">
                  {formatRupiah(item.value)}
                </span>
                <span className="text-sm text-gray-500 w-12 text-right">
                  {((item.value / total) * 100).toFixed(1)}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
