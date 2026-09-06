import React, { useState } from 'react';
import { SECTORS } from '../data/warehouseData';

export const BookingModal = ({
  isOpen,
  onClose,
  initialArea = 15000,
  initialSector = 'fmcg',
}) => {
  const [area, setArea] = useState(initialArea);
  const [sector, setSector] = useState(initialSector);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `VARDHA-GK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e5eeff] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Ribbon */}
        <div className="bg-[#0e1c2f] text-white px-6 py-5 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#ffb95f]">
              <span className="material-symbols-outlined text-[16px]">warehouse</span>
              <span>BARGADWA INDUSTRIAL HUB • GORAKHPUR</span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold">
              {submitted ? 'Inspection Scheduled' : 'Book Warehouse Space / Site Visit'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#eff4ff] text-[#426086] mx-auto flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <div className="space-y-2">
              <span className="font-['JetBrains_Mono'] text-xs px-3 py-1 bg-[#eff4ff] text-[#0e1c2f] font-bold rounded-full">
                BOOKING INQUIRY REFERENCE: {bookingRef}
              </span>
              <h4 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                Proposal & Site Visit Confirmed
              </h4>
              <p className="text-sm text-[#44474c] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0b1c30]">{fullName}</strong> from{' '}
                <strong className="text-[#0b1c30]">{company || 'your organization'}</strong>. Our
                industrial operations desk has received your request for{' '}
                <strong className="text-[#0b1c30]">{area.toLocaleString('en-IN')} SQ.FT</strong> in the
                Bargadwa corridor.
              </p>
            </div>

            <div className="p-4 bg-[#eff4ff] rounded-xl text-left font-['JetBrains_Mono'] text-xs text-[#0b1c30] space-y-1.5 border border-[#dce9ff]">
              <div className="flex justify-between">
                <span className="text-[#44474c]">Target Area:</span>
                <span className="font-bold">{area.toLocaleString('en-IN')} SQ.FT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Industry Sector:</span>
                <span className="font-bold uppercase">{sector}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Estimated Pallet Capacity:</span>
                <span className="font-bold">~{Math.round(area / 8).toLocaleString('en-IN')} Pallets</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Inspection Date:</span>
                <span className="font-bold">{visitDate || 'To be scheduled with executive'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#44474c]">Direct Desk Contact:</span>
                <span className="font-bold text-[#426086]">+91 9415X XXXXX</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-lg bg-[#0e1c2f] text-white font-semibold text-sm hover:bg-[#426086] transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="p-3 bg-[#eff4ff] rounded-lg text-xs text-[#0b1c30] flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
                Immediate Clear Span Available: 23,800 SQ.FT
              </span>
              <span className="font-['JetBrains_Mono'] text-[#44474c]">Gorakhnath Mandir Rd</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anand Srivastava"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Consumer Logistics"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Official Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="logistics@company.com"
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Target Required Footprint (SQ.FT)
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                >
                  <option value={5000}>5,000 SQ.FT (Compact Bay)</option>
                  <option value={10000}>10,000 SQ.FT</option>
                  <option value={15000}>15,000 SQ.FT (Standard Bay)</option>
                  <option value={25000}>25,000 SQ.FT (High Throughput)</option>
                  <option value={50000}>50,000 SQ.FT (Enterprise)</option>
                  <option value={80000}>80,000+ SQ.FT (Full Facility Master Lease)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Industry Sector
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                >
                  {SECTORS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Preferred Inspection Date
                </label>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                  Special Bay Requirements
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Reach truck clearance, dock levelers..."
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#eff4ff] border border-[#dce9ff] text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#2a1700] hover:bg-[#000000] text-[#ffddb8] font-['Plus_Jakarta_Sans'] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Submit Space Booking / Inspection Request</span>
              </button>
              <p className="text-[11px] text-center text-[#75777d] mt-2 font-['JetBrains_Mono']">
                Technical feasibility proposal returned in 3 business hours. No broker fees.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
