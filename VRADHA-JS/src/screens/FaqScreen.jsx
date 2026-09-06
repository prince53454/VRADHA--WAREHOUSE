import React, { useState } from 'react';
import { FAQS } from '../data/warehouseData';

export const FaqScreen = ({ onNavigate, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'logistics', label: 'Logistics & 36m Frontage' },
    { id: 'compliance', label: 'Fire Safety & NOC' },
    { id: 'commercial', label: 'Lease & Lock-In' },
    { id: 'engineering', label: 'Flooring & Power' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 8 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">help</span>
            <span>OPERATIONAL KNOWLEDGE BASE</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Frequently Asked Technical Questions
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              Complete operational intelligence on municipal heavy vehicle access, statutory clearances,
              laser-screed floor engineering, power backup, and lease agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and FAQ List */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-5xl mx-auto px-4 lg:px-12 space-y-8">
          {/* Search Bar & Category Tabs */}
          <div className="space-y-4">
            <div className="relative">
              <span className="material-symbols-outlined text-[#75777d] absolute left-4 top-1/2 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search by keywords (e.g. 40-ft container, fire NOC, floor load, plinth)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-[#dce9ff] text-[#0b1c30] text-sm focus:outline-none focus:ring-2 focus:ring-[#426086] shadow-sm font-['Inter']"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-['JetBrains_Mono'] transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#0e1c2f] text-white font-bold shadow-sm'
                      : 'bg-white text-[#44474c] hover:bg-[#dce9ff]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <details
                  key={faq.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-[#e5eeff] [&_summary::-webkit-details-marker]:hidden"
                  open={idx === 0 && selectedCategory === 'all'}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0b1c30] pr-4">
                      {faq.question}
                    </span>
                    <span className="material-symbols-outlined text-[#426086] transition-transform duration-300 group-open:rotate-180 shrink-0">
                      expand_more
                    </span>
                  </summary>
                  <div className="mt-4 pt-3 border-t border-[#eff4ff] text-sm text-[#44474c] leading-relaxed font-['Inter']">
                    {faq.answer}
                  </div>
                </details>
              ))
            ) : (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#e5eeff] text-sm text-[#44474c]">
                No matching questions found for "{searchQuery}". Contact our industrial desk directly for
                clarification.
              </div>
            )}
          </div>

          {/* Still have questions banner */}
          <div className="bg-[#0e1c2f] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
                Have a specialized compliance or SLA requirement?
              </h4>
              <p className="text-xs text-[#dce9ff]">
                Our chief logistics engineer is available for direct technical consultations.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#ffb95f] hover:bg-[#ffddb8] text-[#2a1700] font-bold text-xs font-['Plus_Jakarta_Sans'] shrink-0 transition-colors cursor-pointer"
            >
              Speak with Engineering Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
