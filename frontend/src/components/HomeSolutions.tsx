import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Coffee,
  Zap,
  UtensilsCrossed,
  Cloud,
  Building2,
  Truck
} from 'lucide-react';

interface SolutionItem {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  image: string;
  metric: string;
  highlightTag: string;
}

const SOLUTIONS: SolutionItem[] = [
  {
    id: 'cafes',
    name: 'Cafes & Bakeries',
    badge: 'CAFES & BAKERIES',
    icon: Coffee,
    headline: 'Lightning-fast counter checkout and cozy guest experiences.',
    description:
      'Automatic modifier prompts for milk choices and syrups, 3-tap rapid order punching, and instant barista slip printing.',
    image: '/images/solutions/cafes.jpg',
    metric: '⚡ 3-Tap Quick Billing',
    highlightTag: 'Sub-1s Barista Slips'
  },
  {
    id: 'qsr',
    name: 'Quick-Service (QSR)',
    badge: 'QSR & FAST FOOD',
    icon: Zap,
    headline: 'High-volume counter punching with automated pickup tokens.',
    description:
      'Process hundreds of orders per hour with instant queue token generation, customer-facing checkout displays, and split kitchen station routing.',
    image: '/images/solutions/qsr.jpg',
    metric: '🚀 300+ Orders / Hour',
    highlightTag: 'Live Token Queue'
  },
  {
    id: 'full-service',
    name: 'Dine-In & Fine Dining',
    badge: 'DINE-IN & RESTOBARS',
    icon: UtensilsCrossed,
    headline: 'Interactive visual table floor maps with contactless QR ordering.',
    description:
      'Empower captains with handheld tablets for tableside punching, fire multi-course KOTs in batches, and split bills effortlessly by seat or item.',
    image: '/images/solutions/dine_in.jpg',
    metric: '📈 +24% Table Turnover',
    highlightTag: 'Color Floor Map'
  },
  {
    id: 'cloud-kitchens',
    name: 'Cloud Kitchens',
    badge: 'DELIVERY & VIRTUAL BRANDS',
    icon: Cloud,
    headline: 'Master 5+ virtual delivery brands from a single kitchen screen.',
    description:
      'Unify incoming orders across all your virtual brands, automatically print branded packaging stickers, and track raw material stock centrally.',
    image: '/images/solutions/cloud_kitchen.jpg',
    metric: '☁️ 5+ Brands on 1 Screen',
    highlightTag: 'Auto Packaging Labels'
  },
  {
    id: 'multi-branch',
    name: 'Chains & Franchises',
    badge: 'MULTI-OUTLET SCALING',
    icon: Building2,
    headline: 'Scale from 2 to 50+ locations with zero operational blind spots.',
    description:
      'Push central menu catalog and price updates in 1 click, compare live outlet-by-outlet revenues, and enforce strict cashier PIN security controls.',
    image: '/images/solutions/multi_branch.jpg',
    metric: '🏢 Real-Time Chain Sync',
    highlightTag: 'Central Menu Control'
  },
  {
    id: 'food-trucks',
    name: 'Food Trucks & Pop-Ups',
    badge: 'PORTABLE & OFFLINE',
    icon: Truck,
    headline: 'Compact mobile billing that never depends on Wi-Fi.',
    description:
      'Operate 100% offline with an embedded local database on your smartphone, paired with pocket Bluetooth thermal printers for zero-wiring setups.',
    image: '/images/solutions/food_truck.jpg',
    metric: '📶 100% Offline Engine',
    highlightTag: 'Pocket Bluetooth'
  }
];

export const HomeSolutions: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = SOLUTIONS.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Auto-advance coverflow every 5.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Preload images
  useEffect(() => {
    SOLUTIONS.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const activeSolution = SOLUTIONS[activeIndex];

  // Helper to calculate circular offset
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section
      id="industry-solutions"
      aria-label="Smart POS Solutions for Every Food Business"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E5E9EF] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-orange-100/50 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* ========================================================
            1. SIMPLE CLEAN HEADER & SUBHEADING
            ======================================================== */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SMART POS FOR EVERY FOOD BUSINESS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#17212D] leading-[1.15]">
            Tailored for Your Restaurant Format.
          </h2>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#667085] leading-relaxed max-w-2xl mx-auto">
            From single-counter espresso bars to high-volume multi-brand dining chains, experience how PapBill adapts to your exact operational workflow.
          </p>
        </div>


        {/* ========================================================
            3. 3D COVERFLOW CAROUSEL (REFERENCE ANIMATION FLOW)
            ======================================================== */}
        <div className="relative w-full max-w-5xl mx-auto h-[290px] sm:h-[380px] lg:h-[440px] flex items-center justify-center [perspective:1400px]">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous solution"
            className="absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#FF571F] text-slate-700 hover:text-white shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next solution"
            className="absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-[#FF571F] text-slate-700 hover:text-white shadow-xl shadow-slate-900/10 border border-slate-200/80 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Perspective Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {SOLUTIONS.map((item, index) => {
              const diff = getOffset(index);
              const isActive = diff === 0;

              // Transform configurations based on distance from center
              let translateX = '0%';
              let scale = 1;
              let rotateY = 0;
              let opacity = 0;
              let zIndex = 0;
              let isVisible = false;

              if (diff === 0) {
                translateX = '0%';
                scale = 1;
                rotateY = 0;
                opacity = 1;
                zIndex = 30;
                isVisible = true;
              } else if (diff === -1) {
                translateX = '-56%';
                scale = 0.82;
                rotateY = 22;
                opacity = 0.65;
                zIndex = 20;
                isVisible = true;
              } else if (diff === 1) {
                translateX = '56%';
                scale = 0.82;
                rotateY = -22;
                opacity = 0.65;
                zIndex = 20;
                isVisible = true;
              } else if (diff === -2) {
                translateX = '-98%';
                scale = 0.68;
                rotateY = 35;
                opacity = 0.25;
                zIndex = 10;
                isVisible = true;
              } else if (diff === 2) {
                translateX = '98%';
                scale = 0.68;
                rotateY = -35;
                opacity = 0.25;
                zIndex = 10;
                isVisible = true;
              }

              if (!isVisible) return null;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => !isActive && setActiveIndex(index)}
                  animate={{
                    x: translateX,
                    scale,
                    rotateY,
                    opacity,
                    zIndex
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                  className={`absolute w-[86vw] max-w-[340px] sm:max-w-[480px] lg:max-w-[560px] aspect-[16/10.5] rounded-3xl overflow-hidden shadow-2xl transition-shadow cursor-pointer ${
                    isActive
                      ? 'shadow-2xl shadow-slate-900/25 border-4 border-white ring-2 ring-[#FF571F]/30'
                      : 'shadow-lg border-2 border-white/60 hover:opacity-85'
                  }`}
                >
                  {/* Photo Visual */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />

                  {/* Category Name Overlay On Top Of Image */}
                  <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20 pointer-events-none">
                    <div
                      className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md shadow-lg text-xs sm:text-sm font-black tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'bg-[#17212D]/95 text-white border border-white/40 shadow-2xl ring-2 ring-[#FF571F]/40'
                          : 'bg-black/70 text-white/95 border border-white/20'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          isActive ? 'bg-[#FF571F] animate-pulse' : 'bg-white/80'
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                  </div>

                  {/* Subtle vignette gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            4. ACTIVE ITEM DETAILS & CTA
            ======================================================== */}
        <div className="max-w-2xl mx-auto mt-6 sm:mt-8 space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="space-y-2 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF571F] text-[11px] font-mono font-black uppercase tracking-wider">
                <span>{activeSolution.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#17212D] tracking-tight">
                {activeSolution.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#FF571F] font-semibold">
                {activeSolution.headline}
              </p>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium max-w-xl mx-auto">
                {activeSolution.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Links & Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to={`/solutions#${activeSolution.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#17212D] text-white hover:bg-[#FF571F] text-xs font-bold transition-all shadow-md shadow-slate-900/10 cursor-pointer"
            >
              <span>Explore {activeSolution.name} Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              <span>Start Free 15-Day Trial</span>
            </Link>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 pt-3">
            {SOLUTIONS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex
                    ? 'w-7 bg-[#FF571F]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
