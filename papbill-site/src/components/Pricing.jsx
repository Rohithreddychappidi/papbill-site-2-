import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Check, ArrowRight, Zap, Shield } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      badge: null,
      desc: 'Perfect for small restaurants, bakeries & food trucks.',
      monthlyPrice: 1499,
      yearlyPrice: 1199,
      features: [
        'Core POS billing counter',
        'QR digital menu browsing',
        'Kitchen order tickets (KOT)',
        'Basic inventory tracking',
        'Daily sales & tax reports',
        'Standard email & chat support',
        'Single restaurant outlet'
      ],
      isPopular: false,
      ctaText: 'Get Started'
    },
    {
      name: 'Business',
      badge: 'Most Popular',
      desc: 'For growing dine-in restaurants and bustling bistros.',
      monthlyPrice: 2499,
      yearlyPrice: 1999,
      features: [
        'Everything in Starter',
        'Full QR table self-ordering',
        'Interactive Kitchen Display (KDS)',
        'Table layout & floor management',
        'WhatsApp digital bill sharing',
        'Recipe costing & low-stock alerts',
        'Advanced financial analytics',
        'Priority phone & WhatsApp support'
      ],
      isPopular: true,
      ctaText: 'Get Started with Business'
    },
    {
      name: 'Multi-Branch',
      badge: 'Chains & Franchises',
      desc: 'For multi-location brands and franchise networks.',
      monthlyPrice: 4999,
      yearlyPrice: 3999,
      features: [
        'Everything in Business',
        'Multi-outlet central dashboard',
        'Global menu & price syncing',
        'Role-based staff permissions',
        'Consolidated tax & franchise reports',
        'API & custom ERP integrations',
        'Dedicated 24/7 account manager'
      ],
      isPopular: false,
      ctaText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase mb-3">
            Simple & Transparent
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple & Transparent Pricing
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Choose a plan that fits your restaurant. No hidden charges or cancellation fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full glass-panel bg-white border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !isYearly
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isYearly
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Yearly</span>
              <span className="px-1.5 py-0.2 rounded-full bg-[#FF5A00] text-white text-[10px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const planInquiryUrl = getWhatsAppUrl(
              `Hi PapBill, I am interested in the ${plan.name} plan (${isYearly ? 'Yearly' : 'Monthly'} ₹${price}/month). Please share more details.`
            );

            return (
              <div
                key={idx}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.isPopular
                    ? 'bg-white border-2 border-[#FF5A00] shadow-xl shadow-orange-500/10 -translate-y-1'
                    : 'glass-panel bg-white/80 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#FF5A00] text-white font-bold text-[11px] tracking-wide uppercase shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {isYearly ? 'Billed annually · Includes 20% savings' : 'Billed monthly · Cancel anytime'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      What's Included:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={planInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                      plan.isPopular
                        ? 'btn-primary shadow-md'
                        : 'btn-secondary text-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Plan / WhatsApp Inquire notice */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Looking for a custom enterprise setup or multi-outlet quotation?{' '}
          <a
            href={getWhatsAppUrl('Hi PapBill, I have custom enterprise requirements for my restaurant chain.')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF5A00] font-semibold underline underline-offset-2 hover:text-[#E65100]"
          >
            Chat with our sales team on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
