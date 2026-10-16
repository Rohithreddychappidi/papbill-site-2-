import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  QrCode, 
  ChefHat, 
  Package, 
  TrendingUp, 
  Building2, 
  ArrowRight,
  Printer,
  ShieldCheck,
  WifiOff,
  LayoutGrid
} from 'lucide-react';
import { FEATURES } from '../data/features';

export const FeatureGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'billing', label: 'Billing' },
    { id: 'qr-ordering', label: 'QR Ordering' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'management', label: 'Management' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Receipt': return Receipt;
      case 'QrCode': return QrCode;
      case 'ChefHat': return ChefHat;
      case 'Package': return Package;
      case 'TrendingUp': return TrendingUp;
      case 'Building2': return Building2;
      case 'Printer': return Printer;
      case 'ShieldCheck': return ShieldCheck;
      case 'WifiOff': return WifiOff;
      case 'LayoutGrid': return LayoutGrid;
      default: return Receipt;
    }
  };

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter((f) => f.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212D] tracking-tight">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            From billing to inventory, kitchen to analytics — PapBill has you covered.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#FF571F] text-white shadow-xs'
                    : 'bg-[#F6F8FB] text-[#667085] hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => {
            const Icon = getIcon(feat.icon);
            return (
              <div
                key={feat.id}
                className="group p-6 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] hover:border-[#FF571F]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#17212D] group-hover:text-[#FF571F] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                    {feat.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60">
                  <Link
                    to={`/features#${feat.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF571F] hover:text-[#E04612] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
