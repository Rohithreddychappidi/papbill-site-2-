import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const BottomCta: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#17212D] text-white overflow-hidden">
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/images/restaurant-counter.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#17212D] via-[#17212D]/95 to-[#17212D]/80 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-[#FF571F] mb-3">
          READY TO GET STARTED?
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Take Your Restaurant to the Next Level with PapBill
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Join 1,000+ restaurants already using PapBill to simplify billing, improve service and grow their business.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/get-started"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#FF571F] hover:bg-[#E04612] transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white bg-transparent hover:bg-white/10 border border-gray-600 transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-gray-400" />
            Contact Sales
          </Link>
        </div>

      </div>
    </section>
  );
};
