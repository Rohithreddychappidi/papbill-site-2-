import { FeatureDetail } from '../types';

export const FEATURES: FeatureDetail[] = [
  {
    id: 'pos-billing',
    title: 'POS Billing',
    category: 'billing',
    shortDesc: 'Fast and intuitive billing on tablet or desktop.',
    fullDesc: 'Generate error-free bills in under 5 seconds. Designed for peak restaurant rush hours with keyboard shortcuts, rapid barcode scan, instant item search, and seamless split-bill capabilities.',
    problemSolved: 'Eliminates checkout bottlenecks, billing errors, and customer wait times during peak dinner and weekend rush.',
    benefits: [
      'Split bills by seat or equal share in 1 click',
      'Apply custom discounts, coupon codes, and item notes',
      'Configurable GST, service charges, and cess',
      'Operate seamlessly across Android tablets, Windows PCs, and iPad',
      'Instant thermal receipt and WhatsApp digital bill delivery'
    ],
    icon: 'Receipt',
    status: 'Available',
    relatedFeatures: ['kitchen-order-tickets', 'table-management', 'thermal-printing']
  },
  {
    id: 'qr-ordering',
    title: 'QR Menu & Table Ordering',
    category: 'qr-ordering',
    shortDesc: 'One QR for full menu, orders, items placed & bill.',
    fullDesc: 'Empower guests to browse your rich digital menu, view high-res dish photos, select dietary filters, order directly, and request the check without waiting for busy waiters.',
    problemSolved: 'Solves staff shortages, reduces order-taking delays by up to 60%, and increases average order value through visual upselling.',
    benefits: [
      'Zero app download required — opens instantly in browser',
      'Real-time multi-guest table ordering sync',
      'Rich dish photography, dietary tags (Jain, Vegan, Gluten-free)',
      'Running bill transparency with real-time KOT status',
      'One-tap "Call Captain" and "Request Bill" actions'
    ],
    icon: 'QrCode',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'kitchen-order-tickets']
  },
  {
    id: 'table-management',
    title: 'Visual Table Management',
    category: 'management',
    shortDesc: 'Live floor plan, table status & real-time occupancy.',
    fullDesc: 'Visualize your entire restaurant floor plan with color-coded table states (Available, Seated, KOT Running, Billed, Vacant). Merge tables for large parties or transfer items across tables in seconds.',
    problemSolved: 'Stops double-seating, missed orders, and confusion between captain, cashier, and server.',
    benefits: [
      'Interactive drag-and-drop floor plan layout',
      'Color-coded timers indicating how long a table has been seated',
      'Merge, split, or shift tables without canceling active kitchen orders',
      'Section-based filtering (AC Dining, Rooftop, Lawn, Bar)'
    ],
    icon: 'LayoutGrid',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'qr-ordering']
  },
  {
    id: 'kitchen-order-tickets',
    title: 'Kitchen Order Tickets (KOT)',
    category: 'kitchen',
    shortDesc: 'Auto KOT printing and kitchen display system.',
    fullDesc: 'Instantly route orders from POS or table QR directly to kitchen printers or Kitchen Display Screens (KDS). Support station-wise routing (e.g. Tandoor, Chinese, Bar, Dessert).',
    problemSolved: 'Prevents lost handwritten paper slips, miscommunicated food allergies, and prep delays between front-of-house and kitchen.',
    benefits: [
      'Station-specific order routing to multiple thermal printers',
      'Clear special cooking instructions & allergen warnings',
      'KDS prep timer to monitor ticket fulfillment times',
      'Reprint or cancel KOT with mandatory manager authorization'
    ],
    icon: 'ChefHat',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'thermal-printing']
  },
  {
    id: 'inventory-management',
    title: 'Inventory & Stock Tracking',
    category: 'inventory',
    shortDesc: 'Track stock, get low stock alerts and manage purchases.',
    fullDesc: 'Track raw ingredient consumption automatically as dishes are billed using recipe-level food cost mapping. Receive automated low-stock warnings and manage vendor purchase orders.',
    problemSolved: 'Stops pilferage, cuts ingredient wastage, prevents unexpected 86ing of popular menu items, and protects food margins.',
    benefits: [
      'Recipe-level raw material depletion per dish sold',
      'Automated low-stock SMS and email notifications',
      'Vendor purchase orders and goods receipt tracking (GRN)',
      'Wastage logging and daily inventory reconciliation'
    ],
    icon: 'Package',
    status: 'Available',
    relatedFeatures: ['reports-analytics', 'pos-billing']
  },
  {
    id: 'reports-analytics',
    title: 'Reports & Analytics',
    category: 'analytics',
    shortDesc: 'Daily, monthly and yearly sales insights.',
    fullDesc: 'Get actionable business clarity with 40+ pre-built reports. Track top-selling dishes, peak dining hours, staff performance, revenue trends, and payment mode breakdowns from your phone.',
    problemSolved: 'Replaces messy end-of-day spreadsheet calculations with instant, verified financial summaries.',
    benefits: [
      'End-of-day day closing (Z-report) sent directly to owner WhatsApp',
      'Hourly sales heatmaps to optimize staff rostering',
      'Item-wise margin analysis and dead-stock identification',
      'GST-compliant summary reports ready for accountant export'
    ],
    icon: 'TrendingUp',
    status: 'Available',
    relatedFeatures: ['multi-branch', 'pos-billing']
  },
  {
    id: 'multi-branch',
    title: 'Multi-Branch Management',
    category: 'management',
    shortDesc: 'Manage multiple outlets from one centralized dashboard.',
    fullDesc: 'Control menu pricing, taxes, user permissions, and inventory centrally across 2 to 100+ outlets. Compare location performance side-by-side in real time.',
    problemSolved: 'Eliminates the logistical nightmare of managing separate menus, logins, and disparate reports across expanding restaurant chains.',
    benefits: [
      'Centralized menu catalog with outlet-level price overrides',
      'Aggregated chain-level sales versus outlet-by-outlet comparison',
      'Central kitchen & inter-branch raw material transfer tracking',
      'Global user roles and security policies'
    ],
    icon: 'Building2',
    status: 'Available',
    relatedFeatures: ['reports-analytics', 'inventory-management']
  },
  {
    id: 'thermal-printing',
    title: 'Thermal Printing & Hardware',
    category: 'billing',
    shortDesc: 'Reliable 80mm & 58mm thermal receipt and KOT printing.',
    fullDesc: 'Seamless plug-and-play driver support for USB, Bluetooth, and LAN/Ethernet receipt printers. Built-in auto-cutter command and customizable receipt headers with your restaurant logo.',
    problemSolved: 'Stops printer driver crashes, missing print jobs, and laggy bill printing during peak hours.',
    benefits: [
      'Instant hardware compatibility with PapBill 80mm printers and Epson/TVS/Star standards',
      'ESC/POS native protocol commands for ultra-fast printing',
      'Customizable logo, GST number, WiFi details, and social QR codes on bill footer',
      'LAN printer auto-reconnect fallback'
    ],
    icon: 'Printer',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'kitchen-order-tickets']
  },
  {
    id: 'staff-permissions',
    title: 'Staff Access & Permissions',
    category: 'management',
    shortDesc: 'Role-based access control with comprehensive audit logs.',
    fullDesc: 'Assign granular roles (Cashier, Captain, Kitchen Chef, Store Manager, Owner). Protect sensitive operations like bill cancellations, discounts, and cash drawer opening with PIN authorization.',
    problemSolved: 'Prevents internal cash pilferage and unauthorized unauthorized bill edits.',
    benefits: [
      'Manager override PIN required for bill voiding or high discounts',
      'Detailed immutable audit trail of every system action',
      'Shift-wise cash drawer reconciliation & blind drop reports',
      'Quick staff PIN switching on shared POS terminals'
    ],
    icon: 'ShieldCheck',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'reports-analytics']
  },
  {
    id: 'offline-mode',
    title: 'Offline-First Billing Engine',
    category: 'billing',
    shortDesc: 'Never stop billing even when your internet disconnects.',
    fullDesc: 'Keep punching orders, taking cash payments, and printing thermal receipts without an active internet connection. All transactions automatically sync to the cloud the moment connectivity resumes.',
    problemSolved: 'Eliminates restaurant shutdown and furious customers when broadband or 4G drops during busy service.',
    benefits: [
      'Full local database storage for menus, pricing, and active orders',
      'Local thermal printing via USB/Bluetooth without cloud roundtrips',
      'Background automatic cloud sync with conflict resolution',
      'Zero downtime guarantee during internet fluctuations'
    ],
    icon: 'WifiOff',
    status: 'Available',
    relatedFeatures: ['pos-billing', 'thermal-printing']
  }
];
