export type GenderCategory = 'all' | 'boy' | 'girl';
export type AgeRange = 'all' | '3-6' | '7-12';
export type ProductCategory = 'all' | 'ao' | 'vay' | 'quan' | 'dobo' | 'aokhoac';

export interface Product {
  id: string;
  name: string;
  vietnameseName?: string;
  category: ProductCategory;
  gender: 'boy' | 'girl' | 'unisex';
  ageRange: '3-6' | '7-12' | 'both';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge?: string;
  description: string;
  material: string;
  details: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface OrderInfo {
  fullName: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  address: string;
  note: string;
  paymentMethod: 'cod' | 'vietqr';
}
