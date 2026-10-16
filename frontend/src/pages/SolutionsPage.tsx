import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Coffee, Zap, UtensilsCrossed, Cloud, Building2, Truck, Quote } from 'lucide-react';
import { SOLUTIONS } from '../data/solutions';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

export const SolutionsPage: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cafes': return Coffee;
      case 'qsr': return Zap;
      case 'full-service': return UtensilsCrossed;
      case 'cloud-kitchens': return Cloud;
      case 'multi-branch': return Building2;
      case 'food-trucks': return Truck;
      default: return UtensilsCrossed;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="Restaurant Billing Software for Cafes, Fine Dine & QSR | PapBill"
        description="Purpose-built restaurant billing and POS software for fine dine restaurants, quick-service counters (QSR), cafes, cloud kitchens, and food courts."
        keywords="cafe billing software, fine dine restaurant POS, QSR billing software, cloud kitchen POS system, bakery billing software, food court billing system"
        canonical="https://papbill.com/solutions"
      />
      
      {/* Solutions Hero */}
      <section className="pt-16 pb-20 bg-white border-b border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4">
            Tailored Industry Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            Purpose-Built for Your Restaurant Format
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Whether you operate a single fast-casual cafe or a multi-city dining chain, discover how PapBill matches your specific operational workflow.
          </p>

          {/* Quick Jump Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#F6F8FB] text-[#17212D] hover:bg-[#FF571F] hover:text-white transition-all border border-[#E5E9EF]"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Deep Dives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {SOLUTIONS.map((sol, index) => {
            const Icon = getIcon(sol.id);
            const isReversed = index % 2 === 1;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" />
                    {sol.badge}
                  </div>

                  <h2 className="text-3xl font-extrabold text-[#17212D] tracking-tight">
                    {sol.name}
                  </h2>

                  <p className="text-base text-[#17212D] font-semibold">
                    {sol.headline}
                  </p>

                  <p className="text-sm text-[#667085] leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Challenges Tackled */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E5E9EF] shadow-2xs space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Operational Focus Areas:
                    </div>
                    {sol.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#17212D]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF571F] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Customer Quote */}
                  <div className="p-4 rounded-2xl bg-[#FFF2ED]/50 border border-[#FF571F]/20 text-xs text-[#17212D] space-y-2">
                    <div className="italic text-gray-700">"{sol.quote.text}"</div>
                    <div className="font-bold text-[#FF571F]">{sol.quote.author} — <span className="text-gray-500 font-normal">{sol.quote.title}</span></div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#17212D] hover:bg-[#FF571F] transition-all"
                    >
                      Discuss Your {sol.name} Setup
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Editorial Photo Visual */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={sol.image}
                      alt={sol.name}
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                      <div className="text-white">
                        <span className="text-xs uppercase font-bold tracking-wider text-[#FF571F]">Specialized Workflow</span>
                        <h3 className="text-xl font-bold">{sol.name} Powered by PapBill</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      <BottomCta />

    </div>
  );
};
