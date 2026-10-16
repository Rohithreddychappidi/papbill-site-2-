export type FeatureId = 
  | 'billing' 
  | 'tables' 
  | 'service' 
  | 'stock' 
  | 'insights' 
  | 'growth'
  | 'kot';

export interface FeaturePills {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
}

export interface FeatureStat {
  value: string;
  label: string;
}

export interface FeatureItem {
  id: FeatureId;
  num: string;
  navTitle: string;
  eyebrow: string;
  headline: string;
  subtitle?: string;
  description: string;
  benefits: string[];
  stats?: FeatureStat[];
  ctaText: string;
  ctaUrl: string;
  desktopLabel: string;
  mobileLabel: string;
  desktopSubtitle: string;
  mobileSubtitle: string;
  pills?: FeaturePills;
  isUpcoming?: boolean;
}
