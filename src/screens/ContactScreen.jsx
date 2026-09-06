import React, { useState } from 'react';
import { BRAND_ASSETS } from '../data/warehouseData';

export const ContactScreen = ({ onNavigate, onOpenSpecSheet }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    footprint: '15000',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f8f9ff]">
      {/* Header */}
      <section className="bg-[#ffffff] border-b border-[#e5eeff] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1c2f] text-[#ffddb8] font-['JetBrains_Mono'] text-xs uppercase tracking-wider mb-4">
            <span className="text-[#ffb95f] font-bold">PAGE 9 OF 9</span>
            <span className="text-[#77849c]">|</span>
            <span className="material-symbols-outlined text-[14px]">contacts</span>
            <span>DIRECT INDUSTRIAL LEASING & SITE INSPECTION DESK</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl font-extrabold text-[#0b1c30] tracking-tight leading-tight">
              Connect Directly with Vardha Warehousing
            </h1>
            <p className="text-base sm:text-lg text-[#44474c] leading-relaxed font-['Inter']">
              Schedule an on-site technical inspection in Bargadwa, review structural bay blueprints, and
              receive a customized lease proposal directly from the asset owners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Location Info */}
      <section className="py-16 bg-[#eff4ff]">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-md border border-[#e5eeff] space-y-6">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#eff4ff] text-[#426086] mx-auto flex items-center justify-center">
                    <span className="material-symbols-outlined text-[36px]">verified</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                    Site Inspection Scheduled
                  </h3>
                  <p className="text-sm text-[#44474c] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0b1c30]">{formData.name}</strong> from{' '}
                    <strong className="text-[#0b1c30]">{formData.company}</strong>. Our facility manager has
                    received your inspection request and will call you on{' '}
                    <strong className="text-[#0b1c30]">{formData.phone}</strong> to confirm the exact hour.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        footprint: '15000',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#0e1c2f] text-white text-xs font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#426086] uppercase font-bold">
                      FAST RESPONSE FORM
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#0b1c30]">
                      Request Site Inspection & Bay Proposal
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Chandra"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Purvanchal Distribution Co."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 94XXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Official Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="operations@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Target Area (SQ.FT)
                      </label>
                      <select
                        value={formData.footprint}
                        onChange={(e) => setFormData({ ...formData, footprint: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      >
                        <option value="5000">5,000 SQ.FT (Compact Bay)</option>
                        <option value="10000">10,000 SQ.FT</option>
                        <option value="15000">15,000 SQ.FT (Standard Bay)</option>
                        <option value="25000">25,000 SQ.FT (High Throughput)</option>
                        <option value="50000">50,000 SQ.FT (Enterprise Multi-Bay)</option>
                        <option value="80000">80,000+ SQ.FT (Complete Facility Master Lease)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                        Preferred Inspection Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-['JetBrains_Mono'] text-[11px] font-semibold text-[#44474c] uppercase block">
                      Specific Requirements / Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required clear height, reach truck turning space, power load, or target move-in timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#eff4ff] border border-[#dce9ff] text-sm text-[#0b1c30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#426086]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#2a1700] hover:bg-black text-[#ffddb8] font-['Plus_Jakarta_Sans'] font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Submit Site Walkthrough Request</span>
                  </button>

                  <p className="text-[11px] text-center text-[#75777d] font-['JetBrains_Mono']">
                    Direct landlord negotiation. No agency commission. 3-hour response guarantee.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact & Coordinates Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#0e1c2f] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border border-white/10">
                <div className="space-y-1">
                  <span className="font-['JetBrains_Mono'] text-xs text-[#ffb95f] uppercase font-bold">
                    HEADQUARTERS & DESK
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold">
                    Vardha Warehousing Facility
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#eff4ff]">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[20px] mt-0.5">
                      pin_drop
                    </span>
                    <div>
                      <strong className="block text-white">Physical Location:</strong>
                      Gorakhnath Mandir Road, Bargadwa, Gorakhpur, Uttar Pradesh 273007
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[20px] mt-0.5">
                      call
                    </span>
                    <div>
                      <strong className="block text-white">Direct Phone Lines:</strong>
                      <a href="tel:+919415000000" className="hover:text-[#ffddb8] transition-colors block">
                        +91 9415X XXXXX (Leasing Desk)
                      </a>
                      <a href="tel:+915510000000" className="hover:text-[#ffddb8] transition-colors block">
                        +91 551X XXXXX (Facility Master)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[20px] mt-0.5">
                      mail
                    </span>
                    <div>
                      <strong className="block text-white">Official Correspondence:</strong>
                      <a
                        href="mailto:operations@vardhawarehousing.com"
                        className="hover:text-[#ffddb8] transition-colors"
                      >
                        operations@vardhawarehousing.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ffddb8] text-[20px] mt-0.5">
                      schedule
                    </span>
                    <div>
                      <strong className="block text-white">Operational Hours:</strong>
                      Warehouse Ingress & Docks: 24 Hours / 7 Days<br />
                      Administrative Offices: 9:00 AM – 7:00 PM (Mon–Sat)
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                  <span>GPS: 26.7915° N, 83.3512° E</span>
                  <a
                    href="https://maps.google.com/?q=Bargadwa+Gorakhpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ffb95f] hover:underline flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Map Preview Image */}
              <div className="bg-white p-4 rounded-3xl shadow-sm border border-[#e5eeff] space-y-3">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-2xl relative overflow-hidden flex items-end p-3 shadow-inner"
                  style={{ backgroundImage: `url('${BRAND_ASSETS.mapPhoto}')` }}
                >
                  <div className="p-3 bg-[#0e1c2f]/90 backdrop-blur-md rounded-xl text-white text-xs">
                    <span className="font-bold block text-[#ffddb8]">Bargadwa Industrial Corridor</span>
                    <span className="text-[11px] text-[#dce9ff]">Direct 36m Frontage on Gorakhnath Mandir Rd</span>
                  </div>
                </div>

                <div className="flex justify-between items-center px-1">
                  <span className="text-xs text-[#44474c] font-['JetBrains_Mono']">
                    12 Mins to NH-27 Bypass
                  </span>
                  <button
                    onClick={onOpenSpecSheet}
                    className="text-xs font-bold text-[#426086] hover:underline font-['JetBrains_Mono'] cursor-pointer"
                  >
                    Get Driving Route Guide →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
