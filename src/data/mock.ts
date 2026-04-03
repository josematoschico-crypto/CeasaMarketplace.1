import { Product, Stall, StallProduct } from "../types";

export const PRODUCTS: Product[] = [
  { id: 'p1', name: 'Tomate Italiano', category: 'Legumes', unit: 'caixa', image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&q=80&w=800' },
  { id: 'p2', name: 'Banana Nanica', category: 'Frutas', unit: 'caixa', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=800' },
  { id: 'p3', name: 'Alface Crespa', category: 'Verduras', unit: 'unidade', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lettuce_mix.jpg' },
  { id: 'p4', name: 'Batata Monalisa', category: 'Legumes', unit: 'saco', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800' },
  { id: 'p5', name: 'Cebola Nacional', category: 'Legumes', unit: 'saco', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&q=80&w=800' },
  { id: 'p6', name: 'Maçã Gala', category: 'Frutas', unit: 'caixa', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=800' },
  { id: 'p7', name: 'Ovos Brancos G', category: 'Ovos', unit: 'caixa', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chicken_eggs_in_tray.jpg' },
  { id: 'p8', name: 'Laranja Pera', category: 'Frutas', unit: 'saco', image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=800' },
  { id: 'p9', name: 'Feijão Carioca', category: 'Grãos', unit: 'saco', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sack_of_Black-Eyed_Beans_(96669853).jpg' },
  { id: 'p10', name: 'Arroz Agulhinha', category: 'Grãos', unit: 'saco', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800' },
  { id: 'p11', name: 'Pimenta do Reino', category: 'Temperos', unit: 'kg', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Market_Aix-en-Provence_20100828_Black_pepper.jpg' },
  { id: 'p12', name: 'Orégano Seco', category: 'Temperos', unit: 'kg', image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=800' },
];

export const STALLS: Stall[] = [
  { id: 's1', name: 'Hortifruti do Zé', ownerId: 'u2', location: 'Pavilhão A, Box 05', rating: 4.8, image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', name: 'Frutas Selecionadas Silva', ownerId: 'u3', location: 'Pavilhão B, Box 12', rating: 4.5, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800' },
  { id: 's3', name: 'Verduras Frescas Cia', ownerId: 'u4', location: 'Pavilhão C, Box 01', rating: 4.9, image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800' },
];

export const STALL_PRODUCTS: StallProduct[] = [
  { id: 'sp1', stallId: 's1', productId: 'p1', price: 45.00, stock: 50, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp2', stallId: 's1', productId: 'p4', price: 85.00, stock: 30, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp3', stallId: 's2', productId: 'p2', price: 35.00, stock: 100, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp4', stallId: 's2', productId: 'p6', price: 120.00, stock: 20, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp5', stallId: 's3', productId: 'p3', price: 2.50, stock: 200, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp6', stallId: 's3', productId: 'p5', price: 60.00, stock: 40, quality: 'B', updatedAt: new Date().toISOString() },
  { id: 'sp7', stallId: 's1', productId: 'p9', price: 180.00, stock: 15, quality: 'Extra', updatedAt: new Date().toISOString() },
  { id: 'sp8', stallId: 's2', productId: 'p11', price: 55.00, stock: 25, quality: 'A', updatedAt: new Date().toISOString() },
  { id: 'sp9', stallId: 's3', productId: 'p7', price: 15.00, stock: 300, quality: 'Extra', updatedAt: new Date().toISOString() },
];

export const MOCK_DRIVERS = [
  {
    name: 'Ricardo Primo',
    truck: 'Caminhão HR - ABC-1234',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    phone: '11999999999',
  },
  {
    name: 'João Pedro',
    truck: 'Fiorino Branca - XYZ-9876',
    photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200',
    phone: '11988888888',
  },
  {
    name: 'Carlos Mendes',
    truck: 'Van Renault - DEF-5678',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    phone: '11977777777',
  },
  {
    name: 'Marcos Souza',
    truck: 'Kombi Branca - GHI-9012',
    photo: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=200',
    phone: '11966666666',
  }
];

export const MOCK_ORDERS = [
  { 
    id: 'ORD-7821', 
    date: '01 Abr 2026', 
    total: 145.00, 
    status: 'shipped',
    driver: MOCK_DRIVERS[0],
    items: [
      { name: 'Tomate Cereja (Caixa)', stall: 'Barraca do Zé', quantity: '2 un', price: 45.00 },
      { name: 'Alface Crespa (Maço)', stall: 'Horta do Vale', quantity: '10 un', price: 30.00 },
      { name: 'Morango Especial', stall: 'Frutas Nobres', quantity: '5 un', price: 70.00 },
    ]
  },
  { 
    id: 'ORD-7590', 
    date: '28 Mar 2026', 
    total: 89.50, 
    status: 'delivered',
    driver: MOCK_DRIVERS[1],
    items: [
      { name: 'Batata Inglesa (Saco)', stall: 'Raízes do Campo', quantity: '1 un', price: 89.50 },
    ]
  },
];
