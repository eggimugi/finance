"use client";

import { TrendingUp } from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", spending: 125000 },
  { day: "Tue", spending: 340000 },
  { day: "Wed", spending: 210000 },
  { day: "Thu", spending: 480000 },
  { day: "Fri", spending: 390000 },
  { day: "Sat", spending: 620000 },
  { day: "Sun", spending: 185000 },
];

const average = data.reduce((sum, d) => sum + d.spending, 0) / data.length;

const formatRupiah = (value: number) => {
  if (value >= 1000000) return `Rp${(value / 1000000).toFixed(1)}jt`;
  if (value >= 1000) return `Rp${(value / 1000).toFixed(0)}rb`;
  return `Rp${value}`;
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const isAboveAvg = value > average;
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-sm">
        <p className="font-bold mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
          <span className="text-gray-500">Spending:</span>
          <span className="font-semibold text-emerald-700">
            {formatRupiah(value)}
          </span>
        </div>
        <p
          className={`mt-1 ${isAboveAvg ? "text-red-400" : "text-emerald-500"}`}
        >
          {isAboveAvg ? "Above average" : "Below average"}
        </p>
      </div>
    );
  }
  return null;
};

interface DotProps {
  cx?: number;
  cy?: number;
  payload?: {
    spending: number;
  };
}

const CustomDot = (props: DotProps) => {
  const { cx, cy, payload } = props;
  if (!payload) return null;
  const isAboveAvg = payload.spending > average;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill={isAboveAvg ? "#9f0712" : "#002c22"}
      stroke="white"
      strokeWidth={2}
    />
  );
};

export default function SpendingTrend() {
  const total = data.reduce((sum, d) => sum + d.spending, 0);
  const highest = data.reduce((max, d) =>
    d.spending > max.spending ? d : max,
  );
  const lowest = data.reduce((min, d) => (d.spending < min.spending ? d : min));

  return (
    <div className="bg-[#f5fef9] rounded-2xl p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <TrendingUp className="w-5 h-5" />
          <h2 className="text-sm font-black">Spending Trend (Last 7 Days)</h2>
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
            {highest.day} · {formatRupiah(highest.spending)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-white bg-emerald-950 border rounded-lg px-3 py-1.5 text-xs">
          <span>Lowest</span>
          <span className="font-bold">
            {lowest.day} · {formatRupiah(lowest.spending)}
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={240}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            vertical={false}
          />
          <XAxis
            dataKey="day"
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
            cursor={{ stroke: "#d1fae5", strokeWidth: 2 }}
          />

          <Line
            type="monotone"
            dataKey="spending"
            stroke="#002c22"
            strokeWidth={2.5}
            dot={<CustomDot />}
            activeDot={{
              r: 7,
              fill: "#059669",
              stroke: "white",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400 justify-end">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-950 inline-block" />
          Below average
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-800 inline-block" />
          Above average
        </div>
      </div>
    </div>
  );
}
