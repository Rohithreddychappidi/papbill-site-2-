import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Check, ArrowRight, Sparkles, Cloud, QrCode, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Basic Billing',
      badge: 'Core Counter POS',
      desc: 'Everything you need for lightning-fast counter billing and receipt printing.',
      monthlyPrice: 199,
      yearlyPrice: 159,
      features: [
        'Fast POS counter billing (search dishes, variants, combos)',
        'Thermal receipt printing (58mm & 80mm)',
        'Kitchen Order Tickets (KOT)',
        'All billings safely stored in the Cloud',
        'Works 100% offline (auto-syncs to cloud when reconnected)',
        'WhatsApp digital bill sharing with customers',
        'Daily sales reports & GST tax breakdown',
        'Standard WhatsApp setup support',
        '15 Days Free Trial (No credit card required)'
      ],
      isPopular: false,
      ctaText: 'Start 15-Day Free Trial (₹199/mo)'
    },
    {
      name: 'Smart QR & POS',
      badge: 'Most Popular · Complete Suite',
      desc: 'Includes Table QR self-ordering plus counter billing and cloud inventory.',
      monthlyPrice: 299,
      yearlyPrice: 239,
      features: [
        'Everything in Basic Billing (₹199 plan)',
        'Table QR Self-Ordering included (Scan to view menu & order)',
        'Zero customer app install (works in any mobile browser)',
        'Interactive Kitchen Display System (KDS)',
        'Table layout & live floor occupancy management',
        'Cloud inventory management & low-stock alerts',
        'Unlimited cloud bill history & Excel/CSV export',
        'Available in 11 Indian Regional Languages',
        'Priority 1-on-1 WhatsApp & phone support',
        '15 Days Free Trial (No credit card required)'
      ],
      isPopular: true,
      ctaText: 'Start 15-Day Free Trial (₹299/mo)'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            15 Days Free Trial on All Plans
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No hidden fees, no hardware lock-in, and all your billings are backed up in the cloud.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1 rounded-full glass-panel bg-white border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                !isYearly
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
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

        {/* Exactly 2 Plans Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const trialUrl = getWhatsAppUrl(
              `Hi PapBill, I want to start my 15 days free trial on the ${plan.name} plan (₹${price}/month). Please activate my account.`
            );

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-white border-2 border-[#FF5A00] shadow-2xl shadow-orange-500/10 md:-translate-y-2'
                    : 'glass-panel bg-white border border-slate-200 shadow-lg hover:border-slate-300'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#FF5A00] text-white font-bold text-[11px] tracking-wide uppercase shadow-sm whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-slate-500 mt-1.5 min-h-[32px]">
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight">
                        ₹{price}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-[#FF5A00] font-semibold mt-1 flex items-center gap-1">
                      <Cloud className="w-3.5 h-3.5" />
                      <span>All billings stored in the cloud · 15 Days Free Trial</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                      Included in Plan:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#FF5A00] shrink-0 mt-0.5" />
                        <span className={feat.includes('QR Self-Ordering') || feat.includes('stored in the Cloud') ? 'font-bold text-slate-900' : ''}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={trialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      plan.isPopular
                        ? 'btn-primary shadow-lg shadow-orange-500/25'
                        : 'btn-secondary text-slate-900 hover:border-slate-400'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="text-center text-[10px] text-slate-400 mt-2">
                    Instant activation via WhatsApp · Cancel anytime
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Free trial guarantee banner */}
        <div className="mt-12 max-w-xl mx-auto text-center p-4 rounded-2xl bg-orange-50/60 border border-orange-200/60 text-xs text-slate-700 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FF5A00] shrink-0" />
          <span>Every plan includes a <strong>15-day risk-free trial</strong>. Test PapBill at your counter before paying anything.</span>
        </div>

      </div>
    </section>
  );
}
