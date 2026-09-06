import React from 'react';
import { TESTIMONIALS } from '../data/warehouseData';

export const ClientsScreen = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 7 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">groups</span>
            <span>ENTERPRISE CLIENT ECOSYSTEM & PARTNERSHIPS</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Trusted by Leading Supply Chain Pioneers
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              For over three decades, Fortune 500 multinationals, national FMCG market leaders, and regional
              industrial conglomerates have anchored their regional supply chain operations at Vardha
              Warehousing.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#e5eeff] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Rating & Sector */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#ffb95f]">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="px-2 py-0.5 bg-[#eff4ff] text-[#0e1c2f] rounded font-['JetBrains_Mono'] text-[11px] font-bold">
                      {t.sector}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#44474c] italic leading-relaxed font-['Inter']">
                    {t.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0e1c2f] text-white flex items-center justify-center font-bold text-xs">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#0b1c30]">
                        {t.clientName}
                      </div>
                      <div className="text-xs text-[#44474c]">{t.company}</div>
                    </div>
                  </div>
                  <div className="text-right font-['JetBrains_Mono'] text-[11px]">
                    <span className="text-[#426086] font-bold block">{t.leasedArea}</span>
                    <span className="text-[#75777d]">{t.tenure}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Audit Track Record Bar */}
          <div className="bg-[#0e1c2f] text-white rounded-3xl p-8 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border border-white/10">
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#ffddb8]">
                99.98%
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#dce9ff] block mt-1">
                INVENTORY SAFETY SCORE
              </span>
            </div>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#ffddb8]">
                37+ Yrs
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#dce9ff] block mt-1">
                OPERATIONAL UPTIME
              </span>
            </div>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#ffddb8]">
                0 Hours
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#dce9ff] block mt-1">
                MUNICIPAL DAY CURFEW
              </span>
            </div>
            <div>
              <span className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-[#ffddb8]">
                100%
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-[#dce9ff] block mt-1">
                FIRE NOC COMPLIANCE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#0b1c30]">
            Join Our Prestigious Industrial Community
          </h2>
          <p className="text-[#44474c] text-sm leading-relaxed">
            Elevate your logistics performance across Eastern UP and Nepal. Talk directly to our leasing
            team for customized bay configurations and site audits.
          </p>
          <div>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-[#2a1700] hover:bg-black text-[#ffddb8] font-['Plus_Jakarta_Sans'] font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Request Lease Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
