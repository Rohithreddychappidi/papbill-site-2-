import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Printer, Tablet, DollarSign, Scan, Tag, Scroll, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HardwareCatalog() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Printers', 'POS Devices', 'Accessories'];

  const items = [
    {
      id: 'printer',
      category: 'Printers',
      name: 'PapBill 80mm Thermal Printer',
      desc: 'High-speed auto-cutter receipt printer. Dual USB & Bluetooth connectivity with sound buzzer.',
      specs: '80mm paper width · 260mm/sec speed · Auto-cutter',
      icon: Printer,
      tag: 'Most Popular'
    },
    {
      id: 'tablet',
      category: 'POS Devices',
      name: 'Android POS Tablet Station',
      desc: '10.1-inch industrial IPS touchscreen pre-loaded with PapBill POS software and metal pivot stand.',
      specs: 'Octa-core · 4GB RAM · 64GB SSD · WiFi + 4G SIM',
      icon: Tablet,
      tag: 'Ready to Bill'
    },
    {
      id: 'drawer',
      category: 'Accessories',
      name: 'Heavy-Duty Cash Drawer',
      desc: 'High-grade steel construction with 5 note compartments, 8 coin slots, and RJ11 printer auto-kick.',
      specs: 'Electronic lock · Key override · 1M+ cycles life',
      icon: DollarSign,
      tag: 'Secure'
    },
    {
      id: 'scanner',
      category: 'Accessories',
      name: '1D / 2D Barcode & QR Scanner',
      desc: 'Omnidirectional desktop and handheld scanner for fast takeaway item scanning and coupon validation.',
      specs: 'Plug & Play USB · High sensitivity laser sensor',
      icon: Scan,
      tag: 'Fast Checkout'
    },
    {
      id: 'label',
      category: 'Printers',
      name: 'Kitchen & Parcel Label Printer',
      desc: 'Thermal sticker printer for kitchen prep date tags, container seals, and food delivery packaging.',
      specs: 'Direct thermal · Peel-off mechanism · USB/LAN',
      icon: Tag,
      tag: 'Takeaway Ready'
    },
    {
      id: 'rolls',
      category: 'Accessories',
      name: 'Premium Thermal Paper Rolls',
      desc: 'BPA-free high-density thermal paper rolls for dark, long-lasting receipt printing without jamming.',
      specs: 'Box of 50 rolls · 80mm × 50m / 58mm variants',
      icon: Scroll,
      tag: 'Consumable'
    }
  ];

  const filteredItems = activeTab === 'All'
    ? items
    : items.filter(item => item.category === activeTab);

  return (
    <section id="hardware" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/70 text-[#FF5A00] text-[11px] font-semibold tracking-wide uppercase mb-3">
            Plug & Play Hardware
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            PapBill Hardware
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Reliable, tested, and ready to use out-of-the-box with PapBill. Fast door delivery across India.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-[#FF5A00] text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hardware Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const orderUrl = getWhatsAppUrl(`Hi PapBill, I would like to order or get pricing for the ${item.name}.`);

            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 font-mono mb-5">
                    {item.specs}
                  </div>
                </div>

                <div>
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary text-xs py-2 flex items-center justify-center gap-2 group hover:border-orange-500 hover:text-[#FF5A00]"
                  >
                    <span>Order via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 1-Year Warranty note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>All PapBill hardware includes 1-year replacement warranty & dedicated phone setup support</span>
        </div>

      </div>
    </section>
  );
}
