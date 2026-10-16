import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface OnboardingStep {
  id: string;
  stepNumber: string;
  stepLabel: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  highlights: string[];
  operationalValue: string;
  badge: string;
  ctaText: string;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'language',
    stepNumber: '01',
    stepLabel: 'Language',
    title: 'Choose Your Preferred Language',
    subtitle: 'Tailored for regional restaurant teams across all Indian states.',
    description:
      'Select from 11 native Indian languages including English, Telugu (తెలుగు), Hindi (हिंदी), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Bengali (বাংলা), Marathi (मराठी), and Gujarati. PapBill localizes the entire POS interface, order menus, and receipt typography so your cashiers, captains, and kitchen staff can operate with ease without language barriers.',
    imageSrc: '/images/onboarding_phones/phone_step1_language.png',
    highlights: [
      '11 Indian regional languages supported out-of-the-box',
      'Instant 1-tap language switching anytime from settings',
      'Multilingual bill printing & local item descriptions'
    ],
    operationalValue: 'Zero training curve for local counter staff; eliminates language friction completely.',
    badge: 'STEP 1 OF 7 • LOCALIZATION',
    ctaText: 'Continue to Login'
  },
  {
    id: 'login',
    stepNumber: '02',
    stepLabel: 'Login & OTP',
    title: 'Instant Sign-In via Phone OTP or Google',
    subtitle: 'Fast mobile verification with zero password headaches.',
    description:
      'Enter your 10-digit mobile number (+91) to receive an instant 6-digit verification code on WhatsApp or SMS, or authenticate with 1 tap using "Continue with Google". Staff cashiers and captains can also sign in directly using their assigned 4-digit security PIN to prevent unauthorized drawer access.',
    imageSrc: '/images/onboarding_phones/phone_step2_login.png',
    highlights: [
      'WhatsApp & SMS 6-digit OTP verification in under 10 seconds',
      '1-Tap Google Sign-In for restaurant business owners',
      'Dedicated Cashier / Captain PIN login for staff terminals'
    ],
    operationalValue: '100% secure tenant creation. No forgotten passwords or locked register delays.',
    badge: 'STEP 2 OF 7 • AUTHENTICATION',
    ctaText: 'Continue to Business Info'
  },
  {
    id: 'business-info',
    stepNumber: '03',
    stepLabel: 'Business Info',
    title: 'Enter Restaurant & Tax Information',
    subtitle: 'Set up your restaurant brand, outlet address, and legal tax compliance.',
    description:
      'Input your Restaurant Name (e.g. Varahi Restaurant), dining format (Dine-In, Takeaway, QSR, Cafe), physical address, city, and state. Add your official 14-digit FSSAI license and optional GSTIN for government-compliant invoices. PapBill automatically sets up your bill header branding and applies statutory 5% GST (2.5% CGST + 2.5% SGST).',
    imageSrc: '/images/onboarding_phones/phone_step3_business_info.png',
    highlights: [
      'Automatic 5% GST tax calculation and bill header branding',
      '14-digit FSSAI license number verification & compliance',
      'State & city location configuration for localized billing rules'
    ],
    operationalValue: '100% tax-compliant thermal bills printed with your official restaurant header and license.',
    badge: 'STEP 3 OF 7 • BUSINESS SETUP',
    ctaText: 'Continue to Choose Plan'
  },
  {
    id: 'choose-plan',
    stepNumber: '04',
    stepLabel: 'Choose Plan',
    title: 'Select a Plan or Start 15-Day Free Trial',
    subtitle: 'Transparent pricing with zero hidden fees and no lock-in commitments.',
    description:
      'Choose the subscription tier that best matches your dining volume: Starter (₹199/mo) for single-terminal takeaway counters, Pro (₹299/mo — Most Popular) with recipe inventory management, multi-user staff PINs, and automated WhatsApp bills, or Business (₹499/mo) for multi-outlet dining chains. You can also start with a 100% Free 15-Day Trial with zero credit card required.',
    imageSrc: '/images/onboarding_phones/phone_step4_choose_plan.png',
    highlights: [
      '15-Day Full-Featured Free Trial with ₹0 upfront payment',
      'Monthly or Yearly billing (save 20% on annual plans)',
      'Includes WhatsApp bill sharing, unlimited KOTs & QR ordering'
    ],
    operationalValue: 'Start billing orders on day 1 with zero upfront financial commitment.',
    badge: 'STEP 4 OF 7 • SUBSCRIPTION',
    ctaText: 'Continue to Choose Printer'
  },
  {
    id: 'choose-printer',
    stepNumber: '05',
    stepLabel: 'Choose Printer',
    title: 'Connect Thermal Receipt Printer',
    subtitle: 'Seamless plug-and-play pairing via Bluetooth, Wi-Fi, or USB cable.',
    description:
      'Connect a thermal printer to start printing bills in seconds. PapBill automatically scans and pairs with industry-standard 80mm and 58mm thermal receipt printers like HL450 (Recommended), M80 compact, XP-P323B high-speed, TSC TE244, and Epson TM-T82. Choose wireless Bluetooth for mobile billing, USB for counter terminals, or Wi-Fi for kitchen KOT routing. You can also skip or add printers anytime later.',
    imageSrc: '/images/onboarding_phones/phone_step5_choose_printer.png',
    highlights: [
      'Instant auto-detection for 80mm & 58mm thermal receipt printers',
      'Bluetooth wireless, Wi-Fi LAN & direct USB cable pairing',
      '1-tap Rescan, manual pairing & built-in setup guide'
    ],
    operationalValue: 'Lightning-fast receipt and KOT printing in under 1 second with clean auto-cutting.',
    badge: 'STEP 5 OF 7 • HARDWARE SETUP',
    ctaText: 'Continue to Summary'
  },
  {
    id: 'setup-summary',
    stepNumber: '06',
    stepLabel: 'Setup Summary',
    title: 'Setup Summary & Account Activation',
    subtitle: 'Review your setup, confirm your subscription, and activate your store.',
    description:
      'Review your complete configuration at a glance: Business Information, Selected Plan, and Connected Printer. Complete payment securely via Razorpay (UPI QR, Cards, NetBanking) or launch immediately with your 15-Day Free Trial. PapBill provisions your cloud database in seconds so your registers are ready for operation.',
    imageSrc: '/images/onboarding_phones/phone_step6_summary.png',
    highlights: [
      'Complete setup verification before launching live operations',
      '100% secure payment checkout via Razorpay or Free Trial',
      'Instant cloud tenant activation with zero downtime'
    ],
    operationalValue: '100% verified setup. All store information, taxes, and printers validated before taking live orders.',
    badge: 'STEP 6 OF 7 • ACCOUNT ACTIVATION',
    ctaText: 'Continue to Menu & Billing'
  },
  {
    id: 'menu-billing',
    stepNumber: '07',
    stepLabel: 'Menu & Billing',
    title: 'Add Your Menu & Start Printing Bills',
    subtitle: 'Punch orders, manage items across categories, and print receipts instantly.',
    description:
      'Your PapBill POS terminal is live! Quickly organize your menu with visual categories (Starters, Main Course, Biryani, Chinese, South Indian, Breads, Beverages, Desserts). Punch orders with 1 tap, search items instantly, scan barcodes, and hit "View Order" to print crisp thermal receipts, send KOTs to kitchen printers, and share WhatsApp bills.',
    imageSrc: '/images/onboarding_phones/phone_step7_menu_billing.png',
    highlights: [
      'Visual category menu with high-resolution food item cards',
      '1-Tap order punch, item search & barcode camera scanner',
      'Instant thermal bill printing, kitchen KOT dispatch & WhatsApp receipts'
    ],
    operationalValue: 'Start serving customers and printing professional bills immediately from day one.',
    badge: 'STEP 7 OF 7 • LIVE BILLING & PRINTING',
    ctaText: 'Start Free 15-Day Trial Now'
  }
];

export const SimpleSteps: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Preload all 7 3D phone screen images for instant switching
  useEffect(() => {
    ONBOARDING_STEPS.forEach((step) => {
      const img = new Image();
      img.src = step.imageSrc;
    });
  }, []);

  const activeStep = ONBOARDING_STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + ONBOARDING_STEPS.length) % ONBOARDING_STEPS.length);
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % ONBOARDING_STEPS.length);
  };

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="how-to-start"
      aria-label="Simple Steps to Get Started with PapBill"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF] relative overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-orange-100/60 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            1. SECTION HEADER
            ======================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIMPLE STEPS TO GET STARTED</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-[#17212D] leading-[1.15]">
            How to Get Started: From Setup to Billing in 2 Minutes.
          </h2>

          <p className="text-xs sm:text-sm lg:text-[15px] text-[#667085] leading-relaxed max-w-2xl mx-auto">
            Experience our exact mobile app onboarding journey. See what you configure on each screen, how PapBill automates your restaurant setup, and start billing effortlessly.
          </p>
        </div>

        {/* ========================================================
            2. MAIN SHOWCASE: LEFT 3D PHONE + RIGHT CONTEXT
            ======================================================== */}
        <div className="rounded-3xl bg-white border border-[#E5E9EF] px-3.5 py-6 xs:px-5 sm:p-10 lg:p-12 shadow-xl shadow-slate-900/4 overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* ====================================================
                LEFT COLUMN (5 Cols): 3D IPHONE PRODUCT RENDER
                ==================================================== */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative w-full">
              
              {/* Seamless 3D Phone Render Showcase with Left & Right Nav Buttons */}
              <div className="relative w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[420px] flex items-center justify-between mx-auto">
                
                {/* Left Arrow Button (Previous Step) */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label={`Previous onboarding step (${activeStepIndex === 0 ? ONBOARDING_STEPS[ONBOARDING_STEPS.length - 1].stepLabel : ONBOARDING_STEPS[activeStepIndex - 1].stepLabel})`}
                  className="z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#FF571F] text-slate-800 hover:text-white shadow-md hover:shadow-lg hover:shadow-orange-500/20 border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-90 flex-shrink-0 group"
                  title="Previous Step"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
                </button>

                {/* 3D Phone Render Container */}
                <div 
                  className="relative w-[215px] xs:w-[235px] sm:w-[280px] lg:w-[320px] aspect-[682/1024] flex items-center justify-center touch-pan-y overflow-hidden mx-auto"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeStep.id}
                      src={activeStep.imageSrc}
                      alt={activeStep.title}
                      initial={{ opacity: 0, scale: 0.96, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-contain select-none pointer-events-none"
                      loading="eager"
                    />
                  </AnimatePresence>
                </div>

                {/* Right Arrow Button (Next Step) */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label={`Next onboarding step (${activeStepIndex === ONBOARDING_STEPS.length - 1 ? ONBOARDING_STEPS[0].stepLabel : ONBOARDING_STEPS[activeStepIndex + 1].stepLabel})`}
                  className="z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#FF571F] text-slate-800 hover:text-white shadow-md hover:shadow-lg hover:shadow-orange-500/20 border border-slate-200/90 flex items-center justify-center transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-90 flex-shrink-0 group"
                  title="Next Step"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Bottom Phone Caption & Step Dots */}
              <div className="mt-3 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-500">
                  <span>PapBill Live App</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[#FF571F] font-bold">{activeStep.stepLabel}</span>
                  <span className="text-slate-400">({activeStepIndex + 1}/7)</span>
                </div>

                {/* Interactive Step Dots */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  {ONBOARDING_STEPS.map((step, idx) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      aria-label={`Jump to step ${idx + 1}: ${step.title}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeStepIndex
                          ? 'w-7 bg-[#FF571F]'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ====================================================
                RIGHT COLUMN (7 Cols): CONTEXT REGARDING THAT STEP
                ==================================================== */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Meta Step Badge & Stepper Progress */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200/70 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {activeStep.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                      {activeStep.stepNumber} / 07
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-black text-[#17212D] tracking-tight leading-tight">
                      {activeStep.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#FF571F]">
                      {activeStep.subtitle}
                    </p>
                  </div>

                  {/* Narrative Description Context */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      What Happens in This Step:
                    </span>
                    <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                      {activeStep.description}
                    </p>
                  </div>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-2 pt-1">
                    {activeStep.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Advantage Callout */}
                  <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs flex items-start gap-2.5 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-200 block text-[11px] uppercase tracking-wider">
                        Operational Advantage:
                      </span>
                      <p className="text-slate-300 text-[12px] leading-relaxed mt-0.5">
                        {activeStep.operationalValue}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Controls & Next Step Button */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        aria-label="Previous step"
                        className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNext}
                        aria-label="Next step"
                        className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-slate-300 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-[11px] font-mono font-medium text-slate-400 ml-1.5">
                        Step {activeStepIndex + 1} of {ONBOARDING_STEPS.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {activeStepIndex < ONBOARDING_STEPS.length - 1 ? (
                        <button
                          onClick={handleNext}
                          className="px-4 py-2.5 rounded-xl bg-[#17212D] text-white text-xs font-bold shadow-md hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <span>{activeStep.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF571F]" />
                        </button>
                      ) : (
                        <Link
                          to="/get-started"
                          className="px-5 py-2.5 rounded-xl bg-[#FF571F] text-white text-xs font-black shadow-md hover:bg-[#E04612] transition-all flex items-center gap-2"
                        >
                          <span>Start Free 15-Day Trial</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>



      </div>
    </section>
  );
};
