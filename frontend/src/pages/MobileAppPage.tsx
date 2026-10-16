import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Zap,
  LayoutGrid,
  TrendingUp,
  UtensilsCrossed,
  Package,
  Wallet,
  Bot,
  Printer,
  MessageSquare,
  Bike,
  WifiOff,
  ShieldCheck,
  CheckCircle2,
  Download,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Clock,
  Star,
  Receipt,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

import { SEO } from '../components/SEO';

const MOBILE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "PapBill Mobile Restaurant POS & Billing App",
  "operatingSystem": "Android, iOS",
  "applicationCategory": "BusinessApplication",
  "description": "Turn any Android phone, tablet, or handheld terminal into a high-speed restaurant billing POS. Features 100% offline billing, wireless Bluetooth receipt printing, WhatsApp digital bills, and table management.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "2450",
    "bestRating": "5"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "description": "15-day full feature free trial"
  }
};

export const MobileAppPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'billing' | 'tables' | 'analytics' | 'offline'>('billing');

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#17212D] selection:bg-[#FF571F] selection:text-white">
      <SEO
        title="Mobile Restaurant Billing App for Android & iOS | PapBill POS"
        description="Turn your smartphone or tablet into a high-speed restaurant billing machine. 100% offline billing, Bluetooth thermal printing, WhatsApp digital bills, and table management."
        keywords="restaurant billing app, mobile POS app, android restaurant billing software, offline billing app, cafe billing app, waiter tablet ordering app, mobile restaurant POS India"
        canonical="https://papbill.com/mobile-app"
        schema={MOBILE_APP_SCHEMA}
      />
      
      {/* ========================================================
          1. HERO SECTION: Run Your Restaurant from Your Phone
          ======================================================== */}
      <section className="relative pt-10 pb-14 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#FAFBFD] to-[#F6F8FB] border-b border-[#E5E9EF]">
        {/* Soft Background Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-r from-orange-100/60 via-amber-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Hero Copy & App CTAs */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ALL-IN-ONE MOBILE POS FOR RESTAURANTS</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#141E30] leading-[1.12]">
                Run your restaurant <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF571F] via-[#FF7A00] to-[#E04612]">
                  from your phone.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#5A6578] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                All-in-one. Simple. Powerful. PapBill unifies billing, table ordering, KOT, recipe inventory, and AI analytics into a single mobile experience — designed to keep queues moving and tables turning.
              </p>

              {/* Action Buttons: Download & Free Trial */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/get-started"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#FF571F] text-white text-sm font-black shadow-lg shadow-orange-500/25 hover:bg-[#E04612] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Start 15-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#download"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#141E30] text-white text-sm font-black shadow-md shadow-slate-900/10 hover:bg-slate-800 transition-all flex items-center justify-center gap-2.5"
                >
                  <Download className="w-4 h-4 text-[#FF571F]" />
                  <span>Download Android APK</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[11px] sm:text-xs font-bold text-slate-500 border-t border-slate-200/70">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>100% Offline Billing</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Zero Driver Setup (Bluetooth/WiFi)</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>GST Ready & FSSAI Compliant</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero 3D Ecosystem Showcase */}
            <div className="lg:col-span-6 flex justify-center items-center relative mt-4 lg:mt-0">
              
              {/* Decorative Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/50 via-amber-100/30 to-blue-100/30 rounded-full blur-3xl -z-0 scale-95" />

              {/* Master 3D Mobile Ecosystem Visual */}
              <div className="relative z-10 w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[560px] lg:max-w-[620px] group">
                <img
                  src="/images/mobile/hero_hand_ecosystem.png"
                  alt="PapBill All-In-One Restaurant Mobile POS Ecosystem"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Floating Stat Badge 1 */}
              <div className="absolute -bottom-2 left-2 sm:-bottom-4 sm:-left-4 z-20 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-black">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-500 text-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-400 block uppercase">Checkout Speed</span>
                  <span className="text-xs sm:text-base font-black text-slate-900">&lt; 3 Seconds</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE FEATURES BREAKDOWN (10 DEEP DIVE SECTIONS)
          ======================================================== */}

      {/* Feature 1: Fast Billing & Payments */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual Screen on Left */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Dynamic Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/50 via-amber-100/40 to-blue-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Right */}
                <div className="absolute top-2 right-2 sm:-top-1 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#141E30]">Dynamic UPI QR</span>
                  <span className="text-emerald-600 font-black">1-Tap Pay</span>
                </div>

                {/* 3D Angled Phone: Tilt right inward */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(-3deg)] sm:[transform:perspective(1200px)_rotateY(-7deg)_rotateX(4deg)_rotate(2.5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/billing_thermal_printer.png"
                    alt="Orders in seconds with instant thermal receipt printing"
                    className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute bottom-2 left-2 sm:-bottom-2 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Receipt className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF571F]" />
                  <span className="text-slate-600">Bill #10234:</span>
                  <span className="text-[#FF571F] font-black">₹1,029 Total</span>
                </div>
              </div>
            </div>

            {/* Context on Right */}
            <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                RAPID BILLING & UPI PAYMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Orders in seconds, <br />
                <span className="text-[#FF571F]">payments in one tap.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Create orders, accept cash, card, UPI QR, or split checks across guests. Send KOT tickets to kitchen displays instantly with automatic sequential bill numbers and 5% GST tax breakdowns.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Instant search and visual category tabs for fast item selection',
                  'Dynamic UPI QR code on bill screen (PhonePe, GPay, Paytm)',
                  'Custom bill split (equal divide or item-wise selection)',
                  'Auto-roundoff, service charges, and discount coupon controls'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 2: Visual Table & Floor Plan */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Context on Left */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                TABLE MANAGEMENT & FLOOR LAYOUT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Your floor plan, <br />
                <span className="text-[#FF571F]">live and in control.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Visual interactive floor layout with real-time occupancy status, section filters (AC Hall, Rooftop, Garden, Patio), and running KOT tracking per table. Always know what's happening on your dining floor.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Live color-coded status: Vacant (Green), Seated (Orange), Billed (Blue)',
                  'Turnaround duration timers (e.g. Table 4 occupied for 28 mins)',
                  '1-Tap table transfer, merge for large parties, and seat shifting',
                  'Dedicated Captain order taking mode on any mobile phone or tablet'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Screen on Right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/50 via-teal-100/40 to-orange-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Left */}
                <div className="absolute top-2 left-2 sm:-top-1 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                  <span className="text-slate-900">Table 4</span>
                  <span className="text-slate-500 font-medium">4 Guests Seated</span>
                </div>

                {/* 3D Angled Phone: Tilt left inward */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(3deg)] sm:[transform:perspective(1200px)_rotateY(7deg)_rotateX(4deg)_rotate(-2.5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/table_floor_plan.png"
                    alt="Visual Table Management & Live Floor Plan"
                    className="w-full max-w-[320px] sm:max-w-[370px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-500" />
                  <span className="text-slate-600">Turnaround:</span>
                  <span className="text-blue-600 font-black">28m active</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 3: Real-Time Analytics & Reports */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual Screen on Left */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-orange-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Right */}
                <div className="absolute top-2 right-2 sm:-top-1 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <TrendingUp className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" />
                  <span className="text-slate-900">Today's Revenue:</span>
                  <span className="text-emerald-600 font-black">₹48,250 (+24%)</span>
                </div>

                {/* 3D Angled Phone: Elevated forward tilt right */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(-3deg)] sm:[transform:perspective(1200px)_rotateY(-6deg)_rotateX(5deg)_rotate(2deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/analytics_reports.png"
                    alt="Real-Time Analytics & Owner Reports"
                    className="w-full max-w-[320px] sm:max-w-[370px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute bottom-2 left-2 sm:-bottom-2 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Star className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-500 fill-amber-500" />
                  <span className="text-slate-600">#1 Seller:</span>
                  <span className="text-[#141E30] font-black">Chicken Biryani</span>
                </div>
              </div>
            </div>

            {/* Context on Right */}
            <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                EXECUTIVE ANALYTICS & REPORTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Know your numbers <br />
                <span className="text-[#FF571F]">at a single glance.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Visual interactive charts with date filters — daily, weekly, monthly, and annual. Export audit-ready reports to Excel with one tap. Discover your top revenue dishes, server performance, and peak rush hours.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Payment method breakdown: UPI QR vs Cash vs Credit Cards',
                  '1-Tap Excel & PDF export for tax accountants and owners',
                  'Item-wise sales ranking (top sellers & highest profit margin dishes)',
                  'Nightly automated Z-Report sent directly to owner WhatsApp'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 4: Menu Building & Photo Catalog */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Context on Left */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                MENU CATALOG & DISH CUSTOMIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Build your menu <br />
                <span className="text-[#FF571F]">in minutes.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Create custom categories, set portion pricing (Half/Full), bulk import your dishes via Excel, or snap a photo of your physical menu with your camera — PapBill gets your digital menu live instantly.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Dietary tags: Veg (🟢), Non-Veg (🔴), Egg, and Jain friendly',
                  'Portion variants (Half / Full / Regular / Large)',
                  'Dynamic add-ons & cooking instructions (e.g. Extra Cheese, Less Spicy)',
                  'Instant menu sync across POS counters, waiter pads & Table QR stands'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Screen on Right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 via-orange-100/40 to-rose-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Left */}
                <div className="absolute top-2 left-2 sm:-top-1 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-200" />
                  <span className="text-slate-900">Veg / Non-Veg</span>
                  <span className="text-orange-500 font-bold">• Jain Tags</span>
                </div>

                {/* 3D Angled Phone: Playful tilt left */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(3deg)] sm:[transform:perspective(1200px)_rotateY(8deg)_rotateX(3deg)_rotate(-3deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/menu_catalog.png"
                    alt="Menu Building & Dish Customization"
                    className="w-full max-w-[320px] sm:max-w-[370px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-500" />
                  <span className="text-slate-600">Menu Sync:</span>
                  <span className="text-emerald-600 font-black">All Waiter Pads</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 5: Inventory & Raw Material Depletion */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual Screen on Left */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/50 via-emerald-100/40 to-orange-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Right */}
                <div className="absolute top-2 right-2 sm:-top-1 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-amber-200 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <AlertCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-500" />
                  <span className="text-slate-900">Basmati Rice:</span>
                  <span className="text-amber-600 font-black">&lt; 15kg Alert</span>
                </div>

                {/* 3D Angled Phone: Technical tilt right */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(-3deg)] sm:[transform:perspective(1200px)_rotateY(-7deg)_rotateX(4deg)_rotate(2.5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/inventory_stock.png"
                    alt="Recipe Inventory & Stock Depletion"
                    className="w-full max-w-[320px] sm:max-w-[370px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute bottom-2 left-2 sm:-bottom-2 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Package className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF571F]" />
                  <span className="text-slate-600">Biryani Order:</span>
                  <span className="text-[#FF571F] font-black">-220g Chicken</span>
                </div>
              </div>
            </div>

            {/* Context on Right */}
            <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                RECIPE INVENTORY & STOCK DEPLETION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Never run out. <br />
                <span className="text-[#FF571F]">Never overstock.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Automatic raw ingredient stock deduction per bill, low-stock mobile push notifications, expiry warnings, and theft prevention logs — giving you full visibility into what’s on your shelves.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Recipe-level linkage: 1 Biryani auto-deducts 220g Chicken, 180g Rice, 20g Ghee',
                  'Automated low-stock alerts before ingredients run out during rush hours',
                  'Purchase order tracking and vendor invoice management',
                  'Wastage logging and discrepancy reports to prevent pilferage'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 6: Expense Tracking & Cash Flow */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Context on Left */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-[11px] sm:text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                PETTY CASH & EXPENSE MANAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Track every rupee <br />
                <span className="text-[#FF571F]">your business spends.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Categorize daily petty cash expenses, log vendor cash payouts, set category budgets, and monitor cash flow trends. Detailed P&L summaries help you calculate real net profit after costs.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Fast petty cash expense logging directly from cashier terminal',
                  'Vendor payment receipts and supplier payment ledger',
                  '1-Click blind-drop cash drawer reconciliation at closing time',
                  'Visual expense pie charts for utilities, vegetables, groceries, and staff advances'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Screen on Right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-blue-100/40 to-orange-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Left */}
                <div className="absolute top-2 left-2 sm:-top-1 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" />
                  <span className="text-slate-900">Closing Cash:</span>
                  <span className="text-emerald-600 font-black">100% Balanced</span>
                </div>

                {/* 3D Angled Phone: Subtle finance tilt left */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(3deg)] sm:[transform:perspective(1200px)_rotateY(6deg)_rotateX(4deg)_rotate(-2deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-104">
                  <img
                    src="/images/mobile/expense_cashflow.png"
                    alt="Petty Cash & Expense Management Analytics"
                    className="w-full max-w-[320px] sm:max-w-[370px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div className="absolute bottom-2 right-2 sm:-bottom-2 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Wallet className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-purple-600" />
                  <span className="text-slate-600">Vendor Paid:</span>
                  <span className="text-purple-600 font-black">₹1,250 Vegetables</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature 7: Thermal Printer Hardware */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Visual Screen on Left (maintains zigzag pattern) */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[500px] flex items-center justify-center p-2 sm:p-6 group">
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/60 via-orange-100/40 to-blue-100/30 rounded-3xl blur-2xl -z-0 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Floating Badge 1: Top Right */}
                <div className="absolute top-2 right-2 sm:-top-1 sm:right-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:-translate-y-1">
                  <Printer className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-blue-600" />
                  <span className="text-slate-900">Epson Bill</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-[#FF571F] font-black">TVS KOT</span>
                </div>

                {/* 3D Angled Dual Device Presentation */}
                <div className="relative z-10 transition-all duration-700 ease-out [transform:perspective(1000px)_rotateY(-2deg)] sm:[transform:perspective(1200px)_rotateY(-4deg)_rotateX(2deg)_rotate(1deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)_rotate(0deg)] group-hover:scale-103">
                  <img
                    src="/images/mobile/dual_printer_kot.png"
                    alt="High-Speed Thermal Receipt and KOT Printing with Dual Printers"
                    className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[460px] h-auto object-contain drop-shadow-2xl"
                    loading="lazy"
                  />
                </div>

                {/* Floating Badge 2: Bottom Left */}
                <div className="absolute bottom-2 left-2 sm:-bottom-2 sm:left-2 z-20 flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-800 transition-all duration-500 group-hover:translate-y-1">
                  <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" />
                  <span className="text-slate-600">Print Speed:</span>
                  <span className="text-emerald-600 font-black">&lt; 1s Auto-Cut</span>
                </div>
              </div>
            </div>

            {/* Context on Right */}
            <div className="lg:col-span-6 space-y-4 text-left order-1 lg:order-2">
              <span className="text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider">
                HIGH-SPEED THERMAL PRINTING
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#141E30] tracking-tight leading-tight">
                Receipts that fly out <br />
                <span className="text-[#FF571F]">the moment you bill.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Bluetooth wireless and Wi-Fi thermal printer support with zero driver installations. Kitchen tickets, tax invoices, and daily reports print in under 1 second with clean auto-cutting. Set up in 2 minutes, runs all day.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  'Compatible with 80mm & 58mm ESC/POS printers (Epson, TVS, NGX, HL450, M80)',
                  'Sub-1-second print speed engineered for peak dining queues',
                  'Multi-printer routing: Counter receipt to billing printer, KOT to kitchen printer',
                  'Automatic fallback queue if printer is temporarily out of paper'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. FEATURE COMPARISON / TOOL SUITE GRID
          ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white border-b border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
            <span className="text-xs font-mono font-black text-[#FF571F] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider">
              EVERYTHING IN YOUR POCKET
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141E30] tracking-tight">
              Every tool your restaurant needs to scale.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Built specifically for Indian food businesses — from single-counter cafes to high-volume multi-floor fine dine restaurants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            {[
              {
                icon: ShieldCheck,
                title: 'Staff Role PIN Access',
                desc: 'Control cashier voids, discount permissions, and protect sensitive financial reports with 4-digit staff PINs.'
              },
              {
                icon: MessageSquare,
                title: 'WhatsApp Digital Bills',
                desc: 'Cut paper costs by 60%. Automatically send branded PDF invoices directly to customer WhatsApp with your logo.'
              },
              {
                icon: Bike,
                title: 'Swiggy & Zomato Ready',
                desc: 'Consolidate dine-in, takeaway, and online delivery partner orders into a single kitchen display queue.'
              },
              {
                icon: Receipt,
                title: '5% GST & FSSAI Compliant',
                desc: 'Auto-calculates CGST/SGST splits, includes official FSSAI numbers, and prints compliant tax invoices.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-orange-300 transition-all hover:shadow-lg space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FF571F] flex items-center justify-center font-bold">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#141E30]">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. DOWNLOAD APP & CTA SECTION
          ======================================================== */}
      <section id="download" className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAFBFD] to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-black uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>GET THE APP. RUN YOUR BUSINESS.</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#141E30] tracking-tight leading-tight">
            Ready to upgrade your restaurant <br className="hidden sm:inline" />
            <span className="text-[#FF571F]">to mobile-first billing?</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">
            100% Free 15-day trial with full features unlocked. Zero upfront fees. Works on any Android phone, tablet, or POS hardware.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
            <Link
              to="/get-started"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#FF571F] text-white text-sm sm:text-base font-black shadow-xl shadow-orange-500/25 hover:bg-[#E04612] transition-all flex items-center justify-center gap-2"
            >
              <span>Start 15-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-2xl bg-[#141E30] text-white text-sm sm:text-base font-bold shadow-md hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
            >
              <Download className="w-4 h-4 text-[#FF571F]" />
              <span>Get on Google Play</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-mono pt-2">
            iOS App for iPhone & iPad coming soon to the Apple App Store.
          </p>

        </div>
      </section>

    </div>
  );
};
