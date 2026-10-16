import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Zap, 
  QrCode, 
  TrendingUp, 
  X,
  Printer,
  Maximize2
} from 'lucide-react';
import { InteractivePosShowcase } from './InteractivePosShowcase';

export const Hero: React.FC = () => {
  const [interactiveModalOpen, setInteractiveModalOpen] = useState(false);

  return (
    <section 
      aria-label="PapBill Hero Introduction" 
      className="relative w-full bg-[#FFFFFF] border-b border-[#E5E9EF] overflow-hidden -mt-20"
    >
      
      {/* ========================================================
          DESKTOP & LARGE SCREEN ART-DIRECTED VIEW (>= 1024px)
          Seamlessly blends the provided hero banner background
          with live, accessible, and balanced typography.
          ======================================================== */}
      <div 
        className="hidden lg:block relative w-full bg-no-repeat bg-cover bg-right pt-20"
        style={{ 
          backgroundImage: "url('/images/hero-bg-banner-2x.jpg')",
          backgroundPosition: "right center",
          minHeight: "clamp(600px, 46vw, 780px)"
        }}
      >
        {/* Soft edge blend for ultra-wide screens & left text reading protection */}
        <div className="absolute inset-y-0 left-0 w-[46%] xl:w-[42%] bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-1" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 xl:px-12 h-full min-h-[inherit] flex items-center relative z-10">
          
          {/* Left Text & Action Column: 
              Refined max-width and breathing room so it sits cleanly in the luminous left zone
              without colliding with the thermal printer or POS terminal.
          */}
          <div className="w-full max-w-[430px] xl:max-w-[480px] 2xl:max-w-[530px] py-10 xl:py-14 space-y-5 xl:space-y-6 text-left">
            
            {/* Eyebrow Pill Badge */}
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-[11px] xl:text-xs font-bold tracking-wider uppercase shadow-2xs">
                RESTAURANT MANAGEMENT, SIMPLIFIED
              </span>
            </div>

            {/* Headline matching exact reference design */}
            <h1 className="text-[#17212D] font-extrabold tracking-tight [text-wrap:balance] text-[36px] xl:text-[46px] 2xl:text-[52px] leading-[1.08]">
              Smart Billing for <br />
              <span>Modern </span>
              <span className="text-[#FF571F]">Restaurants.</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-[#4A5568] text-sm xl:text-base leading-[1.6] max-w-[410px]">
              Manage billing, QR ordering, kitchen orders, inventory, and daily operations from one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm xl:text-base font-bold text-white bg-[#FF571F] hover:bg-[#E04612] transition-all shadow-md hover:shadow-orange-500/25 active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#FF571F] focus:ring-offset-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setInteractiveModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm xl:text-base font-bold text-[#17212D] bg-white hover:bg-gray-50 border border-gray-200 shadow-2xs hover:shadow-xs transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-[#17212D] focus:ring-offset-2"
              >
                <div className="w-5 h-5 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center flex-shrink-0">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Explore the Platform</span>
              </button>
            </div>

            {/* 3 Benefit Items Row matching reference image */}
            <div className="pt-6 xl:pt-7 border-t border-[#E5E9EF]/80 mt-2">
              <div className="grid grid-cols-3 gap-2.5 xl:gap-3.5">
                
                {/* Benefit 1 */}
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center shadow-2xs">
                    <Zap className="w-4.5 h-4.5 fill-[#FF571F]" />
                  </div>
                  <h3 className="text-xs xl:text-sm font-extrabold text-[#17212D] leading-snug">
                    Faster Billing
                  </h3>
                  <p className="text-[11px] xl:text-xs text-[#667085] leading-relaxed">
                    Save time and serve more customers
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center shadow-2xs">
                    <QrCode className="w-4.5 h-4.5 text-[#FF571F]" />
                  </div>
                  <h3 className="text-xs xl:text-sm font-extrabold text-[#17212D] leading-snug">
                    Seamless QR Ordering
                  </h3>
                  <p className="text-[11px] xl:text-xs text-[#667085] leading-relaxed">
                    Let your customers order from their table
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="space-y-1">
                  <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center shadow-2xs">
                    <TrendingUp className="w-4.5 h-4.5 text-[#FF571F]" />
                  </div>
                  <h3 className="text-xs xl:text-sm font-extrabold text-[#17212D] leading-snug">
                    Better Operational Visibility
                  </h3>
                  <p className="text-[11px] xl:text-xs text-[#667085] leading-relaxed">
                    Track sales, inventory and performance
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Interactive Floating Hotspot on Desktop Right Visual */}
          <div className="ml-auto hidden xl:block self-end mb-6 z-20">
            <button
              type="button"
              onClick={() => setInteractiveModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#17212D] hover:text-[#FF571F] text-xs font-bold border border-gray-200/90 shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#FF571F]"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FF571F]" />
              <span>Launch Live POS Demo</span>
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================
          RESPONSIVE TABLET & MOBILE VIEW (< 1024px)
          Provides an intentional, non-overlapping stacked composition
          with readable text, full-width product imagery, and benefits.
          ======================================================== */}
      <div className="lg:hidden px-4 sm:px-6 pt-24 pb-10 sm:pt-28 sm:pb-14 bg-gradient-to-b from-[#FDFEFE] to-[#F6F8FB]">
        <div className="max-w-xl mx-auto space-y-8">
          
          {/* Text block */}
          <div className="space-y-5 text-left">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold tracking-wider uppercase shadow-2xs">
                RESTAURANT MANAGEMENT, SIMPLIFIED
              </span>
            </div>

            <h1 className="text-[#17212D] font-extrabold tracking-tight text-[36px] sm:text-[44px] leading-[1.08]">
              Smart Billing for <br />
              <span>Modern </span>
              <span className="text-[#FF571F]">Restaurants.</span>
            </h1>

            <p className="text-[#4A5568] text-base leading-relaxed">
              Manage billing, QR ordering, kitchen orders, inventory, and daily operations from one powerful platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF571F] hover:bg-[#E04612] transition-all shadow-md"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setInteractiveModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#17212D] bg-white hover:bg-gray-50 border border-gray-200 shadow-2xs"
              >
                <div className="w-5 h-5 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Explore the Platform</span>
              </button>
            </div>
          </div>

          {/* Full-width Product Showcase Card on Mobile */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E5E9EF] shadow-xl bg-white">
            <img
              src="/images/hero-devices-mobile.jpg"
              alt="PapBill Restaurant POS Hardware & Software Setup"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-[#17212D] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                PapBill Restaurant POS & Thermal Printer
              </span>
              <button
                type="button"
                onClick={() => setInteractiveModalOpen(true)}
                className="text-[11px] font-bold text-[#FF571F] hover:underline"
              >
                Try Interactive Demo →
              </button>
            </div>
          </div>

          {/* 3 Benefits on Mobile / Tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Zap className="w-4 h-4 fill-[#FF571F]" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#17212D]">Faster Billing</h3>
                <p className="text-xs text-[#667085] mt-0.5">Save time and serve more customers</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <QrCode className="w-4 h-4 text-[#FF571F]" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#17212D]">Seamless QR Ordering</h3>
                <p className="text-xs text-[#667085] mt-0.5">Let your customers order from their table</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center flex-shrink-0 shadow-2xs">
                <TrendingUp className="w-4 h-4 text-[#FF571F]" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#17212D]">Better Operational Visibility</h3>
                <p className="text-xs text-[#667085] mt-0.5">Track sales, inventory and performance</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive POS Demo Modal */}
      {interactiveModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-6xl bg-[#141E30] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 max-h-[94vh] flex flex-col">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between p-3.5 px-5 bg-[#0D1522] text-white border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                </div>
                <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-200">
                    PapBill Cloud POS Terminal Simulator
                  </h3>
                  <span className="hidden md:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FF571F]/20 text-[#FF571F] border border-[#FF571F]/30">
                    v2.4.0 Live Demo
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400 hidden lg:inline">
                  Click dishes to add • Test 1-Tap Bill & KOT
                </span>
                <button
                  type="button"
                  onClick={() => setInteractiveModalOpen(false)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF571F] cursor-pointer"
                  title="Close Simulator"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulator Body */}
            <div className="p-2 sm:p-4 bg-slate-900/60 overflow-y-auto flex-1">
              <InteractivePosShowcase />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
