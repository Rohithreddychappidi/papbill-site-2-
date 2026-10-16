import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Receipt, 
  QrCode, 
  ChefHat, 
  Package, 
  TrendingUp, 
  Building2, 
  Printer, 
  ShieldCheck, 
  WifiOff, 
  LayoutGrid, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Search,
  X,
  Play,
  RotateCcw,
  Check,
  Smartphone,
  Laptop,
  Flame,
  ChevronDown,
  Layers,
  Zap,
  Clock,
  Share2,
  Lock,
  Unlock,
  Radio,
  Wifi
} from 'lucide-react';
import { FEATURES } from '../data/features';
import { BottomCta } from '../components/BottomCta';
import { InteractivePosShowcase } from '../components/InteractivePosShowcase';
import { SEO } from '../components/SEO';

type CategoryFilter = 'all' | 'billing' | 'qr-ordering' | 'kitchen' | 'inventory' | 'analytics' | 'management';

export const FeaturesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPosModalOpen, setIsPosModalOpen] = useState(false);

  // Feature-specific interactive states
  const [simulatedTable, setSimulatedTable] = useState<{ id: number; name: string; status: 'Available' | 'Occupied' | 'KOT Cooking' | 'Billed'; amount: number; time: string }>({
    id: 3,
    name: 'Table 3 (AC Hall)',
    status: 'Occupied',
    amount: 1420,
    time: '24 mins'
  });

  const [kotStep, setKotStep] = useState<'pending' | 'preparing' | 'ready' | 'served'>('preparing');
  const [analyticsPeriod, setAnalyticsPeriod] = useState<'today' | 'week' | 'month'>('today');
  const [activeBranch, setActiveBranch] = useState<'flagship' | 'mall' | 'airport'>('flagship');
  const [isReceiptPrinted, setIsReceiptPrinted] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'cashier' | 'captain' | 'chef' | 'manager' | 'owner'>('cashier');
  const [isOfflineSimulated, setIsOfflineSimulated] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Filter features based on category and search query
  const filteredFeatures = useMemo(() => {
    return FEATURES.filter((feat) => {
      const matchesCategory = selectedCategory === 'all' || feat.category === selectedCategory;
      const matchesSearch = 
        feat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feat.fullDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feat.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
        feat.problemSolved.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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

  const categories: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Capabilities', count: FEATURES.length },
    { id: 'billing', label: 'POS & Billing', count: FEATURES.filter(f => f.category === 'billing').length },
    { id: 'qr-ordering', label: 'QR Ordering', count: FEATURES.filter(f => f.category === 'qr-ordering').length },
    { id: 'kitchen', label: 'Kitchen & KOT', count: FEATURES.filter(f => f.category === 'kitchen').length },
    { id: 'inventory', label: 'Inventory & Stock', count: FEATURES.filter(f => f.category === 'inventory').length },
    { id: 'analytics', label: 'Analytics & Reports', count: FEATURES.filter(f => f.category === 'analytics').length },
    { id: 'management', label: 'Multi-Store & Staff', count: FEATURES.filter(f => f.category === 'management').length },
  ];

  const faqs = [
    {
      q: 'Does PapBill work when the internet goes down?',
      a: 'Yes, 100%. PapBill is built with a local offline-first SQLite database. You can continue taking orders, punching KOTs, and printing thermal receipts without an active internet connection. All transactions automatically sync to the cloud the instant connectivity is restored.'
    },
    {
      q: 'Can I use our existing thermal receipt printers and cash drawers?',
      a: 'Absolutely. PapBill connects directly to all standard 58mm and 80mm USB, Bluetooth, Ethernet (LAN), and Wi-Fi thermal printers, including Epson, TVS, NGX, Everycom, and Star Micronics. Standard RJ11 cash drawers automatically trigger upon bill settlement.'
    },
    {
      q: 'How does WhatsApp digital billing work for customers?',
      a: 'When an order is settled at the billing counter or via QR code, PapBill automatically generates an official digital bill with GST breakdown and sends it directly to the customer’s WhatsApp number in 1 click. Zero paper waste, lower operational cost, and higher repeat customer loyalty.'
    },
    {
      q: 'Can we manage multiple outlets with centralized menus and pricing?',
      a: 'Yes. PapBill’s Multi-Branch Management system allows you to manage menus, tax configurations, recipes, and user permissions centrally across 2 to 100+ branches, with the option to customize item pricing or availability for specific outlets.'
    },
    {
      q: 'How quickly can our restaurant staff be trained on PapBill?',
      a: 'PapBill’s touchscreen POS interface is designed like everyday smartphone apps. Most restaurant cashiers, captains, and kitchen staff become fully proficient in under 15 minutes of hands-on practice.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      <SEO
        title="Restaurant POS Features - KOT, Offline Billing, Inventory & GST | PapBill"
        description="Explore all features of PapBill restaurant POS: 3-second counter billing, split bills, wireless KOT printing, recipe inventory, and AI sales analytics."
        keywords="restaurant POS features, KOT software, offline restaurant billing, kitchen display system KDS, restaurant inventory software, GST restaurant billing, waiter tablet app"
        canonical="https://papbill.com/features"
      />
      
      {/* ========================================================
          1. FEATURES HERO SECTION
          ======================================================== */}
      <section className="pt-16 pb-12 sm:pb-16 bg-white border-b border-[#E5E9EF] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2ED] text-[#FF571F] text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Restaurant Operating System</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#17212D] tracking-tight leading-[1.12]">
            Every Tool Your Restaurant Needs to Run Faster & Grow Smarter.
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
            From 3-second billing speed and visual table floor plans to automated recipe stock depletion and multi-outlet analytics. Built for cafes, fine dine, QSRs, and cloud kitchens.
          </p>

          {/* Quick Action Simulator Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsPosModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#17212D] hover:bg-[#FF571F] text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 hover:shadow-orange-500/25 transition-all duration-200 group cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Launch Live Interactive POS Simulator</span>
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono ml-1">TEST LIVE</span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#E5E9EF] hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs hover:bg-slate-50 transition-all"
            >
              <span>Book 1-on-1 Personalized Walkthrough</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. STICKY INTERACTIVE FILTER & SEARCH BAR
          ======================================================== */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E9EF] shadow-2xs py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-1 md:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#17212D] text-white shadow-2xs'
                      : 'bg-[#F6F8FB] text-[#667085] hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72 flex-shrink-0">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search features (e.g. GST, KOT, offline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-8 py-1.5 text-xs bg-[#F6F8FB] border border-[#E5E9EF] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF571F] focus:border-[#FF571F] text-slate-800 placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ========================================================
          3. COMPREHENSIVE FEATURE DEEP DIVE WITH REAL VISUALS
          ======================================================== */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {filteredFeatures.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-3xl border border-[#E5E9EF] p-8 max-w-lg mx-auto">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No matching capabilities found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for another keyword like "thermal", "QR", "table", or "reports".
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredFeatures.map((feat, index) => {
              const Icon = getIcon(feat.icon);
              const isReversed = index % 2 === 1;

              return (
                <div
                  key={feat.id}
                  id={feat.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-28 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left / Text Column (6 cols) */}
                  <div className={`lg:col-span-6 space-y-4 sm:space-y-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    
                    {/* Header Tag Bar */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="w-9 h-9 rounded-xl bg-[#FFF2ED] text-[#FF571F] flex items-center justify-center shadow-2xs">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#FF571F] bg-orange-50/80 px-2.5 py-1 rounded-full border border-orange-200/60">
                        {feat.category.replace('-', ' ')}
                      </span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {feat.status}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#17212D] tracking-tight leading-tight">
                      {feat.title}
                    </h2>

                    {/* Full Description */}
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {feat.fullDesc}
                    </p>

                    {/* Operational Problem Solved Callout */}
                    <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-950 flex items-start gap-2.5">
                      <HelpCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-amber-900 block mb-0.5">Problem Solved:</span>
                        <p className="text-amber-900/90 text-[12px] leading-relaxed">{feat.problemSolved}</p>
                      </div>
                    </div>

                    {/* Key Benefits Checklist */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Core Capabilities Included:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {feat.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12px] text-slate-800 font-medium leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF571F] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {feat.id === 'pos-billing' ? (
                        <button
                          onClick={() => setIsPosModalOpen(true)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#17212D] hover:bg-[#FF571F] px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer group"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Try Live POS Simulator</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </button>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#17212D] hover:bg-[#FF571F] px-4.5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer group"
                        >
                          <span>Schedule {feat.title} Demo</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}

                      {feat.relatedFeatures && feat.relatedFeatures.length > 0 && (
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <span>Works with:</span>
                          {feat.relatedFeatures.slice(0, 2).map((rf, rfi) => (
                            <a
                              key={rfi}
                              href={`#${rf}`}
                              className="text-slate-600 hover:text-[#FF571F] font-semibold underline underline-offset-2"
                            >
                              {rf.replace(/-/g, ' ')}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Right / Visual Interactive Column (6 cols) */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="rounded-3xl bg-white border border-[#E5E9EF] shadow-md shadow-slate-900/4 overflow-hidden relative group">
                      
                      {/* Top Header Strip */}
                      <div className="px-5 py-3 border-b border-[#F0F3F7] bg-[#FAFAFC] flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="text-[11px] font-mono font-bold text-slate-400 ml-1">
                            PAPBILL • {feat.title.toUpperCase()}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                          REAL-TIME ENGINE
                        </span>
                      </div>

                      {/* Dynamic Visual Content per Feature */}
                      <div className="p-4 sm:p-6 bg-white min-h-[300px] flex flex-col justify-center">
                        
                        {/* 1. POS BILLING: Real 3D Studio Device Render */}
                        {feat.id === 'pos-billing' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/seamless-billing-feathered.png"
                                alt="PapBill POS Billing Interface & Mobile Companion App"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">3 Sec</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Speed</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">1-Click</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">WhatsApp</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">5% GST</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Compliant</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 2. QR ORDERING: Real 3D Studio Acrylic Stand Render */}
                        {feat.id === 'qr-ordering' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/qr-menu-feathered.png"
                                alt="PapBill Contactless QR Stand & Customer Mobile Ordering View"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">0 App</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">No Download</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">+22%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Higher Ticket</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">Instant</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Direct KOT</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 3. TABLE MANAGEMENT: Real 3D Studio Floor Plan Render + Live Interactive Table Picker */}
                        {feat.id === 'table-management' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/table-management-feathered.png"
                                alt="PapBill Visual Floor Plan and Waiter App"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            {/* Interactive Floor Plan Quick Test */}
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                              <div className="flex items-center justify-between text-[11px]">
                                <span className="font-bold text-slate-700">Live Interactive Floor Plan:</span>
                                <span className="text-slate-400">Click any table below to inspect</span>
                              </div>
                              <div className="grid grid-cols-4 gap-2">
                                {[
                                  { id: 1, name: 'T1: Available', status: 'Available' as const, amount: 0, time: '-' },
                                  { id: 2, name: 'T2: Occupied', status: 'Occupied' as const, amount: 980, time: '18m' },
                                  { id: 3, name: 'T3: KOT Active', status: 'KOT Cooking' as const, amount: 1420, time: '24m' },
                                  { id: 4, name: 'T4: Billed', status: 'Billed' as const, amount: 2150, time: '42m' }
                                ].map((t) => (
                                  <button
                                    key={t.id}
                                    onClick={() => setSimulatedTable(t)}
                                    className={`p-2 rounded-xl text-center text-xs font-bold transition-all cursor-pointer border ${
                                      simulatedTable.id === t.id
                                        ? 'bg-white border-[#FF571F] shadow-xs ring-2 ring-orange-100'
                                        : 'bg-white/80 border-slate-200 hover:border-slate-300'
                                    }`}
                                  >
                                    <div className="text-[10px] font-bold text-slate-500">T-{t.id}</div>
                                    <div className={`text-[10px] font-black mt-0.5 ${
                                      t.status === 'Available' ? 'text-emerald-600' :
                                      t.status === 'Occupied' ? 'text-blue-600' :
                                      t.status === 'KOT Cooking' ? 'text-amber-600' : 'text-purple-600'
                                    }`}>
                                      {t.status === 'Available' ? 'Free' : `₹${t.amount}`}
                                    </div>
                                  </button>
                                ))}
                              </div>
                              <div className="text-[11px] text-slate-600 flex items-center justify-between pt-1">
                                <span>Selected: <strong>{simulatedTable.name}</strong></span>
                                <span className="font-mono text-slate-500">Seating: {simulatedTable.time}</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 4. KITCHEN ORDER TICKETS (KOT): Real 3D Studio KOT Render + Interactive Prep Router */}
                        {feat.id === 'kitchen-order-tickets' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/kot-kitchen-feathered.png"
                                alt="PapBill Kitchen Display System and Thermal KOT Printer"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            {/* Interactive KOT Progression Bar */}
                            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-slate-800">KOT #108 (Table 5 • Dine-In)</span>
                                <span className="text-[10px] font-mono bg-orange-100 text-[#FF571F] px-2 py-0.5 rounded font-bold">
                                  TANDOOR & CURRY
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-black">
                                {[
                                  { id: 'pending', label: '1. PENDING' },
                                  { id: 'preparing', label: '2. PREPARING' },
                                  { id: 'ready', label: '3. READY' },
                                  { id: 'served', label: '4. SERVED' }
                                ].map((step) => (
                                  <button
                                    key={step.id}
                                    onClick={() => setKotStep(step.id as any)}
                                    className={`py-1.5 px-1 rounded-lg transition-all cursor-pointer ${
                                      kotStep === step.id
                                        ? 'bg-[#17212D] text-white shadow-2xs'
                                        : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900'
                                    }`}
                                  >
                                    {step.label}
                                  </button>
                                ))}
                              </div>
                              <p className="text-[11px] text-slate-500 italic">
                                Special Note: "1x Paneer Butter Masala (Less Spicy) • 2x Garlic Naan"
                              </p>
                            </div>
                          </div>
                        )}

                        {/* 5. INVENTORY & STOCK TRACKING: Real 3D Studio Inventory Render */}
                        {feat.id === 'inventory-management' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/stock-control-feathered.png"
                                alt="PapBill Stock Control and Low-Stock Alert Monitor"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            {/* Interactive Recipe Consumption Bars */}
                            <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                <span>Real-Time Recipe Depletion Meter:</span>
                                <span className="text-[10px] font-mono text-emerald-600">AUTO-DEPLETING</span>
                              </div>
                              <div className="space-y-1.5 text-[11px]">
                                <div>
                                  <div className="flex justify-between font-medium mb-0.5">
                                    <span>Basmati Rice (Biryani Prep)</span>
                                    <span className="font-bold text-emerald-600">84% (84 kg / 100 kg)</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '84%' }} />
                                  </div>
                                </div>

                                <div>
                                  <div className="flex justify-between font-medium mb-0.5">
                                    <span>Fresh Malai Paneer</span>
                                    <span className="font-bold text-red-600 animate-pulse">15% (3 kg / 20 kg - LOW!)</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 rounded-full" style={{ width: '15%' }} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 6. REPORTS & ANALYTICS: Real 3D Studio Analytics Render */}
                        {feat.id === 'reports-analytics' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/business-insights-feathered.png"
                                alt="PapBill Business Insights Real-Time Dashboard"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            {/* Interactive Period Toggle Widget */}
                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                                <span>Owner Executive Summary:</span>
                                <div className="flex gap-1 bg-white p-0.5 rounded-lg border border-slate-200 text-[10px]">
                                  {(['today', 'week', 'month'] as const).map((period) => (
                                    <button
                                      key={period}
                                      onClick={() => setAnalyticsPeriod(period)}
                                      className={`px-2 py-0.5 rounded capitalize font-bold transition-colors cursor-pointer ${
                                        analyticsPeriod === period
                                          ? 'bg-[#17212D] text-white'
                                          : 'text-slate-500 hover:text-slate-900'
                                      }`}
                                    >
                                      {period}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                                  <span className="block text-sm font-black text-slate-900">
                                    {analyticsPeriod === 'today' ? '₹48,250' : analyticsPeriod === 'week' ? '₹3,18,500' : '₹12,85,400'}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase">Gross Sales</span>
                                </div>
                                <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                                  <span className="block text-sm font-black text-slate-900">
                                    {analyticsPeriod === 'today' ? '94' : analyticsPeriod === 'week' ? '612' : '2,490'}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase">Orders</span>
                                </div>
                                <div className="p-2 rounded-xl bg-white border border-slate-200/60">
                                  <span className="block text-sm font-black text-slate-900">
                                    {analyticsPeriod === 'today' ? '68%' : '72%'}
                                  </span>
                                  <span className="text-[10px] font-bold text-slate-400 uppercase">UPI Share</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 7. MULTI-BRANCH MANAGEMENT: Real 3D Studio Multi-Outlet Cloud Dashboard Render */}
                        {feat.id === 'multi-branch' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/multi-branch-feathered.png"
                                alt="PapBill Multi-Outlet Cloud Dashboard and Store Sync"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">Central</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Menu Catalog</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">Real-Time</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Store Sync</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">1-Click</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Stock Transfer</span>
                              </div>
                            </div>

                            <div className="p-3 bg-slate-900 text-white rounded-2xl space-y-2.5">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-bold flex items-center gap-1.5 text-orange-400">
                                  <Building2 className="w-4 h-4" />
                                  Central Chain Controller
                                </span>
                                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-emerald-400">
                                  3 OUTLETS SYNCED
                                </span>
                              </div>

                              <div className="space-y-1.5">
                                {[
                                  { id: 'flagship' as const, name: 'Indiranagar Flagship', rev: '₹1,42,800' },
                                  { id: 'mall' as const, name: 'Koramangala Mall Food Court', rev: '₹98,400' },
                                  { id: 'airport' as const, name: 'Airport Express Counter', rev: '₹76,150' }
                                ].map((branch) => (
                                  <button
                                    key={branch.id}
                                    onClick={() => setActiveBranch(branch.id)}
                                    className={`w-full p-2 rounded-xl text-left text-xs transition-all flex items-center justify-between cursor-pointer ${
                                      activeBranch === branch.id
                                        ? 'bg-[#FF571F] text-white shadow-sm font-bold'
                                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                                    }`}
                                  >
                                    <span>{branch.name}</span>
                                    <span className="font-mono font-black">{branch.rev}</span>
                                  </button>
                                ))}
                              </div>

                              <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                                <span>Total Chain Revenue:</span>
                                <span className="text-sm font-black text-white font-mono">₹3,17,350.00</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 8. THERMAL PRINTING & HARDWARE: Real 3D Studio 80mm Printer & WhatsApp Slip Render */}
                        {feat.id === 'thermal-printing' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/thermal-printing-feathered.png"
                                alt="PapBill 80mm Thermal Receipt Printer, POS Terminal and WhatsApp Digital Bill"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">&lt; 1 Sec</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Print Speed</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">80mm / 58mm</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Auto-Cutter</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">USB • BT • LAN</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Connectivity</span>
                              </div>
                            </div>

                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                              <div className="text-xs">
                                <div className="font-bold text-slate-800">80mm High-Speed Paper Cut</div>
                                <div className="text-slate-500 text-[11px]">ESC/POS Native Commands • Zero Driver Crashes</div>
                              </div>
                              <button
                                onClick={() => {
                                  setIsReceiptPrinted(true);
                                  setTimeout(() => setIsReceiptPrinted(false), 2500);
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-[#FF571F] text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                              >
                                <Printer className="w-3.5 h-3.5" />
                                <span>{isReceiptPrinted ? '✓ Printed' : 'Test Print 🖨️'}</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {/* 9. STAFF PERMISSIONS: Real 3D Studio POS Security Terminal Render */}
                        {feat.id === 'staff-permissions' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/staff-permissions-feathered.png"
                                alt="PapBill Staff Access Control PIN Security Terminal and Manager Alert"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">PIN</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Manager Void</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">100%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Audit Trail</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">Blind Drop</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Cash Balancing</span>
                              </div>
                            </div>

                            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70 space-y-2">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                <span>Role Security Privileges:</span>
                                <span className="text-[10px] font-mono text-slate-400">PIN-PROTECTED</span>
                              </div>

                              {/* Role Selector Tabs */}
                              <div className="flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none]">
                                {(['cashier', 'captain', 'chef', 'manager', 'owner'] as const).map((role) => (
                                  <button
                                    key={role}
                                    onClick={() => setSelectedRole(role)}
                                    className={`px-2 py-0.5 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
                                      selectedRole === role
                                        ? 'bg-[#17212D] text-white shadow-2xs'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                                    }`}
                                  >
                                    {role}
                                  </button>
                                ))}
                              </div>

                              {/* Permissions List for Selected Role */}
                              <div className="space-y-1 text-xs">
                                {[
                                  { label: 'Punch Orders & Bills', allowed: true },
                                  { label: 'Void / Cancel Settled Bill', allowed: selectedRole === 'manager' || selectedRole === 'owner' },
                                  { label: 'Apply Custom Discounts (>10%)', allowed: selectedRole === 'manager' || selectedRole === 'owner' },
                                  { label: 'View Real-Time Profit & Margins', allowed: selectedRole === 'owner' }
                                ].map((perm, pi) => (
                                  <div key={pi} className="p-1.5 rounded-lg bg-white border border-slate-200/60 flex items-center justify-between">
                                    <span className="text-slate-700 text-[11px] font-medium">{perm.label}</span>
                                    {perm.allowed ? (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full">
                                        <Unlock className="w-2.5 h-2.5" /> Allowed
                                      </span>
                                    ) : (
                                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-red-700 bg-red-50 px-1.5 py-0.2 rounded-full">
                                        <Lock className="w-2.5 h-2.5" /> PIN Required
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 10. OFFLINE-FIRST BILLING ENGINE: Real 3D Studio Offline Engine Terminal Render */}
                        {feat.id === 'offline-mode' && (
                          <div className="space-y-4">
                            <div className="relative w-full max-w-[500px] mx-auto">
                              <img
                                src="/images/offline-mode-feathered.png"
                                alt="PapBill Offline-First SQLite Terminal, Waiter Tablet and Local Printer"
                                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-slate-100">
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">SQLite</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Local Database</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">0 Downtime</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Guaranteed</span>
                              </div>
                              <div className="p-2 rounded-xl bg-slate-50">
                                <span className="block text-base font-black text-slate-900">Auto-Sync</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">Cloud Queue</span>
                              </div>
                            </div>

                            <div className="p-3 rounded-2xl border transition-all space-y-2 bg-white border-slate-200">
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-slate-800">Local SQLite Engine Test:</span>
                                <button
                                  onClick={() => setIsOfflineSimulated(!isOfflineSimulated)}
                                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                    isOfflineSimulated
                                      ? 'bg-red-500 text-white shadow-xs'
                                      : 'bg-emerald-500 text-white shadow-xs'
                                  }`}
                                >
                                  {isOfflineSimulated ? (
                                    <>
                                      <WifiOff className="w-3.5 h-3.5" />
                                      <span>Simulate: Offline</span>
                                    </>
                                  ) : (
                                    <>
                                      <Wifi className="w-3.5 h-3.5" />
                                      <span>Simulate: Online</span>
                                    </>
                                  )}
                                </button>
                              </div>

                              {isOfflineSimulated ? (
                                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-1">
                                  <div className="flex items-center gap-2 font-bold text-xs text-amber-900">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                                    <span>Internet Offline — PapBill Local Engine Active!</span>
                                  </div>
                                  <p className="text-[11px] text-amber-900/90 leading-relaxed">
                                    • Counter POS: <strong>Instant &lt; 50ms</strong> • Thermal Printing: <strong>Active via USB/BT</strong> • Queue: <strong>4 bills saved</strong>
                                  </p>
                                </div>
                              ) : (
                                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                                  <div className="flex items-center gap-2 font-bold text-xs text-emerald-900">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>Cloud Synchronized — All Outlets Up to Date</span>
                                  </div>
                                  <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                                    • Real-time cloud sync active • WhatsApp bills delivering automatically.
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                      </div>

                      {/* Bottom Footer Info Strip */}
                      <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Platform Support: Windows, Android, iPad & Web</span>
                        <span className="font-bold text-slate-700">99.9% Uptime SLA</span>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })
          )}

        </div>
      </section>

      {/* ========================================================
          4. INTERACTIVE FEATURE COMPARISON MATRIX
          ======================================================== */}
      <section className="py-16 bg-white border-y border-[#E5E9EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#17212D] tracking-tight">
              Compare Features Across Plan Tiers
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Everything you need to launch, scale, and manage multiple restaurant locations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E9EF] shadow-2xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E9EF] text-slate-700">
                <tr>
                  <th className="p-4 font-bold">Capabilities</th>
                  <th className="p-4 font-bold text-center">Starter Plan</th>
                  <th className="p-4 font-bold text-center text-[#FF571F] bg-orange-50/50">Professional (Most Popular)</th>
                  <th className="p-4 font-bold text-center">Enterprise Multi-Store</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E9EF] text-slate-600">
                {[
                  { feature: 'POS Touch Billing & Receipts', s: 'Included', p: 'Included', e: 'Included' },
                  { feature: 'Thermal Receipt Printing (USB/BT/LAN)', s: '1 Printer', p: 'Unlimited', e: 'Unlimited' },
                  { feature: 'WhatsApp Digital Bill Delivery', s: 'Included', p: 'Included', e: 'Custom Sender ID' },
                  { feature: 'Contactless Table QR Ordering', s: 'Add-on', p: 'Included', e: 'Included' },
                  { feature: 'Kitchen Order Tickets (KOT) & KDS', s: 'Print Only', p: 'Live Digital KDS', e: 'Station-Wise KDS' },
                  { feature: 'Visual Floor Plan & Seating Timers', s: 'Basic Grid', p: 'Interactive Multi-Zone', e: 'Interactive Multi-Zone' },
                  { feature: 'Recipe-Level Inventory Tracking', s: 'Basic Stock', p: 'Automated Depletion', e: 'Central Warehouse (GRN)' },
                  { feature: 'End-of-Day Z-Report to Owner WhatsApp', s: 'Included', p: 'Included', e: 'Automated Multi-Outlet' },
                  { feature: 'Offline-First Billing Engine', s: 'Included', p: 'Included', e: 'Included' },
                  { feature: 'Multi-Branch Central Menu & Pricing', s: '—', p: '—', e: 'Unlimited Branches' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-800">{row.feature}</td>
                    <td className="p-3.5 text-center">{row.s}</td>
                    <td className="p-3.5 text-center font-bold text-[#FF571F] bg-orange-50/20">{row.p}</td>
                    <td className="p-3.5 text-center font-bold text-slate-900">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF571F] hover:text-[#E04612] group"
            >
              <span>View full pricing and licensing details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          5. FREQUENTLY ASKED QUESTIONS ACCORDION
          ======================================================== */}
      <section className="py-16 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#17212D] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Everything you need to know about setting up and running PapBill in your restaurant.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#E5E9EF] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-black text-[#17212D]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180 text-[#FF571F]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#667085] leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          6. FULL INTERACTIVE POS SIMULATOR MODAL
          ======================================================== */}
      {isPosModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-700">
            
            {/* Modal Header Bar */}
            <div className="px-6 py-4 bg-[#17212D] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF571F] flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <h3 className="text-sm font-black tracking-tight">PapBill Interactive POS Billing Simulator</h3>
                  <p className="text-[11px] text-slate-400">Click dishes to add items, modify quantities, and simulate thermal bill printing live!</p>
                </div>
              </div>

              <button
                onClick={() => setIsPosModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Interactive POS Component */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#F6F8FB]">
              <InteractivePosShowcase />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Touch & Keyboard shortcuts enabled</span>
              <button
                onClick={() => setIsPosModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors cursor-pointer"
              >
                Close Simulator
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Standard Bottom Conversion CTA */}
      <BottomCta />

    </div>
  );
};
