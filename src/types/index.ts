export type MenuCategory = 'all' | 'lunch' | 'bakery' | 'beverages' | 'pizza_others';

export interface MenuItem {
  id: string;
  name: string;
  originalName?: string;
  category: 'lunch' | 'bakery' | 'beverages' | 'pizza_others';
  price: number;
  priceVariants?: { size: string; price: number }[];
  description: string;
  isVegetarian?: boolean;
  image?: string;
  tags?: string[];
  customizable?: boolean;
}

export interface CustomSandwich {
  bread: string;
  breadPrice: number;
  protein: string;
  proteinPrice: number;
  toppings: string[];
  toppingsPrice: number;
  sauces: string[];
  notes?: string;
  totalPrice: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  details?: string;
  image?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
