import React from 'react';
import { Star, Quote, Building, CheckCircle } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    { value: '1,000+', label: 'Active Restaurants' },
    { value: '3M+', label: 'Bills Generated' },
    { value: '50+', label: 'Cities Across India' },
    { value: '98%', label: 'Customer Satisfaction' },
  ];

  const testimonials = [
    {
      quote: 'PapBill has completely transformed our restaurant operations. The QR ordering is smooth, kitchen delays dropped to zero, and our customers love the contactless experience.',
      author: 'Varahi Restaurant',
      location: 'Chennai',
      type: 'Dine-In & South Indian Thali',
      initials: 'VR',
      rating: 5
    },
    {
      quote: 'Easy to use, powerful features and phenomenal WhatsApp support. Our billing counter and inventory reconciliations are now completely streamlined every night.',
      author: 'Spice N Grill',
      location: 'Bengaluru',
      type: 'Multi-Cuisine Casual Dining',
      initials: 'SG',
      rating: 5
    },
    {
      quote: 'The onboarding was completed in a single afternoon and the team trained our cashiers with care. Highly recommend PapBill to any fast-paced restaurant or cafe.',
      author: 'Hotel Sri Krishna',
      location: 'Hyderabad',
      type: 'Heritage Pure Veg Dining',
      initials: 'SK',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase mb-3">
            Real Results
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Trusted by Restaurants Across India
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            From quick-service cafes to multi-branch fine dining, PapBill powers daily hospitality operations with 99.9% reliability.
          </p>
        </div>

        {/* 4 Impact Stat Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl text-center bg-white border border-slate-200/80"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                {s.value}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-6 rounded-2xl bg-white flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-200" />
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-orange-100 border border-orange-200 text-[#FF5A00] font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    <span>{t.author}</span>
                    <CheckCircle className="w-3 h-3 text-[#FF5A00] inline" />
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {t.location} · {t.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
