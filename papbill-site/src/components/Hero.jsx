import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  Play, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Store, 
  QrCode, 
  Receipt, 
  UtensilsCrossed, 
  Boxes, 
  BarChart3, 
  Building2 
} from 'lucide-react';

export default function Hero() {
  const getStartedUrl = getWhatsAppUrl('Hi PapBill, I want to get started with PapBill smart restaurant billing software.');

  const featurePills = [
    { title: 'QR Ordering', desc: 'One QR for everything', icon: QrCode },
    { title: 'POS Billing', desc: 'Fast & Simple', icon: Receipt },
    { title: 'Kitchen Display', desc: 'Real-time orders', icon: UtensilsCrossed },
    { title: 'Inventory', desc: 'Track your stock', icon: Boxes },
    { title: 'Reports', desc: 'Grow with insights', icon: BarChart3 },
    { title: 'Multi-Branch', desc: 'Manage easily', icon: Building2 },
  ];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden bg-white">
      {/* Subtle warm ambient glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/60 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse" />
              Restaurant Tech Platform for India
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Smart Billing <br className="hidden sm:inline" />
              for Modern Restaurants
            </h1>

            <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
              QR Menu <span className="text-orange-500">•</span> POS <span className="text-orange-500">•</span> Kitchen <span className="text-orange-500">•</span> Inventory <span className="text-orange-500">•</span> Reports. All in one powerful, minimalist platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getStartedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[14px] py-2.5 px-6 shadow-md hover:shadow-orange-500/25 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#demo"
                className="btn-secondary text-[14px] py-2.5 px-5 flex items-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-orange-100 group-hover:text-[#FF5A00] transition-colors">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Social Proof Metric Badges */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <div className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">1,000+</div>
                <div className="text-[11px] text-slate-500 font-medium">Restaurants</div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">99.9%</div>
                <div className="text-[11px] text-slate-500 font-medium">Cloud Uptime</div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">4.8</span>
                  <span className="text-xs text-amber-500 font-semibold">/5</span>
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 -mt-0.5" />
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Device Mockup Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Tablet Mockup */}
              <div className="relative z-10 glass-panel rounded-2xl p-2.5 shadow-2xl border border-slate-200/90 bg-white">
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 text-slate-100 shadow-inner">
                  {/* Tablet Top App Bar */}
                  <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5A00]" />
                      <span className="font-semibold text-slate-200">PapBill POS</span>
                      <span className="text-slate-400 text-[10px]">· Table 5 (Dine In)</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                      <span className="text-emerald-400 font-mono">LIVE SYNC</span>
                    </div>
                  </div>

                  {/* Tablet Interface Grid */}
                  <div className="grid grid-cols-12 p-3 gap-3 bg-slate-950/95 min-h-[220px]">
                    {/* Left: Quick Menu Selection */}
                    <div className="col-span-7 space-y-2">
                      <div className="flex gap-1.5 text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-medium border border-orange-500/30">Starters</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Main Course</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Beverages</span>
                      </div>

                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-orange-500/40 transition-colors">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-200">
                            <span>Paneer Tikka</span>
                            <span className="text-emerald-400 font-mono">₹220</span>
                          </div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Tandoor Special</div>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-orange-500/40 transition-colors">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-200">
                            <span>Gobi 65</span>
                            <span className="text-emerald-400 font-mono">₹160</span>
                          </div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Crispy fried</div>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-orange-500/40 transition-colors">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-200">
                            <span>Veg Biryani</span>
                            <span className="text-emerald-400 font-mono">₹180</span>
                          </div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Aromatic Basmati</div>
                        </div>

                        <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80 hover:border-orange-500/40 transition-colors">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-200">
                            <span>Filter Coffee</span>
                            <span className="text-emerald-400 font-mono">₹40</span>
                          </div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Fresh decoction</div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Order Summary Panel */}
                    <div className="col-span-5 bg-slate-900/95 rounded-lg p-2.5 border border-slate-800 flex flex-col justify-between text-[10px]">
                      <div>
                        <div className="flex justify-between items-center pb-1.5 border-b border-slate-800 text-[11px] font-semibold text-slate-200">
                          <span>Order #1042</span>
                          <span className="text-orange-400">3 Items</span>
                        </div>
                        <div className="space-y-1.5 pt-2 font-mono text-[10px]">
                          <div className="flex justify-between text-slate-300">
                            <span>1× Paneer Tikka</span>
                            <span>₹220</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>1× Gobi 65</span>
                            <span>₹160</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>2× Filter Coffee</span>
                            <span>₹80</span>
                          </div>
                          <div className="flex justify-between text-slate-400 text-[9px] pt-1 border-t border-slate-800/60">
                            <span>GST (5%)</span>
                            <span>₹23</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="flex justify-between items-center font-bold text-slate-100 text-[12px] pb-1.5">
                          <span>TOTAL</span>
                          <span className="text-emerald-400 font-mono">₹483</span>
                        </div>
                        <a
                          href={getStartedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#FF5A00] hover:bg-[#E65100] text-white py-1.5 rounded text-center font-semibold text-[11px] transition-colors flex items-center justify-center gap-1 shadow-sm"
                        >
                          <span>Print Bill & Pay</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Thermal Printer Slip */}
              <div className="absolute -bottom-6 -right-2 sm:-right-4 z-20 w-44 glass-panel rounded-xl p-3 bg-white/95 shadow-xl border border-slate-200 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="text-center font-mono text-[9px] space-y-1 text-slate-700">
                  <div className="font-bold text-[11px] text-slate-900">PapBill POS</div>
                  <div className="text-[8px] text-slate-400">Udupi Tiffins · Table 5</div>
                  <div className="border-t border-dashed border-slate-300 my-1" />
                  <div className="flex justify-between"><span>SUBTOTAL</span><span>₹460</span></div>
                  <div className="flex justify-between font-bold text-slate-900"><span>TOTAL</span><span>₹483</span></div>
                  <div className="border-t border-dashed border-slate-300 my-1" />
                  <div className="py-1 px-1.5 bg-emerald-50 rounded border border-emerald-200 text-emerald-700 font-bold text-[10px]">
                    ✓ PAID BY UPI
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 6 Quick Features Strip below Hero */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featurePills.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-3 rounded-xl flex items-center gap-3 bg-white"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-bold text-slate-900 truncate">{item.title}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
