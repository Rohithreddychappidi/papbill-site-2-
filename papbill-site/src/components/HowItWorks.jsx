import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Settings, PlayCircle, Smartphone, ChefHat, Cloud, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: 1,
      title: 'Setup Menu',
      desc: 'We configure your dishes, categories, prices, and tax rates in 10 minutes.',
      icon: Settings
    },
    {
      num: 2,
      title: 'Go Live on Cloud',
      desc: 'Log in from your phone, Android tablet, or laptop. No special server hardware.',
      icon: PlayCircle
    },
    {
      num: 3,
      title: 'Take Orders',
      desc: 'Guests order via table QR (₹299 plan) or your cashier punches at counter.',
      icon: Smartphone
    },
    {
      num: 4,
      title: 'Kitchen Prints (KOT)',
      desc: 'Order tickets print automatically at the kitchen or show on display.',
      icon: ChefHat
    },
    {
      num: 5,
      title: 'Cloud Backup & Sync',
      desc: 'Every bill is saved to the cloud. Check live revenue from your phone anywhere.',
      icon: Cloud
    }
  ];

  const setupUrl = getWhatsAppUrl('Hi PapBill, I want to set up my restaurant menu and try the 15-day free trial.');

  return (
    <section id="how" className="py-20 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            Simple 5-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Get up and running in one afternoon with your existing phone, tablet, or PC.
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
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

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
            className="btn-secondary text-xs sm:text-sm py-2 px-5 inline-flex items-center gap-2 group"
          >
            <span>Ask our team for setup assistance on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#FF5A00]" />
          </a>
        </div>

      </div>
    </section>
  );
}
