import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, Smartphone, Clock, Zap, HeartHandshake, QrCode } from 'lucide-react';

export default function SelfOrdering() {
  const qrDemoUrl = getWhatsAppUrl('Hi PapBill, I want to see a live demo of the QR Table Ordering system.');

  const benefits = [
    {
      icon: Smartphone,
      title: 'No app installation',
      desc: 'Guests scan the table QR with camera. Works instantly in any mobile browser.'
    },
    {
      icon: Clock,
      title: 'Live order tracking',
      desc: 'Customers see live status: Order Received → Kitchen Preparing → Served.'
    },
    {
      icon: Zap,
      title: 'Faster service',
      desc: 'Reduce wait times during peak rush hours without hiring extra floor staff.'
    },
    {
      icon: HeartHandshake,
      title: 'Better customer experience',
      desc: 'Convenient, contactless menu browsing with high-res photos and allergen tags.'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Acrylic Table QR Stand Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[320px]">
              
              {/* Acrylic Glass Stand */}
              <div className="relative glass-panel rounded-3xl p-6 bg-white/85 shadow-2xl border border-slate-200/90 text-center transform transition-transform group-hover:scale-[1.02] duration-300">
                {/* Acrylic clip header */}
                <div className="w-16 h-2 bg-slate-300 rounded-full mx-auto mb-5" />

                {/* PapBill Header inside stand */}
                <div className="text-slate-900 font-extrabold text-base tracking-tight mb-1">
                  Pap<span className="text-[#FF5A00]">Bill</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-4">
                  Smart Table Ordering
                </div>

                {/* QR Code Container */}
                <div className="w-44 h-44 mx-auto rounded-2xl bg-white p-3.5 shadow-sm border border-slate-200/80 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-orange-500/30 transition-colors">
                  {/* Stylized QR SVG */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="w-full h-full text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                      {/* Corner 1 */}
                      <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="12" y="12" width="14" height="14" rx="2" />
                      {/* Corner 2 */}
                      <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="74" y="12" width="14" height="14" rx="2" />
                      {/* Corner 3 */}
                      <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="6" />
                      <rect x="12" y="74" width="14" height="14" rx="2" />
                      {/* QR Matrix Dots */}
                      <rect x="42" y="10" width="7" height="7" rx="1.5" />
                      <rect x="52" y="10" width="7" height="7" rx="1.5" />
                      <rect x="42" y="22" width="7" height="7" rx="1.5" />
                      <rect x="10" y="42" width="7" height="7" rx="1.5" />
                      <rect x="22" y="42" width="7" height="7" rx="1.5" />
                      <rect x="34" y="42" width="7" height="7" rx="1.5" />
                      <rect x="46" y="42" width="8" height="8" rx="2" fill="#FF5A00" />
                      <rect x="58" y="42" width="7" height="7" rx="1.5" />
                      <rect x="70" y="42" width="7" height="7" rx="1.5" />
                      <rect x="82" y="42" width="7" height="7" rx="1.5" />
                      <rect x="42" y="54" width="7" height="7" rx="1.5" />
                      <rect x="54" y="54" width="7" height="7" rx="1.5" />
                      <rect x="42" y="68" width="7" height="7" rx="1.5" />
                      <rect x="54" y="68" width="7" height="7" rx="1.5" />
                      <rect x="70" y="68" width="8" height="8" rx="1.5" />
                      <rect x="82" y="68" width="7" height="7" rx="1.5" />
                      <rect x="42" y="82" width="7" height="7" rx="1.5" />
                      <rect x="70" y="82" width="7" height="7" rx="1.5" />
                      <rect x="82" y="82" width="7" height="7" rx="1.5" />
                    </svg>
                  </div>
                </div>

                {/* Table Badge */}
                <div className="mt-4 inline-block px-3 py-1 rounded-full bg-slate-900 text-white font-bold text-xs tracking-wide">
                  Table 5
                </div>

                <div className="text-[12px] font-semibold text-slate-800 mt-2">
                  Scan to view menu & order
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Dine <span className="text-[#FF5A00]">•</span> Order <span className="text-[#FF5A00]">•</span> Enjoy
                </div>
              </div>

              {/* Wooden Table Stand Base */}
              <div className="w-[85%] h-4 bg-amber-900/40 rounded-full mx-auto -mt-2 blur-[1px]" />
            </div>
          </div>

          {/* Right Column: Copy & 4 Benefit Pills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase">
              <QrCode className="w-3.5 h-3.5" />
              Customer Self-Ordering
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let Your Customers <br className="hidden sm:inline" />
              Order Themselves
            </h2>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl">
              One QR code gives access to your full digital menu. Customers can browse food photos, customize ingredients, place orders directly to the kitchen, and request the bill — all from their own smartphone.
            </p>

            {/* 4 Feature Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel glass-panel-hover p-4 rounded-xl flex items-start gap-3 bg-white"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-normal">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={qrDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[13px] py-2 px-5 group inline-flex items-center gap-2"
              >
                <span>See How It Works on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
