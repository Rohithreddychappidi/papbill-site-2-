import React from 'react';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  CheckCircle2, 
  QrCode, 
  Utensils, 
  Clock, 
  AlertTriangle, 
  PhoneCall, 
  Check, 
  Building2, 
  Share2,
  Receipt
} from 'lucide-react';
import { FeatureId } from './types';

interface MobilePreviewProps {
  featureId: FeatureId;
}

export const MobileProductPreview: React.FC<MobilePreviewProps> = ({ featureId }) => {
  switch (featureId) {
    case 'billing':
      return <BillingMobilePreview />;
    case 'tables':
      return <TablesMobilePreview />;
    case 'service':
      return <ServiceMobilePreview />;
    case 'stock':
      return <StockMobilePreview />;
    case 'insights':
      return <InsightsMobilePreview />;
    case 'growth':
      return <GrowthMobilePreview />;
    default:
      return <BillingMobilePreview />;
  }
};

/* -------------------------------------------------------------
   01. BILLING: WAITER ORDER PAD / E-RECEIPT
------------------------------------------------------------- */
const BillingMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-2 text-xs bg-white select-none overflow-hidden">
      {/* Top bar */}
      <div className="pb-1 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-extrabold text-[10px] text-[#17212D]">Table 5 • Dine-In</div>
          <div className="text-[8px] text-gray-400">Order #PB-842</div>
        </div>
        <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[8px] font-bold">
          Active Bill
        </span>
      </div>

      {/* Items List */}
      <div className="py-1 space-y-1 flex-1 overflow-y-auto">
        <div className="flex items-center justify-between text-[9px]">
          <span className="font-bold text-[#17212D] truncate">1× Chicken Dum Biryani</span>
          <span className="font-bold text-gray-700">₹320</span>
        </div>
        <div className="flex items-center justify-between text-[9px]">
          <span className="font-bold text-[#17212D] truncate">1× Paneer Butter Masala</span>
          <span className="font-bold text-gray-700">₹280</span>
        </div>
        <div className="flex items-center justify-between text-[9px]">
          <span className="font-bold text-[#17212D] truncate">2× Garlic Butter Naan</span>
          <span className="font-bold text-gray-700">₹120</span>
        </div>

        {/* GST & Total Box */}
        <div className="p-1.5 bg-gray-50 rounded-lg space-y-0.5 text-[8px] text-gray-500 border border-gray-100">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹720.00</span>
          </div>
          <div className="flex justify-between">
            <span>GST (5%)</span>
            <span>₹36.00</span>
          </div>
          <div className="flex justify-between font-black text-[#17212D] text-[9.5px] pt-0.5 border-t border-gray-200">
            <span>Total Amount</span>
            <span className="text-[#FF571F]">₹756.00</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-1 border-t border-gray-100">
        <button className="w-full py-1.5 rounded-lg bg-[#FF571F] text-white font-extrabold text-[9px] flex items-center justify-center gap-1 shadow-2xs">
          <Receipt className="w-2.5 h-2.5" />
          <span>Settle & WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   02. TABLES: CAPTAIN TABLE SERVICE
------------------------------------------------------------- */
const TablesMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-3 text-xs bg-white">
      {/* Top Header */}
      <div className="pb-2 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-extrabold text-[11px] text-[#17212D]">Captain View</div>
          <div className="text-[9px] text-gray-400">Main Dining Floor</div>
        </div>
        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
          8 Available
        </span>
      </div>

      {/* Table grid */}
      <div className="grid grid-cols-2 gap-2 py-2 flex-1 overflow-y-auto">
        <div className="p-2 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-emerald-900">
            <span>Table 1</span>
            <span className="text-[8px] bg-white px-1 rounded">4P</span>
          </div>
          <div className="text-[9px] text-emerald-700 font-bold mt-2">Available</div>
        </div>

        <div className="p-2 rounded-xl border border-orange-200 bg-orange-50/60 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-[#FF571F]">
            <span>Table 5</span>
            <span className="text-[8px] bg-white px-1 rounded">4P</span>
          </div>
          <div className="text-[9px] text-[#FF571F] font-black mt-2">₹850.50 (22m)</div>
        </div>

        <div className="p-2 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-blue-900">
            <span>Table 3</span>
            <span className="text-[8px] bg-white px-1 rounded">2P</span>
          </div>
          <div className="text-[9px] text-blue-700 font-black mt-2">KOT Prep</div>
        </div>

        <div className="p-2 rounded-xl border border-amber-200 bg-amber-50/60 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] font-extrabold text-amber-900">
            <span>Table 4</span>
            <span className="text-[8px] bg-white px-1 rounded">4P</span>
          </div>
          <div className="text-[9px] text-amber-700 font-black mt-2">Billed ₹2.1k</div>
        </div>
      </div>

      {/* Bottom Button */}
      <button className="w-full py-2 rounded-xl bg-[#17212D] text-white font-extrabold text-[10px]">
        + Quick Seat Guest
      </button>
    </div>
  );
};

/* -------------------------------------------------------------
   03. SERVICE: AUTHENTIC CUSTOMER QR ORDERING EXPERIENCE
------------------------------------------------------------- */
const ServiceMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-2.5 text-xs bg-white">
      {/* Restaurant Header */}
      <div className="pb-2 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-black text-[11px] text-[#17212D]">Varahi Restaurant</div>
          <div className="text-[9px] font-bold text-[#FF571F] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Table 5 • Dine-In Menu
          </div>
        </div>
        <span className="p-1 rounded-full bg-gray-100 text-gray-600">
          <QrCode className="w-3.5 h-3.5 text-[#FF571F]" />
        </span>
      </div>

      {/* Menu Dishes */}
      <div className="py-1.5 space-y-2 flex-1 overflow-y-auto">
        {/* Dish 1 */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl border border-gray-100 bg-gray-50/60">
          <img 
            src="/images/dishes/dish_chicken_biryani.png" 
            alt="Chicken Biryani" 
            className="w-12 h-12 rounded-lg object-cover bg-white" 
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <div className="font-bold text-[10px] text-[#17212D] truncate">Chicken Dum Biryani</div>
            <div className="font-extrabold text-[#FF571F] text-[10px]">₹320</div>
          </div>
          <button className="px-2.5 py-1 rounded-lg bg-[#FF571F] text-white text-[9px] font-black shadow-2xs">
            + ADD
          </button>
        </div>

        {/* Dish 2 */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl border border-gray-100 bg-gray-50/60">
          <img 
            src="/images/dishes/dish_masala_dosa.png" 
            alt="Masala Dosa" 
            className="w-12 h-12 rounded-lg object-cover bg-white" 
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <div className="font-bold text-[10px] text-[#17212D] truncate">Crispy Masala Dosa</div>
            <div className="font-extrabold text-[#FF571F] text-[10px]">₹120</div>
          </div>
          <div className="flex items-center gap-1 bg-white border border-gray-200 px-1.5 py-0.5 rounded-lg text-[10px] font-black">
            <span className="text-gray-400">-</span>
            <span className="text-[#FF571F]">1</span>
            <span className="text-[#FF571F]">+</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Cart Bar */}
      <div className="p-2 rounded-xl bg-[#17212D] text-white flex items-center justify-between shadow-md">
        <div>
          <div className="text-[8px] text-gray-300 font-bold uppercase">Table 5 Cart</div>
          <div className="font-black text-[11px] text-[#FF571F]">2 Items • ₹440</div>
        </div>
        <button className="px-2.5 py-1 rounded-lg bg-[#FF571F] text-white font-black text-[9px]">
          Place Order →
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   04. STOCK: LOW-STOCK ALERTS & REORDER
------------------------------------------------------------- */
const StockMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-3 text-xs bg-white">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-extrabold text-[11px] text-[#17212D]">Stock Alert Hub</div>
          <div className="text-[9px] text-gray-400">Inventory Monitoring</div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[9px] font-bold flex items-center gap-1">
          <AlertTriangle className="w-2.5 h-2.5" /> 1 Critical
        </span>
      </div>

      {/* Alert Cards */}
      <div className="py-2 space-y-2 flex-1 overflow-y-auto">
        <div className="p-2.5 rounded-xl border border-red-200 bg-red-50/50">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-extrabold text-red-900">Chicken Breast</span>
            <span className="font-black text-red-600">4.5 kg</span>
          </div>
          <div className="text-[9px] text-gray-500 mt-0.5">Threshold: Min 12.0 kg</div>
          <button className="w-full mt-2 py-1 rounded-lg bg-red-600 text-white font-extrabold text-[9px] flex items-center justify-center gap-1">
            <PhoneCall className="w-2.5 h-2.5" /> Call Suguna Foods
          </button>
        </div>

        <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/50">
          <div className="flex justify-between items-center text-[10px]">
            <span className="font-extrabold text-amber-900">Fresh Paneer</span>
            <span className="font-black text-amber-700">3.2 kg</span>
          </div>
          <div className="text-[9px] text-gray-500 mt-0.5">Threshold: Min 8.0 kg</div>
          <button className="w-full mt-2 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 font-extrabold text-[9px]">
            Reorder Heritage Dairy
          </button>
        </div>
      </div>

      {/* Daily Reconciliation */}
      <div className="pt-2 border-t border-gray-100 text-[10px] text-center text-gray-500 font-medium">
        Auto-depletion active upon KOT bill
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   05. INSIGHTS: LIVE REPORTS MOBILE APP (EXACT REFERENCE MATCH)
------------------------------------------------------------- */
const InsightsMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-2 text-xs bg-white select-none">
      {/* Header */}
      <div className="pb-1 border-b border-gray-100 flex items-center justify-between">
        <span className="font-extrabold text-[10px] text-[#17212D]">Reports</span>
        <span className="text-[8px] text-gray-400">Today</span>
      </div>

      {/* Mini Bar Chart */}
      <div className="py-1 flex items-end justify-between h-10 gap-1 px-1 border-b border-gray-100">
        {[20, 45, 80, 60, 95, 75, 40].map((h, i) => (
          <div 
            key={i} 
            className={`flex-1 rounded-t-xs ${h >= 75 ? 'bg-[#17212D]' : 'bg-gray-300'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      {/* 2x2 Metric Grid matching reference */}
      <div className="grid grid-cols-2 gap-1 my-1">
        <div className="p-1 rounded-md bg-gray-50 border border-gray-100">
          <span className="text-[7.5px] text-gray-400 font-bold block">Orders</span>
          <span className="text-[10px] font-black text-[#17212D]">55</span>
        </div>
        <div className="p-1 rounded-md bg-gray-50 border border-gray-100">
          <span className="text-[7.5px] text-gray-400 font-bold block">Revenue</span>
          <span className="text-[10px] font-black text-[#17212D]">₹23,496</span>
        </div>
        <div className="p-1 rounded-md bg-gray-50 border border-gray-100">
          <span className="text-[7.5px] text-gray-400 font-bold block">Expenses</span>
          <span className="text-[10px] font-black text-red-600">₹1,000</span>
        </div>
        <div className="p-1 rounded-md bg-emerald-50 border border-emerald-100">
          <span className="text-[7.5px] text-emerald-700 font-bold block">Net Profit</span>
          <span className="text-[10px] font-black text-emerald-700">₹22,495</span>
        </div>
      </div>

      {/* Bottom status */}
      <div className="pt-1 border-t border-gray-100 text-[8px] text-center text-gray-400 font-bold">
        Live Cloud Sync Active
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   06. GROWTH: MULTI-OUTLET SWITCHER
------------------------------------------------------------- */
const GrowthMobilePreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between p-3 text-xs bg-white">
      {/* Header */}
      <div className="pb-2 border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="font-extrabold text-[11px] text-[#17212D]">Multi-Outlet Switcher</div>
          <div className="text-[9px] text-gray-400">Owner Access Hub</div>
        </div>
        <Building2 className="w-3.5 h-3.5 text-[#FF571F]" />
      </div>

      {/* Outlets list */}
      <div className="py-2 space-y-2 flex-1 overflow-y-auto">
        <div className="p-2 rounded-xl border-2 border-[#FF571F] bg-[#FFF9F6] flex items-center justify-between">
          <div>
            <div className="font-bold text-[10px] text-[#17212D]">Indiranagar Flagship</div>
            <div className="text-[9px] text-[#FF571F] font-black">₹48,250 (142 orders)</div>
          </div>
          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF571F]" />
        </div>

        <div className="p-2 rounded-xl border border-gray-200 bg-white flex items-center justify-between">
          <div>
            <div className="font-bold text-[10px] text-[#17212D]">Koramangala Branch</div>
            <div className="text-[9px] text-gray-600 font-bold">₹36,800 (108 orders)</div>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>

        <div className="p-2 rounded-xl border border-dashed border-gray-200 bg-gray-50/50 text-[10px] text-gray-400 text-center font-medium">
          + Add New Location
        </div>
      </div>

      {/* Bottom status */}
      <button className="w-full py-2 rounded-xl bg-[#17212D] text-white font-extrabold text-[10px]">
        Manage Central Menu
      </button>
    </div>
  );
};
