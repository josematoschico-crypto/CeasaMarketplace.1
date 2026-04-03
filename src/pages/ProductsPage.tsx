import { motion } from 'framer-motion';
import { Search, Filter, ShoppingCart, Plus, Minus, Info } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { PRODUCTS, STALL_PRODUCTS, STALLS } from '../data/mock';
import { CartItem } from '../types';

interface ProductsPageProps {
  addToCart: (item: CartItem) => void;
}

export default function ProductsPage({ addToCart }: ProductsPageProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todos' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-3xl font-bold">Produtos do Dia</h1>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Buscar tomate, banana..." 
              className="pl-10 bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <Button 
            key={cat} 
            variant={category === cat ? 'default' : 'outline'}
            size="sm"
            className={`rounded-full whitespace-nowrap transition-all border-none ${
              category === cat 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => {
          // Find all stalls selling this product
          const stallOffers = STALL_PRODUCTS.filter(sp => sp.productId === product.id);
          
          return (
            <Card key={product.id} className="overflow-hidden border-none shadow-sm bg-white">
              <div className="aspect-video relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <Badge className="absolute top-3 left-3 bg-green-100/90 text-green-700 backdrop-blur-sm border-none font-bold">
                  {product.category}
                </Badge>
              </div>
              <CardContent className="p-4 space-y-4">
                <div>
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-slate-500 text-sm">Unidade de venda: {product.unit}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Ofertas disponíveis</p>
                  {stallOffers.length > 0 ? (
                    stallOffers.map(offer => {
                      const stall = STALLS.find(s => s.id === offer.stallId)!;
                      return (
                        <div key={offer.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <div>
                            <p className="font-bold text-green-700">R$ {offer.price.toFixed(2)}</p>
                            <p className="text-xs text-slate-500">{stall.name}</p>
                          </div>
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 gap-2"
                            onClick={() => {
                              addToCart({
                                ...offer,
                                product,
                                stall,
                                quantity: 1
                              });
                              toast.success(`${product.name} adicionado ao carrinho!`);
                            }}
                          >
                            <Plus className="w-4 h-4" /> Adicionar
                          </Button>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex items-center gap-2 text-slate-400 py-2">
                      <Info className="w-4 h-4" />
                      <span className="text-sm italic">Sem ofertas no momento</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
