import React, { useState } from 'react';

export const ClientPortalModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('gate');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e5eeff] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0e1c2f] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#ffb95f]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span>LIVE OPERATIONS TELEMETRY DESK</span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
              Facility Operations & Tenant Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#e5eeff] bg-[#eff4ff] px-6">
          <button
            onClick={() => setActiveTab('gate')}
            className={`py-3 px-4 font-['JetBrains_Mono'] text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'gate'
                ? 'border-[#0e1c2f] text-[#0e1c2f] bg-white'
                : 'border-transparent text-[#44474c] hover:text-[#0b1c30]'
            }`}
          >
            Live Ingress Gate
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`py-3 px-4 font-['JetBrains_Mono'] text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'telemetry'
                ? 'border-[#0e1c2f] text-[#0e1c2f] bg-white'
                : 'border-transparent text-[#44474c] hover:text-[#0b1c30]'
            }`}
          >
            Power & CCTV Status
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`py-3 px-4 font-['JetBrains_Mono'] text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'support'
                ? 'border-[#0e1c2f] text-[#0e1c2f] bg-white'
                : 'border-transparent text-[#44474c] hover:text-[#0b1c30]'
            }`}
          >
            Facility Manager Desk
          </button>
        </div>

        <div className="p-6 space-y-4">
          {activeTab === 'gate' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#44474c]">
                <span>RECENT TRUCK MOVEMENTS (BARGADWA GATE 1 & 2)</span>
                <span className="text-[#10b981] font-bold">24x7 UNRESTRICTED</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#eff4ff] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">local_shipping</span>
                    <div>
                      <span className="font-bold text-[#0b1c30]">UP 53 BT 4921 (40-ft Container)</span>
                      <span className="block text-[#44474c]">FMCG Inbound • Dock #3</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#d3e4fe] text-[#0b1c30] rounded font-['JetBrains_Mono']">
                    Docked 18 mins ago
                  </span>
                </div>
                <div className="p-3 bg-[#eff4ff] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">local_shipping</span>
                    <div>
                      <span className="font-bold text-[#0b1c30]">NL 01 K 8832 (Multi-Axle Trailer)</span>
                      <span className="block text-[#44474c]">Nepal Transit Cargo • Dock #5</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#d3e4fe] text-[#0b1c30] rounded font-['JetBrains_Mono']">
                    Dispatched 42 mins ago
                  </span>
                </div>
                <div className="p-3 bg-[#eff4ff] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#426086]">local_shipping</span>
                    <div>
                      <span className="font-bold text-[#0b1c30]">UP 53 AT 1109 (E-Commerce Van)</span>
                      <span className="block text-[#44474c]">Last-Mile Hub Sorting • Bay B</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-[#d3e4fe] text-[#0b1c30] rounded font-['JetBrains_Mono']">
                    Sorting In Progress
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#44474c] block">GRID POWER FEED</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">Active 3-Phase</span>
                  <span className="text-[11px] text-[#10b981] font-semibold block mt-1">415V Nominal Steady</span>
                </div>
                <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#44474c] block">DG BACKUP LOOP</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">125 KVA Ready</span>
                  <span className="text-[11px] text-[#426086] font-semibold block mt-1">Auto Synchronized</span>
                </div>
                <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#44474c] block">SURVEILLANCE IP CCTV</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">32/32 Cameras Online</span>
                  <span className="text-[11px] text-[#10b981] font-semibold block mt-1">60-Day Archival Active</span>
                </div>
                <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                  <span className="text-xs font-['JetBrains_Mono'] text-[#44474c] block">FIRE MAIN PRESSURE</span>
                  <span className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#0b1c30]">7.2 Bar Ring Main</span>
                  <span className="text-[11px] text-[#10b981] font-semibold block mt-1">100% Tested & Verified</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="p-4 bg-[#eff4ff] rounded-xl space-y-3">
              <h4 className="font-bold text-sm text-[#0b1c30]">24x7 Facility Station Master</h4>
              <p className="text-xs text-[#44474c] leading-relaxed">
                For active tenants requiring immediate gate clearances, container overnight yard staging, or dock leveler servicing:
              </p>
              <div className="p-3 bg-white rounded-lg border border-[#dce9ff] text-xs space-y-1 font-['JetBrains_Mono']">
                <div className="flex justify-between">
                  <span>Operations Manager:</span>
                  <span className="font-bold">+91 9415X XXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Gate Control:</span>
                  <span className="font-bold">+91 551X XXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span>Control Room Dispatch:</span>
                  <span className="font-bold text-[#426086]">ops@vardhawarehousing.com</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg bg-[#0e1c2f] hover:bg-[#426086] text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close Operations View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
