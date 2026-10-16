import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  QrCode,
  Package,
  ReceiptText,
  BarChart3,
  LayoutGrid,
  Smartphone,
  Printer,
  Monitor,
  Users,
  Layers,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';

interface PlanDetail {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  target: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  heroHighlight: string;
  coreHighlights: {
    icon: React.ElementType;
    title: string;
    desc: string;
    isPrimary?: boolean;
  }[];
  allFeatures: string[];
  devices: string;
  ctaText: string;
  ctaLink: string;
}

const PLANS_DATA: PlanDetail[] = [
  {
    id: 'starter',
    name: 'Starter',
    target: 'Quick Counters & Cafes',
    tagline: 'Essential POS billing & digital menu for single-counter outlets.',
    monthlyPrice: 299,
    yearlyPrice: 269,
    heroHighlight: 'Menu + QR + Stock + Expense + Analytics',
    coreHighlights: [
      {
        icon: UtensilsCrossed,
        title: 'Easy Menu Adding',
        desc: 'Quick item entry, categories, variants, and price modifiers',
        isPrimary: true
      },
      {
        icon: QrCode,
        title: 'QR Menu (View Items)',
        desc: 'Contactless scan-to-browse digital menu for customers',
        isPrimary: true
      },
      {
        icon: Package,
        title: 'Stock Management',
        desc: 'Real-time inventory levels, reorder alerts & raw material stock',
        isPrimary: true
      },
      {
        icon: ReceiptText,
        title: 'Expense Management',
        desc: 'Record daily cash outflows, vendor payouts & petty expenses',
        isPrimary: true
      },
      {
        icon: BarChart3,
        title: 'Business Analysis',
        desc: 'Daily sales summaries, hourly trends & profit margin insights',
        isPrimary: true
      }
    ],
    allFeatures: [
      'Fast 3-Tap Mobile & Counter Billing',
      'Instant WhatsApp & Thermal Receipt Printing',
      'Customer Database & CRM records',
      'Daily Z-Report & Sales Audits',
      '1 Counter Outlet • Up to 2 Staff Logins'
    ],
    devices: 'Up to 2 Active Devices',
    ctaText: 'Start 14-Day Free Trial',
    ctaLink: '/get-started'
  },
  {
    id: 'business',
    name: 'Business',
    badge: 'MOST POPULAR • BEST FOR DINE-IN',
    isPopular: true,
    target: 'Dine-In Restaurants & QSRs',
    tagline: 'Full table management, waiter captain apps & kitchen automation.',
    monthlyPrice: 379,
    yearlyPrice: 341,
    heroHighlight: 'Everything in Starter + Table Management & Auto KOT',
    coreHighlights: [
      {
        icon: LayoutGrid,
        title: 'Table Management',
        desc: 'Visual floor map, table status (vacant/occupied/billed) & merge tables',
        isPrimary: true
      },
      {
        icon: Smartphone,
        title: 'Waiter Mobile Access',
        desc: 'Captain apps for staff to punch orders directly at customer tables',
        isPrimary: true
      },
      {
        icon: QrCode,
        title: 'QR Menu with Table Order',
        desc: 'Dine-in customers order & re-order straight from their table phone',
        isPrimary: true
      },
      {
        icon: Printer,
        title: 'Automatic KOT Printing',
        desc: 'Instant zero-delay kitchen order tickets routed to kitchen printers/KDS',
        isPrimary: true
      }
    ],
    allFeatures: [
      'Includes Everything in Starter',
      'Live Kitchen Display System (KDS)',
      'Recipe-Level Inventory & Auto Low-Stock Alerts',
      'Staff PIN Security & Activity Audits',
      'Unlimited Tables & Waiter Devices',
      '24/7 Priority Phone & WhatsApp Support'
    ],
    devices: 'Unlimited Tables & Waiter Devices',
    ctaText: 'Get Started with Business',
    ctaLink: '/get-started'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    target: 'Chains & High-Volume Brands',
    tagline: 'Desktop power, unlimited staff permissions & food aggregator sync.',
    monthlyPrice: 549,
    yearlyPrice: 494,
    heroHighlight: 'Everything in Business + Desktop View & Swiggy/Zomato Sync',
    coreHighlights: [
      {
        icon: Monitor,
        title: 'Desktop View Access',
        desc: 'Full-featured Windows PC, Mac & Web desktop app for high-speed counter billing',
        isPrimary: true
      },
      {
        icon: Users,
        title: 'Multiple Users Login',
        desc: 'Custom role-based permissions (Cashier, Captain, Manager) & multi-account security',
        isPrimary: true
      },
      {
        icon: Zap,
        title: 'Swiggy & Zomato Integration',
        desc: 'Direct 2-way live sync for online orders, menu updates & rider dispatch',
        isPrimary: true
      }
    ],
    allFeatures: [
      'Includes Everything in Business',
      'Multi-Branch & Central Kitchen Control',
      'Outlet-Wise Menu & Pricing Overrides',
      'Consolidated Chain Financials & P&L',
      'Dedicated Account Manager & Free Setup',
      'Custom ERP & Hardware Integration Support'
    ],
    devices: 'Multi-Terminal Desktop & Mobile',
    ctaText: 'Start Enterprise Trial',
    ctaLink: '/get-started'
  }
];

export const HomePricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Background Decorative Ambient Blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#FF571F]/5 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] border border-[#FF571F]/20 text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Plans & Transparent Pricing
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            Simple, Transparent Pricing <br className="hidden sm:inline" />
            for Every Restaurant Stage
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Zero setup commissions, no hidden fees. Choose the tier engineered for your exact operational workflow.
          </p>

          {/* Billing Switcher (Monthly vs Yearly) */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white p-1.5 rounded-full border border-[#E2E8F0] shadow-sm flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#17212D] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#17212D]'
                }`}
              >
                Monthly Billing
              </button>
              
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#FF571F] text-white shadow-md shadow-[#FF571F]/25'
                    : 'text-[#64748B] hover:text-[#17212D]'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-black tracking-wide uppercase">
                  10% OFF
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS_DATA.map((plan) => {
            const activePrice = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white border-2 border-[#FF571F] shadow-2xl ring-4 ring-[#FF571F]/10 lg:-translate-y-2'
                    : 'bg-white border border-[#E2E8F0] shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF571F] to-[#FF7A45] text-white text-[11px] font-black uppercase tracking-wider shadow-lg shadow-[#FF571F]/30 flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Target business type */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#475467]">
                      {plan.target}
                    </span>
                    <span className="text-[11px] font-semibold text-[#94A3B8]">
                      {plan.devices}
                    </span>
                  </div>

                  {/* Plan Name & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#17212D] mt-3">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed min-h-[34px]">
                    {plan.tagline}
                  </p>

                  {/* Price display with animated count */}
                  <div className="my-6 pt-5 pb-5 border-y border-[#F1F5F9]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight">
                        ₹{activePrice.toLocaleString('en-IN')}
                      </span>
                      {billingPeriod === 'yearly' && (
                        <span className="text-base line-through text-[#94A3B8] font-bold">
                          ₹{plan.monthlyPrice}
                        </span>
                      )}
                      <span className="text-xs font-bold text-[#64748B]">
                        / month
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-[#94A3B8] mt-1 flex items-center gap-1.5">
                      {billingPeriod === 'yearly' ? (
                        <>
                          <span>Billed annually at ₹{(activePrice * 12).toLocaleString('en-IN')}/year</span>
                          <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">10% OFF</span>
                        </>
                      ) : (
                        <span>Billed monthly, cancel anytime</span>
                      )}
                    </div>
                  </div>

                  {/* PRIMARY HIGHLIGHT BOX (Exact Features Requested by User) */}
                  <div className="mb-6">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#FF571F] mb-3 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#FF571F]" />
                      Core Capabilities:
                    </div>
                    
                    <div className="space-y-2.5">
                      {plan.coreHighlights.map((feat, idx) => {
                        const IconComponent = feat.icon;
                        return (
                          <div
                            key={idx}
                            className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 flex items-start gap-3 hover:bg-[#FFF9F6] hover:border-[#FF571F]/30 transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg bg-white border border-[#E2E8F0] text-[#FF571F] flex items-center justify-center flex-shrink-0 shadow-2xs mt-0.5">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-bold text-[#17212D] flex items-center gap-1.5">
                                {feat.title}
                              </div>
                              <div className="text-[11px] text-[#64748B] leading-snug mt-0.5">
                                {feat.desc}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Included Features List */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2.5">
                      Also Includes:
                    </div>
                    <div className="space-y-2">
                      {plan.allFeatures.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                  <Link
                    to={plan.ctaLink}
                    className={`w-full py-3.5 px-5 rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#FF571F] hover:bg-[#E04612] text-white shadow-md shadow-[#FF571F]/25 hover:shadow-lg'
                        : 'bg-[#17212D] hover:bg-black text-white hover:shadow-md'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <p className="text-[11px] text-center text-[#94A3B8] mt-2.5 font-medium">
                    14-day free trial • No card required
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee & Details Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8 text-xs font-bold text-[#17212D]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>14-Day Full Access Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF571F]" />
              <span>Free Menu Digitization</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF571F]" />
              <span>Zero Setup Commissions</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#FF571F]" />
              <span>Cancel or Switch Anytime</span>
            </div>
          </div>

          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF571F] hover:text-[#E04612] transition-colors whitespace-nowrap"
          >
            <span>Compare all feature limits in matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
