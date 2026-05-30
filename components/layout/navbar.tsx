"use client";

import React from "react";
import { CircleUser, Settings, User } from "lucide-react";

interface NavbarProps {
  userName?: string;
  description?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  userName = "User",
  description = "Welcome back to your dashboard",
}) => {
  return (
    <nav className="sticky top-0 z-30 bg-[#f5fef9] shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] px-6 py-4 flex items-center justify-between">
      {/* Left: Greeting */}
      <div className="flex gap-4 items-center">
        <CircleUser className="w-8 h-8" />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Hello, {userName}</h2>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
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
