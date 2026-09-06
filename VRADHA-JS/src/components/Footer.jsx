import React from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';
import { WEBSITE_PAGES } from '../data/pages';

export const Footer = ({ onNavigate, onOpenBooking, onOpenSpecSheet }) => {
  return (
    <footer className="w-full bg-[#ffffff] text-[#0b1c30] border-t border-[#e5eeff]">
      {/* Upper Operational Trust Ribbon */}
      <div className="bg-[#eff4ff] py-3.5 border-b border-[#dce9ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-wrap items-center justify-between gap-4 font-['JetBrains_Mono'] text-xs text-[#44474c]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[18px]">security</span>
            <span className="font-semibold text-[#0b1c30]">24x7 CCTV Monitored</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[18px]">fire_extinguisher</span>
            <span className="font-semibold text-[#0b1c30]">Fire Safety Compliant & Ring Main</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[18px]">alt_route</span>
            <span className="font-semibold text-[#0b1c30]">118-ft Arterial Frontage</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#426086] text-[18px]">domain</span>
            <span className="font-semibold text-[#0b1c30]">Grade-A Attached Office & Quarters</span>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Brand Information & Physical Coordinates */}
        <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-8">
          <div className="flex items-center gap-3">
            <img
              alt="Vardha Warehousing Brand Logo"
              className="h-8 w-auto object-contain"
              src={BRAND_ASSETS.logo}
            />
            <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">
              Vardha Warehousing
            </span>
          </div>
          <p className="text-sm text-[#44474c] leading-relaxed max-w-md">
            Pioneering high-grade commercial warehousing and supply chain infrastructure across Eastern
            Uttar Pradesh since 1987. Engineered clear-span layouts, heavy vehicle logistics clearance,
            and institutional-grade asset security in Gorakhpur.
          </p>
          <div className="space-y-2 text-sm text-[#0b1c30]">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px] mt-0.5">pin_drop</span>
              <span>Gorakhnath Mandir Road, Bargadwa, Gorakhpur, Uttar Pradesh 273007</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px]">call</span>
              <span>+91 9415X XXXXX / +91 551X XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#426086] text-[18px]">alternate_email</span>
              <span>operations@vardhawarehousing.com</span>
            </div>
          </div>
        </div>

        {/* Dedicated Column: All 9 Website Pages */}
        <div className="lg:col-span-2 bg-[#f8f9ff] p-5 rounded-2xl border border-[#dce9ff]">
          <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] uppercase mb-3 tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
            <span>All 9 Website Pages</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {WEBSITE_PAGES.map((page) => (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className="text-left py-1.5 px-2 rounded-md hover:bg-[#eff4ff] text-[#44474c] hover:text-[#0b1c30] transition-colors cursor-pointer flex items-center gap-2"
              >
                <span className="font-['JetBrains_Mono'] font-bold text-[#426086] text-[11px] w-4">
                  {page.number}.
                </span>
                <span className="font-medium truncate">{page.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Solutions & Facilities */}
        <div>
          <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] uppercase mb-4 tracking-wider">
            Key Solutions
          </div>
          <ul className="space-y-2.5 text-xs text-[#44474c]">
            <li>
              <button
                onClick={() => onNavigate('warehouse-solutions')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                3PL & FMCG Distribution
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('warehouse-solutions')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                Industrial Agro Storage
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('warehouse-solutions')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                E-Commerce Fulfillment
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('warehouse-solutions')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                Indo-Nepal Staging
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('space-calculator-and-booking')}
                className="text-[#426086] font-bold hover:underline cursor-pointer text-left"
              >
                Book Warehouse Space →
              </button>
            </li>
          </ul>
        </div>

        {/* Compliance & Direct Actions */}
        <div>
          <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#0b1c30] uppercase mb-4 tracking-wider">
            Quick Actions
          </div>
          <ul className="space-y-2.5 text-xs text-[#44474c]">
            <li>
              <button
                onClick={() => onNavigate('warehouse-facility')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                118-ft Arterial Frontage
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('warehouse-facility')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                FM2 Laser-Screed Floors
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('faq')}
                className="hover:text-[#0b1c30] transition-colors cursor-pointer text-left"
              >
                Fire NOC & Compliance
              </button>
            </li>
            <li>
              <button
                onClick={onOpenSpecSheet}
                className="text-[#0e1c2f] font-bold hover:underline cursor-pointer text-left flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">download</span>
                Download Spec Sheet (PDF)
              </button>
            </li>
            <li>
              <button
                onClick={onOpenBooking}
                className="mt-2 inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-[#2a1700] text-[#ffddb8] font-bold text-xs hover:bg-[#000000] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">warehouse</span>
                Book Space Now
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Accreditations Line */}
      <div className="bg-[#ffffff] py-6 border-t border-[#e5eeff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#44474c] text-xs font-['Inter']">
          <div>© {new Date().getFullYear()} Vardha Warehousing. All 9 Website Pages Operational. Gorakhpur, UP.</div>
          <div className="flex items-center gap-6 font-['JetBrains_Mono'] text-[11px]">
            <span>Enterprise Logistics Hub</span>
            <span className="hidden sm:inline">•</span>
            <span>ISO 9001:2015 Compliant Standards</span>
            <span className="hidden sm:inline">•</span>
            <button onClick={onOpenSpecSheet} className="text-[#426086] hover:underline cursor-pointer">
              Download Spec Sheet
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
