import React from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export default function BottomCta() {
  const trialUrl = getWhatsAppUrl('Hi PapBill, I want to start my 15-day free trial today!');
  const whatsappUrl = getWhatsAppUrl('Hi PapBill, I have a few questions before starting.');

  return (
    <section className="py-20 bg-white border-t border-slate-100 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 px-8 py-14 sm:px-14 sm:py-16 text-center text-white shadow-2xl border border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-orange-600/20 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              15 Days Free Trial · Zero Setup Fee
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Upgrade Your <br className="hidden sm:inline" />
              Restaurant Billing?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Start with our ₹199 Basic Billing or ₹299 Table QR Self-Ordering plan. All billings stored in the cloud. No credit card required.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-2.5 px-6 shadow-lg shadow-orange-500/30 group font-bold"
              >
                <span>Start 15 Days Free Trial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-lg border border-slate-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+91 94825 58220)</span>
              </a>
            </div>

            <div className="pt-3 text-[11px] text-slate-400 font-mono">
              Cloud Backup · Works Offline · 11 Indian Languages
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
