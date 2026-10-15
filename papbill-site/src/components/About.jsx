import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Target, Compass, Sparkles, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const storyUrl = getWhatsAppUrl('Hi PapBill team, I want to learn more about PapBill and Hatbricks.');

  const pillars = [
    {
      title: 'Our Mission',
      desc: 'Empower food and beverage businesses with fast, intuitive technology that saves hours every day.',
      icon: Target
    },
    {
      title: 'Our Vision',
      desc: 'Build India’s most reliable, restaurant-first operating platform with offline resilience and zero friction.',
      icon: Compass
    },
    {
      title: 'Our Values',
      desc: 'Simplicity, unwavering uptime, customer empathy, and honest transparent pricing.',
      icon: Sparkles
    },
    {
      title: 'Our Team',
      desc: 'Engineers, product designers, and hospitality tech experts dedicated to supporting your growth.',
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase mb-3">
            Built by Hatbricks
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            About PapBill
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            A product by Hatbricks, built to empower modern restaurants.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 sm:p-10 bg-white/90 border border-slate-200/80 shadow-sm mb-12">
          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900 font-bold">PapBill</strong> is a complete restaurant billing and operations platform designed to make daily restaurant management simple, lightning-fast, and scalable.
            </p>
            <p>
              From seamless QR table ordering and point-of-sale counter billing to kitchen display tickets, real-time stock control, and automated GST reporting — PapBill takes the technical friction out of restaurant tech, so restaurant owners and chefs can focus on what they do best: <span className="text-[#FF5A00] font-semibold">serving great food and delighting their guests.</span>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              Headquartered in India · Supporting 11 Indian Regional Languages
            </div>
            <a
              href={storyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#FF5A00] hover:text-[#E65100] inline-flex items-center gap-1.5 group"
            >
              <span>Connect with our team on WhatsApp</span>
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
