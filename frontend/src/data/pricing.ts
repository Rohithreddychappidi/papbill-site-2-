import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Essential POS billing & digital menu for cafes, bakeries & quick counters.',
    targetBusiness: 'Quick Counters & Cafes',
    monthlyPrice: 299,
    yearlyPrice: 269,
    features: [
      'Easy Menu Adding & Category Setup',
      'QR Digital Menu (Scan to View Items)',
      'Real-Time Stock & Inventory Management',
      'Daily Expense & Cashflow Tracking',
      'Business Analytics & Daily Sales Reports',
      'Lightning-Fast Mobile POS Billing',
      'Instant WhatsApp & Thermal Receipts'
    ],
    limits: {
      outlets: '1 Outlet',
      users: 'Up to 2 Staff Logins',
      devices: '2 Active Devices',
      support: 'Standard Email & WhatsApp Support'
    },
    ctaText: 'Start 14-Day Free Trial',
    ctaAction: 'start'
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Complete dine-in automation with table management, waiter apps & auto-KOT.',
    targetBusiness: 'Dine-In Restaurants & QSRs',
    monthlyPrice: 379,
    yearlyPrice: 341,
    isPopular: true,
    features: [
      'Everything in Starter, plus:',
      'Interactive Table Management & Floor Layout',
      'Waiter & Captain Mobile App Access',
      'QR Menu with Table Ordering (Dine-in Order & Pay)',
      'Automatic Kitchen Order Ticket (KOT) Printing',
      'Recipe-Level Inventory & Auto Low-Stock Alerts',
      'Live Kitchen Display System (KDS) Screen'
    ],
    limits: {
      outlets: '1 Outlet',
      users: 'Unlimited Staff Logins',
      devices: 'Unlimited Tables & Waiter Devices',
      support: '24/7 Priority Phone & WhatsApp'
    },
    ctaText: 'Get Started Now',
    ctaAction: 'start'
  },
  {
    id: 'multi-branch',
    name: 'Enterprise',
    tagline: 'Full desktop power, multi-user role security & direct food delivery sync.',
    targetBusiness: 'Chains & Growing Brands',
    monthlyPrice: 549,
    yearlyPrice: 494,
    features: [
      'Everything in Business, plus:',
      'Full Desktop View Access (Windows, Mac & Web)',
      'Multiple Users Login with Custom Staff Roles & PINs',
      'Direct Swiggy & Zomato 2-Way Integration',
      'Multi-Branch & Central Kitchen Control',
      'Consolidated Chain P&L & Analytics',
      'Dedicated Account Manager & Fast Onboarding'
    ],
    limits: {
      outlets: 'Up to 5 Outlets included',
      users: 'Unlimited Staff & Role Hierarchy',
      devices: 'Unlimited Desktop & Mobile Terminals',
      support: 'Dedicated Technical Account Manager'
    },
    ctaText: 'Start Free Trial / Contact',
    ctaAction: 'start'
  }
];

export const PRICING_FAQS = [
  {
    question: 'Are there any hidden setup fees or charges?',
    answer: 'No. Our pricing is completely transparent. What you see is what you pay. Standard software onboarding, menu digitization, and staff training are included in all paid subscriptions.'
  },
  {
    question: 'Can I use my existing Windows PC or Android tablet?',
    answer: 'Yes! PapBill is cross-platform. It runs seamlessly on any modern Windows PC (Windows 10/11), Android tablet (version 8.0+), iPad, or Mac browser.'
  },
  {
    question: 'Do I need an active internet connection to bill customers?',
    answer: 'No. PapBill has built-in offline billing support. If your internet connection drops, you can continue taking orders, processing cash payments, and printing bills locally. All data automatically synchronizes as soon as the connection is restored.'
  },
  {
    question: 'Can I upgrade or switch plans later?',
    answer: 'Yes, you can upgrade, downgrade, or switch between monthly and annual billing cycles at any time from your account settings with prorated billing adjustments.'
  },
  {
    question: 'How do you handle hardware setup and printer integration?',
    answer: 'PapBill connects plug-and-play to most standard 80mm/58mm thermal printers (USB, LAN, and Bluetooth). If you order hardware through PapBill, devices arrive pre-configured and ready to plug in.'
  }
];
