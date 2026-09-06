import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';
import { WEBSITE_PAGES } from '../data/pages';

export const Header = ({
  currentScreen,
  onNavigate,
  onOpenBooking,
  onOpenSpecSheet,
  onOpenPortal,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#ffffff] shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-b border-[#e5eeff]">
      {/* Tier 1: Industrial Dispatch Banner */}
      <div className="bg-[#0e1c2f] text-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-9 flex items-center justify-between font-['JetBrains_Mono'] text-[11px] tracking-wider">
          <div className="flex items-center gap-3 truncate">
            <span className="flex items-center gap-1 text-[#ffb95f] font-semibold">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              Gorakhpur, UP • Gorakhnath Mandir Road, Bargadwa
            </span>
            <span className="hidden lg:inline text-[#77849c]">|</span>
            <span className="hidden lg:inline text-[#eff4ff]">36m / 118-ft Wide Road Frontage</span>
            <span className="hidden xl:inline text-[#77849c]">|</span>
            <span className="hidden xl:inline text-[#d3e4ff]">No Heavy Commercial Vehicle Curfew</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919415000000"
              className="hidden sm:flex items-center gap-1 text-[#eff4ff] hover:text-[#ffddb8] transition-colors"
            >
              <span className="material-symbols-outlined text-[13px]">call</span>
              +91 9415X XXXXX
            </a>
            <div className="bg-[#000000] px-2.5 py-0.5 rounded-full flex items-center gap-1 text-[#ffb95f] text-[10px] font-bold">
              <span className="material-symbols-outlined text-[12px] text-[#ffb95f]">verified</span>
              <span>EST. 1987 (37+ YRS)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Brand Bar & Quick Actions */}
      <div className="h-16 max-w-7xl mx-auto px-4 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <img
            alt="Vardha Warehousing Brand Logo"
            className="h-9 w-auto object-contain"
            src={BRAND_ASSETS.logo}
          />
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#0b1c30] tracking-tight group-hover:text-[#426086] transition-colors">
              Vardha Warehousing
            </span>
            <span className="font-['JetBrains_Mono'] uppercase tracking-widest text-[9px] text-[#44474c] font-semibold">
              Grade-A Logistics Asset • Gorakhpur
            </span>
          </div>
        </button>

        {/* Quick Action CTAs */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenSpecSheet}
            className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#eff4ff] text-[#426086] hover:bg-[#dce9ff] hover:text-[#0b1c30] font-['JetBrains_Mono'] text-xs font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Spec Sheet</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2a1700] text-[#ffddb8] hover:bg-[#000000] transition-all text-xs font-bold shadow-[0_2px_8px_rgba(42,23,0,0.2)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">warehouse</span>
            <span>Book Space</span>
          </button>

          <button
            onClick={onOpenPortal}
            title="Tenant & Operations Desk"
            className="w-8 h-8 rounded-full bg-[#0b1c30] hover:bg-[#426086] flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">person</span>
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#0b1c30] hover:bg-[#eff4ff] rounded-lg transition-colors ml-1 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Tier 3: Always-Visible 9-Page Navigation Bar */}
      <div className="bg-[#f8f9ff] border-t border-[#e5eeff] px-3 lg:px-12 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Scrollable List of All 9 Pages */}
          <nav className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none w-full">
            <span className="hidden 2xl:inline-block font-['JetBrains_Mono'] text-[10px] font-bold text-[#77849c] uppercase tracking-wider mr-1 whitespace-nowrap">
              Pages:
            </span>
            {WEBSITE_PAGES.map((page) => {
              const isActive = currentScreen === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => onNavigate(page.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0e1c2f] text-white font-bold shadow-xs ring-1 ring-[#ffb95f]'
                      : 'text-[#44474c] hover:text-[#0b1c30] hover:bg-[#eff4ff] font-medium'
                  }`}
                >
                  <span
                    className={`font-['JetBrains_Mono'] text-[10px] font-extrabold w-4 h-4 rounded flex items-center justify-center ${
                      isActive ? 'bg-[#ffb95f] text-[#0e1c2f]' : 'bg-[#e5eeff] text-[#426086]'
                    }`}
                  >
                    {page.number}
                  </span>
                  <span>{page.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e5eeff] bg-[#ffffff] px-4 py-5 shadow-2xl animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#e5eeff]">
            <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] uppercase tracking-wider">
              All 9 Website Pages
            </span>
            <span className="text-xs text-[#77849c] font-['JetBrains_Mono']">
              Direct Page Switcher
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {WEBSITE_PAGES.map((page) => {
              const isActive = currentScreen === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => {
                    onNavigate(page.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left p-3 rounded-xl transition-all flex items-start gap-3 ${
                    isActive
                      ? 'bg-[#0e1c2f] text-white font-bold shadow-sm ring-2 ring-[#ffb95f]'
                      : 'bg-[#f8f9ff] text-[#0b1c30] hover:bg-[#eff4ff] border border-[#e5eeff]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-['JetBrains_Mono'] text-xs font-bold shrink-0 ${
                      isActive ? 'bg-[#ffb95f] text-[#0e1c2f]' : 'bg-[#0e1c2f] text-white'
                    }`}
                  >
                    {page.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-['Plus_Jakarta_Sans'] text-sm font-bold block truncate">
                        {page.title}
                      </span>
                    </div>
                    <span
                      className={`text-[11px] block truncate ${
                        isActive ? 'text-[#ffddb8]' : 'text-[#77849c]'
                      }`}
                    >
                      {page.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#eff4ff] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#2a1700] text-[#ffddb8] font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">warehouse</span>
              <span>Book Warehouse Space Now</span>
            </button>
            <button
              onClick={() => {
                onOpenSpecSheet();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-[#eff4ff] text-[#0b1c30] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Technical Spec Sheet (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
