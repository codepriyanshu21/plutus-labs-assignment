import {
  Moon,
  Shield,
  Activity,
  Layers,
  ChevronDown,
  Send,
  Twitter,
  BotMessageSquare,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* navbar */}
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

      {/* Hero section */}
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
              Trusted <span className="text-yellow-400">Multi-Chain</span>
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
              <button className="border border-gray-600 px-8 py-3 rounded-full font-semibold hover:border-yellow-400 transition">
                Trade Crypto
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-20 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Why <span className="text-yellow-400">MoonEX</span> ?
          </h2>

          {/* Table Wrapper */}
          <div className="w-full overflow-hidden rounded-xl bg-gray-800/30 border border-gray-700 backdrop-blur">
            {/* Table Header */}
            <div className="grid grid-cols-3 text-center py-6 px-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-yellow-400">
                Comparison
              </h3>
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

      <section className="px-6 lg:px-20 py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="text-yellow-400">FAQs</span>
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-between hover:bg-gray-800 transition cursor-pointer">
              <span className="text-lg">How do I get a Referral Code?</span>
              <ChevronDown className="w-5 h-5" />
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-between hover:bg-gray-800 transition cursor-pointer">
              <span className="text-lg">
                Do I get rewarded in tokens or ETH when I refer buyers?
              </span>
              <ChevronDown className="w-5 h-5" />
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 flex items-center justify-between hover:bg-gray-800 transition cursor-pointer">
              <span className="text-lg">How do I get a Referral Code?</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}

export default App;
