export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'driver';
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  unit: 'kg' | 'caixa' | 'saco' | 'unidade';
  image: string;
}

export interface Stall {
  id: string;
  name: string;
  ownerId: string;
  location: string; // e.g., "Pavilhão A, Box 12"
  rating: number;
  image: string;
}

export interface StallProduct {
  id: string;
  stallId: string;
  productId: string;
  price: number;
  stock: number;
  quality: 'A' | 'B' | 'Extra';
  updatedAt: string;
}

export interface CartItem extends StallProduct {
  product: Product;
  stall: Stall;
  quantity: number;
}

export interface Order {
  id: string;
  buyerId: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: CartItem[];
  createdAt: string;
}
