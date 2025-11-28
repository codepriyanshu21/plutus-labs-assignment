'use client';
import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i:any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "How do I get a Referral Code?",
      a: "You can generate your referral code instantly from your dashboard after signing up.",
    },
    {
      q: "Do I get rewarded in tokens or ETH when I refer buyers?",
      a: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      q: "How do I get a Referral Code?",
      a: "A unique referral code will be generated automatically when you create your account.",
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-20">
      <div className="max-w-3xl mx-auto bg-gray-900/30 rounded-2xl p-8 backdrop-blur-md border-2 border-gray-800/50">
        
        {/* HEADING */}
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-8">
          FAQs
        </h2>

        {/* FAQ LIST */}
        <div className="divide-y divide-gray-700/50">
          {faqs.map((item, i) => (
            <div key={i} className="py-4">
              {/* QUESTION ROW */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-3"
              >
                <span className="text-lg text-gray-200">{item.q}</span>

                {/* ICON WRAPPER */}
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700/60"
                >
                  {openIndex === i ? (
                    <ChevronDown className="w-5 h-5 text-yellow-400 rotate-180 transition" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </span>
              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <p className="text-gray-400 text-sm mt-2 pl-1">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
