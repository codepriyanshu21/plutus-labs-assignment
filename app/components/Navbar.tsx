import React from "react";
import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-20 py-6 relative z-10">
      <div className="flex items-center gap-2">
        <Moon className="w-8 h-8 text-yellow-400" />
        <span className="text-xl text-yellow-400 font-bold">Moonex</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="hover:text-yellow-400 transition">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          About Us
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Roadmap
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          FAQs
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Contact Us
        </a>
      </div>

      <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
        Connect Wallet
      </button>
    </nav>
  );
}
