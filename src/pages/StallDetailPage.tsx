import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, ArrowLeft, Plus, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { STALLS, STALL_PRODUCTS, PRODUCTS } from '../data/mock';
import { CartItem } from '../types';

interface StallDetailPageProps {
  addToCart: (item: CartItem) => void;
}

export default function StallDetailPage({ addToCart }: StallDetailPageProps) {
  const { id } = useParams();
  const stall = STALLS.find(s => s.id === id);

  if (!stall) return <div>Barraca não encontrada</div>;

  const stallOffers = STALL_PRODUCTS.filter(sp => sp.stallId === stall.id);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <Link to="/barracas">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Detalhes da Barraca</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card className="border-none shadow-sm overflow-hidden">
            <img 
              src={stall.image} 
              alt={stall.name} 
              className="w-full h-48 object-cover"
              referrerPolicy="no-referrer"
            />
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{stall.name}</h2>
                <div className="flex items-center gap-2 text-slate-500 mt-1">
                  <MapPin className="w-4 h-4" />
                  <span>{stall.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold text-lg">{stall.rating}</span>
                </div>
                <Separator orientation="vertical" className="h-8" />
                <div className="text-slate-500 text-sm">
                  <p className="font-bold text-slate-900">1.2k+</p>
                  <p>Vendas</p>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Vendedor Verificado CEASA</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 p-2">
                  <Clock className="w-4 h-4" />
                  <span>Aberto: 04:00 - 14:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Produtos Disponíveis</h3>
            <Badge variant="outline">{stallOffers.length} Itens</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stallOffers.map(offer => {
              const product = PRODUCTS.find(p => p.id === offer.productId)!;
              return (
                <Card key={offer.id} className="border-none shadow-sm overflow-hidden flex">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-24 h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <CardContent className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-xs text-slate-500">Qualidade: {offer.quality}</p>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <div>
                        <p className="text-green-700 font-bold">R$ {offer.price.toFixed(2)}</p>
                        <p className="text-[10px] text-slate-400">por {product.unit}</p>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700 h-8 w-8 p-0"
                        onClick={() => {
                          addToCart({
                            ...offer,
                            product,
                            stall,
                            quantity: 1
                          });
                          toast.success(`${product.name} adicionado!`);
                        }}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
