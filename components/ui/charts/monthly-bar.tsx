"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingDown, TrendingUp, ArrowLeftRight } from "lucide-react";

type Mode = "both" | "expense" | "income";

const data = [
  { month: "Jan", income: 5000000, expense: 3200000 },
  { month: "Feb", income: 5000000, expense: 2800000 },
  { month: "Mar", income: 5500000, expense: 4100000 },
  { month: "Apr", income: 5000000, expense: 3600000 },
  { month: "May", income: 6000000, expense: 3350000 },
  { month: "Jun", income: 5000000, expense: 2900000 },
  { month: "Jul", income: 5200000, expense: 3700000 },
  { month: "Aug", income: 5000000, expense: 4200000 },
  { month: "Sep", income: 5800000, expense: 3100000 },
  { month: "Oct", income: 5000000, expense: 3800000 },
  { month: "Nov", income: 5300000, expense: 2700000 },
  { month: "Dec", income: 7000000, expense: 5100000 },
];

const formatRupiah = (value: number) => {
  if (value >= 1000000) return `Rp${(value / 1000000).toFixed(1)}jt`;
  if (value >= 1000) return `Rp${(value / 1000).toFixed(0)}rb`;
  return `Rp${value}`;
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    fill: string;
    name: string;
    value: number;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-sm">
        <p className="font-bold mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.dataKey} className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.fill }}
            />
            <span className="text-gray-500 capitalize">{entry.name}:</span>
            <span className="font-semibold" style={{ color: entry.fill }}>
              {formatRupiah(entry.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const modeOptions: { value: Mode; label: string; icon: React.ReactNode }[] = [
  {
    value: "both",
    label: "Income & Expense",
    icon: <ArrowLeftRight className="w-3.5 h-3.5" />,
  },
  {
    value: "income",
    label: "Income Only",
    icon: <TrendingUp className="w-3.5 h-3.5" />,
  },
  {
    value: "expense",
    label: "Expense Only",
    icon: <TrendingDown className="w-3.5 h-3.5" />,
  },
];

export default function AnalyticsBarChart() {
  const [mode, setMode] = useState<Mode>("both");

  return (
    <div className="bg-[#f5fef9] rounded-2xl p-5 shadow-sm mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-black">Monthly Overview</h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Yearly transaction summary
          </p>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
          >
            {modeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary pills */}
      <div className="flex gap-3 mb-5">
        {(mode === "both" || mode === "income") && (
          <div className="flex items-center gap-2 text-white bg-emerald-950 border rounded-lg px-3 py-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
            <span>Total Income</span>
            <span className="font-bold">Rp63,8jt</span>
          </div>
        )}
        {(mode === "both" || mode === "expense") && (
          <div className="flex items-center gap-2 text-white bg-red-800 rounded-lg px-3 py-1.5 text-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
            <span>Total Expense</span>
            <span className="font-bold">Rp42,5jt</span>
          </div>
        )}
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          barGap={4}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatRupiah}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
            width={60}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0,0,0,0.04)", radius: 8 }}
          />

          {(mode === "both" || mode === "income") && (
            <Bar
              dataKey="income"
              name="Income"
              fill="#002c22"
              radius={[6, 6, 0, 0]}
              maxBarSize={32}
            />
          )}
          {(mode === "both" || mode === "expense") && (
            <Bar
              dataKey="expense"
              name="Expense"
              fill="#9f0712"
              radius={[6, 6, 0, 0]}
              maxBarSize={32}
            />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
