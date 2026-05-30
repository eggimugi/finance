"use client";

import React, { useState } from "react";
import Container from "@/components/layout/container";
import Card from "@/components/ui/card";
import { Wallet, Search, Download, Plus } from "lucide-react";

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterMonth, setFilterMonth] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const transactions = [
    {
      id: 1,
      date: "2024-05-29",
      category: "Food",
      description: "Dinner at Restaurant",
      amount: -125000,
      type: "expense",
    },
    {
      id: 2,
      date: "2024-05-28",
      category: "Transport",
      description: "Grab ride",
      amount: -45000,
      type: "expense",
    },
    {
      id: 3,
      date: "2024-05-27",
      category: "Salary",
      description: "Monthly salary",
      amount: 5000000,
      type: "income",
    },
  ];

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
        <div className="mb-5">
          <div className="flex justify-between items-center mb-5">
            <h1 className="font-black">Transactions</h1>
            <button className="px-4 py-2 bg-emerald-950 text-white text-sm text-bold rounded-lg border border-transparent hover:bg-transparent hover:text-emerald-950 hover:border-emerald-950 cursor-pointer flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="w-full flex justify-between mb-5">
            <div className="relative flex gap-5">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
              />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
              >
                <option value="all">All Categories</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="salary">Salary</option>
              </select>
              <select
                value={filterMonth}
                onChange={(e) => setFilterMonth(e.target.value)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
              >
                <option value="all">All Months</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-950"
              >
                <option value="newest">Newest</option>
                <option value="latest">Latest</option>
              </select>
            </div>

            <div>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:text-white hover:bg-emerald-950 hover:border-transparent cursor-pointer flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Transactions Table/List */}
        <div className="bg-[#f5fef9]] rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#e6f7ed] border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">
                  Description
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">
                  Amount
                </th>
                <th className="px-6 py-3 text-left font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-200 hover:bg-[#e6f7ed] transition"
                >
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-emerald-950 text-white rounded-lg text-xs font-semibold">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{transaction.description}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      transaction.type === "income"
                        ? "text-emerald-700"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}
                    {Math.abs(transaction.amount).toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-white bg-emerald-950 px-3 py-1 rounded-lg text-xs hover:bg-emerald-800">
                      Edit
                    </button>
                    {" | "}
                    <button className="text-white bg-red-800 px-3 py-1 rounded-lg text-xs hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - optional */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <p>Showing 1-3 of 150 transactions</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
