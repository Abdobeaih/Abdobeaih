import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const PRODUCTS = [
  { id: 1, name: 'Vortex v4 Mechanical', category: 'Keyboards', price: 249, rating: 4.9, color: 'bg-primary/20' },
  { id: 2, name: 'Nova Mouse Pro', category: 'Mice', price: 129, rating: 4.8, color: 'bg-accent-purple/20' },
  { id: 3, name: 'Obsidian 27" OLED', category: 'Displays', price: 799, rating: 5.0, color: 'bg-white/10' },
  { id: 4, name: 'Sonic Link Buds', category: 'Audio', price: 189, rating: 4.7, color: 'bg-primary/10' },
  { id: 5, name: 'Titan Desk Mat', category: 'Accessories', price: 59, rating: 4.9, color: 'bg-white/5' },
  { id: 6, name: 'Aura Light Bar', category: 'Accessories', price: 99, rating: 4.6, color: 'bg-accent-purple/10' },
];

export const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
           <h1 className="text-5xl mb-4">The Collection</h1>
           <p className="text-white/40 italic">Total {filteredProducts.length} high-fidelity products found.</p>
        </div>

        <div className="flex flex-wrap gap-3">
           {['All', 'Keyboards', 'Mice', 'Displays', 'Audio', 'Accessories'].map((cat) => (
             <button
               key={cat}
               onClick={() => setSelectedCategory(cat)}
               className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-white text-black' : 'glass text-white/50 hover:text-white'}`}
             >
               {cat}
             </button>
           ))}
        </div>
      </div>

      <div className="flex gap-4 mb-8">
         <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18}/>
            <input type="text" placeholder="Search for hardware..." className="w-full glass rounded-2xl py-3 pl-12 pr-4 outline-none focus:border-primary/50 transition-all"/>
         </div>
         <Button variant="secondary" className="px-6 border-white/10">
            <SlidersHorizontal size={18} />
            <span className="hidden md:inline">Filters</span>
         </Button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-0 overflow-hidden group">
                 <div className={`aspect-[4/5] relative flex items-center justify-center ${product.color} transition-all duration-700 group-hover:scale-105`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="w-48 h-48 bg-white/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors duration-700"></div>
                    <span className="text-white/10 font-display font-black text-7xl select-none group-hover:text-white/20 transition-colors">{product.name.split(' ')[0]}</span>

                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                       <div className="glass px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{product.category}</div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                       <div>
                          <h3 className="text-xl mb-1 text-white">{product.name}</h3>
                          <p className="text-white/40 text-sm">Rating {product.rating} / 5.0</p>
                       </div>
                       <div className="text-2xl font-display font-bold text-white">${product.price}</div>
                    </div>
                 </div>
                 <div className="p-6 flex gap-3">
                    <Button className="flex-1 rounded-2xl py-3">Quick Add</Button>
                    <Button variant="secondary" className="w-12 h-12 p-0 rounded-2xl border-white/10">
                       <ChevronDown size={20} className="-rotate-90" />
                    </Button>
                 </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
