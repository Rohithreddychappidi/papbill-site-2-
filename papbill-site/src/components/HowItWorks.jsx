import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Settings, PlayCircle, Smartphone, ChefHat, TrendingUp, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Setup',
      desc: 'We configure your menu items, pricing, tax rates, and table layout.',
      icon: Settings
    },
    {
      num: 2,
      title: 'Go Live',
      desc: 'Log in on any Android tablet, desktop PC, or smartphone in minutes.',
      icon: PlayCircle
    },
    {
      num: 3,
      title: 'Customers Order',
      desc: 'Guests scan the table QR code or cashier taps items at counter.',
      icon: Smartphone
    },
    {
      num: 4,
      title: 'Orders in Kitchen',
      desc: 'KOT prints automatically at the kitchen or flashes on screen.',
      icon: ChefHat
    },
    {
      num: 5,
      title: 'Manage & Grow',
      desc: 'Track daily revenue, stock usage, and customer repeat patterns.',
      icon: TrendingUp
    }
  ];

  const setupUrl = getWhatsAppUrl('Hi PapBill, I want to set up PapBill for my restaurant.');

  return (
    <section id="how" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase mb-3">
            Simple 5-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Get started with PapBill in simple steps — no complicated hardware or lengthy training needed.
          </p>
        </div>

        {/* 5 Step Cards Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 bg-white relative flex flex-col justify-between"
              >
                <div>
                  {/* Number Badge with Orange Fill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#FF5A00] text-white font-bold text-sm flex items-center justify-center shadow-sm shadow-orange-500/30">
                      {step.num}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress arrow indicator for desktop except last */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA */}
        <div className="text-center mt-12">
          <a
            href={setupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-[13px] py-2 px-5 inline-flex items-center gap-2 group"
          >
            <span>Ask about onboarding on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FF5A00]" />
          </a>
        </div>

      </div>
    </section>
  );
}
