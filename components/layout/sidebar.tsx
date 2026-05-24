"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Grip,
  Home,
  Handshake,
  FileText,
  Brain,
  Crosshair,
  CreditCard,
  Wrench,
  BadgeQuestionMark,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen w-64 bg-emerald-50/20 shadow-sm p-5
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static
        z-50
      `}
    >
      {/* Header / Logo */}
      <div className="flex items-center gap-1 mb-8">
        <Grip className="w-6 h-6" />
        <h1 className="text-xl font-black">Finance</h1>
      </div>

      {/* Navigation Menu */}
      <nav>
        <div className="mb-2 border-b border-gray-200 pb-2">
          <p className="mb-2 text-sm font-bold">Main</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Home className="w-4 h-4" />
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/transactions"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/transactions")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Handshake className="w-4 h-4" />
                Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/analytics"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/analytics")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <FileText className="w-4 h-4" />
                Analytics
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2 border-b border-gray-200 pb-2">
          <p className="mb-2 text-sm font-bold">Intelligence</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/smart-insights"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/smart-insights")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Brain className="w-4 h-4" />
                Smart Insights
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2 border-b border-gray-200 pb-2">
          <p className="mb-2 text-sm font-bold">Money Control</p>
          <ul className="space-y-1 text-sm ">
            <li>
              <Link
                href="/goals"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/goals")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Crosshair className="w-4 h-4" />
                Goals
              </Link>
            </li>
            <li>
              <Link
                href="/cards"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/cards")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Cards
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <p className="mb-2 text-sm font-bold">Others</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="/settings"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/settings")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Wrench className="w-4 h-4" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/help"
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive("/help")
                    ? "bg-emerald-950 text-white font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <BadgeQuestionMark className="w-4 h-4" />
                Help
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="flex items-center gap-2 px-4 py-2 rounded hover:bg-red-100 transition"
              >
                <LogOut className="w-4 h-4" />
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};
