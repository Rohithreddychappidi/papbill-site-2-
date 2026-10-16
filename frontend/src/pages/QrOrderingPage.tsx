import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  QrCode, 
  Smartphone, 
  ChefHat, 
  Receipt, 
  Bell, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  Eye,
  Plus,
  ShoppingBag,
  Clock
} from 'lucide-react';
import { DEMO_MENU_ITEMS } from '../data/demoData';
import { BottomCta } from '../components/BottomCta';
import { SEO } from '../components/SEO';

export const QrOrderingPage: React.FC = () => {
  const [activeSessionStep, setActiveSessionStep] = useState(1);
  const [demoCart, setDemoCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([
    { id: '1', name: 'Paneer Tikka', price: 220, qty: 1 },
    { id: '2', name: 'Veg Biryani', price: 250, qty: 1 }
  ]);
  const [kotSent, setKotSent] = useState(false);
  const [billRequested, setBillRequested] = useState(false);

  const total = demoCart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleFireOrder = () => {
    setKotSent(true);
    setTimeout(() => {
      setActiveSessionStep(3);
    }, 1500);
  };

  const handleRequestBill = () => {
    setBillRequested(true);
    setTimeout(() => {
      setBillRequested(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="Contactless QR Code Ordering System for Restaurants | PapBill"
        description="Cut table turnaround time by 35% with PapBill QR menu ordering. Customers scan, order, and pay directly from their phones with zero app downloads."
        keywords="QR code ordering system, contactless restaurant menu, scan and order restaurant, digital menu QR code, UPI restaurant payment QR, restaurant table ordering"
        canonical="https://papbill.com/solutions/qr-ordering"
      />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-white border-b border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider mb-4">
            <QrCode className="w-3.5 h-3.5" />
            Contactless Dine-in Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#17212D] tracking-tight leading-tight">
            Seamless QR Ordering for Modern Tables
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed">
            Guests scan an acrylic table stand with their smartphone camera, browse high-resolution dish photos, customize orders, and fire KOT directly to the kitchen.
          </p>
        </div>
      </section>

      {/* Interactive 5-Step Customer Journey Walkthrough */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-[#17212D]">
              The 5-Step Guest Experience
            </h2>
            <p className="text-sm text-[#667085] mt-2">
              From scanning the table to payment settlement — completely friction-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            {[
              { num: 1, title: '1. Scan Stand', desc: 'No app download needed. Works in mobile Safari & Chrome.' },
              { num: 2, title: '2. Browse & Order', desc: 'High-res photos, allergen tags, and instant item adds.' },
              { num: 3, title: '3. Kitchen KOT', desc: 'Order routes straight to kitchen printer in &lt; 2 seconds.' },
              { num: 4, title: '4. Running Bill', desc: 'Track all ordered dishes across table rounds.' },
              { num: 5, title: '5. Pay & Settle', desc: 'Request bill from phone or settle with captain via UPI/Cash.' }
            ].map((step) => (
              <div
                key={step.num}
                onClick={() => setActiveSessionStep(step.num)}
                className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                  activeSessionStep === step.num
                    ? 'bg-white border-[#FF571F] shadow-lg ring-2 ring-[#FF571F]/20'
                    : 'bg-[#F6F8FB] border-[#E5E9EF] hover:bg-white'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-3 ${
                  activeSessionStep === step.num
                    ? 'bg-[#FF571F] text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-[#17212D]">{step.title}</h3>
                <p className="text-xs text-[#667085] mt-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Live Simulator Box */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#E5E9EF] shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-between pb-6 border-b border-gray-100 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#FF571F] uppercase">Table Session Demo</span>
                <h3 className="text-xl font-extrabold text-[#17212D]">Table 5 • Varahi Restaurant</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRequestBill}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-gray-200 hover:border-[#17212D] text-[#17212D] transition-colors"
                >
                  <Bell className="w-3.5 h-3.5 inline mr-1" />
                  Request Bill
                </button>
              </div>
            </div>

            {billRequested && (
              <div className="mt-4 p-3 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl text-xs font-semibold text-center animate-in zoom-in-95">
                Staff Notified! Captain is bringing the printed bill to Table 5.
              </div>
            )}

            {/* Menu Items Simulation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {DEMO_MENU_ITEMS.slice(0, 4).map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div>
                      <div className="text-xs font-bold text-[#17212D]">{item.name}</div>
                      <div className="text-[11px] text-gray-500">₹{item.price}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setDemoCart(prev => {
                        const ex = prev.find(p => p.id === item.id);
                        if (ex) return prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p);
                        return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1 }];
                      });
                    }}
                    className="p-1.5 rounded-lg bg-[#FFF2ED] text-[#FF571F] hover:bg-[#FF571F] hover:text-white transition-colors text-xs font-bold"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>

            {/* Cart & Firing KOT */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-500 font-medium">Current Table Total ({demoCart.length} items)</div>
                <div className="text-2xl font-black text-[#17212D]">₹{total}</div>
              </div>

              {kotSent ? (
                <div className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  KOT Printed in Kitchen!
                </div>
              ) : (
                <button
                  onClick={handleFireOrder}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#FF571F] hover:bg-[#E04612] text-white font-bold rounded-xl text-sm transition-colors shadow-md"
                >
                  Fire Order to Kitchen (KOT)
                </button>
              )}
            </div>

            <p className="text-[11px] text-center text-gray-400 mt-4">
              * Note: QR ordering operates on your restaurant's configured workflow (Pre-paid or Post-paid dining).
            </p>
          </div>

        </div>
      </section>

      <BottomCta />

    </div>
  );
};
