import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Minus, 
  Trash2, 
  Receipt, 
  Printer, 
  Search, 
  Check, 
  RotateCcw, 
  ChefHat, 
  Tag, 
  Wifi, 
  Smartphone, 
  Banknote, 
  CreditCard,
  ShoppingBag,
  Flame,
  UtensilsCrossed,
  Soup,
  Coffee,
  Cake,
  X
} from 'lucide-react';
import { DEMO_CATEGORIES, DEMO_MENU_ITEMS } from '../data/demoData';
import { CartItem, MenuItem } from '../types';
import { ReceiptModal } from './ReceiptModal';

interface InteractivePosProps {
  darkTheme?: boolean;
}

export const InteractivePosShowcase: React.FC<InteractivePosProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState('starters');
  const [selectedTable, setSelectedTable] = useState(5);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'delivery'>('dine-in');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg' | 'bestseller'>('all');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'upi' | 'card'>('upi');
  const [kotSentToast, setKotSentToast] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [mobileTab, setMobileTab] = useState<'menu' | 'cart'>('menu');

  // Default pre-loaded items so simulator is instantly active & visual
  const [cart, setCart] = useState<CartItem[]>([
    { ...DEMO_MENU_ITEMS[0], quantity: 1 }, // Paneer Tikka
    { ...DEMO_MENU_ITEMS[1], quantity: 1 }, // Gobi 65
    { ...DEMO_MENU_ITEMS[6], quantity: 1 }, // Hyderabadi Chicken Biryani
  ]);

  // Filter items by category, search text, and diet
  const filteredItems = useMemo(() => {
    return DEMO_MENU_ITEMS.filter((item) => {
      const matchesCategory = searchQuery.trim() !== '' ? true : item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesDiet = true;
      if (dietFilter === 'veg') matchesDiet = item.isVeg;
      if (dietFilter === 'non-veg') matchesDiet = !item.isVeg;
      if (dietFilter === 'bestseller') matchesDiet = Boolean(item.isPopular);

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [selectedCategory, searchQuery, dietFilter]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const toggleAddon = (tag: string) => {
    setSelectedAddons((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSendKot = () => {
    setKotSentToast(true);
    setTimeout(() => {
      setKotSentToast(false);
    }, 3800);
  };

  // Financial calculations
  const rawSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = discountApplied ? rawSubtotal * 0.1 : 0; // 10% demo discount
  const subtotal = rawSubtotal - discountAmount;
  const tax = subtotal * 0.05; // 5% GST (2.5% CGST + 2.5% SGST)
  const grandTotal = Math.round(subtotal + tax);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'starters': return <Flame className="w-3.5 h-3.5" />;
      case 'biryani': return <UtensilsCrossed className="w-3.5 h-3.5" />;
      case 'curries': return <Soup className="w-3.5 h-3.5" />;
      case 'beverages': return <Coffee className="w-3.5 h-3.5" />;
      case 'desserts': return <Cake className="w-3.5 h-3.5" />;
      default: return <UtensilsCrossed className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden font-sans bg-[#0E1624] text-slate-100 border border-slate-800 shadow-2xl transition-all">
      
      {/* ========================================================
          1. TOP HARDWARE STATUS BAR
          ======================================================== */}
      <div className="bg-[#141F32] text-white px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/60">
        
        {/* Left: Outlet & Station Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#FF571F] flex items-center justify-center font-black text-white shadow-md text-sm">
            P
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black tracking-tight text-white">Varahi Indian Restaurant</span>
              <span className="hidden xs:inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-300">
                Outlet #01 (Anna Nagar)
              </span>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center gap-2">
              <span>Counter: <strong className="text-slate-200">Billing Pos-01</strong></span>
              <span className="text-slate-600">•</span>
              <span>Cashier: <strong className="text-slate-200">Captain Ramesh</strong></span>
            </div>
          </div>
        </div>

        {/* Right: Operational Status Badges */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>100% Offline Active (Local SQLite)</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
            <Wifi className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">Epson WiFi</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-[11px]">
            <Printer className="w-3 h-3 text-blue-400" />
            <span className="hidden sm:inline">TVS KOT Ready</span>
          </div>
        </div>

      </div>

      {/* ========================================================
          2. SUB-BAR: ORDER MODE, TABLE SELECTOR & CLEAR
          ======================================================== */}
      <div className="px-3 sm:px-6 py-2.5 sm:py-3 bg-[#111A29] border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Order Mode Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-[#1A2638] border border-slate-700/80 text-xs font-bold">
          {(['dine-in', 'takeaway', 'delivery'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                orderType === type
                  ? 'bg-[#FF571F] text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {type === 'dine-in' ? '🍽️ Dine-In' : type === 'takeaway' ? '🥡 Takeaway' : '🛵 Delivery'}
            </button>
          ))}
        </div>

        {/* Table Selector & Cart Clear */}
        <div className="flex items-center gap-2 sm:gap-3">
          {orderType === 'dine-in' && (
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#1A2638] px-2.5 sm:px-3 py-1.5 rounded-xl border border-slate-700/80">
              <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">TABLE:</span>
              <select
                value={selectedTable}
                onChange={(e) => setSelectedTable(Number(e.target.value))}
                className="bg-transparent font-black text-xs text-white focus:outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16].map((num) => (
                  <option key={num} value={num} className="bg-slate-900 text-white">
                    Table {num} {num === 5 ? '(Active)' : num === 4 ? '(Billed)' : '(Vacant)'}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            onClick={() => setCart([])}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 border border-transparent hover:border-rose-800/40 transition-all cursor-pointer"
            title="Reset cart"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>

      </div>

      {/* Mobile Segmented Tab Switcher (Menu vs Order) */}
      <div className="flex lg:hidden items-center p-2 bg-[#0A111D] border-b border-slate-800 gap-2">
        <button
          onClick={() => setMobileTab('menu')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
            mobileTab === 'menu'
              ? 'bg-[#FF571F] text-white shadow-md'
              : 'bg-[#152132] text-slate-300 hover:text-white'
          }`}
        >
          <UtensilsCrossed className="w-3.5 h-3.5" />
          <span>Menu Catalog</span>
        </button>
        <button
          onClick={() => setMobileTab('cart')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 relative ${
            mobileTab === 'cart'
              ? 'bg-[#FF571F] text-white shadow-md'
              : 'bg-[#152132] text-slate-300 hover:text-white'
          }`}
        >
          <Receipt className="w-3.5 h-3.5" />
          <span>Order & Bill</span>
          {cart.length > 0 && (
            <span className="px-1.5 py-0.2 rounded-full text-[10px] font-black bg-white/20 text-white">
              {cart.reduce((s, i) => s + i.quantity, 0)}
            </span>
          )}
          <span className="font-mono text-[11px] text-amber-300">₹{grandTotal}</span>
        </button>
      </div>

      {/* ========================================================
          3. MAIN TERMINAL WORKSPACE
          ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-w-0">
        
        {/* LEFT COLUMN: MENU & CATEGORY SEARCH (7 COLS) */}
        <div className={`lg:col-span-7 p-3 sm:p-5 flex-col space-y-3.5 bg-[#0E1624] min-w-0 ${
          mobileTab === 'menu' ? 'flex' : 'hidden lg:flex'
        }`}>
          
          {/* Search Input & Dietary Filters */}
          <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 20+ dishes (e.g. Biryani, Naan, 65)..."
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs font-medium border bg-[#152132] border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF571F]/30 focus:border-[#FF571F]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Dietary Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-[11px] font-bold">
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: '🟢 Veg' },
                { id: 'non-veg', label: '🔴 Non-Veg' },
                { id: 'bestseller', label: '⭐ Popular' }
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setDietFilter(f.id as any)}
                  className={`px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    dietFilter === f.id
                      ? 'bg-[#FF571F] text-white shadow-2xs font-black'
                      : 'bg-[#182436] text-slate-300 hover:bg-[#202E44] hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

          </div>

          {/* Category Tabs with Item Counts */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {DEMO_CATEGORIES.map((cat) => {
              const count = DEMO_MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isSelected = selectedCategory === cat.id && !searchQuery;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#FF571F] text-white border-[#FF571F] shadow-sm scale-102'
                      : 'bg-[#152132] text-slate-300 border-slate-700/80 hover:border-slate-600 hover:bg-[#1C2C42]'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dish Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[460px] overflow-y-auto pr-1">
            {filteredItems.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-400">
                <ChefHat className="w-10 h-10 mx-auto mb-2 opacity-40 text-slate-400" />
                <p className="text-xs font-semibold text-slate-300">No dishes match your filter</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Try searching for Biryani, Tikka, or Curry</p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const inCart = cart.find((i) => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => addToCart(item)}
                    className={`group relative p-2.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 ${
                      inCart
                        ? 'bg-[#1D2738] border-[#FF571F] ring-1 ring-[#FF571F]/40'
                        : 'bg-[#131D2D] border-slate-700/80 hover:border-[#FF571F] hover:bg-[#182436]'
                    }`}
                  >
                    <div>
                      {/* Image Thumbnail with Veg/Non-Veg Tag */}
                      <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden mb-2 bg-slate-800">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        {/* FSSAI Veg / Non-Veg Indicator */}
                        <div className="absolute top-2 left-2 p-1 bg-white/95 rounded-md backdrop-blur-xs shadow-xs">
                          <div className={`w-3 h-3 rounded-xs border flex items-center justify-center p-0.5 ${
                            item.isVeg ? 'border-emerald-600' : 'border-rose-600'
                          }`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              item.isVeg ? 'bg-emerald-600' : 'bg-rose-600'
                            }`} />
                          </div>
                        </div>

                        {/* Popular Badge */}
                        {item.isPopular && (
                          <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-[#FF571F] text-white font-black text-[9px] uppercase tracking-wider shadow-xs">
                            Top
                          </div>
                        )}

                        {/* In-Cart Counter Pill */}
                        {inCart && (
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-[#141E30] text-white font-black text-[10px] shadow-md flex items-center gap-1 border border-[#FF571F]">
                            <Check className="w-3 h-3 text-[#FF571F]" />
                            <span>{inCart.quantity} in order</span>
                          </div>
                        )}
                      </div>

                      {/* Dish Details */}
                      <h4 className="text-xs sm:text-sm font-extrabold text-white line-clamp-1 group-hover:text-[#FF571F] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price & Add Button */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-700/60">
                      <span className="text-xs sm:text-sm font-black text-[#FF571F]">
                        ₹{item.price}
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FF571F] hover:bg-[#E04612] text-white font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                        aria-label={`Add ${item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Mobile Bottom Quick Bar when on Menu */}
          {cart.length > 0 && (
            <div className="lg:hidden sticky bottom-1 z-30 pt-2">
              <button
                onClick={() => setMobileTab('cart')}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FF571F] to-[#E04612] text-white font-bold text-xs shadow-lg shadow-orange-500/30 flex items-center justify-between cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Receipt className="w-4 h-4" />
                  <span>{cart.reduce((s, i) => s + i.quantity, 0)} Items Added</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="font-mono font-black text-amber-200">₹{grandTotal}</span>
                  <span>View Bill & Pay →</span>
                </span>
              </button>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: ACTIVE ORDER, RUNNING BILL & ACTION BAR (5 COLS) */}
        <div className={`lg:col-span-5 p-3 sm:p-5 flex-col justify-between bg-[#0A101A] min-w-0 ${
          mobileTab === 'cart' ? 'flex' : 'hidden lg:flex'
        }`}>
          
          <div className="space-y-3.5">

            {/* Mobile Return to Menu Button */}
            <button
              onClick={() => setMobileTab('menu')}
              className="lg:hidden w-full py-2 px-3 rounded-xl bg-slate-800/90 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 hover:bg-slate-700 cursor-pointer mb-1"
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#FF571F]" />
              <span>← Back to Menu Catalog</span>
            </button>
            
            {/* Order Ticket Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-[#FF571F]/20 text-[#FF571F] border border-[#FF571F]/30">
                    KOT #1042-K1
                  </span>
                  <span className="text-xs text-slate-400 font-mono">16 Oct 12:28 PM</span>
                </div>
                <h3 className="text-sm font-black text-white mt-1">
                  Table {selectedTable} • Dine-In Running Order
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {cart.reduce((s, i) => s + i.quantity, 0)} Items
                </span>
              </div>
            </div>

            {/* Quick Cooking Instructions / Add-ons */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Kitchen Add-on Notes</span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  '🌶️ Less Spicy', 
                  '🧅 Extra Lemon/Onion', 
                  '🧈 Extra Butter', 
                  '🌿 Jain Preparation'
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleAddon(tag)}
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer border ${
                      selectedAddons.includes(tag)
                        ? 'bg-[#FF571F] text-white border-[#FF571F] shadow-2xs'
                        : 'bg-[#152132] text-slate-300 border-slate-700/80 hover:border-slate-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-slate-400 border-2 border-dashed border-slate-800 rounded-2xl bg-[#0F1724]">
                  <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
                  <p className="text-xs font-bold text-slate-300">Order is empty</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Tap dishes on the menu to add to Table {selectedTable}</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#131D2D] border border-slate-700/80 shadow-2xs"
                  >
                    {/* Item Name & Details */}
                    <div className="flex-1 pr-2">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                        <span className="font-extrabold text-xs text-white line-clamp-1">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        ₹{item.price} × {item.quantity} = <strong className="text-slate-200 font-semibold">₹{item.price * item.quantity}</strong>
                      </div>
                    </div>

                    {/* Stepper Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#1D2B3F] rounded-lg p-0.5 border border-slate-700">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-md text-slate-300 hover:bg-[#253750] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-black text-xs text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-md text-slate-300 hover:bg-[#253750] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-rose-400 transition-colors p-1 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

          {/* Bill Calculation & Checkout Area */}
          <div className="pt-3.5 border-t border-slate-800 space-y-3">
            
            {/* Promo / Discount Toggle Pill */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs">
              <div className="flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#FF571F]" />
                <span className="font-bold text-slate-200">FIRST10 (10% Demo Discount)</span>
              </div>
              <button
                onClick={() => setDiscountApplied(!discountApplied)}
                className={`px-2 py-0.5 rounded-md font-black text-[11px] transition-all cursor-pointer ${
                  discountApplied 
                    ? 'bg-[#FF571F] text-white shadow-xs' 
                    : 'bg-[#182538] text-slate-300 border border-slate-700 hover:border-[#FF571F]'
                }`}
              >
                {discountApplied ? 'Applied ✓' : 'Apply'}
              </button>
            </div>

            {/* Itemized Calculation */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Items Subtotal</span>
                <span className="text-slate-300 font-mono">₹{rawSubtotal.toFixed(2)}</span>
              </div>

              {discountApplied && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>Special 10% Discount</span>
                  <span className="font-mono">-₹{discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-400">
                <span>CGST (2.5%) + SGST (2.5%)</span>
                <span className="text-slate-300 font-mono">₹{tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-base font-black text-white pt-2 border-t border-slate-800">
                <span>Grand Total</span>
                <span className="text-[#FF571F] font-mono text-xl">₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Quick Payment Method Selector */}
            <div className="grid grid-cols-3 gap-2 pt-1 text-xs font-bold">
              {[
                { id: 'upi', label: '📱 UPI QR', icon: Smartphone },
                { id: 'cash', label: '💵 Cash', icon: Banknote },
                { id: 'card', label: '💳 Card', icon: CreditCard }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id as any)}
                  className={`py-2 px-1 rounded-xl text-center transition-all cursor-pointer border ${
                    paymentMethod === m.id
                      ? 'bg-[#FF571F] text-white border-[#FF571F] shadow-sm font-black'
                      : 'bg-[#152132] text-slate-300 border-slate-700/80 hover:bg-[#1C2C42]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Action Buttons: Pay & Print Bill + Send KOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              
              {/* Secondary: Send KOT to Kitchen */}
              <button
                onClick={handleSendKot}
                disabled={cart.length === 0}
                className={`flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                  cart.length > 0
                    ? 'bg-[#182538] hover:bg-[#20314A] text-white border-slate-700 cursor-pointer'
                    : 'bg-[#131C2A] text-slate-500 border-transparent cursor-not-allowed opacity-50'
                }`}
              >
                <ChefHat className="w-4 h-4 text-emerald-400" />
                <span>Send KOT</span>
              </button>

              {/* Primary: Pay & Print Thermal Receipt */}
              <button
                onClick={() => setIsReceiptOpen(true)}
                disabled={cart.length === 0}
                className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black text-white transition-all shadow-md ${
                  cart.length > 0
                    ? 'bg-[#FF571F] hover:bg-[#E04612] cursor-pointer hover:shadow-lg hover:scale-101'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-50'
                }`}
              >
                <Receipt className="w-4 h-4" />
                <span>Pay ₹{grandTotal} & Bill</span>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          4. INTERACTIVE KOT ALERT TOAST
          ======================================================== */}
      {kotSentToast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#141F32] text-white shadow-2xl border border-emerald-500/40 text-xs font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <ChefHat className="w-4 h-4 text-emerald-400" />
          <span>Kitchen Ticket (KOT #1042-K1) sent to Kitchen Display & TVS 80mm Printer!</span>
        </div>
      )}

      {/* ========================================================
          5. THERMAL RECEIPT MODAL
          ======================================================== */}
      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        tableNumber={selectedTable}
        items={cart}
        subtotal={subtotal}
        tax={tax}
        total={grandTotal}
      />

    </div>
  );
};
