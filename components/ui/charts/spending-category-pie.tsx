"use client";

import { Pie, PieChart, Cell } from "recharts";
import { useState } from "react";
import {
  PieChart as PieChartIcon,
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

const formatRupiah = (value: number) => {
  if (value >= 1000000) return `Rp${(value / 1000000).toFixed(1)}jt`;
  if (value >= 1000) return `Rp${(value / 1000).toFixed(0)}rb`;
  return `Rp${value}`;
};

export default function SpendingByCategory({
  className = "",
}: {
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);


  const total = data.reduce((sum, item) => sum + item.value, 0);
  const highest = data.reduce((max, item) =>
    item.value > max.value ? item : max,
  );
  const lowest = data.reduce((min, item) =>
    item.value < min.value ? item : min,
  );

  return (
    <div
      className={`bg-[#f5fef9] rounded-2xl p-5 shadow-sm flex flex-col w-full ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <PieChartIcon className="w-5 h-5" />
        <h1 className="text-sm font-black">Spending by Category</h1>
      </div>

      {/* Summary pills */}
      <div className="flex gap-3 mb-5 flex-wrap">
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 text-xs">
          <span>Total</span>
          <span className="font-bold">{formatRupiah(total)}</span>
        </div>
        <div className="flex items-center gap-2 text-white bg-red-800 rounded-lg px-3 py-1.5 text-xs">
          <span>Highest</span>
          <span className="font-bold ">
            {highest.name} · {formatRupiah(highest.value)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white bg-emerald-950 border rounded-lg px-3 py-1.5 text-xs">
          <span>Lowest</span>
          <span className="font-bold">
            {lowest.name} · {formatRupiah(lowest.value)}
          </span>
        </div>
      </div>

      <div className="flex items-stretch flex-1">
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
        <div className="flex flex-col justify-around flex-1 ml-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
