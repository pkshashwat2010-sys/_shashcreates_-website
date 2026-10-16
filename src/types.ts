export type TabType = 'home' | 'services' | 'ai-ads' | 'pricing' | 'work';

export interface ServiceItem {
  id: string;
  title: string;
  priceTag: string;
  description: string;
  icon: string;
  badgeColor?: string;
  category?: string;
}

export interface WebsitePackage {
  id: string;
  name: string;
  targetAudience: string;
  price: number;
  setupBreakdown?: {
    creation: number;
    publishing: number;
  };
  badge?: string;
  badgeType?: 'essential' | 'popular' | 'scale';
  features: string[];
  image: string;
  imageAlt: string;
  tagline: string;
  revisions: string;
  maxPages: string;
  itemShowcase: string;
  filterSearch: boolean;
  googleMaps: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'website' | 'ai-ad' | 'qr-menu' | 'reel';
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  description: string;
  image: string;
  imageAlt: string;
  specs?: string;
  demoType: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel';
}

export interface MaintenancePlan {
  id: string;
  title: string;
  price: number;
  period: string;
  description: string;
  highlighted?: boolean;
}

export interface InquiryFormData {
  service: string;
  businessName: string;
  phone: string;
  offerDetails: string;
  businessType?: string;
}
