import React from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';

export const SolutionsScreen = ({
  onNavigate,
  onOpenBooking,
  onOpenSpecSheet,
}) => {
  const solutions = [
    {
      id: 'fmcg-dist',
      title: '3PL & FMCG Regional Distribution',
      icon: 'local_shipping',
      badge: 'HIGH VELOCITY',
      description:
        'Engineered for multi-brand fast-moving consumer packaged goods requiring seamless Primary-In / Secondary-Out logistics. High-bay 32-ft clear height supports 5-tier pallet selective racking with 100% immediate SKU selectivity.',
      features: [
        'Dedicated 1.2m elevated hydraulic cross-docking bays',
        'Dust-free sealed FM2 epoxy flooring for battery reach trucks',
        'Strict pest prevention ring & rodent barrier stations',
        'FEFO / FIFO inventory audit compliance',
      ],
      suitableFor: 'Beverages, packaged foods, personal care, household essentials',
    },
    {
      id: 'ecom-fulfill',
      title: 'E-Commerce Last-Mile Fulfillment Node',
      icon: 'rocket_launch',
      badge: '24X7 DISPATCH',
      description:
        'Strategically situated outside municipal commercial vehicle curfews, enabling mid-mile line-haul trailers to offload at any hour, followed by rapid parcel sorting and dispatch via 3-wheelers and delivery vans.',
      features: [
        'High-speed optical fiber connectivity for live WMS scanning',
        '100% automatic diesel generator backup loop',
        'Pick-and-pack mezzanine staging allowances',
        'Separate multi-dock apron for light commercial vans',
      ],
      suitableFor: 'National marketplaces, D2C apparel, consumer electronics',
    },
    {
      id: 'heavy-metal',
      title: 'Heavy Metals, Steel & Industrial Storage',
      icon: 'iron',
      badge: '6 MT / SQ.M LOAD',
      description:
        'Heavy industrial clearance with uncompromised floor point-load resistance. Wide roll-up access doors allow direct drive-in offloading for 40-foot flatbed container trailers transporting structural beams, TMT steel, and pipes.',
      features: [
        'Reinforced 250mm laser-screed concrete slab',
        'Overhead gantry crane clearance provisions',
        '36m wide exterior apron for seamless flatbed trailer maneuvering',
        'Zero floor cracking under reach truck wheel stress',
      ],
      suitableFor: 'Steel coils, pipes, automotive components, machinery parts',
    },
    {
      id: 'agro-buffer',
      title: 'Industrial Agro & Grain Buffer Hub',
      icon: 'grain',
      badge: 'DRY STORAGE',
      description:
        'High-capacity dry storage for seasonal grain procurement, seed distribution, fertilizers, and packaged agrochemicals. Built with elevated plinths and watertight roofing guaranteeing inventory preservation during torrential monsoons.',
      features: [
        '1.2m plinth elevation preventing damp and groundwater ingress',
        'High air turnover turbo-ventilators with rain cowls',
        'Direct connection to major agricultural Mandis in Purvanchal',
        'Bulk bag stacking and mechanized conveyor allowances',
      ],
      suitableFor: 'Grains, seeds, agrochemicals, organic fertilizers',
    },
    {
      id: 'nepal-transit',
      title: 'Cross-Border Nepal Transit & Transshipment',
      icon: 'alt_route',
      badge: '95 KM TO BORDER',
      description:
        'Positioned as Eastern UP’s strategic staging gateway for bilateral trade destined for Kathmandu and the Nepal Terai via the Sonauli Integrated Check Post (ICP). Eliminates inner-city congestion delays.',
      features: [
        'Attached customs and export documentation office suites',
        'Secure driver rest quarters and 24x7 gated truck yard',
        'Container de-stuffing and cross-docking capabilities',
        'Full 4K IP CCTV surveillance with 60-day encrypted logs',
      ],
      suitableFor: 'Export cargo, bilateral trade, international freight forwarders',
    },
    {
      id: 'custom-bay',
      title: 'Built-to-Suit Enterprise Bay Leasing',
      icon: 'architecture',
      badge: 'BESPOKE BUILDOUT',
      description:
        'Private partitioned bays designed for institutional long-term tenants requiring dedicated security perimeters, customized racking matrices, specialized cold storage rooms, or captive office facilities.',
      features: [
        'Custom partition walls and private roller shutter access',
        'Dedicated dock doors assigned exclusively to your operation',
        'Flexible 3 to 9 year registered lease deeds',
        'Direct landlord engineering support for interior modifications',
      ],
      suitableFor: 'Multinational corporations, master 3PLs, pharma distributors',
    },
  ];

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 5 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">category</span>
            <span>END-TO-END INDUSTRIAL SOLUTIONS</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Specialized Industrial Warehousing Solutions
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              Whether you need rapid last-mile parcel distribution, high-bay FMCG selective racking, or
              heavy steel coil offloading, Vardha Warehousing provides institutional infrastructure tailored
              to your operational velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#e5eeff] flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#0e1c2f] bg-[#eff4ff] px-2.5 py-1 rounded-full">
                      {sol.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[24px]">{sol.icon}</span>
                    </div>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#44474c] leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#eff4ff]">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] block">
                      KEY ENGINEERING ATTRIBUTES:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#44474c] font-['Inter']">
                      {sol.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-[#426086] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eff4ff] space-y-3">
                  <div className="text-[11px] text-[#44474c] font-['JetBrains_Mono']">
                    <span className="font-bold text-[#0b1c30]">Typical Tenants:</span> {sol.suitableFor}
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 rounded-xl bg-[#eff4ff] hover:bg-[#0e1c2f] text-[#0b1c30] hover:text-white font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Inquire This Solution</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Docking & Frontage Spotlight */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="bg-[#0e1c2f] rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] uppercase tracking-wider font-bold">
                  24X7 ARTERIAL ROAD ADVANTAGE
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-extrabold text-white">
                  Why 118-Ft Road Frontage Eliminates Bottlenecks
                </h3>
                <p className="text-sm sm:text-base text-[#dce9ff] leading-relaxed">
                  In many parts of Gorakhpur, narrow municipal streets impose daylight truck curfews,
                  leaving 40-ft trailers stranded outside city limits. Vardha’s 36-meter direct frontage on
                  Gorakhnath Mandir Road allows heavy commercial vehicles to enter, turn, dock, and exit at
                  any hour without legal or traffic impediment.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-lg bg-[#ffb95f] hover:bg-[#ffddb8] text-[#2a1700] font-bold text-xs font-['Plus_Jakarta_Sans'] transition-all cursor-pointer"
                  >
                    Schedule Logistics Feasibility Review
                  </button>
                  <button
                    onClick={onOpenSpecSheet}
                    className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs font-['JetBrains_Mono'] transition-all cursor-pointer"
                  >
                    Download Road & Turning CAD Drawings
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3 font-['JetBrains_Mono'] text-xs">
                <div className="text-[#ffddb8] font-bold uppercase pb-1 border-b border-white/10">
                  APRON MANEUVERING SPECS
                </div>
                <div className="flex justify-between">
                  <span className="text-[#dce9ff]/70">Road Width:</span>
                  <span className="font-bold text-white">36m (118 Feet)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#dce9ff]/70">Apron Depth:</span>
                  <span className="font-bold text-white">32m Turning Circle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#dce9ff]/70">Simultaneous Docks:</span>
                  <span className="font-bold text-white">Up to 8 Trucks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#dce9ff]/70">Curfew Window:</span>
                  <span className="font-bold text-[#10b981]">0 Hours (24x7 Free)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
