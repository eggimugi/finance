"use client";

import React from "react";
import { Bell, Settings, User } from "lucide-react";

interface NavbarProps {
  userName?: string;
  description?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  userName = "User",
  description = "Welcome back to your dashboard",
}) => {
  return (
    <nav className="bg-emerald-50/20 shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Left: Greeting */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Hello, {userName}</h2>
        <p className="text-xs text-gray-600">{description}</p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <User className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </nav>
  );
};
