import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Minus, 
  Trash2, 
  Printer, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  ArrowUpRight, 
  ChefHat, 
  Building2, 
  Download,
  Star,
  ShoppingBag,
  Package,
  Settings,
  CreditCard,
  Banknote,
  QrCode,
  LayoutGrid,
  FileText,
  DollarSign,
  Utensils,
  Bell
} from 'lucide-react';
import { FeatureId } from './types';

interface DesktopPreviewProps {
  featureId: FeatureId;
}

export const DesktopProductPreview: React.FC<DesktopPreviewProps> = ({ featureId }) => {
  switch (featureId) {
    case 'billing':
      return <BillingDesktopPreview />;
    case 'tables':
      return <TablesDesktopPreview />;
    case 'service':
      return <ServiceDesktopPreview />;
    case 'stock':
      return <StockDesktopPreview />;
    case 'insights':
      return <InsightsDesktopPreview />;
    case 'growth':
      return <GrowthDesktopPreview />;
    default:
      return <BillingDesktopPreview />;
  }
};

/* -------------------------------------------------------------
   COMMON PAPBILL APPLICATION TOP NAVBAR
------------------------------------------------------------- */
const AppTopNav: React.FC<{ activeNav?: string }> = ({ activeNav = 'New Order' }) => {
  return (
    <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#17212D] text-white border-b border-gray-800 text-[10px] sm:text-[11px] select-none">
      {/* Brand Logo */}
      <div className="flex items-center gap-1.5 sm:gap-2 mr-2">
        <div className="w-5 h-5 rounded-md bg-[#FF571F] flex items-center justify-center font-black text-white text-[11px] shadow-xs">
          P
        </div>
        <span className="font-extrabold tracking-tight text-white text-xs sm:text-[13px]">
          Pap<span className="text-[#FF571F]">Bill</span>
        </span>
      </div>

      {/* Nav items */}
      <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar font-bold text-gray-300">
        {[
          { name: 'Orders', icon: ShoppingBag },
          { name: 'Items', icon: Utensils },
          { name: 'Tables', icon: LayoutGrid },
          { name: 'New Order', icon: Plus, highlight: true },
          { name: 'Reports', icon: TrendingUp },
          { name: 'Expenses', icon: DollarSign },
          { name: 'Inventory', icon: Package },
          { name: 'Settings', icon: Settings },
        ].map((item, idx) => {
          const Icon = item.icon;
          const isActive = item.name === activeNav;

          return (
            <div
              key={idx}
              className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                isActive 
                  ? 'bg-gray-800 text-white ring-1 ring-white/20' 
                  : item.highlight
                  ? 'bg-[#FF571F]/20 text-[#FF571F] hover:bg-[#FF571F]/30'
                  : 'hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span className="hidden md:inline">{item.name}</span>
            </div>
          );
        })}
      </div>

      {/* Right notifications */}
      <div className="flex items-center gap-2 text-gray-400">
        <div className="relative">
          <Bell className="w-3.5 h-3.5 text-gray-300" />
          <span className="absolute -top-1 -right-1.5 w-3 h-3 rounded-full bg-[#FF571F] text-white text-[7px] font-black flex items-center justify-center">
            4
          </span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 01: REALISTIC PAPBILL POS BILLING (MATCHING REFERENCE)
------------------------------------------------------------- */
const BillingDesktopPreview: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [orderType, setOrderType] = useState<'Dine In' | 'Take Away'>('Dine In');
  const [printKot, setPrintKot] = useState(true);

  // Live Cart Items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chilli Paneer', price: 200, qty: 1, category: 'Indo-Chinese' },
    { id: 2, name: 'Gobi Manchurian', price: 160, qty: 1, category: 'Indo-Chinese' },
  ]);

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextQty = Math.max(1, item.qty + delta);
        return { ...item, qty: nextQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
  const tax = subtotal * 0.05; // 5% GST
  const grandTotal = subtotal + (subtotal > 0 ? 29 : 0); // Reference total format

  const menuItems = [
    { name: 'Paneer Biryani', category: 'Rice & Biryani', price: 220 },
    { name: 'Chole Masala', category: 'North Indian Main Course', price: 170 },
    { name: 'Ghee Rice', category: 'Rice & Biryani', price: 150 },
    { name: 'Khichdi', category: 'Rice & Biryani', price: 130 },
    { name: 'Kadhi Pakora', category: 'Indian Curries', price: 160 },
    { name: 'Veg Hakka Noodles', category: 'Indo-Chinese', price: 180 },
    { name: 'Gobi Manchurian', category: 'Indo-Chinese', price: 160 },
    { name: 'Chilli Paneer', category: 'Indo-Chinese', price: 200 },
    { name: 'Veg Fried Rice', category: 'Indo-Chinese', price: 170 },
    { name: 'Plain Roti', category: 'Tandoor & Rotis', price: 20 },
    { name: 'Butter Roti', category: 'Tandoor & Rotis', price: 25 },
    { name: 'Veg Kolhapuri', category: 'Indian Curries', price: 190 },
    { name: 'Poori', category: 'Tandoor & Rotis', price: 25 },
    { name: 'Green Salad', category: 'Salads & Sides', price: 60 },
    { name: 'Garlic Naan', category: 'Tandoor & Rotis', price: 55 },
    { name: 'Papad', category: 'Roasted & Quick Bites', price: 20 },
  ];

  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs">
      <AppTopNav activeNav="New Order" />

      {/* Main Split Body: Left Items Grid, Right Order Sidebar */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        
        {/* Left 65%: Items Grid & Categories */}
        <div className="flex-1 p-2 sm:p-2.5 flex flex-col space-y-1.5 overflow-hidden border-r border-[#E5E9EF] bg-white">
          
          {/* Items Header & Search */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100">
            <span className="font-extrabold text-[#17212D] text-[13px] flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-gray-500" />
              Items
            </span>
            <div className="relative w-48 sm:w-64">
              <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                readOnly
                placeholder="Search for items..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-7 pr-2 py-1 text-[11px] text-gray-600 cursor-default focus:outline-none"
              />
            </div>
          </div>

          {/* Category Tabs (Reference Style) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[10.5px] pb-1 border-b border-gray-100">
            {['★ Favourites', 'All', 'Desserts', 'Indian Curries', 'Indo-Chinese', 'North Indian Breads', 'North Indian Main Course', 'Rice & Biryani'].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCat(cat)}
                className={`px-2.5 py-1 rounded-md whitespace-nowrap font-bold transition-all ${
                  selectedCat === cat
                    ? 'border-b-2 border-[#17212D] text-[#17212D] bg-gray-50'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Real 4-Column Item Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 overflow-y-auto max-h-[330px] pr-1">
            {menuItems.map((item, i) => (
              <div 
                key={i} 
                className="p-2 rounded-xl border border-gray-200 bg-white hover:border-[#17212D] transition-all flex flex-col justify-between shadow-2xs group cursor-pointer"
                onClick={() => {
                  setCartItems(prev => {
                    const found = prev.find(p => p.name === item.name);
                    if (found) {
                      return prev.map(p => p.name === item.name ? { ...p, qty: p.qty + 1 } : p);
                    }
                    return [...prev, { id: Date.now(), name: item.name, price: item.price, qty: 1, category: item.category }];
                  });
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-1">
                    <h5 className="font-extrabold text-[11px] text-[#17212D] leading-tight">
                      {item.name}
                    </h5>
                    <span className="text-[9px] text-gray-400 font-medium leading-none block mt-0.5 truncate">
                      {item.category}
                    </span>
                  </div>
                  <Star className="w-2.5 h-2.5 text-gray-300 group-hover:text-amber-400" />
                </div>
                <div className="mt-2 font-black text-xs text-[#17212D]">
                  ₹{item.price}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right 35%: New Order Sidebar (Exact Reference Match) */}
        <div className="w-[195px] sm:w-[215px] bg-white p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden border-l border-gray-100">
          <div>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between pb-1 border-b border-gray-100">
              <span className="font-extrabold text-[11px] text-[#17212D] flex items-center gap-1">
                <Plus className="w-3 h-3" /> New Order
              </span>
            </div>

            {/* Dine In / Take Away & Print KOT Toggle */}
            <div className="flex items-center justify-between gap-1 py-1 text-[9px]">
              <div className="flex items-center p-0.5 bg-gray-100 rounded-md font-bold">
                <button 
                  onClick={() => setOrderType('Dine In')}
                  className={`px-1.5 py-0.5 rounded transition-all ${orderType === 'Dine In' ? 'bg-[#17212D] text-white' : 'text-gray-600'}`}
                >
                  Dine In
                </button>
                <button 
                  onClick={() => setOrderType('Take Away')}
                  className={`px-1.5 py-0.5 rounded transition-all ${orderType === 'Take Away' ? 'bg-[#17212D] text-white' : 'text-gray-600'}`}
                >
                  Take Away
                </button>
              </div>

              <div className="flex items-center gap-1 text-gray-500 font-bold text-[8.5px]">
                <span>Print KOT</span>
                <button 
                  onClick={() => setPrintKot(!printKot)}
                  className={`w-5 h-3 rounded-full p-0.5 transition-colors ${printKot ? 'bg-emerald-500' : 'bg-gray-300'}`}
                >
                  <div className={`w-2 h-2 rounded-full bg-white transition-transform ${printKot ? 'translate-x-2' : ''}`} />
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-1 py-1 max-h-[85px] overflow-y-auto">
              {cartItems.map((item, idx) => (
                <div key={item.id} className="p-1 rounded bg-gray-50 border border-gray-100 text-[9.5px]">
                  <div className="flex items-center justify-between font-bold text-[#17212D]">
                    <span className="truncate">{idx + 1}. {item.name}</span>
                    <span>₹{(item.price * item.qty).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[8px] text-gray-400 mt-0.5">
                    <span>₹{item.price} each</span>
                    <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-1">
                      <button onClick={() => updateQty(item.id, -1)} className="hover:text-black">-</button>
                      <span className="text-[#17212D] font-bold px-0.5">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="hover:text-black">+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Draft & Cancel buttons */}
            <div className="grid grid-cols-2 gap-1 py-1 text-[8.5px] font-bold">
              <button className="py-0.5 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
                Save as Draft
              </button>
              <button className="py-0.5 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">
                Cancel Order
              </button>
            </div>
          </div>

          {/* Payment & Grand Total Box */}
          <div className="pt-1 border-t border-gray-100 space-y-1 text-[9px]">
            <div className="flex justify-between font-black text-[11px] text-[#17212D]">
              <span>Grand Total</span>
              <span className="text-xs">₹{grandTotal.toFixed(2)}</span>
            </div>

            {/* Payment Mode Buttons */}
            <div>
              <div className="grid grid-cols-4 gap-0.5 text-[8px] font-bold">
                <button className="p-0.5 rounded bg-gray-50 border border-gray-200 text-gray-700">Cash</button>
                <button className="p-0.5 rounded bg-orange-50 border border-orange-200 text-[#FF571F] font-black">UPI</button>
                <button className="p-0.5 rounded bg-gray-50 border border-gray-200 text-gray-700">Card</button>
                <button className="p-0.5 rounded bg-gray-50 border border-gray-200 text-gray-700">Split</button>
              </div>
            </div>

            {/* Primary Action Button */}
            <button className="w-full mt-1 py-1.5 rounded-md bg-[#17212D] text-white font-extrabold text-[10px] shadow-2xs hover:bg-black transition-colors">
              Place Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 02: TABLE CONTROL FLOOR PLAN
------------------------------------------------------------- */
const TablesDesktopPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs">
      <AppTopNav activeNav="Tables" />
      <div className="p-3.5 flex flex-col justify-between flex-1">
        {/* Sections Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-gray-200">
          <div className="flex items-center gap-1.5 text-[11px] font-bold">
            <span className="px-3 py-1 rounded-md bg-[#17212D] text-white">Main Dining (8)</span>
            <span className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-600">AC Hall (6)</span>
            <span className="px-3 py-1 rounded-md bg-white border border-gray-200 text-gray-600">Rooftop (6)</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-bold text-gray-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> 8 Available</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FF571F]" /> 7 Occupied</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> 3 Billed</span>
          </div>
        </div>

        {/* Table Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2.5 flex-1">
          {[
            { name: 'Table 1', seats: '4 Seats', time: 'Vacant', total: '₹0', status: 'available', col: 'border-emerald-200 bg-emerald-50/50 text-emerald-800' },
            { name: 'Table 2', seats: '6 Seats', time: '38 min', total: '₹1,640', status: 'occupied', col: 'border-orange-200 bg-orange-50/60 text-[#FF571F]' },
            { name: 'Table 3', seats: '2 Seats', time: '12 min', total: '₹580', status: 'running', col: 'border-blue-200 bg-blue-50/50 text-blue-800' },
            { name: 'Table 4', seats: '4 Seats', time: 'Billed', total: '₹2,150', status: 'billed', col: 'border-amber-200 bg-amber-50/60 text-amber-800' },
            { name: 'Table 5', seats: '4 Seats', time: '22 min', total: '₹850.50', status: 'occupied', col: 'border-orange-200 bg-orange-50/60 text-[#FF571F]' },
            { name: 'Table 6', seats: '6 Seats', time: 'Vacant', total: '₹0', status: 'available', col: 'border-emerald-200 bg-emerald-50/50 text-emerald-800' },
            { name: 'Table 7', seats: '8 Seats', time: '45 min', total: '₹3,420', status: 'occupied', col: 'border-orange-200 bg-orange-50/60 text-[#FF571F]' },
            { name: 'Table 8', seats: '2 Seats', time: 'Vacant', total: '₹0', status: 'available', col: 'border-emerald-200 bg-emerald-50/50 text-emerald-800' },
          ].map((t, idx) => (
            <div key={idx} className={`p-2.5 rounded-xl border ${t.col} flex flex-col justify-between shadow-2xs`}>
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-xs text-[#17212D]">{t.name}</span>
                <span className="text-[9px] bg-white px-1.5 py-0.5 rounded font-bold">{t.seats}</span>
              </div>
              <div className="flex justify-between items-baseline mt-2">
                <div>
                  <span className="text-[9px] text-gray-500 font-medium block">{t.time}</span>
                  <span className="font-black text-xs text-[#17212D]">{t.total}</span>
                </div>
                <span className={`w-2 h-2 rounded-full ${t.status === 'available' ? 'bg-emerald-500' : t.status === 'occupied' ? 'bg-[#FF571F]' : t.status === 'billed' ? 'bg-amber-500' : 'bg-blue-500'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Floor Control Footer */}
        <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-500">
          <span>Active Diners: <strong>24 guests</strong> across 5 seated tables</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50">
              Merge Tables
            </button>
            <button className="px-3 py-1 rounded bg-[#FF571F] text-white font-bold shadow-2xs">
              + Quick Seat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 03: SMART SERVICE & KITCHEN KOT DISPLAY (KDS)
------------------------------------------------------------- */
const ServiceDesktopPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs">
      <AppTopNav activeNav="Orders" />
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="font-black text-xs text-[#17212D]">Kitchen Order Ticket (KOT) Station Router</h4>
          </div>
          <span className="text-[10px] font-bold text-[#FF571F]">3 Incoming Orders</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-2.5 flex-1">
          <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between pb-1.5 border-b border-gray-100 font-extrabold text-[11px]">
                <span>KOT #24 • Table 5</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1"><Clock className="w-3 h-3" /> 4m 12s</span>
              </div>
              <div className="space-y-1 py-2 text-[10.5px]">
                <div className="font-bold">1× Chicken Dum Biryani <span className="text-[#FF571F] text-[9px]">(Spicy)</span></div>
                <div>1× Paneer Butter Masala</div>
                <div>2× Garlic Butter Naan</div>
              </div>
            </div>
            <button className="w-full py-1.5 rounded bg-emerald-600 text-white font-bold text-[10px]">
              Mark Ready
            </button>
          </div>

          <div className="p-3 rounded-xl bg-[#FFF9F6] border border-orange-200 shadow-2xs flex flex-col justify-between ring-1 ring-[#FF571F]/30">
            <div>
              <div className="flex justify-between pb-1.5 border-b border-orange-100 font-extrabold text-[11px] text-[#FF571F]">
                <span>KOT #25 • Table 3 (QR)</span>
                <span className="bg-[#FF571F] text-white px-1.5 py-0.2 rounded text-[8px] font-black uppercase">NEW</span>
              </div>
              <div className="space-y-1 py-2 text-[10.5px]">
                <div className="font-bold text-[#17212D]">2× Masala Dosa <span className="text-gray-400 text-[9px]">(Crispy)</span></div>
                <div>1× Filter Coffee</div>
              </div>
            </div>
            <button className="w-full py-1.5 rounded bg-[#FF571F] text-white font-bold text-[10px]">
              Accept & Print KOT
            </button>
          </div>

          <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between pb-1.5 border-b border-gray-100 font-extrabold text-[11px]">
                <span>KOT #23 • Table 7</span>
                <span className="text-gray-400 font-bold flex items-center gap-1"><Clock className="w-3 h-3" /> 8m 45s</span>
              </div>
              <div className="space-y-1 py-2 text-[10.5px]">
                <div className="font-bold">1× Veg Fried Rice</div>
                <div>1× Andhra Chicken Curry</div>
              </div>
            </div>
            <button className="w-full py-1.5 rounded bg-gray-100 text-gray-700 font-bold text-[10px]">
              Ready on Counter
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-200 flex justify-between text-[10px] text-gray-500">
          <span>Thermal KOT Printer: <strong>Connected</strong></span>
          <span className="text-emerald-600 font-bold">● Average Ticket Time: 7.2 mins</span>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 04: STOCK CONTROL & INVENTORY
------------------------------------------------------------- */
const StockDesktopPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs">
      <AppTopNav activeNav="Inventory" />
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div>
            <h4 className="font-black text-xs text-[#17212D]">Raw Materials & Stock Depletion</h4>
            <span className="text-[10px] text-gray-400">Recipe consumption mapped to billed orders</span>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded bg-red-100 text-red-700 font-bold text-[9px]">1 Critical</span>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[9px]">2 Reorder</span>
          </div>
        </div>

        <div className="overflow-x-auto py-2 flex-1">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-gray-200 text-gray-400 uppercase text-[9px] font-black">
                <th className="py-1.5">Raw Material</th>
                <th>Current Stock</th>
                <th>Threshold</th>
                <th>Unit Cost</th>
                <th>Supplier</th>
                <th className="text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Basmati Rice', qty: '42.5 kg', thresh: 'Min 20 kg', cost: '₹85/kg', supp: 'Royal Mills', status: 'Optimal', col: 'text-emerald-700 bg-emerald-50' },
                { name: 'Fresh Paneer', qty: '3.2 kg', thresh: 'Min 8 kg', cost: '₹340/kg', supp: 'Heritage Dairy', status: 'Low Stock', col: 'text-amber-800 bg-amber-50' },
                { name: 'Sunflower Oil', qty: '14.0 ltr', thresh: 'Min 10 ltr', cost: '₹130/ltr', supp: 'Adani Wilmar', status: 'Optimal', col: 'text-emerald-700 bg-emerald-50' },
                { name: 'Chicken Breast', qty: '4.5 kg', thresh: 'Min 12 kg', cost: '₹260/kg', supp: 'Suguna Foods', status: 'Critical', col: 'text-red-700 bg-red-50' },
                { name: 'Garam Masala', qty: '1.8 kg', thresh: 'Min 2 kg', cost: '₹850/kg', supp: 'Everest Spices', status: 'Reorder', col: 'text-amber-800 bg-amber-50' },
              ].map((r, i) => (
                <tr key={i} className="hover:bg-white">
                  <td className="py-2 font-bold text-[#17212D]">{r.name}</td>
                  <td className="py-2 font-extrabold">{r.qty}</td>
                  <td className="py-2 text-gray-400 text-[10px]">{r.thresh}</td>
                  <td className="py-2 text-gray-600 font-medium">{r.cost}</td>
                  <td className="py-2 text-gray-500">{r.supp}</td>
                  <td className="py-2 text-right">
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[9px] uppercase ${r.col}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-2 border-t border-gray-200 flex justify-between text-[11px]">
          <span className="text-gray-400">Auto-depletion active upon KOT generation</span>
          <button className="px-3 py-1 rounded bg-[#FF571F] text-white font-bold text-xs shadow-2xs">
            + Quick Restock
          </button>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 05: BUSINESS INSIGHTS & ANALYTICS (EXACT REFERENCE MATCH)
------------------------------------------------------------- */
const InsightsDesktopPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs select-none overflow-hidden">
      <AppTopNav activeNav="Reports" />
      
      {/* Date Filter Bar matching reference */}
      <div className="px-3 py-1.5 bg-white border-b border-gray-200 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1 text-gray-500 font-bold">
          {['This Year', 'This Month', 'Today', 'This Week', 'Custom Range'].map((t, idx) => (
            <span 
              key={idx} 
              className={`px-2 py-0.5 rounded cursor-pointer ${
                t === 'Today' ? 'bg-[#17212D] text-white' : 'hover:text-[#17212D]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="text-[9px] text-gray-400 font-medium hidden sm:block">
          16 Oct 2026 00:00 AM To 16 Oct 2026 23:59 PM
        </div>
      </div>

      <div className="p-2 sm:p-2.5 flex-1 grid grid-cols-12 gap-2 overflow-hidden">
        {/* Left 65%: Revenue vs Date Bar Chart */}
        <div className="col-span-7 bg-white p-2 rounded-xl border border-gray-200 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-[10.5px] font-black text-[#17212D]">
              <span>Revenue vs Time</span>
              <span className="text-[9px] text-gray-400 font-bold">Total Orders • Revenue</span>
            </div>
          </div>

          {/* Clean vertical bars matching reference */}
          <div className="flex items-end justify-between h-28 gap-1.5 px-2 pt-2 border-b border-gray-100">
            {[
              { time: '5 AM', h: 10 },
              { time: '7 AM', h: 15 },
              { time: '9 AM', h: 35 },
              { time: '11 AM', h: 70 },
              { time: '1 PM', h: 95 },
              { time: '3 PM', h: 80 },
              { time: '5 PM', h: 45 },
              { time: '7 PM', h: 88 },
              { time: '9 PM', h: 92 },
              { time: '11 PM', h: 25 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className={`w-full rounded-t-xs transition-all ${
                    bar.h >= 80 ? 'bg-[#17212D]' : 'bg-gray-400/80'
                  }`}
                  style={{ height: `${bar.h}%` }}
                />
                <span className="text-[7.5px] text-gray-400 leading-none">{bar.time}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[9px] text-gray-400 pt-1">
            <span>Peak Rush: 1:00 PM & 9:00 PM</span>
            <span className="font-bold text-emerald-600">+18% vs yesterday</span>
          </div>
        </div>

        {/* Right 35%: Financial Overview Cards matching reference */}
        <div className="col-span-5 flex flex-col gap-1.5">
          <div className="bg-white p-2 rounded-xl border border-gray-200 shadow-2xs flex-1 flex flex-col justify-between">
            <span className="text-[10px] font-extrabold text-[#17212D]">Financial Overview</span>

            <div className="space-y-1 my-1">
              <div className="p-1.5 rounded-lg bg-gray-50 flex justify-between items-center">
                <span className="text-[9px] text-gray-500 font-bold">Total Revenue</span>
                <span className="text-[11px] font-black text-[#17212D]">₹8,851.00</span>
              </div>
              <div className="p-1.5 rounded-lg bg-gray-50 flex justify-between items-center">
                <span className="text-[9px] text-gray-500 font-bold">Total Expenses</span>
                <span className="text-[11px] font-black text-red-600">₹2,500.00</span>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-50/60 border border-emerald-100 flex justify-between items-center">
                <span className="text-[9px] text-emerald-800 font-bold">Net Profit</span>
                <span className="text-[11px] font-black text-emerald-700">₹6,351.00</span>
              </div>
            </div>

            <div className="text-[8.5px] text-gray-400 truncate">
              Top: Chicken Dum Biryani • Paneer Tikka
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
   FEATURE 06: GROWTH & MULTI-BRANCH ENGINE
------------------------------------------------------------- */
const GrowthDesktopPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] text-[#17212D] text-xs">
      <AppTopNav activeNav="Settings" />
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-[#FF571F]" />
            <h4 className="font-black text-xs text-[#17212D]">Multi-Branch & Role Permissions</h4>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#FF571F] font-bold text-[9px] uppercase">
            Upcoming Multi-Store Sync
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2">
          <div className="p-2.5 rounded-xl border-2 border-[#FF571F] bg-white shadow-2xs">
            <div className="flex justify-between items-center text-[11px] font-extrabold text-[#17212D]">
              <span>Indiranagar Flagship</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-base font-black text-[#FF571F] mt-1">₹48,250</div>
            <span className="text-[9px] text-gray-500">142 orders • Active</span>
          </div>

          <div className="p-2.5 rounded-xl border border-gray-200 bg-white shadow-2xs">
            <div className="flex justify-between items-center text-[11px] font-extrabold text-[#17212D]">
              <span>Koramangala Branch</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="text-base font-black text-[#17212D] mt-1">₹36,800</div>
            <span className="text-[9px] text-gray-500">108 orders • Online</span>
          </div>

          <div className="p-2.5 rounded-xl border border-dashed border-gray-300 bg-gray-50/50 flex flex-col items-center justify-center text-center">
            <Plus className="w-4 h-4 text-gray-400" />
            <span className="font-bold text-[10px] text-gray-600 mt-0.5">+ Add New Branch</span>
          </div>
        </div>

        {/* Role Matrix */}
        <div className="p-2.5 bg-white rounded-xl border border-gray-200 flex-1">
          <span className="font-bold text-[10.5px] block mb-1.5 text-[#17212D]">Role Access Configuration</span>
          <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-gray-400 uppercase border-b border-gray-100 pb-1">
            <span>Role</span>
            <span>Billing</span>
            <span>Menu & Tax</span>
            <span>Reports</span>
          </div>
          <div className="space-y-1.5 pt-1 text-[10.5px]">
            <div className="grid grid-cols-4 gap-1 font-medium items-center">
              <span className="font-bold text-[#17212D]">Owner</span>
              <span className="text-emerald-600 font-bold">✓ Full</span>
              <span className="text-emerald-600 font-bold">✓ Full</span>
              <span className="text-emerald-600 font-bold">✓ Full</span>
            </div>
            <div className="grid grid-cols-4 gap-1 font-medium items-center">
              <span className="font-bold text-[#17212D]">Cashier</span>
              <span className="text-emerald-600 font-bold">✓ Allowed</span>
              <span className="text-red-500 font-bold">✗ No</span>
              <span className="text-gray-500">Daily Only</span>
            </div>
            <div className="grid grid-cols-4 gap-1 font-medium items-center">
              <span className="font-bold text-[#17212D]">Captain</span>
              <span className="text-gray-500">KOT Only</span>
              <span className="text-red-500 font-bold">✗ No</span>
              <span className="text-red-500 font-bold">✗ No</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-200 flex justify-between text-[11px]">
          <span className="text-gray-400">Centralized Cloud Sync</span>
          <button className="px-3 py-1 rounded bg-[#17212D] text-white font-bold text-xs">
            Manage Staff Logins
          </button>
        </div>
      </div>
    </div>
  );
};
