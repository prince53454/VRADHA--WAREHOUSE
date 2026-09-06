import React, { useState } from 'react';
import { BRAND_ASSETS, SECTORS, FAQS } from '../data/warehouseData';
import { WEBSITE_PAGES } from '../data/pages';

export const HomeScreen = ({
  onNavigate,
  onOpenBookingWithDetails,
  onOpenSpecSheet,
}) => {
  // Calculator state
  const [selectedSector, setSelectedSector] = useState('fmcg');
  const [carpetArea, setCarpetArea] = useState(15000);
  const [leaseHorizon, setLeaseHorizon] = useState('standard');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  // Fast Lead Form State
  const [leadName, setLeadName] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadAreaOption, setLeadAreaOption] = useState('15k');
  const [leadNotes, setLeadNotes] = useState('');

  // Find active sector config
  const currentSectorObj = SECTORS.find((s) => s.id === selectedSector) || SECTORS[0];
  const palletFactor = currentSectorObj.palletFactor;

  // Computed calculations
  const calculatedPallets = Math.round((carpetArea / 10) * palletFactor);
  const calculatedDocks = Math.max(2, Math.round(carpetArea / 4000));
  const calculatedDesks = Math.max(4, Math.round(carpetArea / 2500));

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadName('');
      setLeadCompany('');
      setLeadPhone('');
      setLeadNotes('');
    }, 1000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & TECHNICAL SPEC OVERLAY                                   */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#ffffff] overflow-hidden pb-16">
        {/* Subtle Architectural Background Grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#0b1c30_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-12 pt-8">
          {/* Monospace Classification Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e5eeff] text-[#426086] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ffb95f] animate-pulse"></span>
            <span>Grade-A Logistics Asset • Bargadwa Industrial Corridor, Gorakhpur</span>
          </div>

          {/* Grid Layout: Split Monolithic Header & Direct Action Callout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0b1c30] tracking-tight leading-[1.15]">
                Premium Warehouse Space in Gorakhpur
              </h1>
              <p className="font-['Inter'] text-lg text-[#44474c] max-w-2xl leading-relaxed">
                Flexible warehousing solutions for FMCG, e-commerce, steel, commercial inventory and
                distribution businesses. Engineered clear spans, multi-axle freight access, and
                operational stability powered by continuous domain mastery since 1987.
              </p>

              {/* Primary CTA Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBookingWithDetails(carpetArea, selectedSector)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#2a1700] text-[#ffddb8] font-['Plus_Jakarta_Sans'] text-sm font-semibold hover:bg-[#000000] transition-all shadow-[0_4px_16px_rgba(42,23,0,0.2)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">warehouse</span>
                  <span>Book Warehouse Space</span>
                </button>

                <button
                  onClick={() => onNavigate('space-calculator-and-booking')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#eff4ff] text-[#0b1c30] font-['Inter'] text-sm font-semibold hover:bg-[#e5eeff] transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">calculate</span>
                  <span>Instant Space Calculator</span>
                </button>

                <button
                  onClick={onOpenSpecSheet}
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-lg text-[#426086] hover:text-[#0b1c30] font-['JetBrains_Mono'] text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
                  <span>Spec Sheet (PDF)</span>
                </button>
              </div>
            </div>

            {/* Right Quick Status Card */}
            <div className="lg:col-span-4 bg-[#eff4ff] p-6 rounded-2xl shadow-sm space-y-4 border border-[#dce9ff]">
              <div className="flex items-center justify-between pb-1">
                <span className="font-['JetBrains_Mono'] text-xs text-[#44474c] uppercase font-bold">
                  Facility Availability
                </span>
                <span className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-[11px] text-[#b87500] bg-[#ffddb8]/60 px-2 py-0.5 rounded font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b87500]"></span>
                  Live Status
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-[#44474c]">Active Clear Span Capacity</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                    85,000 <span className="text-xs font-normal text-[#44474c]">SQ.FT</span>
                  </span>
                </div>
                <div className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#426086] h-full rounded-full w-[72%] transition-all duration-700"></div>
                </div>
                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#44474c] pt-1">
                  <span>Allocated: 61,200 sq.ft</span>
                  <span className="text-[#0b1c30] font-bold">Immediate: 23,800 sq.ft</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#ffffff] flex items-center gap-3 text-[#0b1c30] border border-[#e5eeff]">
                <span className="material-symbols-outlined text-[#426086] text-[24px]">
                  local_shipping
                </span>
                <div className="text-xs leading-tight">
                  <span className="font-bold block text-sm">Unrestricted 24x7 Ingress</span>
                  <span className="text-[#44474c]">Direct multi-axle turning from 36m wide frontage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Cards with Real Photography and Spec Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-12">
            {/* Exterior Logistics Card */}
            <div className="md:col-span-7 relative group rounded-2xl overflow-hidden shadow-md bg-[#213145] min-h-[380px] flex flex-col justify-end p-6">
              <img
                alt="Exterior view of Vardha Warehousing logistics bays, wide aprons and commercial heavy truck docks"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                src={BRAND_ASSETS.exteriorPhoto}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/95 via-[#0e1c2f]/40 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ffffff]/90 backdrop-blur-md rounded font-['JetBrains_Mono'] text-xs text-[#0b1c30] font-bold shadow-sm">
                    ROAD FRONTAGE: 36M / 118-FT
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff]/90 backdrop-blur-md rounded font-['JetBrains_Mono'] text-xs text-[#0b1c30] font-bold shadow-sm">
                    PLINTH HEIGHT: 1.2M DOCKS
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                  Heavy Freight Apron & Multi-Dock Ingress
                </h3>
                <p className="text-xs sm:text-sm text-[#dce9ff] max-w-xl leading-relaxed">
                  Engineered with expansive all-weather concrete turning aprons accommodating 40ft
                  multi-axle container trailers with zero internal queuing or bottleneck delays.
                </p>
              </div>
            </div>

            {/* Interior High-Bay Clear Span Card */}
            <div className="md:col-span-5 relative group rounded-2xl overflow-hidden shadow-md bg-[#213145] min-h-[380px] flex flex-col justify-end p-6">
              <img
                alt="Interior clear-span warehouse bays with multi-tier industrial racking and high-bay LED illumination"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
                src={BRAND_ASSETS.interiorPhoto}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f]/95 via-[#0e1c2f]/30 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#ffffff]/90 backdrop-blur-md rounded font-['JetBrains_Mono'] text-xs text-[#0b1c30] font-bold shadow-sm">
                    CLEAR HEIGHT: 32 FT
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff]/90 backdrop-blur-md rounded font-['JetBrains_Mono'] text-xs text-[#0b1c30] font-bold shadow-sm">
                    FLOOR LOAD: 6 MT / SQ.M
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                  Precision High-Bay Storage
                </h3>
                <p className="text-xs sm:text-sm text-[#dce9ff] leading-relaxed">
                  Laser-screed FM2 flooring designed for heavy VNA / reach truck operations, multi-tier
                  racking, and dense pallet stacking.
                </p>
              </div>
            </div>
          </div>

          {/* Core Operational Proof Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-[#eff4ff] rounded-2xl border border-[#dce9ff]">
            <div className="p-3.5 rounded-xl bg-[#ffffff] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">history_edu</span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase">Pedigree</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">EST. 1987</div>
              <div className="text-xs text-[#44474c]">37+ Years Industrial Leadership</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#ffffff] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">width</span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase">Access Width</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">36m / 118ft</div>
              <div className="text-xs text-[#44474c]">Direct Gorakhnath Mandir Rd Access</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#ffffff] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase">Logistics Window</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">24×7 No-No Entry</div>
              <div className="text-xs text-[#44474c]">Zero Heavy Freight Restrictions</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#ffffff] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase">Facility Spec</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">Grade-A</div>
              <div className="text-xs text-[#44474c]">Fire Hydrants, CCTV & Epoxy</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#ffffff] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 text-[#426086]">
                <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold uppercase">Administrative</span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">HQ Annex</div>
              <div className="text-xs text-[#44474c]">Furnished Office & Staff Quarters</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9 REQUIRED WEBSITE PAGES DIRECTORY                                        */}
      {/* ========================================================================= */}
      <section className="w-full py-12 bg-[#0e1c2f] text-white border-y border-[#213145]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#213145] text-[#ffb95f] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
                <span>Full Website Architecture • All 9 Required Pages</span>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Explore All 9 Website Pages
              </h2>
              <p className="font-['Inter'] text-sm text-[#dce9ff] max-w-2xl mt-1">
                The Vardha Warehousing platform features 9 dedicated pages with detailed technical
                specifications, operational calculators, and booking channels.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#ffddb8]">
              <span className="material-symbols-outlined text-[18px]">touch_app</span>
              <span>Click any page card to explore</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEBSITE_PAGES.map((page) => {
              const isCurrent = page.id === 'home';
              return (
                <div
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className={`group relative p-5 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                    isCurrent
                      ? 'bg-[#162a45] border-[#ffb95f] shadow-lg ring-1 ring-[#ffb95f]/50'
                      : 'bg-[#142337] border-[#253952] hover:bg-[#1c324e] hover:border-[#426086] hover:-translate-y-1 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0e1c2f] text-[#ffb95f] font-['JetBrains_Mono'] text-xs font-bold border border-[#253952]">
                        PAGE 0{page.number}
                      </span>
                      <span className="material-symbols-outlined text-[20px] text-[#77849c] group-hover:text-[#ffb95f] transition-colors">
                        {page.icon}
                      </span>
                    </div>

                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white group-hover:text-[#ffddb8] transition-colors mb-1.5 flex items-center gap-2">
                      <span>{page.title}</span>
                      {isCurrent && (
                        <span className="text-[10px] uppercase font-['JetBrains_Mono'] px-1.5 py-0.5 bg-[#ffb95f] text-[#0e1c2f] rounded font-extrabold">
                          Current
                        </span>
                      )}
                    </h3>

                    <p className="text-xs text-[#dce9ff]/80 leading-relaxed line-clamp-2 mb-4">
                      {page.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#253952] flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                    <span className="text-[#77849c] group-hover:text-[#dce9ff] transition-colors">
                      {page.badge}
                    </span>
                    <span className="text-[#ffb95f] group-hover:translate-x-1 transition-transform inline-flex items-center font-bold">
                      Open Page →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE WAREHOUSE SPACE CALCULATOR                                   */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#eff4ff]" id="space-calculator">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Capacity Modeling Tool
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Interactive Warehouse Space Calculator & Discovery
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              Select your industry operational profile and required footprint to model custom pallet
              slot capacity, dedicated dock doors, and power allocations instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Inputs Controller */}
            <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-2xl shadow-md space-y-6 border border-[#e5eeff]">
              {/* Sector Selector */}
              <div className="space-y-2">
                <label className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0b1c30] block">
                  1. Select Industry Inventory Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {SECTORS.map((s) => {
                    const isSelected = selectedSector === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSector(s.id)}
                        className={`p-3 rounded-xl text-left font-['Inter'] text-xs transition-all flex flex-col gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0e1c2f] text-white font-semibold ring-2 ring-[#0e1c2f] shadow-sm'
                            : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff] font-medium'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[20px] ${
                            isSelected ? 'text-[#ffb95f]' : 'text-[#426086]'
                          }`}
                        >
                          {s.icon}
                        </span>
                        <span className="text-sm font-semibold">{s.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Carpet Area Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="sqft-slider" className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0b1c30]">
                    2. Required Usable Carpet Area
                  </label>
                  <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#426086]">
                    <span>{carpetArea.toLocaleString('en-IN')}</span>{' '}
                    <span className="text-xs font-normal text-[#44474c]">SQ.FT</span>
                  </div>
                </div>
                <input
                  id="sqft-slider"
                  type="range"
                  min="3000"
                  max="80000"
                  step="1000"
                  value={carpetArea}
                  onChange={(e) => setCarpetArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#dce9ff] rounded-lg appearance-none cursor-pointer accent-[#0e1c2f]"
                />
                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#44474c]">
                  <span>3,000 SQ.FT (Min Bay)</span>
                  <span>25,000 SQ.FT</span>
                  <span>80,000+ SQ.FT (Full Facility)</span>
                </div>
              </div>

              {/* Storage Lease Horizon */}
              <div className="space-y-2">
                <label className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0b1c30] block">
                  3. Operational Horizon & Lease Model
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon"
                      value="flexible"
                      checked={leaseHorizon === 'flexible'}
                      onChange={() => setLeaseHorizon('flexible')}
                      className="sr-only"
                    />
                    <div
                      className={`p-3 rounded-xl font-['Inter'] text-xs font-semibold text-center transition-all ${
                        leaseHorizon === 'flexible'
                          ? 'bg-[#0e1c2f] text-white shadow-sm'
                          : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                      }`}
                    >
                      Flexible Surge<br />
                      <span className="text-[10px] font-normal opacity-80">(3-6 Months)</span>
                    </div>
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon"
                      value="standard"
                      checked={leaseHorizon === 'standard'}
                      onChange={() => setLeaseHorizon('standard')}
                      className="sr-only"
                    />
                    <div
                      className={`p-3 rounded-xl font-['Inter'] text-xs font-semibold text-center transition-all ${
                        leaseHorizon === 'standard'
                          ? 'bg-[#0e1c2f] text-white shadow-sm'
                          : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                      }`}
                    >
                      Standard 1 Year<br />
                      <span className="text-[10px] font-normal opacity-80">(Renewable)</span>
                    </div>
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon"
                      value="multiyear"
                      checked={leaseHorizon === 'multiyear'}
                      onChange={() => setLeaseHorizon('multiyear')}
                      className="sr-only"
                    />
                    <div
                      className={`p-3 rounded-xl font-['Inter'] text-xs font-semibold text-center transition-all ${
                        leaseHorizon === 'multiyear'
                          ? 'bg-[#0e1c2f] text-white shadow-sm'
                          : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                      }`}
                    >
                      Enterprise (3-5 Yrs)<br />
                      <span className="text-[10px] font-normal opacity-80">(Bespoke Buildout)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Dynamic Output Breakdown Slate */}
            <div className="lg:col-span-5 bg-[#0e1c2f] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 opacity-5 text-[180px] material-symbols-outlined pointer-events-none select-none">
                precision_manufacturing
              </div>

              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] uppercase tracking-wider font-bold">
                    Calculated Logistics Output
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#dce9ff]">
                    CORRIDOR: GORAKHPUR
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                      Est. Pallet Positions
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#ffddb8]">
                      {calculatedPallets.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                      @ standard 1.2m x 1.0m pallet
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                      Dedicated Docks
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                      {calculatedDocks} Bays
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                      Hydraulic Dock Levellers
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                      Floor Load Margin
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                      6.0 MT
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                      Per square meter capacity
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                      Admin Desk Space
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                      {calculatedDesks} Desks
                    </span>
                    <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                      Furnished attached office
                    </span>
                  </div>
                </div>

                {/* Staging & Transit Summary */}
                <div className="mt-4 p-3 rounded-xl bg-white/5 text-[#eff4ff] text-xs space-y-1.5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[16px]">
                      check_circle
                    </span>
                    <span>Unrestricted heavy vehicle entry into Bargadwa zone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[16px]">
                      check_circle
                    </span>
                    <span>Dedicated 125 KVA automatic generator backup loop</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => onOpenBookingWithDetails(carpetArea, selectedSector)}
                  className="w-full py-3.5 rounded-xl bg-[#ffb95f] hover:bg-[#ffddb8] text-[#2a1700] font-['Plus_Jakarta_Sans'] text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                >
                  <span>Lock In This Configuration</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <p className="text-center font-['JetBrains_Mono'] text-[11px] text-[#dce9ff]/60">
                  Direct technical feasibility review within 3 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WAREHOUSE OVERVIEW & TECHNICAL INFRASTRUCTURE                            */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
                Industrial Architecture & Assets
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
                Engineered Specifically for High-Throughput Freight
              </h2>
              <p className="text-[#44474c] text-sm sm:text-base mt-2">
                Unlike substandard agricultural sheds converted into ad-hoc godowns, Vardha Warehousing
                offers bespoke, institutional-grade supply chain infrastructure built for durability,
                security, and velocity.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#0b1c30] font-['JetBrains_Mono'] text-xs bg-[#eff4ff] px-4 py-2.5 rounded-xl border border-[#dce9ff]">
              <span className="material-symbols-outlined text-[#426086]">verified</span>
              <span className="font-semibold">100% Compliant Fire Hydrant Ring Main System</span>
            </div>
          </div>

          {/* High Impact 6-Cell Engineering Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: Frontage */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">width</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  36m (118-ft) Arterial Frontage
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  Prime location facing Gorakhnath Mandir Road at Bargadwa. Unmatched road width
                  facilitates smooth simultaneous two-way traffic for 40-foot multi-axle freight
                  containers and hydraulic loaders.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Zero street bottleneck risk</span>
              </div>
            </div>

            {/* Feature 2: High Bay & Racking */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">shelves</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  32-Ft Clear Span & Heavy Racking
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  Generous vertical clearance enabling multi-tier selective pallet racking or dense
                  block stacking. Open bay column spacing maximises floor storage density without
                  structural obstructions.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Laser-leveled FM2 epoxy floor</span>
              </div>
            </div>

            {/* Feature 3: Weather-Proof Loading Bays */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">dock</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  Sheltered Loading & Docks
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  Standard 1.2m elevated plinth height featuring hydraulic dock levelers and generous
                  cantilevered steel canopies ensuring 100% dry cross-docking even during heavy monsoon
                  rain.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>All-weather continuous dispatch</span>
              </div>
            </div>

            {/* Feature 4: 24/7 Security & CCTV */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">videocam</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  360° Multi-Angle IP CCTV
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  High-definition perimeter and aisle surveillance with 60-day cloud retention,
                  biometric perimeter gates, and certified security guards operating 24 hours daily with
                  round-the-clock patrol logs.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Zero pilferage track record</span>
              </div>
            </div>

            {/* Feature 5: Attached Commercial Office */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">apartment</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  Grade-A Attached Office
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  Fully wired air-conditioned executive office space on-site. High-speed dual-ISP optical
                  fiber, restrooms, meeting cubicles, and comfortable rest amenities for inventory
                  managers, audit teams, and drivers.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Instant on-site customs & ERP audit</span>
              </div>
            </div>

            {/* Feature 6: Heavy Turning Yard */}
            <div className="p-6 bg-[#ffffff] rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 border border-[#e5eeff] group">
              <div className="w-12 h-12 rounded-xl bg-[#eff4ff] flex items-center justify-center text-[#426086] group-hover:bg-[#0e1c2f] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[28px]">u_turn_right</span>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  Heavy Vehicle Maneuvering Yard
                </h3>
                <p className="text-xs sm:text-sm text-[#44474c] mt-2 leading-relaxed">
                  Reinforced concrete marshalling yard with dedicated staging bays. Ample turning radius
                  enables effortless reversing, turning, and staging for 14-wheelers, multi-axle freight
                  trailers, and container trucks.
                </p>
              </div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] flex items-center gap-1.5 pt-1">
                <span className="material-symbols-outlined text-[16px]">check</span>
                <span>Zero operational turnaround delays</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TARGET CUSTOMER SECTORS / USE CASES                                      */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Tailored Industry Modules
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Engineered for Varied Commercial Demands
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              Discover how enterprises across Eastern UP, Bihar, and the Indo-Nepal corridor leverage
              Vardha Warehousing's specialized layout configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Use Case 1 */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-[#e5eeff]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#b87500] bg-[#ffddb8]/60 px-2 py-0.5 rounded uppercase">
                    Fast FMCG
                  </span>
                  <span className="material-symbols-outlined text-[#426086]">shopping_cart</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                  FMCG & Packaged Consumer Goods
                </h3>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  Clean dry storage conditions with strict pest control, rapid cross-docking access, and
                  round-the-clock primary secondary dispatch support for high SKU velocities.
                </p>
              </div>
              <ul className="font-['JetBrains_Mono'] text-xs text-[#44474c] space-y-1.5 border-t border-[#eff4ff] pt-3">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>FIFO / FEFO compliant bay layout</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Dust-free sealed epoxy flooring</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-[#e5eeff]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0e1c2f] bg-[#d3e4fe] px-2 py-0.5 rounded uppercase">
                    Fulfillment
                  </span>
                  <span className="material-symbols-outlined text-[#426086]">rocket_launch</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                  E-Commerce & D2C Fulfillment
                </h3>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  High-throughput pick-and-pack routing zones, dynamic parcel sorting bays, high-speed
                  fiber connectivity for live inventory scanning, and courier dispatch loading bays.
                </p>
              </div>
              <ul className="font-['JetBrains_Mono'] text-xs text-[#44474c] space-y-1.5 border-t border-[#eff4ff] pt-3">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Rapid van & 3-wheeler loading apron</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>100% UPS & DG power backup loop</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-[#e5eeff]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] bg-[#e5eeff] px-2 py-0.5 rounded uppercase">
                    Heavy Industrial
                  </span>
                  <span className="material-symbols-outlined text-[#426086]">hardware</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                  Steel, Pipes & Heavy Metals
                </h3>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  Massive 6 MT/sq.m floor loading tolerance, high structural eaves, overhead crane
                  compatibility, and wide drive-in bay doors for flatbed trailer offloading.
                </p>
              </div>
              <ul className="font-['JetBrains_Mono'] text-xs text-[#44474c] space-y-1.5 border-t border-[#eff4ff] pt-3">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Direct flatbed trailer drive-in bays</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Heavy structural steel frame clearance</span>
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-[#e5eeff]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] bg-[#dce9ff] px-2 py-0.5 rounded uppercase">
                    Buffer Staging
                  </span>
                  <span className="material-symbols-outlined text-[#426086]">pallet</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                  Commercial & Seasonal Inventory
                </h3>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  Scalable seasonal surge capacity for festive spikes, electronics, appliances, and durable
                  goods requiring safe staging before regional retailer dissemination.
                </p>
              </div>
              <ul className="font-['JetBrains_Mono'] text-xs text-[#44474c] space-y-1.5 border-t border-[#eff4ff] pt-3">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Flexible monthly block allocations</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Comprehensive fire detection sensors</span>
                </li>
              </ul>
            </div>

            {/* Use Case 5 */}
            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-[#e5eeff]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#b87500] bg-[#ffddb8]/60 px-2 py-0.5 rounded uppercase">
                    Cross-Border
                  </span>
                  <span className="material-symbols-outlined text-[#426086]">alt_route</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                  3PL Logistics & Nepal Transit
                </h3>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  Gorakhpur's premier gateway for cross-docking cargo destined for Sonauli (Nepal border)
                  and north Bihar, featuring seamless transshipment without municipal entry congestion.
                </p>
              </div>
              <ul className="font-['JetBrains_Mono'] text-xs text-[#44474c] space-y-1.5 border-t border-[#eff4ff] pt-3">
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>95km direct link to Sonauli ICP</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px] text-[#426086]">check</span>
                  <span>Attached customs documentation office</span>
                </li>
              </ul>
            </div>

            {/* Use Case 6: Custom Built Bay Leasing */}
            <div className="bg-[#0e1c2f] text-white p-6 rounded-2xl shadow-sm flex flex-col justify-between space-y-4 border border-white/10">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb95f] uppercase">
                    Built-to-Suit
                  </span>
                  <span className="material-symbols-outlined text-[#ffb95f]">architecture</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-white">
                  Dedicated Enterprise Bay Leasing
                </h3>
                <p className="text-xs text-[#dce9ff] leading-relaxed">
                  Partitioned private bays with independent roller shutter security, bespoke mezzanine
                  storage, and designated parking docks customized to institutional SLA mandates.
                </p>
              </div>
              <button
                onClick={() => onOpenBookingWithDetails(50000, 'heavy')}
                className="inline-flex items-center justify-between font-['JetBrains_Mono'] text-xs text-[#ffb95f] hover:underline pt-2 border-t border-white/10 cursor-pointer"
              >
                <span>Inquire Custom Enterprise Bay</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CHOOSE VARDHA (COMPARISON TABLE: VARDHA VS UNORGANIZED SHEDS)       */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              The Competitive Advantage
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              37 Years of Industrial Pedigree vs. Unorganized Sheds
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              See why tier-1 multinationals, FMCG champions, and logistics conglomerates choose Vardha
              over unorganized local godowns.
            </p>
          </div>

          {/* Architectural Monolithic Comparison Matrix */}
          <div className="overflow-x-auto bg-[#ffffff] rounded-2xl shadow-md border border-[#e5eeff]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#dce9ff] font-['JetBrains_Mono'] text-xs text-[#0b1c30] tracking-wider">
                  <th className="p-4 lg:p-6 w-1/3">Key Parameter</th>
                  <th className="p-4 lg:p-6 w-1/3 bg-[#0e1c2f] text-white font-['Plus_Jakarta_Sans'] text-sm font-bold">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb95f] text-[20px]">
                        verified
                      </span>
                      <span>Vardha Warehousing</span>
                    </div>
                  </th>
                  <th className="p-4 lg:p-6 w-1/3 text-[#44474c]">Standard Unorganized Sheds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5eeff] text-xs sm:text-sm text-[#0b1c30]">
                {/* Row 1 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    Road Frontage & Access
                    <span className="block font-normal text-[#44474c] text-xs">
                      Direct arterial highway access
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">36m (118-ft) Commercial Road</span>
                    Zero traffic jams; seamless 40ft container access.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    Narrow 15–20 ft rural lanes, frequent truck congestion and day-entry fines.
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    Clear Stacking Height
                    <span className="block font-normal text-[#44474c] text-xs">
                      Internal volumetric efficiency
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">32-Ft High Vertical Clear Span</span>
                    Enables 5-tier pallet racking & max capacity.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    14–18 ft low truss heights with obstructive center columns; low cube efficiency.
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    Flood Resilience & Drainage
                    <span className="block font-normal text-[#44474c] text-xs">
                      Monsoon protection standards
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">1.2m Plinth + Engineered Drainage</span>
                    Raised high-elevation apron; 100% dry inventory history.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    Flush ground level or under 0.5m plinth prone to water seepage and inventory loss.
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    Floor Load Capacity
                    <span className="block font-normal text-[#44474c] text-xs">
                      Heavy equipment & goods support
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">6 MT / Sq.m FM2 Epoxy Flooring</span>
                    Ready for reach trucks, steel coils & heavy cargo.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    Cracking unreinforced concrete prone to extreme dust and forklift damage.
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    Regulatory & Fire Compliance
                    <span className="block font-normal text-[#44474c] text-xs">
                      Statutory approvals & insurance
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">Fire NOC & Clear Commercial Titles</span>
                    Full legal clearances for institutional MNC leases.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    Agricultural zoning disputes, absent fire NOCs, uninsurable stock risks.
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-[#eff4ff]/50 transition-colors">
                  <td className="p-4 lg:p-6 font-semibold">
                    On-Site Administrative Office
                    <span className="block font-normal text-[#44474c] text-xs">
                      Staff and audit facilities
                    </span>
                  </td>
                  <td className="p-4 lg:p-6 bg-[#e5eeff] font-semibold text-[#0b1c30]">
                    <span className="text-[#426086] font-bold block">Dedicated Air-Conditioned Office</span>
                    High-speed fiber, driver rest rooms & audit desks.
                  </td>
                  <td className="p-4 lg:p-6 text-[#44474c]">
                    No formal office facilities, lack of driver toilets, poor digital connectivity.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. STRATEGIC LOCATION & CONNECTIVITY MAP SECTION                           */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Location Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
                  Location Advantage
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
                  The Strategic Crossroads of Eastern UP & Nepal Trade
                </h2>
                <p className="text-[#44474c] text-sm sm:text-base mt-2">
                  Situated on Gorakhnath Mandir Road in Bargadwa, Vardha Warehousing provides
                  friction-free connectivity directly outflanking city congestion while maintaining
                  central delivery speed.
                </p>
              </div>

              {/* Route Metric Indicators */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#ffffff] flex items-center justify-between shadow-sm border border-[#e5eeff]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">alt_route</span>
                    <div>
                      <div className="text-sm font-bold text-[#0b1c30]">National Highway NH-27 / NH-24</div>
                      <div className="text-xs font-['JetBrains_Mono'] text-[#44474c]">
                        East-West Corridor Bypass Connection
                      </div>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#426086] font-bold">
                    12 Mins
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] flex items-center justify-between shadow-sm border border-[#e5eeff]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">flight_takeoff</span>
                    <div>
                      <div className="text-sm font-bold text-[#0b1c30]">Mahayogi Gorakhnath Airport (GOP)</div>
                      <div className="text-xs font-['JetBrains_Mono'] text-[#44474c]">
                        Direct express link via ring corridor
                      </div>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#426086] font-bold">
                    22 Mins
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] flex items-center justify-between shadow-sm border border-[#e5eeff]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">train</span>
                    <div>
                      <div className="text-sm font-bold text-[#0b1c30]">Gorakhpur Railway Junction (NER HQ)</div>
                      <div className="text-xs font-['JetBrains_Mono'] text-[#44474c]">
                        Major freight handling & rake transshipment
                      </div>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#426086] font-bold">
                    15 Mins
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#ffffff] flex items-center justify-between shadow-sm border border-[#e5eeff]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">flag</span>
                    <div>
                      <div className="text-sm font-bold text-[#0b1c30]">Sonauli Indo-Nepal ICP Border Post</div>
                      <div className="text-xs font-['JetBrains_Mono'] text-[#44474c]">
                        Direct international highway freight corridor
                      </div>
                    </div>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#426086] font-bold">
                    95 KM
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.google.com/?q=Bargadwa+Gorakhpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0e1c2f] text-white text-xs font-semibold hover:bg-[#426086] transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  <span>Open in Google Maps</span>
                </a>
                <span className="font-['JetBrains_Mono'] text-xs text-[#44474c]">
                  Coordinates: 26.7915° N, 83.3512° E
                </span>
              </div>
            </div>

            {/* Location Visual / Map Visual */}
            <div className="lg:col-span-6">
              <div className="bg-[#ffffff] p-4 rounded-2xl shadow-md space-y-4 border border-[#e5eeff]">
                <div
                  className="w-full h-[380px] bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-4 shadow-inner"
                  style={{ backgroundImage: `url('${BRAND_ASSETS.mapPhoto}')` }}
                >
                  <div className="p-4 bg-[#0e1c2f]/90 backdrop-blur-md rounded-xl text-white text-xs space-y-1 max-w-sm">
                    <div className="flex items-center gap-2 font-bold text-[#ffddb8]">
                      <span className="material-symbols-outlined text-[18px]">pin_drop</span>
                      <span>Vardha Warehousing Facility</span>
                    </div>
                    <p className="text-[11px] text-[#dce9ff] leading-snug">
                      Gorakhnath Mandir Road, Bargadwa, Gorakhpur, UP 273007. Continuous heavy freight
                      ingress 24×7.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 font-['JetBrains_Mono'] text-xs text-[#44474c]">
                  <div className="p-2.5 bg-[#eff4ff] rounded-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#426086]"></span>
                    <span>NO Heavy Vehicle Restrictions</span>
                  </div>
                  <div className="p-2.5 bg-[#eff4ff] rounded-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#426086]"></span>
                    <span>Wide Dual Road Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TRUSTED CLIENT FOOTPRINT & TESTIMONIAL QUOTE                           */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Trusted Ecosystem
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Anchor Distribution Hub for Leading Enterprises
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              Over 37 years, our facilities have safeguarded mission-critical supply chains for national
              FMCG giants, 3PL logistics networks, and industrial manufacturing leaders.
            </p>
          </div>

          {/* Industry Logo Wall Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                local_shipping
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                NATIONAL 3PL
              </span>
              <span className="text-[11px] text-[#44474c]">Express Freight</span>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                shopping_bag
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                FMCG RETAIL
              </span>
              <span className="text-[11px] text-[#44474c]">Packs & Consumables</span>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                precision_manufacturing
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                STEEL & PIPES
              </span>
              <span className="text-[11px] text-[#44474c]">Industrial Metals</span>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                local_mall
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                ECOMM FULFILL
              </span>
              <span className="text-[11px] text-[#44474c]">Last-Mile Hub</span>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                grain
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                AGRO COMMERCE
              </span>
              <span className="text-[11px] text-[#44474c]">Grains & Inputs</span>
            </div>

            <div className="p-6 bg-[#ffffff] rounded-2xl border border-[#e5eeff] shadow-sm flex flex-col items-center justify-center text-center group hover:bg-[#eff4ff] transition-colors">
              <span className="material-symbols-outlined text-[36px] text-[#44474c] group-hover:text-[#0b1c30] transition-colors mb-2">
                electrical_services
              </span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30]">
                CONSUMER TECH
              </span>
              <span className="text-[11px] text-[#44474c]">White Goods Staging</span>
            </div>
          </div>

          {/* Featured Testimonial Card */}
          <div className="bg-[#0e1c2f] text-white p-8 lg:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="max-w-4xl relative z-10 space-y-4">
              <div className="flex items-center gap-1 text-[#ffb95f]">
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="material-symbols-outlined text-[20px]">star</span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#dce9ff] ml-2">
                  VERIFIED ENTERPRISE TENANT
                </span>
              </div>

              <blockquote className="font-['Plus_Jakarta_Sans'] text-xl lg:text-2xl text-white italic leading-relaxed font-semibold">
                “Vardha Warehousing transformed our regional distribution throughput across Purvanchal
                and Nepal. The 118-ft frontage eliminates hours of turnaround delay our 40-ft trailers
                faced in town. Their clear plinth height and 24x7 security have resulted in zero damage
                or inventory loss across three years.”
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#426086] flex items-center justify-center font-bold text-white text-base">
                  RK
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white">
                    Rajesh Kumar Verma
                  </div>
                  <div className="font-['JetBrains_Mono'] text-xs text-[#dce9ff]">
                    Regional Supply Chain Director • North India FMCG Logistics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREQUENTLY ASKED INDUSTRIAL QUESTIONS (ACCORDION)                       */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#eff4ff]">
        <div className="max-w-5xl mx-auto px-4 lg:px-12">
          <div className="text-center mb-12">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Operational FAQs
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Frequently Asked Industrial Questions
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              Essential details regarding heavy freight access, compliance, lease tenures, and
              infrastructure.
            </p>
          </div>

          <div className="space-y-3" id="faq-accordion">
            {FAQS.slice(0, 5).map((faq, index) => (
              <details
                key={faq.id}
                className="group bg-[#ffffff] rounded-xl p-6 shadow-sm border border-[#e5eeff] [&_summary::-webkit-details-marker]:hidden"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0b1c30] pr-4">
                    {faq.question}
                  </span>
                  <span className="material-symbols-outlined text-[#426086] transition-transform duration-300 group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <div className="mt-4 pt-3 border-t border-[#eff4ff] text-sm text-[#44474c] leading-relaxed font-['Inter']">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FINAL INQUIRY & CONSULTATION CTA SECTION                                */}
      {/* ========================================================================= */}
      <section className="w-full py-16 bg-[#ffffff]" id="inquiry-section">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="bg-[#0e1c2f] rounded-3xl p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Subtle Glow Layer */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#426086] rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Text Column */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#ffb95f] uppercase tracking-wider block">
                  Immediate Space Allocation • Bargadwa Hub
                </span>
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Secure Prime Warehousing in Gorakhpur?
                </h2>
                <p className="text-sm sm:text-base text-[#dce9ff] leading-relaxed">
                  Connect directly with our industrial leasing division. Schedule a technical site
                  inspection, review CAD floor plans, and receive an itemized proposal tailored to your
                  pallet load specs.
                </p>

                <div className="pt-2 space-y-2 font-['JetBrains_Mono'] text-xs text-[#eff4ff]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[18px]">
                      phone_in_talk
                    </span>
                    <span>Direct Industrial Desk: +91 9415X XXXXX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[18px]">
                      schedule
                    </span>
                    <span>Response Guarantee: Technical Proposal within 3 Hours</span>
                  </div>
                </div>
              </div>

              {/* Fast Inquiry Form */}
              <div className="lg:col-span-6 bg-[#ffffff] text-[#0b1c30] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#e5eeff]">
                <form className="space-y-4" onSubmit={handleLeadSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Your Full Name *
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#426086]"
                        placeholder="e.g. Vikram Sharma"
                        required
                        type="text"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Company / Enterprise *
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#426086]"
                        placeholder="e.g. Apex Logistics Ltd"
                        required
                        type="text"
                        value={leadCompany}
                        onChange={(e) => setLeadCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Phone / Mobile *
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#426086]"
                        placeholder="+91 98XXX XXXXX"
                        required
                        type="tel"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Estimated Area (SQ.FT)
                      </label>
                      <select
                        className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#426086]"
                        value={leadAreaOption}
                        onChange={(e) => setLeadAreaOption(e.target.value)}
                      >
                        <option value="5k">5,000 – 10,000 sq.ft</option>
                        <option value="15k">10,000 – 25,000 sq.ft</option>
                        <option value="50k">25,000 – 50,000 sq.ft</option>
                        <option value="80k">50,000+ sq.ft (Dedicated Facility)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                      Specific Industry Requirements
                    </label>
                    <textarea
                      className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      placeholder="Describe required height, flooring weight, loading dock needs, or expected occupancy date..."
                      rows={2}
                      value={leadNotes}
                      onChange={(e) => setLeadNotes(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    className="w-full py-3.5 rounded-lg bg-[#2a1700] hover:bg-[#000000] text-[#ffddb8] font-['Plus_Jakarta_Sans'] text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Request Custom Quote & Site Visit</span>
                  </button>

                  {leadSubmitted && (
                    <div className="p-3 bg-[#e5eeff] text-[#0e1c2f] rounded-lg font-['JetBrains_Mono'] text-xs text-center border border-[#dce9ff] animate-in fade-in">
                      Inquiry transmitted. Our logistics engineer will contact you shortly.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
