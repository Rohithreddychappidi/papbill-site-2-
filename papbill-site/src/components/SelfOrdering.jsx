import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, Smartphone, Clock, Zap, HeartHandshake, QrCode } from 'lucide-react';

export default function SelfOrdering() {
  const qrDemoUrl = getWhatsAppUrl('Hi PapBill, I want to see a live demo of the Table QR Self-Ordering (₹299 plan).');

  const benefits = [
    {
      icon: Smartphone,
      title: 'No app installation',
      desc: 'Guests scan the table QR with their phone camera. Opens instantly in any mobile browser.'
    },
    {
      icon: Clock,
      title: 'Live order tracking',
      desc: 'Customers see live order progress: Order Received → Kitchen Preparing → Served.'
    },
    {
      icon: Zap,
      title: 'Zero rush-hour bottlenecks',
      desc: 'Reduce wait times during peak rush hours without hiring extra floor staff.'
    },
    {
      icon: HeartHandshake,
      title: 'Better dining experience',
      desc: 'Clean digital menu with food photos, dietary tags, ingredient notes, and live cart.'
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-white/60 border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Real Restaurant Table QR Photo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group w-full max-w-[540px]">
              
              {/* Photo Card with Glass Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-panel p-2.5 sm:p-3 bg-white shadow-2xl border border-slate-200/90 group-hover:border-orange-500/40 transition-all duration-300">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img
                    src="/images/table-qr.jpg"
                    alt="PapBill Table QR Ordering on Dining Table with Dosa and Coffee"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Floating live tag over image */}
                  <div className="absolute top-4 left-4 glass-panel bg-white/90 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900">Table 5 · Active Menu</span>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg">
                    Included in ₹299/mo Plan
                  </div>
                </div>

                <div className="p-3 text-center">
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    Real-World Dine-In Table QR Stand
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Customers scan to view menu, customize ingredients & order in seconds
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & 4 Benefit Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-bold tracking-wide uppercase">
              <QrCode className="w-4 h-4" />
              Included in the ₹299/mo Plan
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Let Your Customers <br className="hidden sm:inline" />
              Order Directly from Tables
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Place a sleek QR stand on each dining table. Guests scan with their phone camera, browse dishes with photos, customize orders, and send them directly to your kitchen.
            </p>

            {/* 4 Feature Benefit Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl flex items-start gap-3.5 bg-white"
                  >
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FF5A00] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.title}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-normal">{item.desc}</div>
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
                className="btn-primary text-sm sm:text-base py-3 px-6 group inline-flex items-center gap-2"
              >
                <span>Ask about Table QR on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
