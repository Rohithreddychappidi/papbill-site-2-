import { FeatureItem } from './types';

export const SHOWCASE_FEATURES: FeatureItem[] = [
  {
    id: 'billing',
    num: '01',
    navTitle: 'Seamless Billing',
    eyebrow: 'FAST COUNTER & TABLE POS',
    headline: 'Seamless Billing',
    subtitle: 'Billing that keeps your business moving.',
    description: 'Create bills in seconds, manage orders, apply configured taxes and discounts, and generate thermal receipts from one intuitive POS workflow.',
    benefits: [
      'Rapid item search with keyboard shortcuts & category quick-picks',
      'Smart split bills, item modifiers & configured 5% GST calculation',
      '1-click 58mm/80mm thermal receipt printing & instant WhatsApp bill share'
    ],
    stats: [
      { value: '3 Sec', label: 'BILLING SPEED' },
      { value: '1-click', label: 'THERMAL & WHATSAPP' }
    ],
    ctaText: 'Explore Billing',
    ctaUrl: '/features#pos-billing',
    desktopLabel: 'POS BILLING TERMINAL',
    desktopSubtitle: 'Touch & Keyboard Optimized',
    mobileLabel: 'WAITER ORDER PAD',
    mobileSubtitle: 'Quick Table Order Takeaway',
    pills: {
      topLeft: 'Split Payments',
      topRight: 'Chef Preparation Notes',
      bottomLeft: 'Charges & Discounts',
      bottomRight: 'Superfast Billing'
    }
  },
  {
    id: 'tables',
    num: '02',
    navTitle: 'Table Control',
    eyebrow: 'LIVE FLOOR PLAN & OCCUPANCY',
    headline: 'Table Control',
    subtitle: 'Every table. Always in sync.',
    description: 'Manage restaurant tables, track active orders, and coordinate dine-in service from one visual floor plan with color-coded live seating.',
    benefits: [
      'Interactive floor layout across AC Dining, Main Hall & Rooftop sections',
      'Real-time color-coded table states: Available, Occupied, KOT Running, Billed',
      'Table-level running totals, guest count, and seating timers to boost turn times'
    ],
    stats: [
      { value: 'Live', label: 'FLOOR OCCUPANCY' },
      { value: '0 Wait', label: 'RUNNING TOTALS' }
    ],
    ctaText: 'Explore Table Management',
    ctaUrl: '/features#table-management',
    desktopLabel: 'FLOOR PLAN MANAGEMENT',
    desktopSubtitle: 'Multi-Section Live Grid',
    mobileLabel: 'CAPTAIN TABLE APP',
    mobileSubtitle: 'Floor Service Status',
    pills: {
      topLeft: 'Visual Floor Layout',
      topRight: 'Seating Timers',
      bottomLeft: 'Merge & Shift Tables',
      bottomRight: 'Live Running Totals'
    }
  },
  {
    id: 'service',
    num: '03',
    navTitle: 'QR Menu Service',
    eyebrow: 'CONTACTLESS TABLE-SIDE ORDERING',
    headline: 'QR Menu Service',
    subtitle: 'Scan, browse, and order directly from the table.',
    description: 'Empower guests to scan table QR codes, browse your visual digital menu with appetizing dish photos, customize orders, and submit directly to the kitchen without waiting.',
    benefits: [
      'Zero app download needed: Instant browser-based digital menu upon scanning',
      'Rich dish photography, dietary tags, modifiers & special cooking instructions',
      'Direct-to-kitchen order firing with live prep status and running bill'
    ],
    stats: [
      { value: '0 App', label: 'NO DOWNLOAD REQUIRED' },
      { value: 'Instant', label: 'DIRECT KITCHEN FIRING' }
    ],
    ctaText: 'Explore QR Ordering',
    ctaUrl: '/solutions/qr-ordering',
    desktopLabel: 'TABLE ORDER & STATUS SCREEN',
    desktopSubtitle: 'Live Customer Order Progression',
    mobileLabel: 'CUSTOMER QR MENU',
    mobileSubtitle: 'Self-Service Table App',
    pills: {
      topLeft: 'Table QR Ordering',
      topRight: 'Auto KOT Routing',
      bottomLeft: 'Station Prep Timers',
      bottomRight: 'Kitchen Display System'
    }
  },
  {
    id: 'stock',
    num: '04',
    navTitle: 'Stock Control',
    eyebrow: 'INVENTORY & RAW MATERIALS',
    headline: 'Stock Control',
    subtitle: 'Know what you have. Plan what comes next.',
    description: 'Track inventory, monitor raw ingredient consumption, and make purchasing decisions with automated low-stock warnings.',
    benefits: [
      'Recipe-level raw ingredient consumption (rice, paneer, oil) upon billing',
      'Automated low-stock warning thresholds before popular dishes run out',
      'Supplier purchase records, cost per unit tracking & wastage logging'
    ],
    stats: [
      { value: 'Auto', label: 'RECIPE CONSUMPTION' },
      { value: 'Alerts', label: 'LOW-STOCK WARNINGS' }
    ],
    ctaText: 'Explore Inventory',
    ctaUrl: '/features#inventory-management',
    desktopLabel: 'INVENTORY & INGREDIENT TRACKER',
    desktopSubtitle: 'Stock Levels & Reorder Points',
    mobileLabel: 'LOW-STOCK ALERTS',
    mobileSubtitle: 'Daily Receiving & Alerts',
    pills: {
      topLeft: 'Recipe Depletion',
      topRight: 'Low-Stock Alerts',
      bottomLeft: 'Supplier Purchase Orders',
      bottomRight: 'Automated Reconciliation'
    }
  },
  {
    id: 'insights',
    num: '05',
    navTitle: 'Business Insights',
    eyebrow: 'ANALYTICS & DAY-END CLOSING',
    headline: 'Business Insights',
    subtitle: 'Every rupee tracked. Every insight unlocked.',
    description: 'See exactly how much you earn every day. Track top-selling items, monitor expenses, and understand your real profit — all in one simple dashboard. Export reports anytime in one click.',
    benefits: [
      'Live revenue summaries: Daily sales, order volume & average ticket size',
      'Payment mode breakdown across UPI, Cash, Cards & online orders',
      'Top-performing dish leaderboard and automated day-end closing (Z-Report)'
    ],
    stats: [
      { value: 'Daily', label: 'PROFIT INSIGHTS' },
      { value: '1-click', label: 'EXPORT TO EXCEL' }
    ],
    ctaText: 'Explore Analytics',
    ctaUrl: '/features#reports-analytics',
    desktopLabel: 'REVENUE & SALES ANALYTICS',
    desktopSubtitle: 'Live Daily Metrics & Heatmaps',
    mobileLabel: 'DAILY CLOSING SUMMARY',
    mobileSubtitle: 'WhatsApp Owner Report',
    pills: {
      topLeft: 'Daily Profit',
      topRight: 'Top Selling Items',
      bottomLeft: 'Expense Tracking',
      bottomRight: 'Sales Insights'
    }
  },
  {
    id: 'kot',
    num: '06',
    navTitle: 'Kitchen Display (KOT)',
    eyebrow: 'REAL-TIME KITCHEN ORDER TICKETS',
    headline: 'Kitchen Order Tickets (KOT)',
    subtitle: 'Live kitchen orders routed instantly from all tables.',
    description: 'Connect counter POS, QR table orders, and online deliveries directly to your kitchen prep stations with live digital queues and automated thermal KOT printing.',
    benefits: [
      'Live prep queue: Pending (5) → Preparing (4) → Ready (2) → Served (1)',
      'Instant thermal KOT printing with preparation notes & modifier customizations',
      'Color-coded order priority across Dine-In, Takeaway, and Online delivery channels'
    ],
    stats: [
      { value: '0 Delay', label: 'DIRECT KITCHEN ROUTING' },
      { value: '1-click', label: 'THERMAL KOT PRINTING' }
    ],
    ctaText: 'Explore KOT System',
    ctaUrl: '/features#kitchen-display',
    desktopLabel: 'KITCHEN ORDER TICKETS (KOT)',
    desktopSubtitle: 'Live Prep Station Router',
    mobileLabel: 'KITCHEN DISPLAY (KDS)',
    mobileSubtitle: 'Digital Station Tablet'
  }
];
