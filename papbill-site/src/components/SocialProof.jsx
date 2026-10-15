import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  Cloud, 
  WifiOff, 
  Zap, 
  Globe2, 
  Printer, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SocialProof() {
  const trialUrl = getWhatsAppUrl('Hi PapBill, I want to join the Early Access program and get a 15-day free trial.');

  const pillars = [
    {
      icon: Cloud,
      title: 'Cloud Billing Storage',
      desc: 'Every bill generated is automatically backed up in secure cloud storage. Access live sales from anywhere on your phone.'
    },
    {
      icon: WifiOff,
      title: 'Offline-First Engine',
      desc: 'Internet downtime never stops your restaurant. Keep punching orders and printing bills; everything auto-syncs when online.'
    },
    {
      icon: Zap,
      title: 'Sub-2-Second Checkout',
      desc: 'Optimized touch keyboard and barcode shortcuts so your cashiers can clear peak hour rush lines in seconds.'
    },
    {
      icon: Printer,
      title: 'Thermal Printer Ready',
      desc: 'Plug-and-play compatibility with standard 58mm and 80mm ESC/POS USB and Bluetooth thermal printers.'
    },
    {
      icon: Globe2,
      title: '11 Indian Languages',
      desc: 'English, Hindi, Telugu, Tamil, Kannada, Malayalam, Marathi, Bengali, Gujarati, Punjabi, and Odia.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Commission Fees',
      desc: 'Keep 100% of your earnings. Simple flat ₹199 or ₹299 monthly plans without predatory percentages.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering & Product Focus
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for Real Restaurant Realities
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            No bloated corporate software. Just lightweight, rock-solid billing built specifically for busy food counters in India.
          </p>
        </div>

        {/* 6 Product Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Early Access / 15 Days Free Trial Callout */}
        <div className="mt-14 max-w-3xl mx-auto glass-panel p-8 rounded-3xl bg-slate-900 text-white text-center border border-slate-800 shadow-xl">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-[11px] font-bold uppercase tracking-wider mb-3">
            Early Access Beta Program
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Get 15 Days of Full Access for Free
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-2 mb-6">
            Help shape PapBill directly with our development team. Get personal onboarding, priority feature requests, and 15 days completely free.
          </p>
          <a
            href={trialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2.5 px-6 shadow-lg shadow-orange-500/30 group inline-flex items-center gap-2"
          >
            <span>Claim 15 Days Free Trial on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
