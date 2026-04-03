import { motion } from 'framer-motion';
import { ShoppingCart, Star, Clock, ChevronRight, TrendingUp, Leaf, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCTS, STALLS } from '../data/mock';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = activeCategory 
    ? PRODUCTS.filter(p => p.category === activeCategory)
    : PRODUCTS.slice(0, 8); // Show more by default if no category

  const categories = ['Frutas', 'Legumes', 'Verduras', 'Ovos', 'Grãos', 'Temperos'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
          alt="CEASA" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16 space-y-4">
          <Badge className="w-fit bg-green-500 hover:bg-green-600 border-none">Preços do Dia Atualizados</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            O Melhor do Campo <br /> <span className="text-green-400">Direto para Você</span>
          </h1>
          <p className="text-slate-200 max-w-md text-lg">
            Abasteça seu negócio ou sua casa com produtos frescos direto do CEASA. Economia e qualidade garantida.
          </p>
          <div className="flex gap-4">
            <Link to="/produtos">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">Comprar Agora</Button>
            </Link>
            <Link to="/barracas">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">Ver Barracas</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Leaf, title: '100% Fresco', desc: 'Colhido e entregue no mesmo dia.', color: 'bg-green-100 text-green-600' },
          { icon: TrendingUp, title: 'Preço de Atacado', desc: 'Economize comprando direto da fonte.', color: 'bg-blue-100 text-blue-600' },
          { icon: Truck, title: 'Entrega Rápida', desc: 'Logística própria para todo o estado.', color: 'bg-orange-100 text-orange-600' },
        ].map((f, i) => (
          <Card key={i} className="border-none shadow-sm bg-white">
            <CardContent className="p-6 flex items-start gap-4">
              <div className={`p-3 rounded-2xl ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Categories */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <Link to="/produtos" className="text-green-600 text-sm font-medium flex items-center gap-1">
            Ver todas <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          <Button 
            variant={activeCategory === null ? 'default' : 'outline'}
            className={`rounded-full px-6 whitespace-nowrap transition-all border-none ${
              activeCategory === null 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            Todos
          </Button>
          {categories.map((cat) => (
            <Button 
              key={cat} 
              variant={activeCategory === cat ? 'default' : 'outline'}
              className={`rounded-full px-6 whitespace-nowrap transition-all border-none ${
                activeCategory === cat 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold">
            {activeCategory ? `Produtos em ${activeCategory}` : 'Destaques do Dia'}
          </h2>
          <Link to="/produtos" className="text-green-600 text-sm font-medium flex items-center gap-1">
            Ver mais <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <Link key={p.id} to="/produtos">
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-100/90 text-green-700 backdrop-blur-sm border-none font-bold">
                    {p.category}
                  </Badge>
                </div>
                <CardContent className="p-3 space-y-1">
                  <h3 className="font-bold text-sm md:text-base line-clamp-1">{p.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-500">Unidade: {p.unit}</span>
                    <span className="text-green-600 font-bold">Ver Preços</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-400">
              Nenhum produto encontrado nesta categoria.
            </div>
          )}
        </div>
      </section>

      {/* Featured Stalls */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold">Melhores Barracas</h2>
          <Link to="/barracas" className="text-green-600 text-sm font-medium flex items-center gap-1">
            Ver todas <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STALLS.map((s) => (
            <Link key={s.id} to={`/barracas/${s.id}`}>
              <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
                <div className="h-32 relative">
                  <img 
                    src={s.image} 
                    alt={s.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <Badge className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 border-none flex gap-1 items-center">
                    <Star className="w-3 h-3 fill-current" /> {s.rating}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{s.location}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
