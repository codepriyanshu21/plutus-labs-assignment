import React from "react";
import { Shield, Activity, Layers } from "lucide-react";

export default function Features() {
  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
          Our <span className="text-yellow-400">Features</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cheapest TXs</h3>
            <p className="text-gray-400 text-sm">
              Exchange popular digital currencies at the cheapest possible
              transaction price
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">CerTIK</h3>
            <p className="text-gray-400 text-sm">
              We are Audited by CertiK. CertiK is the leading security-focused
              ranking platform to
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Contract Sells</h3>
            <p className="text-gray-400 text-sm">
              No contract sells to fund the marketing wallets
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">CrossDex Support</h3>
            <p className="text-gray-400 text-sm">
              Exchange popular digital currencies at the cheapest possible
              transaction price
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
