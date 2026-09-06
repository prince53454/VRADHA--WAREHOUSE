import React, { useState } from 'react';
import { SECTORS } from '../data/warehouseData';

export const CalculatorScreen = ({
  onNavigate,
  onOpenBookingWithDetails,
  onOpenSpecSheet,
}) => {
  const [selectedSector, setSelectedSector] = useState('fmcg');
  const [carpetArea, setCarpetArea] = useState(18000);
  const [rackingType, setRackingType] = useState('selective');
  const [leaseHorizon, setLeaseHorizon] = useState('standard');

  const currentSectorObj = SECTORS.find((s) => s.id === selectedSector) || SECTORS[0];

  // Racking multiplier
  const rackingFactor = rackingType === 'selective' ? 1.25 : rackingType === 'drivein' ? 1.6 : 0.8;
  const totalPallets = Math.round((carpetArea / 10) * currentSectorObj.palletFactor * rackingFactor);
  const totalCbm = Math.round(carpetArea * 0.9 * (32 * 0.0283)); // Volumetric CBM
  const dockDoors = Math.max(2, Math.round(carpetArea / 3800));
  const officeDesks = Math.max(4, Math.round(carpetArea / 2200));
  const powerKva = Math.round(carpetArea * 0.005 + 20);

  // Approximate commercial rate indicator (standard Purvanchal Grade-A benchmark approx INR 22-26/sqft)
  const estRateLow = carpetArea * 22;
  const estRateHigh = carpetArea * 26;

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 4 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">calculate</span>
            <span>CAPACITY MODELING ENGINE • INSTANT LOGISTICS QUOTE</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Book Warehouse Space & Capacity Modeling
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              Input your commercial supply chain dimensions, racking preference, and cargo velocity to
              generate instantaneous pallet counts, dock allocations, and customized lease modeling.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Modeler Grid */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Configurator */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-[#e5eeff] space-y-6">
              {/* Step 1: Industry */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                    1. Industry Cargo Classification
                  </span>
                  <span className="text-xs font-['JetBrains_Mono'] text-[#426086]">
                    Factor: {currentSectorObj.palletFactor}x
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SECTORS.map((s) => {
                    const isSelected = selectedSector === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedSector(s.id)}
                        className={`p-3 rounded-xl text-left transition-all flex flex-col gap-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0e1c2f] text-white font-semibold ring-2 ring-[#0e1c2f] shadow-sm'
                            : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[20px] ${
                            isSelected ? 'text-[#ffb95f]' : 'text-[#426086]'
                          }`}
                        >
                          {s.icon}
                        </span>
                        <span className="text-xs font-bold font-['Plus_Jakarta_Sans']">{s.name}</span>
                        <span className="text-[10px] opacity-75 font-['JetBrains_Mono'] truncate">
                          {s.recommendedBay}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Carpet Area Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">
                    2. Required Usable Carpet Area
                  </span>
                  <div className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#426086]">
                    {carpetArea.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-normal text-[#44474c]">SQ.FT</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="3000"
                  max="80000"
                  step="1000"
                  value={carpetArea}
                  onChange={(e) => setCarpetArea(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#dce9ff] rounded-lg appearance-none cursor-pointer accent-[#0e1c2f]"
                />

                <div className="flex justify-between font-['JetBrains_Mono'] text-[11px] text-[#44474c]">
                  <span>3,000 SQ.FT (Min Bay)</span>
                  <span>15,000 SQ.FT</span>
                  <span>40,000 SQ.FT</span>
                  <span>80,000+ SQ.FT</span>
                </div>

                {/* Quick Area Preset Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[5000, 10000, 15000, 25000, 50000, 80000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setCarpetArea(preset)}
                      className={`px-3 py-1 rounded-lg text-xs font-['JetBrains_Mono'] transition-colors cursor-pointer ${
                        carpetArea === preset
                          ? 'bg-[#0e1c2f] text-white font-bold'
                          : 'bg-[#eff4ff] text-[#0b1c30] hover:bg-[#dce9ff]'
                      }`}
                    >
                      {preset.toLocaleString('en-IN')} SQ.FT
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Racking Storage Configuration */}
              <div className="space-y-3 pt-2">
                <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30] block">
                  3. Storage & Racking Architecture
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setRackingType('selective')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      rackingType === 'selective'
                        ? 'bg-[#eff4ff] border-[#0e1c2f] ring-2 ring-[#0e1c2f]'
                        : 'border-[#e5eeff] hover:bg-[#eff4ff]'
                    }`}
                  >
                    <span className="font-bold text-xs text-[#0b1c30] block">Selective Racking</span>
                    <span className="text-[11px] text-[#44474c] block mt-0.5">
                      4–5 Tier Reach Truck Ready (100% SKU Access)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRackingType('floor')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      rackingType === 'floor'
                        ? 'bg-[#eff4ff] border-[#0e1c2f] ring-2 ring-[#0e1c2f]'
                        : 'border-[#e5eeff] hover:bg-[#eff4ff]'
                    }`}
                  >
                    <span className="font-bold text-xs text-[#0b1c30] block">Floor Block Stacking</span>
                    <span className="text-[11px] text-[#44474c] block mt-0.5">
                      Bulk bags, coils, crates & heavy pallet stacks
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRackingType('drivein')}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      rackingType === 'drivein'
                        ? 'bg-[#eff4ff] border-[#0e1c2f] ring-2 ring-[#0e1c2f]'
                        : 'border-[#e5eeff] hover:bg-[#eff4ff]'
                    }`}
                  >
                    <span className="font-bold text-xs text-[#0b1c30] block">Drive-In / VNA</span>
                    <span className="text-[11px] text-[#44474c] block mt-0.5">
                      Maximum volumetric cube density
                    </span>
                  </button>
                </div>
              </div>

              {/* Step 4: Lease Horizon */}
              <div className="space-y-3 pt-2">
                <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30] block">
                  4. Lease Model & Occupancy Horizon
                </span>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon-page"
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
                      Surge Lease<br />
                      <span className="text-[10px] font-normal opacity-80">(3-6 Months)</span>
                    </div>
                  </label>

                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="horizon-page"
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
                      name="horizon-page"
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
                      Enterprise 3-5 Yrs<br />
                      <span className="text-[10px] font-normal opacity-80">(Custom SLA)</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Calculated Output Slate */}
            <div className="lg:col-span-5 bg-[#0e1c2f] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 relative overflow-hidden border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] uppercase tracking-wider font-bold">
                    ESTIMATED LOGISTICS SLATE
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
                    {carpetArea.toLocaleString('en-IN')} SQ.FT Capacity
                  </h3>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs px-2.5 py-1 bg-[#10b981]/20 text-[#10b981] font-bold rounded-full">
                  Verified Bay
                </span>
              </div>

              {/* 4 Metric Tiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                    Pallet Positions
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#ffddb8]">
                    {totalPallets.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                    Based on {rackingType} configuration
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                    Dedicated Docks
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                    {dockDoors} Bays
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                    1.2m elevated hydraulic levelers
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                    Volumetric Cube
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                    {totalCbm.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                    Cubic Meters @ 32ft clear
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#dce9ff] uppercase block">
                    Power Allocation
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                    {powerKva} KVA
                  </span>
                  <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block mt-1">
                    100% DG synchronised loop
                  </span>
                </div>
              </div>

              {/* Commercial Budget Indicator */}
              <div className="p-4 rounded-2xl bg-[#ffddb8]/10 border border-[#ffddb8]/30 space-y-1">
                <div className="flex justify-between items-center text-xs font-['JetBrains_Mono'] text-[#ffddb8]">
                  <span>ESTIMATED MONTHLY BASE LEASE RANGE</span>
                  <span>PURVANCHAL BENCHMARK</span>
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                  ₹{(estRateLow / 100000).toFixed(2)}L – ₹{(estRateHigh / 100000).toFixed(2)}L{' '}
                  <span className="text-xs font-normal text-[#dce9ff]">/ month</span>
                </div>
                <span className="text-[10px] font-['JetBrains_Mono'] text-[#dce9ff]/70 block">
                  Subject to specific tenant fit-outs, racking inclusions, and lease term lock-in.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onOpenBookingWithDetails(carpetArea, selectedSector)}
                  className="w-full py-4 rounded-xl bg-[#ffb95f] hover:bg-[#ffddb8] text-[#2a1700] font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">warehouse</span>
                  <span>Book This Space & Schedule Site Walkthrough</span>
                </button>

                <button
                  onClick={onOpenSpecSheet}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-['JetBrains_Mono'] text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download Detailed Calculation Dossier (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
