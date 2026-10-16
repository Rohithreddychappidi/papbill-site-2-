export interface Testimonial {
  id: string;
  quote: string;
  restaurantName: string;
  city: string;
  avatar: string;
  cuisine: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'varahi',
    quote: 'PapBill has completely transformed our restaurant operations. The QR ordering is smooth and our customers love it.',
    restaurantName: 'Varahi Restaurant',
    city: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    cuisine: 'Coastal & South Indian Dining'
  },
  {
    id: 'spice-n-grill',
    quote: 'Easy to use, powerful features and great support. Our billing and inventory are now much more organized.',
    restaurantName: 'Spice N Grill',
    city: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    cuisine: 'North Indian & Barbecue'
  },
  {
    id: 'sri-krishna',
    quote: 'The setup was quick and the team was very helpful. Highly recommend PapBill for any restaurant looking to upgrade.',
    restaurantName: 'Hotel Sri Krishna',
    city: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    cuisine: 'Vegetarian Heritage Cuisine'
  }
];

export const TRUST_METRICS = [
  { value: '1,000+', label: 'Restaurants' },
  { value: '3M+', label: 'Bills Generated' },
  { value: '50+', label: 'Cities' },
  { value: '98%', label: 'Customer Satisfaction' }
];
