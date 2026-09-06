import React from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';

export const UseCasesScreen = ({
  onNavigate,
  onOpenBooking,
  onOpenSpecSheet,
}) => {
  const cases = [
    {
      sector: 'FMCG & Fast-Moving Consumer Packaged Goods',
      clientProfile: 'National Beverage, Snack & Personal Care Manufacturers',
      challenge:
        'Purvanchal distribution demands high SKU velocity with frequent seasonal demand surges. Standard sheds suffered from cracked unsealed floors causing forklift vibration and dust contamination, alongside narrow access roads that triggered demurrage fees on 40-ft trailers.',
      solution:
        'Vardha allocated 24,000 sq.ft in Bay Alpha with laser-screed FM2 flooring and 4 dedicated dock levellers. A 5-tier selective pallet racking system maximized vertical clear height while maintaining 100% SKU selectivity.',
      results: [
        'Container turnaround cut from 4.5 hours to 45 minutes',
        'Zero product damage due to moisture or floor dust across 36 consecutive months',
        'Direct 24x7 ingress eliminated demurrage penalties completely',
      ],
      metrics: {
        palletCount: '3,200 Positions',
        dailyTurnover: '180 Pallets',
        dockEfficiency: '98.5%',
      },
    },
    {
      sector: 'E-Commerce Last-Mile Hub & Sortation Center',
      clientProfile: 'Top Tier National E-Commerce & Marketplace Operators',
      challenge:
        'High-density sortation required a spacious staging apron for multi-axle line-haul trailers arriving between 2 AM and 5 AM, with rapid sorting and dispatch to delivery 3-wheelers before 8 AM. Zero power interruptions were mandatory.',
      solution:
        'Vardha provided Bay Bravo with dual-feed 3-phase power backed by a 125 KVA automated generator and dedicated high-speed optical fiber. An attached 1,200 sq.ft air-conditioned supervisor office handles manifest audits.',
      results: [
        '100% uptime for barcode scanning, sorting conveyors, and server racks',
        'Night-time truck offload completely unaffected by municipal daytime traffic rules',
        'Driver rest quarters drastically improved long-haul driver retention and safety',
      ],
      metrics: {
        palletCount: '2,100 Positions',
        dailyTurnover: '450 Parcels/hr',
        dockEfficiency: '99.8%',
      },
    },
    {
      sector: 'Industrial Steel, TMT Bars & Heavy Pipes',
      clientProfile: 'Primary Steel Distributors & Infrastructure Contractors',
      challenge:
        'Point-loading heavy steel bundles and coils causes severe foundation deflection in unreinforced godowns. Ingress of 14-wheel flatbed trailers into narrow lanes was nearly impossible.',
      solution:
        'Vardha deployed Bay Charlie with a 6 MT/sq.m floor loading tolerance, high structural eaves, and wide drive-in bay doors. The 36-meter road frontage allowed flatbed trailers to reverse directly into the bay.',
      results: [
        'Zero slab cracking or subsidence after 4 years of continuous heavy coil handling',
        'Direct offloading via heavy forklift into bay eliminating crane rental costs',
        'Full security fencing and round-the-clock armed guards prevented metal pilferage',
      ],
      metrics: {
        palletCount: 'Bulk Heavy Stacking',
        dailyTurnover: '120 MT Steel',
        dockEfficiency: '100%',
      },
    },
    {
      sector: 'Indo-Nepal Cross-Border Freight Transshipment',
      clientProfile: 'International 3PL Forwarders & Trade Consolidators',
      challenge:
        'Cargo destined for the Sonauli Integrated Check Post (ICP) at the Nepal border (95 km away) needed a consolidation staging hub where customs papers could be inspected and international shipping containers checked before border crossing.',
      solution:
        'Vardha served as the prime northern staging depot. Container trailers undergo rapid transshipment and seal inspection with 24x7 security logging and driver rest quarters.',
      results: [
        'Safe buffer holding area preventing border bottlenecks and demurrage charges',
        'Seamless 95 km express highway transit to the international border',
        'On-site administrative office utilized for customs paperwork preparation',
      ],
      metrics: {
        palletCount: '1,800 Positions',
        dailyTurnover: '8 Trailers/day',
        dockEfficiency: '96.2%',
      },
    },
  ];

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 6 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">view_kanban</span>
            <span>PROVEN LOGISTICS DEPLOYMENTS</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Real-World Enterprise Deployments
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              Examine how leading consumer brands, industrial manufacturers, and international supply chain
              operators achieve operational velocity, zero inventory loss, and unmatched uptime at Vardha
              Warehousing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 space-y-12">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-[#e5eeff] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#eff4ff] text-[#0e1c2f] font-['JetBrains_Mono'] text-xs font-bold rounded-full">
                    CASE STUDY #{idx + 1}
                  </span>
                  <span className="text-xs font-['JetBrains_Mono'] text-[#426086] font-semibold">
                    {c.clientProfile}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                  {c.sector}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-[#44474c] leading-relaxed">
                  <div>
                    <strong className="text-[#0b1c30] font-['Plus_Jakarta_Sans'] block text-sm mb-1">
                      The Operational Challenge:
                    </strong>
                    {c.challenge}
                  </div>

                  <div>
                    <strong className="text-[#0b1c30] font-['Plus_Jakarta_Sans'] block text-sm mb-1">
                      Vardha Engineering Solution:
                    </strong>
                    {c.solution}
                  </div>
                </div>

                {/* Key Results */}
                <div className="pt-2">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] uppercase block mb-2">
                    VERIFIED OPERATIONAL OUTCOMES:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#0b1c30]">
                    {c.results.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#426086] text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Performance Stats Slate */}
              <div className="lg:col-span-4 bg-[#0e1c2f] text-white p-6 rounded-2xl space-y-4 border border-white/10">
                <div className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] uppercase font-bold pb-2 border-b border-white/10">
                  METRIC BENCHMARK
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#dce9ff] block">
                      CAPACITY ALLOCATED
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                      {c.metrics.palletCount}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#dce9ff] block">
                      OPERATIONAL VELOCITY
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#ffddb8]">
                      {c.metrics.dailyTurnover}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-['JetBrains_Mono'] text-[#dce9ff] block">
                      SLA COMPLIANCE SCORE
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#10b981]">
                      {c.metrics.dockEfficiency}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl bg-[#ffb95f] hover:bg-[#ffddb8] text-[#2a1700] font-['Plus_Jakarta_Sans'] font-bold text-xs transition-colors cursor-pointer"
                  >
                    Deploy Similar Configuration
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
