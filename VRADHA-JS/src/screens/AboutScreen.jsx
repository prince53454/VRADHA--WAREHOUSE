import React from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';

export const AboutScreen = ({
  onNavigate,
  onOpenBooking,
  onOpenSpecSheet,
}) => {
  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Hero Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 2 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">history_edu</span>
            <span>FOUNDED 1987 • 37+ YEARS OF CONTINUOUS INDUSTRIAL REPUTATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
                Architecting Purvanchal’s Modern Logistics Backbone
              </h1>
              <p className="text-base sm:text-lg text-[#44474c] leading-relaxed max-w-2xl font-['Inter']">
                Starting as a pioneering industrial staging asset in Gorakhpur in 1987, Vardha Warehousing
                has grown into Eastern Uttar Pradesh’s benchmark Grade-A logistics facility, enabling
                frictionless freight distribution across northern India and the Indo-Nepal international trade
                corridor.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-lg bg-[#2a1700] hover:bg-black text-[#ffddb8] font-semibold text-sm transition-all shadow-sm cursor-pointer"
                >
                  Schedule Site Inspection
                </button>
                <button
                  onClick={() => onNavigate('warehouse-facility')}
                  className="px-6 py-3 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] font-semibold text-sm transition-all cursor-pointer"
                >
                  Explore Facility Architecture →
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#eff4ff] p-6 rounded-2xl border border-[#dce9ff] space-y-4">
              <div className="text-center pb-2 border-b border-[#dce9ff]">
                <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#44474c] block font-semibold">
                  Total Managed Footprint
                </span>
                <span className="font-['Plus_Jakarta_Sans'] text-4xl font-extrabold text-[#0b1c30]">
                  85,000+
                </span>
                <span className="text-xs text-[#44474c] block">SQ.FT Clear-Span Covered Space</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center text-xs font-['JetBrains_Mono']">
                <div className="p-3 bg-white rounded-xl border border-[#e5eeff]">
                  <span className="text-[#426086] font-bold text-lg block">37+</span>
                  <span className="text-[#44474c]">Years Operating</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e5eeff]">
                  <span className="text-[#426086] font-bold text-lg block">100%</span>
                  <span className="text-[#44474c]">Title Clearances</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & History Timeline */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Our Journey Through The Decades
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              From Early Regional Depot to Grade-A Multi-Tenant Hub
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              How four decades of relentless focus on location selection, structural resilience, and legal
              integrity created Gorakhpur’s premier industrial destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* 1987 */}
            <div className="p-6 bg-[#eff4ff] rounded-2xl border border-[#dce9ff] space-y-3 relative">
              <span className="px-3 py-1 bg-[#0e1c2f] text-white font-['JetBrains_Mono'] text-xs font-bold rounded-full inline-block">
                1987
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                Strategic Land Ingress Acquisition
              </h3>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Securing prime frontage on Gorakhnath Mandir Road in Bargadwa before city outward expansion,
                deliberately establishing a heavy freight artery with direct turning radius.
              </p>
            </div>

            {/* 2004 */}
            <div className="p-6 bg-[#eff4ff] rounded-2xl border border-[#dce9ff] space-y-3 relative">
              <span className="px-3 py-1 bg-[#0e1c2f] text-white font-['JetBrains_Mono'] text-xs font-bold rounded-full inline-block">
                2004
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                Modern PEB Clear-Span Expansion
              </h3>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Upgrading traditional brick sheds to high-tensile Pre-Engineered Steel Buildings with 32-ft
                eaves and zero center aisle interference for modern multi-tier racking systems.
              </p>
            </div>

            {/* 2016 */}
            <div className="p-6 bg-[#eff4ff] rounded-2xl border border-[#dce9ff] space-y-3 relative">
              <span className="px-3 py-1 bg-[#0e1c2f] text-white font-['JetBrains_Mono'] text-xs font-bold rounded-full inline-block">
                2016
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                Grade-A Compliance Modernization
              </h3>
              <p className="text-xs text-[#44474c] leading-relaxed">
                Installation of laser-screed FM2 flooring (6 MT/sq.m), external ring main fire hydrants, 1.2m
                hydraulic dock levelers, and on-site executive administrative annex.
              </p>
            </div>

            {/* Today */}
            <div className="p-6 bg-[#0e1c2f] text-white rounded-2xl border border-white/10 space-y-3 relative">
              <span className="px-3 py-1 bg-[#ffb95f] text-[#2a1700] font-['JetBrains_Mono'] text-xs font-bold rounded-full inline-block">
                TODAY
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                Purvanchal & Nepal Cross-Docking Node
              </h3>
              <p className="text-xs text-[#dce9ff] leading-relaxed">
                Anchor multi-client distribution facility hosting FMCG leaders, national 3PLs, and heavy steel
                transshipments with 24x7 unrestricted heavy vehicle freight throughput.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block">
                Foundational Principles
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
                Built on Zero-Compromise Engineering & Title Transparency
              </h2>
              <div className="space-y-4 text-sm text-[#44474c]">
                <div className="p-4 bg-white rounded-xl border border-[#e5eeff] space-y-1">
                  <div className="font-bold text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#426086]">verified</span>
                    100% Freehold Institutional Titles
                  </div>
                  <p className="text-xs">
                    Every square foot of Vardha Warehousing carries pristine, unencumbered commercial ownership
                    with zero agricultural zoning disputes, enabling rapid bank audits and statutory corporate
                    approvals.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e5eeff] space-y-1">
                  <div className="font-bold text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#426086]">flood</span>
                    Engineered Flood & Monsoon Safety
                  </div>
                  <p className="text-xs">
                    With an elevated 1.2m plinth height and high-capacity subsurface concrete storm channels, our
                    tenants have maintained a 100% dry inventory track record over 37 monsoons.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#e5eeff] space-y-1">
                  <div className="font-bold text-[#0b1c30] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#426086]">handshake</span>
                    Direct Landlord Relationship
                  </div>
                  <p className="text-xs">
                    No middlemen or volatile broker agreements. Leases are negotiated directly with the owning
                    family, guaranteeing prompt maintenance, immediate repairs, and custom tenant buildouts.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#dce9ff]">
                <img
                  src={BRAND_ASSETS.exteriorPhoto}
                  alt="Vardha Warehousing Gorakhpur compound"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f]">
                      BARGADWA INDUSTRIAL COMPLEX
                    </span>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
                      Institutional Quality in the Heart of Eastern UP
                    </h4>
                    <p className="text-xs text-[#dce9ff]">
                      Continuous heavy freight ingress direct from Gorakhnath Mandir Road.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#0b1c30]">
            Experience 37 Years of Industrial Craftsmanship
          </h2>
          <p className="text-[#44474c] text-sm max-w-xl mx-auto">
            Schedule a confidential site walkthrough with our principal engineering team and inspect our
            laser-screed bays firsthand.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-lg bg-[#2a1700] hover:bg-black text-[#ffddb8] font-bold text-sm transition-all cursor-pointer"
            >
              Book Site Walkthrough
            </button>
            <button
              onClick={onOpenSpecSheet}
              className="px-6 py-3 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] font-bold text-sm transition-all cursor-pointer"
            >
              Download Full Dossier (PDF)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
