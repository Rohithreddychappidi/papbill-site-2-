import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function BottomCta() {
  const getStartedUrl = getWhatsAppUrl('Hi PapBill, I want to get started today with PapBill billing for my restaurant!');
  const contactSalesUrl = getWhatsAppUrl('Hi PapBill, I want to talk to sales about pricing and demo.');

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 px-8 py-14 sm:px-14 sm:py-16 text-center text-white shadow-2xl border border-slate-800">
          {/* Subtle warm glow inside the dark banner */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[11px] font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Ready to Get Started?
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Take Your Restaurant to the <br className="hidden sm:inline" />
              Next Level with PapBill
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Join 1,000+ restaurants already using PapBill to eliminate counter queues, delight guests with QR menus, and accelerate daily sales.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={getStartedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-6 shadow-lg shadow-orange-500/30 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={contactSalesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-lg border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact Sales on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 text-[11px] text-slate-400 font-mono">
              Direct WhatsApp Support: +91 94825 58220 · Zero Setup Fee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
