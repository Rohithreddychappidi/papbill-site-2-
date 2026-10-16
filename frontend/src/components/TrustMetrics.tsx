import React from 'react';
import { TRUST_METRICS, TESTIMONIALS } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';

export const TrustMetrics: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF571F]">
            REAL RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212D] tracking-tight mt-2">
            Trusted by Restaurants Across India
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085] leading-relaxed">
            From small cafes to multi-branch restaurants, PapBill helps businesses improve efficiency and deliver a better customer experience.
          </p>
        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl bg-[#F6F8FB] border border-[#E5E9EF]">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF571F] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#17212D] mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Restaurant Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border border-[#E5E9EF] shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[#17212D] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-100">
                <img
                  src={t.avatar}
                  alt={t.restaurantName}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#FF571F]/20"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#17212D]">
                    {t.restaurantName}
                  </h4>
                  <p className="text-xs text-[#667085]">
                    {t.city} • {t.cuisine}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
