import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  QrCode, 
  Smartphone, 
  Clock, 
  Utensils, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Plus,
  ShoppingBag
} from 'lucide-react';
import { DEMO_MENU_ITEMS } from '../data/demoData';

export const InteractiveQrDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qr-stand' | 'phone-view'>('qr-stand');
  const [mobileCartCount, setMobileCartCount] = useState(2);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handlePlaceMobileOrder = () => {
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-20 bg-white border-y border-[#E5E9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 Cols): Realistic Acrylic Table Stand / Phone View */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* View Switcher Tabs */}
            <div className="flex items-center p-1 bg-gray-100 rounded-xl mb-6 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('qr-stand')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'qr-stand'
                    ? 'bg-white text-[#17212D] shadow-xs'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Table Acrylic Stand
              </button>
              <button
                onClick={() => setActiveTab('phone-view')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'phone-view'
                    ? 'bg-white text-[#17212D] shadow-xs'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Mobile Phone Experience
              </button>
            </div>

            {/* View 1: Acrylic QR Stand */}
            {activeTab === 'qr-stand' ? (
              <div className="relative w-full max-w-sm">
                <div className="relative bg-gradient-to-b from-white to-gray-50 p-8 rounded-3xl shadow-2xl border-4 border-white ring-1 ring-gray-200 text-center">
                  
                  {/* Stand Top Brand */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="text-2xl font-black tracking-tight text-[#17212D]">
                      Pap<span className="text-[#FF571F]">Bill</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      BY HATBRICKS
                    </span>
                  </div>

                  {/* QR Graphic Container */}
                  <div className="relative p-6 bg-white rounded-2xl shadow-inner border border-gray-100 mx-auto w-52 h-52 flex flex-col items-center justify-center group">
                    <svg viewBox="0 0 100 100" className="w-40 h-40 text-[#17212D]">
                      {/* Realistic SVG QR Pattern */}
                      <rect width="100" height="100" fill="white" />
                      {/* Top-left corner */}
                      <rect x="10" y="10" width="24" height="24" fill="#17212D" rx="2" />
                      <rect x="14" y="14" width="16" height="16" fill="white" />
                      <rect x="18" y="18" width="8" height="8" fill="#FF571F" rx="1" />
                      
                      {/* Top-right corner */}
                      <rect x="66" y="10" width="24" height="24" fill="#17212D" rx="2" />
                      <rect x="70" y="14" width="16" height="16" fill="white" />
                      <rect x="74" y="18" width="8" height="8" fill="#FF571F" rx="1" />

                      {/* Bottom-left corner */}
                      <rect x="10" y="66" width="24" height="24" fill="#17212D" rx="2" />
                      <rect x="14" y="70" width="16" height="16" fill="white" />
                      <rect x="18" y="74" width="8" height="8" fill="#FF571F" rx="1" />

                      {/* QR Data Dots */}
                      <rect x="38" y="12" width="6" height="6" fill="#17212D" />
                      <rect x="48" y="12" width="6" height="6" fill="#17212D" />
                      <rect x="42" y="24" width="6" height="6" fill="#17212D" />
                      <rect x="52" y="24" width="6" height="6" fill="#17212D" />
                      <rect x="38" y="38" width="8" height="8" fill="#FF571F" />
                      <rect x="50" y="38" width="6" height="6" fill="#17212D" />
                      <rect x="42" y="52" width="6" height="6" fill="#17212D" />
                      <rect x="56" y="52" width="6" height="6" fill="#17212D" />
                      <rect x="14" y="44" width="6" height="6" fill="#17212D" />
                      <rect x="24" y="44" width="6" height="6" fill="#17212D" />
                      <rect x="68" y="44" width="6" height="6" fill="#17212D" />
                      <rect x="78" y="44" width="6" height="6" fill="#17212D" />
                      <rect x="38" y="68" width="6" height="6" fill="#17212D" />
                      <rect x="48" y="68" width="6" height="6" fill="#17212D" />
                      <rect x="42" y="80" width="6" height="6" fill="#17212D" />
                      <rect x="54" y="80" width="6" height="6" fill="#17212D" />
                      <rect x="68" y="68" width="6" height="6" fill="#17212D" />
                      <rect x="78" y="76" width="6" height="6" fill="#17212D" />
                    </svg>

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 rounded-2xl flex items-center justify-center transition-opacity">
                      <span className="text-[11px] font-bold bg-[#FF571F] text-white px-2.5 py-1 rounded-full shadow-md">
                        Try Simulator
                      </span>
                    </div>
                  </div>

                  {/* Table Number & Subtitle */}
                  <div className="mt-5 space-y-1">
                    <h4 className="text-xl font-extrabold text-[#17212D]">Table 5</h4>
                    <p className="text-xs font-semibold text-[#FF571F]">
                      Scan to view menu & order
                    </p>
                  </div>

                  {/* 3 Step Icons: Dine, Order, Enjoy */}
                  <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-gray-100 text-center">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mx-auto mb-1">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-600">1. Dine</span>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mx-auto mb-1">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-600">2. Order</span>
                    </div>
                    <div>
                      <div className="w-8 h-8 rounded-full bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center mx-auto mb-1">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-bold text-gray-600">3. Enjoy</span>
                    </div>
                  </div>

                </div>

                {/* Simulated acrylic wooden base */}
                <div className="h-4 w-4/5 mx-auto bg-amber-900/80 rounded-b-xl shadow-lg" />
              </div>
            ) : (
              /* View 2: Mobile Phone Customer Simulator */
              <div className="relative w-full max-w-xs bg-[#17212D] p-3 rounded-[40px] shadow-2xl border-4 border-gray-800">
                {/* Phone Notch */}
                <div className="w-32 h-4 bg-gray-900 mx-auto rounded-b-xl mb-2" />

                {/* Phone Screen Content */}
                <div className="bg-white rounded-[32px] overflow-hidden p-4 space-y-3 text-[#17212D] text-xs">
                  {/* Restaurant Banner */}
                  <div className="p-3 bg-[#17212D] text-white rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">Varahi Restaurant</div>
                      <div className="text-[10px] text-gray-300">Table 5 • Dine-in</div>
                    </div>
                    <div className="bg-[#FF571F] px-2 py-0.5 rounded-full text-[10px] font-bold">
                      Open Menu
                    </div>
                  </div>

                  {/* Dish 1 */}
                  <div className="p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold">Paneer Tikka</div>
                      <div className="text-[10px] text-gray-400">₹220 • Tandoor</div>
                    </div>
                    <button 
                      onClick={() => setMobileCartCount(c => c + 1)}
                      className="px-2 py-1 bg-[#FFF2ED] text-[#FF571F] rounded-lg font-bold text-[10px] hover:bg-[#FF571F] hover:text-white transition-colors"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Dish 2 */}
                  <div className="p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold">Veg Biryani</div>
                      <div className="text-[10px] text-gray-400">₹250 • Chef Special</div>
                    </div>
                    <button 
                      onClick={() => setMobileCartCount(c => c + 1)}
                      className="px-2 py-1 bg-[#FFF2ED] text-[#FF571F] rounded-lg font-bold text-[10px] hover:bg-[#FF571F] hover:text-white transition-colors"
                    >
                      + Add
                    </button>
                  </div>

                  {/* Order notification banner */}
                  {orderSubmitted ? (
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-center animate-in zoom-in-95">
                      <CheckCircle className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                      <div className="font-bold text-xs">KOT Dispatched to Kitchen!</div>
                      <div className="text-[10px]">Chef is preparing Table 5 order</div>
                    </div>
                  ) : (
                    <button
                      onClick={handlePlaceMobileOrder}
                      className="w-full py-2.5 bg-[#FF571F] hover:bg-[#E04612] text-white font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Place Table Order ({mobileCartCount} items)
                    </button>
                  )}

                  <div className="text-[9px] text-center text-gray-400 pt-1">
                    Powered by PapBill Web QR (No App Install)
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Column (7 Cols): Narrative & Operational Benefits */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-bold uppercase tracking-wider">
              <QrCode className="w-3.5 h-3.5" />
              Contactless Hospitality
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17212D] tracking-tight leading-tight">
              Let Your Customers Order Themselves
            </h2>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              One QR code gives access to your full menu. Customers can browse, place orders, track items, view bill and request bill — all from their phone without downloading an app.
            </p>

            <div className="pt-2">
              <Link
                to="/solutions/qr-ordering"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#FF571F] hover:bg-[#E04612] rounded-full transition-all shadow-md hover:shadow-lg"
              >
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom 4 Feature Badges from Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-12 border-t border-gray-100">
          
          <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-white text-[#FF571F] shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17212D]">No app installation</h4>
              <p className="text-xs text-[#667085] mt-0.5">Works on any smartphone browser</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-white text-[#FF571F] shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17212D]">Live order tracking</h4>
              <p className="text-xs text-[#667085] mt-0.5">See kitchen preparation status</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-white text-[#FF571F] shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17212D]">Faster service</h4>
              <p className="text-xs text-[#667085] mt-0.5">More time for what matters</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#F6F8FB] border border-[#E5E9EF] flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-white text-[#FF571F] shadow-xs">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#17212D]">Better customer experience</h4>
              <p className="text-xs text-[#667085] mt-0.5">Modern, contactless & hygienic</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
