"use client";

import React from "react";
import Container from "@/components/layout/container";
import Card from "@/components/ui/card";
import {
  TrendingDown,
  Lightbulb,
  AlertCircle,
  Target,
  PieChart,
  Clock,
} from "lucide-react";

export default function SmartInsights() {
  const insights = [
    {
      id: 1,
      title: "Penghematan Potensial",
      description:
        "Anda menghabiskan 32% lebih banyak untuk makanan dibanding bulan lalu. Coba kurangi pesanan delivery sebanyak 2x per minggu untuk menghemat Rp 2.4 juta.",
      icon: TrendingDown,
      color: "bg-emerald-100",
      textColor: "text-emerald-700",
    },
    {
      id: 2,
      title: "Pola Pengeluaran Aneh",
      description:
        "Transaksi besar terdeteksi di kategori Entertainment pada hari Jumat pukul 11 malam. Apakah ini pengeluaran yang direncanakan?",
      icon: AlertCircle,
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      id: 3,
      title: "Target Pencapaian",
      description:
        "Anda sudah mencapai 67% dari target tabungan bulan ini. Jika melanjutkan, target akan tercapai 5 hari lebih cepat!",
      icon: Target,
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
  ];

  const recommendations = [
    {
      id: 1,
      title: "Review Langganan Bulanan",
      detail: "Ada 5 langganan aktif yang jarang digunakan",
      impact: "Potensi hemat: Rp 500k/bulan",
    },
    {
      id: 2,
      title: "Optimalkan Budget Transportasi",
      detail: "Pertimbangkan travel card untuk perjalanan reguler",
      impact: "Potensi hemat: Rp 200k/bulan",
    },
    {
      id: 3,
      title: "Diversifikasi Pengeluaran",
      detail: "Alokasikan dana lebih banyak untuk kesehatan",
      impact: "Rekomendasi: Rp 300k/bulan",
    },
  ];

  const statistics = [
    {
      label: "Total Pengeluaran Bulan Ini",
      value: "Rp 15.2 Juta",
      change: "8%",
      trend: "up",
    },
    {
      label: "Rata-rata Harian",
      value: "Rp 507k",
      change: "2%",
      trend: "down",
    },
    {
      label: "Kategori Terbesar",
      value: "Makanan (35%)",
      change: "Rp 5.3 Juta",
      trend: "neutral",
    },
    {
      label: "Target Tabungan",
      value: "67% Tercapai",
      change: "40%",
      trend: "up",
    },
  ];

  return (
    <Container>
      <div className="space-y-5">
        {/* Header */}
        <div className="mb-5">
          <h1 className="font-black">Smart Insights</h1>
          <p className="text-sm text-gray-500">
            Analisis AI untuk membantu Anda mengelola keuangan lebih baik
          </p>
        </div>

        {/* Key Statistics */}
        <div className="flex gap-5">
          {statistics.map((stat) => (
            <div key={stat.label} className="p-6 bg-white rounded-lg shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p
                    className={`text-sm ${
                      stat.trend === "down"
                        ? "text-emerald-600"
                        : stat.trend === "up"
                          ? "text-orange-600"
                          : "text-gray-500"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
                {stat.trend === "down" && (
                  <TrendingDown className="w-8 h-8 text-emerald-500" />
                )}
                {stat.trend === "up" && (
                  <AlertCircle className="w-8 h-8 text-orange-500" />
                )}
                {stat.trend === "neutral" && (
                  <PieChart className="w-8 h-8 text-blue-500" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5">
          <Card
            size="sm"
            background="light"
            icon={<Target className="w-5 h-5" />}
            title={statistics[0].label}
            value={statistics[0].value}
            comparison={statistics[0].change}
            trend={statistics[0].trend === "down" ? "down" : statistics[0].trend === "up" ? "up" : "neutral"}
          />
          <Card
            size="sm"
            background="light"
            icon={<Target className="w-5 h-5" />}
            title={statistics[1].label}
            value={statistics[1].value}
            comparison={statistics[1].change}
            trend={statistics[1].trend === "down" ? "down" : statistics[1].trend === "up" ? "up" : "neutral"}
          />
          <Card
            size="sm"
            background="light"
            icon={<Target className="w-5 h-5" />}
            title={statistics[2].label}
            value={statistics[2].value}
            comparison={statistics[2].change}
            trend={statistics[2].trend === "down" ? "down" : statistics[2].trend === "up" ? "up" : "neutral"}
          />
          <Card
            size="sm"
            background="light"
            icon={<Target className="w-5 h-5" />}
            title={statistics[3].label}
            value={statistics[3].value}
            comparison={statistics[3].change}
            trend={statistics[3].trend === "down" ? "down" : statistics[3].trend === "up" ? "up" : "neutral"}
          />
        </div>

        {/* AI Insights */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">
              Insight untuk Anda
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {insights.map((insight) => {
              const IconComponent = insight.icon;
              return (
                <div
                  key={insight.id}
                  className="p-6 bg-white rounded-lg shadow border-l-4 border-gray-200"
                >
                  <div className="flex gap-4">
                    <div className={`${insight.color} p-3 rounded-lg h-fit`}>
                      <IconComponent
                        className={`w-6 h-6 ${insight.textColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Rekomendasi untuk Maksimalkan Tabungan
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{rec.detail}</p>
                    <p className="text-emerald-600 font-semibold text-sm">
                      {rec.impact}
                    </p>
                  </div>
                  <button className="ml-4 px-4 py-2 bg-emerald-50 text-emerald-700 rounded font-medium hover:bg-emerald-100 transition whitespace-nowrap">
                    Pelajari
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tips */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Tips Finansial</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                💡 Budget Fleksibel
              </h3>
              <p className="text-gray-700 text-sm">
                Coba metode 50/30/20: 50% kebutuhan, 30% keinginan, 20%
                tabungan. Sesuaikan dengan gaya hidup Anda.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                🎯 Pencegahan Impulsif
              </h3>
              <p className="text-gray-700 text-sm">
                Tunggu 24 jam sebelum membeli barang yang tidak terencana.
                Kemungkinan Anda berubah pikiran meningkat 60%.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                🏦 Automasi Tabungan
              </h3>
              <p className="text-gray-700 text-sm">
                Transfer tabungan di awal bulan secara otomatis. Lebih mudah
                dari menahan diri untuk menabung di akhir bulan.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg shadow">
              <h3 className="font-bold text-gray-900 mb-2">
                📊 Review Bulanan
              </h3>
              <p className="text-gray-700 text-sm">
                Luangkan waktu 30 menit setiap bulan untuk review pengeluaran
                dan sesuaikan budget untuk bulan depan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
