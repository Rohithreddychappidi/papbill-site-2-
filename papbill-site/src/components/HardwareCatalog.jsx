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
      image: '/images/thermal-printer.jpg',
      icon: Printer,
      tag: 'Most Popular'
    },
    {
      id: 'tablet',
      category: 'POS Devices',
      name: 'Android POS Tablet Station',
      desc: 'Touchscreen pre-configured with PapBill POS software and sturdy metal counter stand.',
      specs: 'Touchscreen · WiFi + Bluetooth · Metal stand included',
      image: '/images/pos-tablet.jpg',
      icon: Tablet,
      tag: 'Ready to Bill'
    },
    {
      id: 'drawer',
      category: 'Accessories',
      name: 'Heavy-Duty Cash Drawer',
      desc: 'High-grade steel construction with 5 note compartments, 8 coin slots, and RJ11 printer auto-kick.',
      specs: 'Electronic lock · Key override · 1M+ cycles life',
      image: null,
      icon: DollarSign,
      tag: 'Secure Steel'
    },
    {
      id: 'scanner',
      category: 'Accessories',
      name: '1D / 2D Barcode & QR Scanner',
      desc: 'Omnidirectional desktop and handheld scanner for fast takeaway item scanning and coupon validation.',
      specs: 'Plug & Play USB · High sensitivity laser sensor',
      image: null,
      icon: Scan,
      tag: 'Fast Checkout'
    },
    {
      id: 'label',
      category: 'Printers',
      name: 'Kitchen & Parcel Label Printer',
      desc: 'Thermal sticker printer for kitchen prep date tags, container seals, and food delivery packaging.',
      specs: 'Direct thermal · Peel-off mechanism · USB/LAN',
      image: null,
      icon: Tag,
      tag: 'Takeaway Ready'
    },
    {
      id: 'rolls',
      category: 'Accessories',
      name: 'Premium Thermal Paper Rolls',
      desc: 'BPA-free high-density thermal paper rolls for dark, long-lasting receipt printing without jamming.',
      specs: 'Box of 50 rolls · 80mm × 50m / 58mm variants',
      image: null,
      icon: Scroll,
      tag: 'Consumable'
    }
  ];

  const filteredItems = activeTab === 'All'
    ? items
    : items.filter(item => item.category === activeTab);

  return (
    <section id="hardware" className="py-20 md:py-28 bg-white/70 border-t border-slate-100 w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-bold tracking-wide uppercase mb-3">
            Plug & Play Hardware
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            PapBill Hardware
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Reliable, tested, and ready to use out-of-the-box with PapBill. Fast door delivery across India.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-[#FF5A00] text-white shadow-sm'
                    : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
                className="glass-panel glass-panel-hover rounded-3xl p-5 sm:p-6 bg-white flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Product Image if available */}
                  {item.image && (
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 border border-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold border border-slate-200/80 shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  {!item.image && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5A00]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold border border-slate-200">
                        {item.tag}
                      </span>
                    </div>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-mono mb-5">
                    {item.specs}
                  </div>
                </div>

                <div>
                  <a
                    href={orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary text-xs sm:text-sm py-2.5 flex items-center justify-center gap-2 group hover:border-orange-500 hover:text-[#FF5A00]"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>All hardware includes 1-year replacement warranty & free setup support</span>
        </div>

      </div>
    </section>
  );
}
