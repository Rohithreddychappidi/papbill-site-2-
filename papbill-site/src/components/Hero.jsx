import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  ArrowRight, 
  Play, 
  Cloud, 
  WifiOff, 
  Sparkles, 
  Printer, 
  RotateCcw, 
  Check, 
  QrCode,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Hero() {
  const [printKey, setPrintKey] = useState(0);
  const [activeItems, setActiveItems] = useState([
    { name: '2× Masala Dosa', price: 140 },
    { name: '2× Filter Coffee', price: 80 },
    { name: '1× Paneer Tikka', price: 220 }
  ]);

  const freeTrialUrl = getWhatsAppUrl('Hi PapBill, I want to start my 15 days free trial for PapBill restaurant billing.');

  const triggerReprint = () => {
    setPrintKey((prev) => prev + 1);
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-white w-full">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] pointer-events-none opacity-45 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/70 via-transparent to-transparent -z-10" />

      {/* Edge to edge container */}
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Product & Development Focused Headline */}
          <div className="lg:col-span-6 space-y-6 text-left animate-fade-in-up">
            
            {/* Live Development / Free Trial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[#FF5A00] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-ping" />
              <span>In Active Development · 15 Days Free Trial</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Smart Restaurant Billing <br className="hidden sm:inline" />
              <span className="text-[#FF5A00]">Stored in the Cloud.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Take orders at the table, fire tickets straight to the kitchen, and print instant thermal bills in under 2 seconds. Every bill is securely backed up in the cloud and keeps working even when your internet drops.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={freeTrialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6 shadow-md hover:shadow-orange-500/25 group font-bold"
              >
                <span>Start 15 Days Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#demo"
                className="btn-secondary text-sm py-3 px-5 flex items-center gap-2 group font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5A00]">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Honest Product Highlights (No Fake Restaurant Metrics) */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <div className="glass-panel p-3 rounded-xl bg-slate-50/60 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>15 Days</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Free Trial</div>
              </div>

              <div className="glass-panel p-3 rounded-xl bg-slate-50/60 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Cloud className="w-3.5 h-3.5 text-sky-600" />
                  <span>Cloud Stored</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">All bills backed up</div>
              </div>

              <div className="glass-panel p-3 rounded-xl bg-slate-50/60 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <WifiOff className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Works Offline</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Zero downtime</div>
              </div>

              <div className="glass-panel p-3 rounded-xl bg-slate-50/60 border border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <span className="text-[#FF5A00] font-mono">₹199</span>
                  <span>/mo</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Plans start at ₹199</div>
              </div>
            </div>

          </div>

          {/* Right Column: Phone with Menu & Bill Generation alongside the Animated Paper Bill */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[580px] grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
              
              {/* Phone Layout: Menu & Bill Generation */}
              <div className="sm:col-span-6 relative z-10 glass-panel rounded-[36px] bg-slate-950 p-2.5 shadow-2xl border-[3px] border-slate-800 ring-1 ring-slate-900/50">
                {/* Dynamic speaker pill */}
                <div className="w-16 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                <div className="bg-white rounded-[28px] overflow-hidden p-3 text-xs space-y-2.5">
                  {/* Phone header */}
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div>
                      <div className="font-extrabold text-[12px] text-slate-900">Udupi Tiffins</div>
                      <div className="text-[10px] text-slate-500">Table 6 · Bill #1042</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold border border-emerald-200">
                      LIVE POS
                    </span>
                  </div>

                  {/* Menu items list in phone */}
                  <div className="space-y-1.5 font-sans">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[11px] text-slate-800">2× Masala Dosa</div>
                        <div className="text-[9px] text-slate-400">Crispy butter roast</div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 text-[11px]">₹140</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[11px] text-slate-800">2× Filter Coffee</div>
                        <div className="text-[9px] text-slate-400">Pure decoction</div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 text-[11px]">₹80</span>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[11px] text-slate-800">1× Paneer Tikka</div>
                        <div className="text-[9px] text-slate-400">Tandoor roasted</div>
                      </div>
                      <span className="font-mono font-bold text-slate-900 text-[11px]">₹220</span>
                    </div>
                  </div>

                  {/* Phone bill summary & generate button */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-500">Subtotal + 5% GST</span>
                      <span className="font-bold font-mono text-slate-900">₹462</span>
                    </div>

                    <button
                      onClick={triggerReprint}
                      className="w-full bg-[#FF5A00] hover:bg-[#E65100] text-white py-2 rounded-xl text-center font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Thermal Bill</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* The Old Animated Paper Bill Component */}
              <div className="sm:col-span-6 relative mt-4 sm:mt-0">
                {/* Printer Slot */}
                <div className="receipt-slot mx-3" />

                {/* Jagged Edge Paper Bill Container */}
                <div key={printKey} className="feed shadow-2xl mx-1">
                  <div className="paper-receipt animate-print-receipt p-5 text-slate-900 shadow-xl rounded-b-sm border-x border-slate-200">
                    
                    {/* Header */}
                    <div className="text-center pb-2 border-b-2 border-dashed border-slate-800">
                      <div className="font-bold text-base tracking-tight text-slate-950 font-sans">
                        Udupi Tiffins
                      </div>
                      <div className="text-[10px] text-slate-600 mt-0.5">
                        Table 6 · Bill #1042 · Dine In
                      </div>
                      <div className="text-[9px] text-slate-500">
                        Cloud ID: PB-CLOUD-8942
                      </div>
                    </div>

                    {/* Line Items */}
                    <div className="py-2.5 space-y-1.5 text-xs border-b-2 border-dashed border-slate-800">
                      <div className="flex justify-between">
                        <span>2× Masala Dosa</span>
                        <span className="font-bold">₹140</span>
                      </div>
                      <div className="flex justify-between">
                        <span>2× Filter Coffee</span>
                        <span className="font-bold">₹80</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1× Paneer Tikka</span>
                        <span className="font-bold">₹220</span>
                      </div>
                    </div>

                    {/* Tax & Total */}
                    <div className="py-2 space-y-1 text-xs border-b-2 border-dashed border-slate-800">
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>Subtotal</span>
                        <span>₹440</span>
                      </div>
                      <div className="flex justify-between text-slate-600 text-[11px]">
                        <span>GST 5%</span>
                        <span>₹22</span>
                      </div>
                      <div className="flex justify-between font-extrabold text-sm text-slate-950 pt-1">
                        <span>TOTAL</span>
                        <span>₹462</span>
                      </div>
                    </div>

                    {/* UPI Scan Barcode & Footer */}
                    <div className="pt-2 text-center text-[10px] text-slate-600 space-y-1.5">
                      <div>Scan to pay by UPI</div>
                      {/* Barcode lines */}
                      <div 
                        className="h-7 w-full my-1 rounded-xs"
                        style={{
                          background: 'repeating-linear-gradient(90deg, #0F172A 0 2px, transparent 2px 4px, #0F172A 4px 6px, transparent 6px 9px, #0F172A 9px 12px, transparent 12px 14px)'
                        }}
                      />
                      <div className="text-[8px] text-slate-400 font-mono">
                        POWERED BY PAPBILL · HATBRICKS
                      </div>
                    </div>

                    {/* Stamp: Animated Rubber Stamp */}
                    <div className="animate-stamp absolute right-4 bottom-14 border-[3px] border-[#FF5A00] text-[#FF5A00] font-mono font-extrabold text-xs px-2 py-0.5 rounded tracking-wider shadow-xs">
                      PAID ✓
                    </div>

                  </div>
                </div>

                {/* Re-print trigger hint */}
                <div className="text-center mt-3">
                  <button
                    onClick={triggerReprint}
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-[#FF5A00] transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Click to replay printing animation</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
