import React, { useState } from 'react';
import { BAYS, BRAND_ASSETS } from '../data/warehouseData';

export const FacilityScreen = ({
  onNavigate,
  onOpenBookingWithDetails,
  onOpenSpecSheet,
}) => {
  const [selectedBayId, setSelectedBayId] = useState('bay-a');

  const selectedBay = BAYS.find((b) => b.id === selectedBayId) || BAYS[0];

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Hero Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 3 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">architecture</span>
            <span>GRADE-A INDUSTRIAL ARCHITECTURE & CLEAR-SPAN SCHEMATICS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
                Institutional Facility Infrastructure & Bay Engineering
              </h1>
              <p className="text-base sm:text-lg text-[#44474c] leading-relaxed max-w-2xl font-['Inter']">
                Engineered with high volumetric cubic capacity, laser-screed FM2 flooring, and high-speed
                multimodal cross-docking bays. Built to eliminate supply chain friction for heavy freight.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBookingWithDetails(selectedBay.availableSqFt || 15000, 'fmcg')}
                  className="px-6 py-3 rounded-lg bg-[#2a1700] hover:bg-black text-[#ffddb8] font-semibold text-sm transition-all shadow-sm cursor-pointer"
                >
                  Reserve Active Bay
                </button>
                <button
                  onClick={onOpenSpecSheet}
                  className="px-6 py-3 rounded-lg bg-[#eff4ff] hover:bg-[#dce9ff] text-[#0b1c30] font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>CAD Blueprints & Tech Specs</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#eff4ff] p-6 rounded-2xl border border-[#dce9ff] space-y-3">
              <div className="font-['JetBrains_Mono'] text-xs text-[#426086] uppercase font-bold">
                CORE STRUCTURAL METRICS
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-[#dce9ff]">
                  <span className="text-[#44474c]">Clear Height:</span>
                  <span className="font-bold text-[#0b1c30]">32 – 34 Feet</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#dce9ff]">
                  <span className="text-[#44474c]">Road Frontage:</span>
                  <span className="font-bold text-[#0b1c30]">36 Meters (118 Ft)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#dce9ff]">
                  <span className="text-[#44474c]">Floor Load Rating:</span>
                  <span className="font-bold text-[#0b1c30]">6.0 MT / SQ.M</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#dce9ff]">
                  <span className="text-[#44474c]">Plinth Height:</span>
                  <span className="font-bold text-[#0b1c30]">1.2 Meters (Elevated Docks)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#44474c]">Fire System:</span>
                  <span className="font-bold text-[#0b1c30]">Ring Main + Hydrants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE 2D WAREHOUSE BAY & BLUEPRINT EXPLORER                         */}
      {/* ========================================================================= */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#426086] uppercase tracking-widest block mb-2">
              Interactive CAD Site Visualizer
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl font-bold text-[#0b1c30]">
              Master Site Layout & Bay Selection
            </h2>
            <p className="text-[#44474c] text-sm sm:text-base mt-2">
              Click on the warehouse sections below to inspect structural clear heights, dock door positions,
              and live occupancy status.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Blueprint Canvas Representation */}
            <div className="lg:col-span-8 bg-[#0e1c2f] p-6 sm:p-8 rounded-3xl text-white shadow-xl space-y-6 relative overflow-hidden border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] block">
                    SITE MASTER PLAN • REVISION 2025
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold">
                    Bargadwa Campus: 85,000 SQ.FT Total Clear Span
                  </span>
                </div>
                <div className="flex items-center gap-3 font-['JetBrains_Mono'] text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span> Available Space
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span> Partially Leased
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#64748b]"></span> Reserved Bay
                  </span>
                </div>
              </div>

              {/* Road Frontage Indicator */}
              <div className="bg-[#426086]/30 border border-[#426086] p-3 rounded-xl text-center font-['JetBrains_Mono'] text-xs text-[#dce9ff] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">straight</span>
                <span>GORAKHNATH MANDIR ARTERIAL ROAD (36M / 118-FT WIDE FRONTAGE)</span>
                <span className="material-symbols-outlined text-[18px]">straight</span>
              </div>

              {/* Heavy Vehicle Apron Staging Zone */}
              <div className="p-4 bg-white/5 border border-dashed border-white/20 rounded-2xl text-center font-['JetBrains_Mono'] text-xs text-[#eff4ff]">
                <div className="flex items-center justify-center gap-2 font-bold mb-1 text-[#ffddb8]">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span>HEAVY FREIGHT MARSHALLING YARD & 40-FT TURNING APRON</span>
                </div>
                <span className="text-[11px] text-[#dce9ff]/70">
                  Reinforced all-weather concrete apron with simultaneous 8-truck dock staging
                </span>
              </div>

              {/* Bay Selection Cards inside Blueprint */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BAYS.map((bay) => {
                  const isSelected = selectedBayId === bay.id;
                  const statusBg =
                    bay.status === 'available'
                      ? 'border-[#10b981]'
                      : bay.status === 'partially-leased'
                      ? 'border-[#f59e0b]'
                      : 'border-[#64748b]';

                  return (
                    <button
                      key={bay.id}
                      onClick={() => setSelectedBayId(bay.id)}
                      className={`p-5 rounded-2xl text-left transition-all relative overflow-hidden border-2 cursor-pointer ${
                        isSelected
                          ? 'bg-white/15 ring-2 ring-[#ffb95f] shadow-lg'
                          : 'bg-white/5 hover:bg-white/10'
                      } ${statusBg}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] font-bold">
                          BAY {bay.id.split('-')[1].toUpperCase()}
                        </span>
                        <span
                          className={`text-[10px] font-['JetBrains_Mono'] px-2 py-0.5 rounded font-bold ${
                            bay.status === 'available'
                              ? 'bg-[#10b981]/20 text-[#10b981]'
                              : bay.status === 'partially-leased'
                              ? 'bg-[#f59e0b]/20 text-[#ffb95f]'
                              : 'bg-white/10 text-white/60'
                          }`}
                        >
                          {bay.status === 'available'
                            ? 'Available'
                            : bay.status === 'partially-leased'
                            ? 'Partially Open'
                            : 'Fully Leased'}
                        </span>
                      </div>

                      <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white mb-1">
                        {bay.name.split('(')[0]}
                      </h4>
                      <div className="text-xs text-[#dce9ff]/80 space-y-0.5 font-['JetBrains_Mono']">
                        <div>Footprint: {bay.totalSqFt.toLocaleString()} SQ.FT</div>
                        <div>Clear Ht: {bay.clearHeight} FT</div>
                        <div className="text-[#ffddb8] font-bold">
                          Immediate: {bay.availableSqFt.toLocaleString()} SQ.FT
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Administrative Annex & Security Gate Block */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-['JetBrains_Mono'] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffddb8] text-[24px]">corporate_fare</span>
                  <div>
                    <span className="font-bold text-white block">HQ Admin Annex</span>
                    <span className="text-[#dce9ff]/70 text-[11px]">Air-conditioned offices & audit cubicles</span>
                  </div>
                </div>

                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-['JetBrains_Mono'] flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#ffddb8] text-[24px]">shield</span>
                  <div>
                    <span className="font-bold text-white block">Biometric Security Gate</span>
                    <span className="text-[#dce9ff]/70 text-[11px]">24x7 Guard station & driver rest rooms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Bay Inspection Panel */}
            <div className="lg:col-span-4 bg-[#eff4ff] p-6 sm:p-8 rounded-3xl border border-[#dce9ff] space-y-6">
              <div className="space-y-1">
                <span className="font-['JetBrains_Mono'] text-xs text-[#426086] uppercase font-bold">
                  INSPECTION DETAILS
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                  {selectedBay.name}
                </h3>
              </div>

              <div className="space-y-3 font-['Inter'] text-sm">
                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Total Built Area:</span>
                  <span className="font-bold text-[#0b1c30]">{selectedBay.totalSqFt.toLocaleString()} SQ.FT</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Immediate Vacancy:</span>
                  <span className="font-bold text-[#426086]">
                    {selectedBay.availableSqFt > 0
                      ? `${selectedBay.availableSqFt.toLocaleString()} SQ.FT Ready`
                      : 'Fully Committed'}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Clear Vertical Span:</span>
                  <span className="font-bold text-[#0b1c30]">{selectedBay.clearHeight} Feet to Eaves</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Dedicated Docks:</span>
                  <span className="font-bold text-[#0b1c30]">{selectedBay.docks} Hydraulic Doors</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Structural Floor Load:</span>
                  <span className="font-bold text-[#0b1c30]">{selectedBay.floorLoad}</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e5eeff] flex justify-between items-center">
                  <span className="text-[#44474c]">Dedicated Power Loop:</span>
                  <span className="font-bold text-[#0b1c30]">{selectedBay.powerKva} KVA 3-Phase</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() =>
                    onOpenBookingWithDetails(
                      selectedBay.availableSqFt > 0 ? selectedBay.availableSqFt : 15000,
                      'fmcg'
                    )
                  }
                  className="w-full py-3.5 rounded-xl bg-[#2a1700] hover:bg-black text-[#ffddb8] font-['Plus_Jakarta_Sans'] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Request Lease Quote for This Bay</span>
                </button>

                <button
                  onClick={onOpenSpecSheet}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-[#dce9ff] text-[#0b1c30] font-['JetBrains_Mono'] text-xs font-semibold border border-[#dce9ff] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">picture_as_pdf</span>
                  <span>Download Bay CAD Drawing</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Photography Breakout */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#dce9ff] relative group">
              <img
                src={BRAND_ASSETS.interiorPhoto}
                alt="Interior laser screed warehouse floor"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-white space-y-2">
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  FM2 Laser-Screed Heavy Floor
                </h4>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  Engineered to prevent surface dusting and joint degradation under continuous reach truck,
                  VNA, and pallet jack friction. Supports up to 6 MT / sq.m concentrated loads.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#dce9ff] relative group">
              <img
                src={BRAND_ASSETS.exteriorPhoto}
                alt="Exterior loading docks with canopy"
                className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 bg-white space-y-2">
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
                  All-Weather Sheltered Loading Docks
                </h4>
                <p className="text-xs text-[#44474c] leading-relaxed">
                  1.2m raised plinth with hydraulic levelers and 4.5m cantilevered steel canopies enabling
                  continuous cross-docking loading and offloading even during monsoon downpours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
