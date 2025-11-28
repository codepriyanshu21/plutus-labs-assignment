import React from "react";
import { Moon, Activity } from "lucide-react";

export default function Comparison() {
  return (
    <section className="px-6 lg:px-20 py-20 bg-gray-900/50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl lg:text-4xl font-bold mb-12">
      Why <span className="text-yellow-400">MoonEX</span> ?
    </h2>

    {/* Table Wrapper */}
    <div className="w-full overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700 backdrop-blur">
      {/* Table Header */}
      <div className="grid grid-cols-3 text-center py-6 px-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-yellow-400">Comparison</h3>
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
          <Moon className="w-6 h-6 text-yellow-400" /> MoonEX
        </h3>
        <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
          <Activity className="w-6 h-6 text-pink-400" /> 
          <span className="text-pink-400">UNISWAP</span>
        </h3>
      </div>

      {/* Rows */}
      <div className="divide-y divide-gray-700">
        {[
          "1. Point no one",
          "2. Point no two this",
          "3. Point no two this",
          "4. Point no two this",
          "5. Point no two this",
        ].map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 text-center py-4 px-4 items-center"
          >
            {/* Point Text */}
            <p className="text-sm text-gray-300">{item}</p>

            {/* MoonEX Check */}
            <span className="text-green-400 text-xl font-bold">✓</span>

            {/* Uniswap X */}
            <span className="text-red-400 text-xl font-bold">✗</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
