import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { 
  Receipt, 
  QrCode, 
  ChefHat, 
  Boxes, 
  BarChart3, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  Cloud
} from 'lucide-react';

export default function FeatureTabs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Billing (₹199)',
    'Table QR (₹299)',
    'Kitchen KOT',
    'Inventory',
    'Analytics'
  ];

  const features = [
    {
      id: 'billing',
      category: 'Billing (₹199)',
      title: 'POS Billing & Thermal Printing',
      desc: 'Fast and intuitive billing on tablet, PC, or phone. Split bills, apply tax/discounts, and print in 2 seconds.',
      icon: Receipt,
      highlights: ['Split & merge bills', 'Offline billing support', 'UPI QR & thermal printer ready']
    },
    {
      id: 'cloud',
      category: 'Billing (₹199)',
      title: 'Cloud Billing Storage',
      desc: 'Every bill generated is safely backed up in the cloud. Check sales and print copies from anywhere.',
      icon: Cloud,
      highlights: ['Automatic cloud backup', 'Access records from mobile', 'Safe data preservation']
    },
    {
      id: 'qr',
      category: 'Table QR (₹299)',
      title: 'Table QR Ordering (Included in ₹299)',
      desc: 'One QR code on each table gives access to full digital photo menu. Customers browse and order directly.',
      icon: QrCode,
      highlights: ['Included in ₹299/mo plan', 'Photo menu with food tags', 'Instant table-to-kitchen sync']
    },
    {
      id: 'kitchen',
      category: 'Kitchen KOT',
      title: 'Kitchen Order Tickets (KOT)',
      desc: 'Automated KOT thermal printing and interactive Kitchen Display System (KDS). Eliminates kitchen shouting.',
      icon: ChefHat,
      highlights: ['Item modification notes', 'Kitchen station routing', 'Real-time prep timer']
    },
    {
      id: 'inventory',
      category: 'Inventory',
      title: 'Inventory & Recipe Management',
      desc: 'Track ingredients, set auto-deductions on item sales, receive low stock alerts, and manage vendor purchases.',
      icon: Boxes,
      highlights: ['Automated recipe costing', 'Low stock WhatsApp alerts', 'Vendor purchase logs']
    },
    {
      id: 'analytics',
      category: 'Analytics',
      title: 'Reports & Analytics',
      desc: 'Deep financial and operational insights: hourly sales heatmaps, highest selling dishes, and GST tax reports.',
      icon: BarChart3,
      highlights: ['Day-end closing reports', 'Item popularity matrix', 'Tally & accountant exports']
    }
  ];

  const filteredFeatures = activeCategory === 'All'
    ? features
    : features.filter(f => f.category === activeCategory);

  return (
    <section className="py-20 bg-white border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-xs font-semibold tracking-wide uppercase mb-3">
            Core Modules
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything You Need to Run Your Food Counter
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            From billing to inventory, kitchen to table QR — PapBill has you covered.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#FF5A00] text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => {
            const Icon = feat.icon;
            const learnMoreUrl = getWhatsAppUrl(`Hi PapBill, I want to know more about the ${feat.title} feature.`);

            return (
              <div
                key={feat.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {feat.desc}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                    {feat.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A00] hover:text-[#E65100] transition-colors group"
                  >
                    <span>Ask about this on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
