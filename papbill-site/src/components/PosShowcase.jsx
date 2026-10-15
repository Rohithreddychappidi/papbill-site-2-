import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { CheckCircle2, ArrowRight, Laptop, Monitor, Smartphone, WifiOff, Cloud, Sparkles } from 'lucide-react';

export default function PosShowcase() {
  const [activeTable, setActiveTable] = useState('T-05');
  const posActionUrl = getWhatsAppUrl('Hi PapBill, I would like to test the POS billing demo.');

  const features = [
    'Fast counter billing with instant thermal receipt generation',
    'All billings automatically stored in the cloud',
    'Works offline (local storage ensures zero sales disruptions)',
    'Split bills & merge tables in one tap',
    'Supports UPI QR codes, Cash, Cards, and Customer credit/dues',
    'Compatible with Android tablets, Windows PCs, Macs, and Phones'
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white/70 border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: POS Copy & Checkmarks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-bold tracking-wide uppercase">
              <Cloud className="w-4 h-4" />
              Cloud-Backed POS Engine
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              A POS Designed for <br className="hidden sm:inline" />
              Fast-Paced Restaurants
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Fast counter billing, quick table swaps, real-time sync with kitchen displays, and automated cloud sync. Works smoothly on Android tablets, desktop PCs, and smartphones.
            </p>

            {/* Checkmark List */}
            <div className="space-y-3.5 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-5 text-slate-500 text-xs sm:text-sm font-semibold">
              <span className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-slate-700" /> Phone</span>
              <span className="flex items-center gap-1.5"><Laptop className="w-4 h-4 text-slate-700" /> Tablet</span>
              <span className="flex items-center gap-1.5"><Monitor className="w-4 h-4 text-slate-700" /> Desktop</span>
              <span className="flex items-center gap-1.5"><WifiOff className="w-4 h-4 text-slate-700" /> Offline</span>
            </div>

            <div className="pt-2">
              <a
                href={posActionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base py-3 px-6 group inline-flex items-center gap-2"
              >
                <span>Request POS Walkthrough on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Restaurant Ambiance Photo + Live POS Display Mockup */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Real Restaurant Counter Photo Card */}
            <div className="rounded-3xl overflow-hidden glass-panel p-2.5 sm:p-3 bg-white shadow-xl border border-slate-200">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-950">
                <img
                  src="/images/restaurant-counter.jpg"
                  alt="Modern restaurant billing counter in India with barista and POS system"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="text-sm sm:text-base font-bold">Fast Indian Food Counters & Cafes</div>
                    <div className="text-xs text-slate-300">Keep order lines moving during busy lunch & dinner hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive POS Display Interface */}
            <div className="glass-panel rounded-3xl p-3 sm:p-4 bg-white shadow-2xl border border-slate-200">
              <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 text-slate-100 shadow-2xl">
                
                {/* Header bar */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img src="/papbill-logo.png" alt="PapBill" className="h-4 object-contain brightness-200" />
                    <span className="text-slate-400 text-[10px]">· Cloud Sync Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {['T-01', 'T-02', 'T-05', 'T-08'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveTable(t)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                          activeTable === t
                            ? 'bg-[#FF5A00] text-white shadow-sm'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main POS Interface Area */}
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[280px]">
                  
                  {/* Left Column: Menu Items */}
                  <div className="md:col-span-7 p-3 border-b md:border-b-0 md:border-r border-slate-800/80 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Fast Menu Category</span>
                      <span className="text-[#FF5A00]">12 items</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between font-semibold text-slate-200">
                          <span>Paneer Tikka</span>
                          <span className="text-emerald-400 font-mono text-[11px]">₹220</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Special Tandoori</div>
                        <span className="inline-block mt-2 px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 text-[9px] font-medium border border-emerald-800">VEG</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between font-semibold text-slate-200">
                          <span>Gobi Manchurian</span>
                          <span className="text-emerald-400 font-mono text-[11px]">₹150</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Crispy Gravy</div>
                        <span className="inline-block mt-2 px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 text-[9px] font-medium border border-emerald-800">VEG</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between font-semibold text-slate-200">
                          <span>Dum Biryani</span>
                          <span className="text-emerald-400 font-mono text-[11px]">₹240</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Hyderabadi Pot</div>
                        <span className="inline-block mt-2 px-1.5 py-0.2 rounded bg-red-950 text-red-400 text-[9px] font-medium border border-red-800">NON-VEG</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between font-semibold text-slate-200">
                          <span>Butter Naan</span>
                          <span className="text-emerald-400 font-mono text-[11px]">₹45</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">Clay Oven</div>
                        <span className="inline-block mt-2 px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 text-[9px] font-medium border border-emerald-800">VEG</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Active Bill & Checkout */}
                  <div className="md:col-span-5 p-3 flex flex-col justify-between bg-slate-900/60 text-xs">
                    <div>
                      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                        <div>
                          <div className="font-bold text-slate-200 text-xs">Table {activeTable}</div>
                          <div className="text-[10px] text-slate-400">Cloud ID: #1042</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-[10px]">
                          KOT PRINTED
                        </span>
                      </div>

                      <div className="space-y-2 py-2.5 font-mono text-[11px]">
                        <div className="flex justify-between text-slate-300">
                          <span>1× Paneer Tikka</span>
                          <span>₹220</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>1× Gobi Manchurian</span>
                          <span>₹150</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>2× Butter Naan</span>
                          <span>₹90</span>
                        </div>
                        <div className="pt-2 border-t border-slate-800/80 flex justify-between text-slate-400 text-[10px]">
                          <span>CGST + SGST (5%)</span>
                          <span>₹23</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <div className="flex justify-between items-center text-sm font-bold text-slate-100 mb-2">
                        <span>Total Payable</span>
                        <span className="text-emerald-400 font-mono">₹483</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-1.5 rounded text-[11px] font-semibold transition-colors">
                          Split Bill
                        </button>
                        <a
                          href={posActionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#FF5A00] hover:bg-[#E65100] text-white py-1.5 rounded text-[11px] font-bold text-center transition-colors shadow-sm"
                        >
                          Print & Pay
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
