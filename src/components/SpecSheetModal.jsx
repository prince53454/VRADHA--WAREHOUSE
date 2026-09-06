import React, { useState } from 'react';

export const SpecSheetModal = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      // Create a downloadable text file summary representing the engineering blueprint
      const specContent = `================================================================================
VARDHA WAREHOUSING — OFFICIAL TECHNICAL SPECIFICATION DOSSIER
Asset Location: Gorakhnath Mandir Road, Bargadwa, Gorakhpur, UP 273007
Operating Since: 1987 (37+ Years Leadership)
================================================================================

1. PROPERTY & LOGISTICS ACCESS:
- Total Master Capacity: 85,000 SQ.FT Clear Span
- Arterial Road Frontage: 36.0 Meters (118 Feet) Direct Gorakhnath Mandir Road
- Truck Ingress: Multi-axle 40-ft trailers with 0 daylight entry curfews (24x7 Unrestricted)
- Heavy Turning Apron: Reinforced concrete marshalling yard with 32m turning radius
- Highway Linkages: NH-27 (12 mins), Gorakhpur Junction (15 mins), GOP Airport (22 mins)
- International Border: Sonauli ICP (Nepal Border) 95 km direct express freight link

2. STRUCTURAL & CIVIL ATTRIBUTES:
- Clear Internal Stacking Height: 32 Feet (9.75 meters) clear to eaves
- Flooring Specification: Laser-screed FM2 Industrial Epoxy Floor
- Floor Structural Load: 6.0 Metric Tons / Sq.Meter point-load resistance
- Plinth Elevation: 1.2 Meters above finished apron grade (100% flood safe)
- Column Grid: Wide-span portal frames minimizing center aisle obstruction
- Loading Bays: Dedicated hydraulic dock levellers with cantilevered monsoon canopies

3. STATUTORY COMPLIANCE & SAFETY:
- Fire NOC: Grade-A Industrial Compliant
- Suppression Infrastructure: Continuous ring-main fire hydrants, internal hose reels, smoke detectors
- Perimeter Enclosure: 10-ft reinforced masonry security wall with barbed concertina wire
- CCTV Surveillance: 360-degree 4K IP cameras with 60-day encrypted video retention
- Guard Deployment: 24x7 static guard posts and hourly motorized perimeter patrols

4. ELECTRICAL & UTILITY RESILIENCE:
- Dedicated 3-Phase Industrial Transformer Feeder
- 100% Back-up: 125 KVA automatic diesel generator synchronizing loop
- Lighting: High-bay 150 Lux LED energy-efficient luminaires
- Office Infrastructure: Air-conditioned executive suites, audit cubicles, dual optical fiber ISPs

CONTACT & LEASING DESK:
Direct Phone: +91 9415X XXXXX
Email: operations@vardhawarehousing.com
Web: https://vardhawarehousing.com
================================================================================`;

      const blob = new Blob([specContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Vardha-Warehousing-Gorakhpur-SpecSheet-2025.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e5eeff] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#0e1c2f] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f]">
              ENGINEERING SPECIFICATION DOSSIER
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
              Vardha Industrial Facility Blueprints & Specs
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#44474c] block">CLEAR HEIGHT</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">32 Feet</span>
              <span className="text-[10px] text-[#75777d] block">5-Tier Pallet Racking</span>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#44474c] block">ROAD FRONTAGE</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">36m / 118-ft</span>
              <span className="text-[10px] text-[#75777d] block">Multi-Axle Access</span>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#44474c] block">FLOOR LOAD</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">6.0 MT/SQ.M</span>
              <span className="text-[10px] text-[#75777d] block">FM2 Laser Screed</span>
            </div>
            <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#dce9ff]">
              <span className="text-[11px] font-['JetBrains_Mono'] text-[#44474c] block">PLINTH HEIGHT</span>
              <span className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#0b1c30]">1.2m Docks</span>
              <span className="text-[10px] text-[#75777d] block">Hydraulic Levellers</span>
            </div>
          </div>

          <div className="space-y-3 font-['Inter'] text-sm text-[#0b1c30]">
            <h4 className="font-bold text-base text-[#0e1c2f] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#426086]">architecture</span>
              Civil & Architectural Parameters
            </h4>
            <div className="border border-[#e5eeff] rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <tbody className="divide-y divide-[#e5eeff]">
                  <tr className="bg-[#eff4ff]">
                    <td className="p-3 font-semibold w-1/3">Campus Total Land</td>
                    <td className="p-3 text-[#44474c]">Over 3.5 Acres heavy industrial freehold title</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Active Covered Footprint</td>
                    <td className="p-3 text-[#44474c]">85,000 SQ.FT clear-span high-bay engineered PEB sheds</td>
                  </tr>
                  <tr className="bg-[#eff4ff]">
                    <td className="p-3 font-semibold">Structural Frame</td>
                    <td className="p-3 text-[#44474c]">Custom steel portal columns, Zincalume profile roof sheets with skylights</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Plinth & Drainage</td>
                    <td className="p-3 text-[#44474c]">Engineered concrete culverts, storm water harvest loop, flood proof</td>
                  </tr>
                  <tr className="bg-[#eff4ff]">
                    <td className="p-3 font-semibold">Fire & Safety</td>
                    <td className="p-3 text-[#44474c]">External ring-main hydrant system with 1.5L-liter underground reservoir</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 bg-[#eff4ff] rounded-xl flex items-center justify-between border border-[#dce9ff]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#426086] text-[28px]">picture_as_pdf</span>
              <div>
                <span className="font-bold text-sm text-[#0b1c30] block">
                  Vardha-Gorakhpur-Master-Spec-Sheet.pdf
                </span>
                <span className="text-xs text-[#44474c]">
                  Includes CAD floor plans, dock cross-sections & fire compliance clearances
                </span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="px-4 py-2 bg-[#0e1c2f] hover:bg-[#426086] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {downloading ? 'sync' : 'download'}
              </span>
              <span>{downloading ? 'Generating...' : 'Download Dossier'}</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-[#e5eeff] text-[#0e1c2f] rounded-lg text-xs font-['JetBrains_Mono'] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-[#426086]">check_circle</span>
              <span>Dossier downloaded successfully. Our team remains on standby for CAD CAD DWG files.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
