import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Target, Compass, Sparkles, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const storyUrl = getWhatsAppUrl('Hi PapBill team, I want to learn more about PapBill and the 15-day free trial.');

  const pillars = [
    {
      title: 'Our Mission',
      desc: 'Empower food and beverage businesses with fast, modern cloud billing at an affordable flat price.',
      icon: Target
    },
    {
      title: 'Our Vision',
      desc: 'Build India’s simplest, most resilient restaurant POS with offline speed and cloud sync.',
      icon: Compass
    },
    {
      title: 'Our Values',
      desc: 'Zero commission, complete price transparency (₹199 / ₹299), and customer-first support.',
      icon: Sparkles
    },
    {
      title: 'Our Team',
      desc: 'Dedicated builders at Hatbricks focused on solving real Indian counter bottlenecks.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            Built by Hatbricks
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            About PapBill
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            A product by Hatbricks, currently in active development to modernize restaurant billing in India.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 bg-white/95 border border-slate-200/80 shadow-sm mb-12">
          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900 font-bold">PapBill</strong> was born from a simple observation: most restaurant billing software in India is either ancient Windows desktop software from 2005 or exorbitantly expensive enterprise apps with hidden commissions.
            </p>
            <p>
              We are building PapBill as an ultra-clean, cloud-synced, offline-resilient billing solution that costs just <span className="font-bold text-slate-900">₹199</span> or <span className="font-bold text-[#FF5A00]">₹299/month</span> with Table QR self-ordering. No contracts, zero commission, and an instant 15-day free trial.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              Made in India · Available in 11 Indian Languages
            </div>
            <a
              href={storyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#FF5A00] hover:text-[#E65100] inline-flex items-center gap-1.5 group"
            >
              <span>Connect with developers on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl bg-white"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00] mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
