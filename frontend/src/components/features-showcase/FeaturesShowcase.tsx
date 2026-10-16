import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SHOWCASE_FEATURES } from './featureData';
import { FeatureId } from './types';
import { FeatureDescription } from './FeatureDescription';
import { FeatureSelector } from './FeatureSelector';

export const FeaturesShowcase: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<FeatureId>('billing');

  const activeFeature = 
    SHOWCASE_FEATURES.find((f) => f.id === activeFeatureId) || SHOWCASE_FEATURES[0];

  // Auto-slide continuously every 4 seconds from right to left
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeatureId((currentId) => {
        const idx = SHOWCASE_FEATURES.findIndex((f) => f.id === currentId);
        const nextIdx = (idx + 1) % SHOWCASE_FEATURES.length;
        return SHOWCASE_FEATURES[nextIdx].id;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [activeFeatureId]);

  return (
    <section 
      id="features-showcase"
      aria-label="PapBill Core Interactive Capabilities"
      className="py-10 sm:py-14 lg:py-16 bg-[#F6F8FB] border-b border-[#E5E9EF] relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            1. COMPACT SECTION HEADER (FITS AT ONE SIGHT)
            ======================================================== */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF2ED] text-[#FF571F] text-[11px] sm:text-xs font-black tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              ONE PLATFORM. EVERY WORKFLOW.
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-[#17212D] leading-[1.15]">
            Everything Your Restaurant Needs to Run Smarter.
          </h2>

          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-xl mx-auto">
            From faster billing to seamless table ordering and kitchen coordination, PapBill brings your daily restaurant operations together.
          </p>
        </div>

        {/* ========================================================
            2. PRIMARY INTERACTIVE SHOWCASE PANEL (REFERENCE AESTHETIC)
            ======================================================== */}
        <div 
          role="tabpanel"
          id={`feature-panel-${activeFeature.id}`}
          aria-labelledby={`feature-tab-${activeFeature.id}`}
          className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#E5E9EF] shadow-lg shadow-slate-900/4 overflow-hidden flex flex-col"
        >
          {/* Main 2-Column Responsive Body with Continuous Right-to-Left Slide */}
          <div className="relative overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 items-stretch w-full"
              >
                {/* Left 5 Cols: Selected Feature Info */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-[#E5E9EF] flex flex-col justify-between">
                  <FeatureDescription feature={activeFeature} />
                </div>

                {/* Right 7 Cols: Realtime 3D Device Showcase */}
                <div className="lg:col-span-7 p-2 sm:p-4 lg:p-6 bg-white flex items-center justify-center relative overflow-hidden min-h-[380px] sm:min-h-[430px]">
                  {activeFeature.id === 'billing' ? (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/seamless-billing-feathered.png"
                        alt="PapBill Seamless Billing POS Interface & Companion Mobile App"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  ) : activeFeature.id === 'tables' ? (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/table-management-feathered.png"
                        alt="PapBill Table Control Interactive Floor Layout & Companion Waiter Pad"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  ) : activeFeature.id === 'service' ? (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/qr-menu-feathered.png"
                        alt="PapBill QR Menu Service Contactless Table Stand, Mobile Menu & Tablet Order Status"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  ) : activeFeature.id === 'stock' ? (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/stock-control-feathered.png"
                        alt="PapBill Stock Control Real-Time Inventory & Companion Mobile Alerts App"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  ) : activeFeature.id === 'insights' ? (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/business-insights-feathered.png"
                        alt="PapBill Business Insights Real-Time Analytics & Mobile Performance Dashboard"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full max-w-[640px] mx-auto flex items-center justify-center select-none">
                      <img
                        src="/images/kot-kitchen-feathered.png"
                        alt="PapBill Kitchen Order Tickets KOT Display & Thermal Printer"
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
                        loading="eager"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========================================================
              3. INTEGRATED BOTTOM 6-SEGMENT FEATURE SELECTOR
              ======================================================== */}
          <FeatureSelector
            features={SHOWCASE_FEATURES}
            activeId={activeFeatureId}
            onSelectFeature={setActiveFeatureId}
          />

        </div>

      </div>
    </section>
  );
};
