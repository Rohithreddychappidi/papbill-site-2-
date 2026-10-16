import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS, PRICING_FAQS } from '../data/pricing';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

const PRICING_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "name": "PapBill Restaurant POS & Billing Software Subscription",
      "description": "Affordable cloud and offline restaurant billing software for Indian restaurants, cafes, bakeries, and cloud kitchens.",
      "brand": {
        "@type": "Brand",
        "name": "PapBill"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "269",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "269",
            "priceCurrency": "INR",
            "unitText": "MONTH",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "MON"
            }
          },
          "description": "Essential POS billing & digital menu for cafes, bakeries & quick counters"
        },
        {
          "@type": "Offer",
          "name": "Business Plan",
          "price": "341",
          "priceCurrency": "INR",
          "description": "Complete dine-in automation with table management, waiter apps & auto-KOT"
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan",
          "price": "494",
          "priceCurrency": "INR",
          "description": "Multi-outlet management, desktop power, user role permissions & delivery sync"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": PRICING_FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="Restaurant Billing Software Pricing - Plans from ₹269/Mo | PapBill"
        description="Affordable, transparent restaurant billing software pricing in India. Starter plan at ₹269/mo, Business at ₹341/mo, Enterprise at ₹494/mo. 10% annual discount, 15-day free trial."
        keywords="restaurant billing software pricing, restaurant POS cost India, cheap restaurant billing software, cafe POS price, restaurant software monthly plans, offline billing machine price"
        canonical="https://papbill.com/pricing"
        schema={PRICING_SCHEMA}
      />
      
      {/* Header Banner */}
      <section className="pt-16 pb-16 bg-white border-b border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Transparent
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            Simple & Transparent Pricing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Choose a plan that fits your restaurant. No hidden charges, zero setup commissions.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="bg-[#F6F8FB] p-1.5 rounded-full border border-[#E5E9EF] flex items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-[#17212D] shadow-xs'
                    : 'text-[#667085] hover:text-[#17212D]'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#FF571F] text-white shadow-xs'
                    : 'text-[#667085] hover:text-[#17212D]'
                }`}
              >
                <span>Yearly</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 font-extrabold uppercase">
                  10% OFF
                </span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => {
              const currentPrice = billingPeriod === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-white border-2 border-[#FF571F] shadow-2xl ring-4 ring-[#FF571F]/10 scale-105 z-10'
                      : 'bg-white border border-[#E5E9EF] shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Most Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF571F] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                      {plan.targetBusiness}
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#17212D]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#667085] mt-1">
                      {plan.tagline}
                    </p>

                    {/* Price display */}
                    <div className="my-6 pt-6 border-t border-gray-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-[#17212D]">
                          ₹{currentPrice.toLocaleString('en-IN')}
                        </span>
                        {billingPeriod === 'yearly' && (
                          <span className="text-base line-through text-gray-400 font-bold">
                            ₹{plan.monthlyPrice}
                          </span>
                        )}
                        <span className="text-xs text-[#667085] font-semibold">
                          / month
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 mt-1 flex items-center gap-1.5">
                        {billingPeriod === 'yearly' ? (
                          <>
                            <span>Billed annually (₹{(currentPrice * 12).toLocaleString('en-IN')}/yr)</span>
                            <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">10% OFF</span>
                          </>
                        ) : (
                          'Billed monthly, cancel anytime'
                        )}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-3 pt-2 text-xs">
                      <div className="font-bold text-[#17212D] uppercase tracking-wider text-[11px]">
                        What's Included:
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[#17212D]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF571F] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                      to={plan.ctaAction === 'sales' ? '/contact' : '/get-started'}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs font-bold transition-all shadow-xs ${
                        plan.isPopular
                          ? 'bg-[#FF571F] hover:bg-[#E04612] text-white shadow-md'
                          : 'bg-[#17212D] hover:bg-black text-white'
                      }`}
                    >
                      {plan.ctaText}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-16 bg-white border-y border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#17212D]">
              Compare Plan Limits & Capabilities
            </h2>
            <p className="text-xs text-[#667085] mt-2">
              Detailed breakdown of outlet, device, and support limits across tiers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-[#17212D] text-white uppercase text-[11px]">
                <tr>
                  <th className="p-4">Feature / Resource</th>
                  <th className="p-4">Starter</th>
                  <th className="p-4 text-[#FF571F]">Business</th>
                  <th className="p-4">Multi-Branch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-[#17212D]">Outlets Supported</td>
                  <td className="p-4">1 Location</td>
                  <td className="p-4 font-semibold text-[#17212D]">1 Location</td>
                  <td className="p-4 font-semibold text-[#FF571F]">5 Locations Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#17212D]">Device Logins</td>
                  <td className="p-4">2 Active Devices</td>
                  <td className="p-4 font-semibold text-[#17212D]">Unlimited Devices</td>
                  <td className="p-4 font-semibold text-[#17212D]">Unlimited Devices</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-[#17212D]">QR Ordering Live Sync</td>
                  <td className="p-4 text-gray-400">Digital Menu Only</td>
                  <td className="p-4 font-bold text-emerald-600">✓ Full Table Ordering</td>
                  <td className="p-4 font-bold text-emerald-600">✓ Full Table Ordering</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#17212D]">Recipe-Level Costing</td>
                  <td className="p-4 text-gray-400">—</td>
                  <td className="p-4 font-bold text-emerald-600">✓ Included</td>
                  <td className="p-4 font-bold text-emerald-600">✓ Central Kitchen Sync</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 font-bold text-[#17212D]">Support SLA</td>
                  <td className="p-4">Standard Email/Chat</td>
                  <td className="p-4 font-semibold text-[#17212D]">24/7 Priority Phone</td>
                  <td className="p-4 font-bold text-[#FF571F]">Dedicated Account Mgr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#17212D]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#667085] mt-2">
              Everything you need to know about PapBill subscriptions and billing.
            </p>
          </div>

          <div className="space-y-4">
            {PRICING_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E9EF] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#17212D] hover:text-[#FF571F]"
                >
                  <span>{faq.question}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 flex-shrink-0 text-[#FF571F]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 flex-shrink-0 text-gray-400" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#667085] leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCta />

    </div>
  );
};
