import React from "react";
import Container from "../layout/container";
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";

type Size = "sm" | "md" | "lg" | "full";
type Background = "light" | "dark";
type Trend = "up" | "down" | "neutral";

type CardProps = {
  size?: Size;
  background?: Background;
  icon: React.ReactNode;
  title: string;
  label?: string;
  value: string | number;
  comparison: string;
  trend?: Trend;
  className?: string;
};

const sizeConfig: Record<Size, string> = {
  sm: "w-64",
  md: "w-112",
  lg: "w-176",
  full: "w-full",
};

const bgColorConfig: Record<
  Background,
  { bg: string; text: string; subText: string, comparisonBg: string }
> = {
  light: {
    bg: "bg-emerald-50/20",
    text: "text-gray-900",
    subText: "text-gray-400",
    comparisonBg: "bg-black/3",
  },
  dark: {
    bg: "bg-emerald-950",
    text: "text-white",
    subText: "text-gray-200",
    comparisonBg: "bg-white/20",
  },
};

const trendConfig: Record<Trend, { bgIcon: string; color: Record<Background, string>; iconColor: Record<Background, string>; arrow: React.ReactNode }> = {
  up: {
    bgIcon: "bg-emerald-100",
    color: { light: "text-emerald-800", dark: "text-emerald-300" },
    iconColor: { light: "text-emerald-800", dark: "text-emerald-800" },
    arrow: <ArrowUpRight className="w-4 h-4" />,
  },
  down: {
    bgIcon: "bg-red-100",
    color: { light: "text-red-500", dark: "text-red-300" },
    iconColor: { light: "text-red-500", dark: "text-red-500" },
    arrow: <ArrowDownRight className="w-4 h-4" />,
  },
  neutral: {
    bgIcon: "bg-gray-100",
    color: { light: "text-gray-400", dark: "text-gray-300" },
    iconColor: { light: "text-gray-400", dark: "text-gray-300" },
    arrow: <ArrowRight className="w-4 h-4" />,
  },
};

export default function Card({
  size = "full",
  background = "light",
  icon,
  title,
  value,
  comparison,
  trend = "neutral",
  className = "",
}: CardProps) {
  const sizeClass = sizeConfig[size];
  const { bg, text, subText, comparisonBg } = bgColorConfig[background];
  const { bgIcon, color, iconColor, arrow } = trendConfig[trend];
  const colorClass = color[background];
  const iconColorClass = iconColor[background];

  return (
    <Container
      className={`rounded-2xl shadow-sm flex flex-col gap-6 ${sizeClass} ${bg} ${className}`}
    >
      {/* Row 1 */}
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full ${iconColorClass} ${bgIcon} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <p className={`text-sm font-medium ${text}`}>{title}</p>
      </div>

      {/* Row 2 */}
      <div>
        <p className={`text-3xl font-black ${text}`}>{value}</p>
      </div>

      {/* Row 3 */}
      <div className="flex items-center gap-2">
        <span
          className={`flex items-center gap-1 text-sm font-semibold ${comparisonBg} px-2 py-1 rounded-lg ${colorClass}`}
        >
          {arrow} {comparison}
        </span>
        <span className={`text-sm ${subText}`}>vs last month</span>
      </div>
    </Container>
  );
}
