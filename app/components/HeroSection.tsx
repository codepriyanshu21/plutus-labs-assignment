import React from "react";

export default function HeroSection() {
  return (
    <section className="px-6 lg:px-20 py-20 relative">
      <div className="absolute top-10 right-20 text-yellow-400 text-2xl">
        ✦
      </div>
      <div className="absolute top-40 right-40 text-yellow-400 text-xl">
        ✦
      </div>
      <div className="absolute bottom-20 left-20 text-yellow-400 text-xl">
        ✦
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Trusted Multi-Chain
            <br />
            <span className="text-yellow-400">DEX</span> Platform
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
              Connect Wallet
            </button>
            <button className="border border-gray-600 px-8 py-3 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-300 transition">
              Trade Crypto
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-64 h-64 lg:w-80 lg:h-80 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
