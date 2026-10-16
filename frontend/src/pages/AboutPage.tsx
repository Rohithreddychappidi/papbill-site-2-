import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  Compass,
  HeartHandshake,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Clock,
  TrendingUp,
  Building2,
  Smartphone,
  Store,
  Layers,
  Award,
  PhoneCall,
  Flame,
  Check,
  Cpu
} from 'lucide-react';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#17212D] selection:bg-[#FF571F] selection:text-white">
      <SEO
        title="About PapBill - The Restaurant Operating System Built by Hatbricks"
        description="Learn how PapBill is empowering food businesses across India with offline-first billing, mobile POS innovation, and 24/7 dedicated customer support."
        keywords="about PapBill, restaurant billing software company, Hatbricks POS, restaurant software India, restaurant technology company"
        canonical="https://papbill.com/about"
      />
      
      {/* ========================================================
          1. EDITORIAL HERO SECTION
          ======================================================== */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-white border-b border-[#E2E8F0]">
        {/* Soft Background Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-r from-[#FF571F]/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Mission Narrative */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] border border-[#FF571F]/20 text-[#FF571F] text-xs font-black uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>A PRODUCT BY HATBRICKS • ABOUT PAPBILL</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#17212D] leading-[1.08]">
                Built for the realities of the <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF571F] via-[#FF7A00] to-[#E04612]">
                  restaurant floor.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We started PapBill with one non-negotiable principle: restaurant technology should never get in the way of great hospitality. No computer crashes during dinner rush, no lost paper slips, and zero hidden commissions.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/get-started"
                  className="px-7 py-3.5 rounded-2xl bg-[#FF571F] text-white text-sm font-bold shadow-lg shadow-[#FF571F]/25 hover:bg-[#E04612] transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-2xl bg-[#17212D] text-white text-sm font-bold shadow-md hover:bg-black transition-all flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#FF571F]" />
                  <span>Connect with Our Team</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-[#64748B] border-t border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Indian Enterprise SaaS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Offline-First Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>GST & FSSAI Compliant</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-End Production Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-amber-300/10 to-blue-300/10 rounded-3xl blur-2xl -z-0 scale-95" />

                {/* Main Framed Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 z-10">
                  <img
                    src="/images/restaurant-counter.jpg"
                    alt="Modern restaurant interior powered by PapBill"
                    className="w-full h-[440px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent flex flex-col justify-end p-8">
                    <span className="text-xs font-mono font-black text-[#FF571F] uppercase tracking-wider mb-1">
                      Our Operating Standard
                    </span>
                    <h3 className="text-2xl font-black text-white">
                      Zero Downtime. Zero Compromise.
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      "When 150 guests walk in at 8:30 PM, your technology must be faster than the kitchen fire. That's why PapBill exists."
                    </p>
                    
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>Designed in Hyderabad & Bengaluru</span>
                      <span className="text-[#FF571F] font-bold">Made for India 🇮🇳</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pill */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-xl flex items-center gap-3.5 z-20 hidden sm:flex">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 text-[#FF571F] flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#94A3B8] block uppercase">Average Checkout</span>
                    <span className="text-base font-black text-[#17212D]">&lt; 3 Seconds</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. IMPACT METRICS BAR
          ======================================================== */}
      <section className="py-10 bg-[#17212D] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            <div className="pt-2 lg:pt-0">
              <span className="text-4xl sm:text-5xl font-black text-[#FF571F] tracking-tight">1,000+</span>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Active Food Businesses</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">₹150Cr+</span>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Annual Billing Volume Processed</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <span className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">99.99%</span>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Offline-Resilient System Uptime</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">24/7</span>
              <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Direct Human WhatsApp Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. THE ORIGIN STORY: Why We Built PapBill
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-black text-[#FF571F] bg-[#FFF2ED] border border-[#FF571F]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              OUR ORIGIN STORY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212D] tracking-tight mt-4">
              The Saturday night dinner rush <br className="hidden sm:inline" />
              that changed everything.
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg mt-3 leading-relaxed">
              We spent months shadowing restaurant owners, line cooks, and cashiers across India before writing our first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#475467] leading-relaxed">
              <p>
                In late 2023, our engineering team stood behind the cash counter of a bustling multi-story restaurant on a packed Saturday evening. The dining hall was packed, the kitchen was at full throttle, and outside, 40 hungry diners were waiting in a queue.
              </p>
              <p className="font-semibold text-[#17212D]">
                Suddenly, the counter desktop froze. The Windows PC showed a loading spinner. The Wi-Fi dropped, the kitchen printer jammed, and the cashier frantically restarted the system while orders piled up in confusion.
              </p>
              <p>
                That night, we asked ourselves an urgent question: <strong className="text-[#17212D]">Why are modern restaurants still forced to run on 15-year-old desktop computers and clunky legacy software?</strong> Why should a chef or cafe owner have to become a network engineer just to print a lunch receipt?
              </p>
              <p>
                We built <strong className="text-[#FF571F]">PapBill</strong> to solve this forever. An ultra-fast, mobile-first, 100% offline-resilient POS that turns any smartphone, tablet, or lightweight terminal into an enterprise-grade restaurant workstation.
              </p>

              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3.5">
                  <Flame className="w-5 h-5 text-[#FF571F] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-[#17212D]">
                    "Hospitality is about people, aroma, and flavor. We take care of every rupee, every kitchen ticket, and every table in between."
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The PapBill Engineering Difference */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAFBFD] rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 space-y-5 shadow-sm">
                
                <h3 className="text-xl font-black text-[#17212D] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>The 4 Pillars of PapBill Engineering</span>
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: '1. The 3-Second Rule',
                      desc: 'Every cashier action — searching a dish, configuring an add-on, generating a UPI QR, and cutting a receipt — is engineered to complete in under 3 seconds.'
                    },
                    {
                      title: '2. 100% Offline-First SQLite Database',
                      desc: 'Unlike web-only POS systems that freeze when the internet flickers, PapBill operates on a local embedded database. It bills without internet and syncs seamlessly upon reconnection.'
                    },
                    {
                      title: '3. Zero Hardware Lock-In',
                      desc: 'No expensive proprietary touch PCs or AMC service contracts. PapBill runs on any standard Android phone, tablet, iPad, or Mac browser, connecting to any Bluetooth or Wi-Fi printer.'
                    },
                    {
                      title: '4. Anti-Theft & Margin Defense',
                      desc: 'Recipe-level inventory tracking, blind-drop cash drawer balancing, and role-based staff PIN permissions ensure owners never bleed profit on pilferage.'
                    }
                  ].map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#FF571F]/40 transition-colors"
                    >
                      <h4 className="text-sm font-bold text-[#17212D]">{pillar.title}</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          4. OUR GUIDING PRINCIPLES (4 CORE PILLARS)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-black text-[#FF571F] bg-[#FFF2ED] border border-[#FF571F]/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212D] tracking-tight mt-4">
              What We Stand For
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Every decision we make is measured against real restaurant kitchen realities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF2ED] border border-[#FF571F]/20 text-[#FF571F] flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#17212D]">Our Mission</h3>
              <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                Empower food businesses of every format — single counter cafes, food trucks, cloud kitchens, and fine dining — with effortless, lightning-fast tools that eliminate operational friction.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#17212D]">Our Vision</h3>
              <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                Build the most trusted, dependable, and ubiquitous restaurant operational operating system across India and emerging global culinary hubs.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#17212D]">Our Values</h3>
              <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                Relentless empathy for staff, rock-solid uptime, transparent pricing with zero hostage lock-in, and constant innovation based on user feedback.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#17212D]">Our Team</h3>
              <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                A tight-knit crew of passionate software architects, mobile engineers, former restaurant captains, and retail specialists dedicated to your growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          5. PARENT COMPANY SPOTLIGHT: Built by Hatbricks
          ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#17212D] via-[#1E2C3D] to-[#0F172A] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF571F]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#FF571F] text-xs font-black uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>THE TECH POWERHOUSE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Engineered & Backed by <br />
                  <span className="text-[#FF571F]">Hatbricks Technology.</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Hatbricks designs high-throughput enterprise SaaS infrastructure, mobile frameworks, and point-of-sale systems for the retail and hospitality industries. PapBill represents our flagship vision for restaurant digitization.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Bank-Grade 256-Bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Check className="w-4 h-4 text-[#FF571F]" />
                    <span>AWS & Google Cloud High-Availability</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    <Check className="w-4 h-4 text-[#FF571F]" />
                    <span>Automated Daily Backups</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center space-y-3 max-w-xs w-full">
                  <Award className="w-10 h-10 text-[#FF571F] mx-auto" />
                  <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-300 block">
                    Customer Commitment
                  </span>
                  <p className="text-sm font-bold text-white">
                    "Every outlet onboarded receives dedicated WhatsApp support and lifetime software updates."
                  </p>
                  <span className="text-[11px] text-slate-400 block pt-1">
                    — The Hatbricks Engineering Team
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <BottomCta />

    </div>
  );
};
