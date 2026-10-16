import React from 'react';
import { LeadForm } from '../components/LeadForm';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SEO } from '../components/SEO';

export const GetStartedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F8FB] py-16">
      <SEO
        title="Start 15-Day Free Trial - PapBill Restaurant Billing Software"
        description="Get started with PapBill in under 2 minutes. Full access to offline POS billing, KOT printing, and digital menus with 15-day free trial. No credit card required."
        keywords="free restaurant billing software trial, start restaurant POS, PapBill registration, restaurant billing software signup"
        canonical="https://papbill.com/get-started"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Fast-Track Restaurant Onboarding
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            Start Your PapBill Setup Today
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Fill in your restaurant details below. Our onboarding team will configure your digital menu, assign your table QR codes, and ship your pre-configured hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column (5 cols): What happens next */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E5E9EF] shadow-md space-y-5">
              <h3 className="text-lg font-bold text-[#17212D]">
                What Happens Next?
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17212D] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17212D]">Quick Consultation</h4>
                    <p className="text-gray-500 mt-0.5">We understand your dining style, counter setup, and current hardware.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17212D] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17212D]">Free Menu Digitization</h4>
                    <p className="text-gray-500 mt-0.5">Send us your PDF/photo menu; our team inputs categories, modifiers, and taxes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17212D] text-white flex items-center justify-center font-bold text-[11px] flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#17212D]">Hardware Dispatch & Go Live</h4>
                    <p className="text-gray-500 mt-0.5">Pre-paired printers and POS terminals arrive at your doorstep ready to bill.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF2ED] border border-[#FF571F]/20 text-xs text-[#17212D]">
                <div className="font-bold text-[#FF571F] flex items-center gap-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  14-Day Risk-Free Evaluation
                </div>
                <p className="text-gray-600">
                  Try PapBill in parallel with your existing billing counter. If it doesn't speed up your operations, cancel anytime with zero obligation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Onboarding Form */}
          <div className="lg:col-span-7">
            <LeadForm sourcePage="get-started-onboarding" />
          </div>

        </div>

      </div>
    </div>
  );
};
