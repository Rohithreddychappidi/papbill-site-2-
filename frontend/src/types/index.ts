export interface LeadSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: 'cafe' | 'qsr' | 'fine-dining' | 'cloud-kitchen' | 'multi-branch' | 'other';
  outletCount: string;
  interestedProducts: string[];
  timeline: 'immediate' | '1-month' | '3-months' | 'exploring';
  message?: string;
  privacyConsent: boolean;
  sourcePage?: string;
  createdAt?: string;
  status?: 'new' | 'contacted' | 'qualified' | 'converted';
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  description: string;
  isVeg: boolean;
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface HardwareItem {
  id: string;
  name: string;
  category: 'printers' | 'pos-devices' | 'accessories';
  tagline: string;
  description: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  connectivity: string[];
  status: 'Available' | 'Pre-Order' | 'Concept' | 'Coming Soon';
  price?: string;
  isPopular?: boolean;
}

export interface PricingPlan {
  id: 'starter' | 'business' | 'multi-branch';
  name: string;
  tagline: string;
  targetBusiness: string;
  monthlyPrice: number;
  yearlyPrice: number; // monthly equivalent when billed annually
  isPopular?: boolean;
  features: string[];
  limits: {
    outlets: string;
    users: string;
    devices: string;
    support: string;
  };
  ctaText: string;
  ctaAction: 'start' | 'sales';
}

export interface FeatureDetail {
  id: string;
  title: string;
  category: 'billing' | 'qr-ordering' | 'kitchen' | 'inventory' | 'analytics' | 'management';
  shortDesc: string;
  fullDesc: string;
  problemSolved: string;
  benefits: string[];
  icon: string;
  status: 'Available' | 'Planned';
  relatedFeatures?: string[];
}
