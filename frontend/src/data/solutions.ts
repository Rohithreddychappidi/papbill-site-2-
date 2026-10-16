export interface SolutionType {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  image: string;
  keyChallenges: string[];
  keyFeatures: string[];
  quote: {
    text: string;
    author: string;
    title: string;
  };
}

export const SOLUTIONS: SolutionType[] = [
  {
    id: 'cafes',
    name: 'Cafes & Bakeries',
    badge: 'High Turnaround & Visual Menus',
    headline: 'Lightning-fast counter checkout and cozy guest experiences.',
    description: 'Keep coffee lines moving with rapid POS touch-screen billing, combo modifiers (milk options, syrups), and instant thermal receipt printing.',
    image: '/images/solutions/cafes.jpg',
    keyChallenges: [
      'Morning rush queues causing customer drop-offs',
      'Complex coffee customization notes lost in kitchen prep',
      'Bakery perishability and daily inventory wastage'
    ],
    keyFeatures: [
      '3-tap rapid coffee & pastry ordering',
      'Automatic modifier prompts (Oat milk, extra shot, sugar free)',
      'Direct barcode scanning for packaged beans and merchandise',
      'Daily wastage logging and shelf-life monitoring'
    ],
    quote: {
      text: 'PapBill cut our morning rush order turnaround in half. Our baristas get clear modifier notes and billing takes seconds.',
      author: 'Rohit Shenoy',
      title: 'Founder, Artisanal Roastery'
    }
  },
  {
    id: 'qsr',
    name: 'Quick-Service Restaurants (QSR)',
    badge: 'Rapid Counter & Takeaway',
    headline: 'Designed for speed, volume, and seamless token management.',
    description: 'Process hundreds of counter orders per hour. Display order tokens on customer-facing screens and dispatch KOTs straight to burger, grill, or fry stations.',
    image: '/images/solutions/qsr.jpg',
    keyChallenges: [
      'Counter bottlenecks and incorrect verbal orders',
      'Order chaos between order punch and customer pickup counter',
      'Peak weekend order volume stress'
    ],
    keyFeatures: [
      'Instant digital token generation and queue display',
      'Direct integration with dual-screen customer checkout displays',
      'Split kitchen routing (Fryer vs Griddle vs Beverage)',
      'Unified online takeaway and walk-in counter reporting'
    ],
    quote: {
      text: 'During lunch hour rushes, PapBill never freezes. Token generation and fast thermal printing keep our line moving without pause.',
      author: 'Ananya Deshmukh',
      title: 'Operations Lead, Wok & Roll Express'
    }
  },
  {
    id: 'full-service',
    name: 'Full-Service & Fine Dining',
    badge: 'Table Management & Guest Delights',
    headline: 'Elevate hospitality with interactive table management and QR ordering.',
    description: 'Give captains handheld tablets to take orders tableside, split bills by seat, apply custom service charges, and let patrons browse rich photo menus on their own phones.',
    image: '/images/solutions/dine_in.jpg',
    keyChallenges: [
      'Waiters spending too much time running between kitchen and tables',
      'Disputes during bill splitting among large corporate dining groups',
      'Uncertainty about table occupancy and turn times'
    ],
    keyFeatures: [
      'Interactive visual floor map with color-coded table timers',
      'Multi-course KOT firing (Appetizers first, Main course on call)',
      'Seamless split billing by item or equal fraction',
      'Table QR stands for contactless menu browsing and re-orders'
    ],
    quote: {
      text: 'Our table turnaround improved by 22% with QR menu viewing and tableside ordering. Guests love the modern experience.',
      author: 'Chef Vikramaditya',
      title: 'Owner, Varahi Coastal Dining'
    }
  },
  {
    id: 'cloud-kitchens',
    name: 'Cloud Kitchens & Delivery Hubs',
    badge: 'High-Volume KOT & Dispatch',
    headline: 'Master multiple virtual brands from a single kitchen terminal.',
    description: 'Run 5+ virtual restaurant brands out of one kitchen. Unify order printing, track packaging supplies, and monitor kitchen prep time from a central hub.',
    image: '/images/solutions/cloud_kitchen.jpg',
    keyChallenges: [
      'Managing multiple brand menus on different devices',
      'Packaging stock running out unexpectedly',
      'Delivery driver dispatch confusion'
    ],
    keyFeatures: [
      'Single master screen managing multi-brand incoming orders',
      'Auto-printing packaging stickers and detailed KOT slips',
      'Raw material usage tracking across shared kitchen prep stations',
      'Consolidated brand-by-brand profitability reports'
    ],
    quote: {
      text: 'Operating 4 delivery brands out of one kitchen used to mean 4 different printers and devices. PapBill unified everything into one smooth flow.',
      author: 'Karthik Raja',
      title: 'Co-founder, CloudBites Network'
    }
  },
  {
    id: 'multi-branch',
    name: 'Multi-Outlet Chains & Franchises',
    badge: 'Centralized Control & Scaling',
    headline: 'Scale from 2 to 50+ locations with zero operational blind spots.',
    description: 'Centrally control your menu catalog, enforce standard recipe costing, audit staff transactions, and view comparative sales reports across all branches in real time.',
    image: '/images/solutions/multi_branch.jpg',
    keyChallenges: [
      'Price discrepancy across branches in different tax tiers',
      'Difficulty auditing cash theft and unauthorized discount write-offs',
      'Slow manual aggregation of end-of-day sales data'
    ],
    keyFeatures: [
      'Centralized master catalog with regional price overrides',
      'Real-time comparative outlet sales, sales-per-hour, and average order value',
      'Inter-branch stock transfer and centralized warehouse procurement',
      'Role-based permissions with corporate auditor access'
    ],
    quote: {
      text: 'As we expanded across 6 locations, PapBill gave us complete visibility into daily revenues, raw material stock, and cashier audits without visiting every branch.',
      author: 'Sanjay Reddy',
      title: 'Managing Director, Spice N Grill Group'
    }
  },
  {
    id: 'food-trucks',
    name: 'Food Trucks & Pop-Ups',
    badge: 'Portable & 100% Offline',
    headline: 'Compact mobile billing that runs anywhere without Wi-Fi.',
    description: 'Operate completely offline with an embedded local SQLite engine on your smartphone, paired with pocket Bluetooth thermal printers for rapid zero-cable billing at food truck parks, street stalls, and pop-up events.',
    image: '/images/solutions/food_truck.jpg',
    keyChallenges: [
      'Spotty mobile cellular connectivity at outdoor street venues',
      'Bulky power cords and heavy POS hardware setups',
      'Need for instant bill printing from a single mobile handset'
    ],
    keyFeatures: [
      '100% offline SQLite billing with zero network dependency',
      'Pocket Bluetooth 58mm/80mm thermal receipt printer pairing',
      'All-day battery operation on standard Android & iOS phones',
      'Automatic cloud sync the moment cellular network is restored'
    ],
    quote: {
      text: 'Our food truck does 200+ quick orders during Friday night food festivals. PapBill on our phone with a belt-clipped thermal printer never missed a single receipt even when mobile internet died.',
      author: 'Arjun Mehra',
      title: 'Founder, The Smokehouse Truck'
    }
  }
];
