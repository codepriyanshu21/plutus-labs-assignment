import React from "react";
import { Moon, Send, BotMessageSquare, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* LEFT — Logo */}
        <div className="text-yellow-300 text-2xl font-bold mb-4 md:mb-0">
          <Moon className="w-8 h-8 text-yellow-400" />
          <span className="text-xl font-bold">Moonex</span>
        </div>

        {/* CENTER — Links */}
        <nav className="flex space-x-6 text-sm mb-4 md:mb-0">
          <a href="#" className="hover:text-yellow-300">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-300">
            Roadmap
          </a>
          <a href="#" className="hover:text-yellow-300">
            FAQs
          </a>
          <a href="#" className="hover:text-yellow-300">
            Policy
          </a>
        </nav>

        {/* RIGHT — Contact Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-yellow-300">
            <Send />
          </a>
          <a href="#" className="hover:text-yellow-300">
            <BotMessageSquare />
          </a>
          <a href="#" className="hover:text-yellow-300">
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
