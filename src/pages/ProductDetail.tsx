import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    name: 'Vortex Keyboard v4 Mechanical',
    price: 249.00,
    rating: 4.9,
    reviews: 128,
    description: 'The pinnacle of mechanical engineering. Hand-crafted with an aircraft-grade aluminum chassis and our proprietary zero-latency optical switches.',
    features: [
      'Gasket mount architecture',
      'Programmable OLED screen',
      'Dual-mode wireless (2.4GHz / BT 5.0)',
      'Pre-lubed stabilizers'
    ],
    colors: ['#0052FF', '#8B5CF6', '#FFFFFF']
  };

  return (
    <div className="pt-40 pb-20 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Image Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square glass rounded-4xl relative overflow-hidden flex items-center justify-center p-20"
          >
             <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
             <div className="w-full h-full border border-white/5 rounded-3xl relative flex items-center justify-center">
                <span className="text-white/5 font-display font-black text-9xl -rotate-12 italic tracking-tighter uppercase select-none">VORTEX</span>
                <div className="absolute w-40 h-40 bg-white/10 blur-[60px] rounded-full"></div>
             </div>

             <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-primary uppercase">Best Seller</div>
             </div>
          </motion.div>

          <div className="grid grid-cols-4 gap-4">
             {[0, 1, 2, 3].map((i) => (
               <button
                 key={i}
                 onClick={() => setActiveImage(i)}
                 className={`aspect-square glass rounded-2xl flex items-center justify-center transition-all ${activeImage === i ? 'border-primary ring-2 ring-primary/20' : 'hover:border-white/20'}`}
               >
                  <div className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-primary/20' : 'bg-accent-purple/20'}`}></div>
               </button>
             ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
               {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill={s <= 4 ? 'currentColor' : 'none'}/>)}
               <span className="text-white/40 text-sm ml-2">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <h1 className="text-5xl mb-4">{product.name}</h1>
            <div className="text-4xl font-display text-white mb-6">${product.price.toFixed(2)}</div>
            <p className="text-white/50 leading-relaxed text-lg mb-8">{product.description}</p>

            <div className="flex flex-col gap-4">
               {product.features.map((f, i) => (
                 <div key={i} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">{f}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="space-y-6">
             <div className="flex items-center gap-6">
                <div className="flex items-center glass rounded-full p-1 h-14 border-white/10">
                   <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all active:scale-90"
                   >
                      <Minus size={18} />
                   </button>
                   <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                   <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all active:scale-90"
                   >
                      <Plus size={18} />
                   </button>
                </div>
                <Button className="flex-1 h-14 rounded-full text-lg shadow-xl shadow-primary/30">
                   Add to Cart <ShoppingCart size={20} className="ml-2"/>
                </Button>
                <Button variant="secondary" className="w-14 h-14 p-0 rounded-full border-white/10">
                   <Heart size={20} />
                </Button>
             </div>

             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                {[
                  { icon: Truck, label: 'Free Delivery' },
                  { icon: ShieldCheck, label: '2yr Warranty' },
                  { icon: RotateCcw, label: '30-Day Returns' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                     <item.icon size={20} className="text-white/40" />
                     <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-32">
         <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl">Customer Reviews</h2>
            <Button variant="ghost" className="text-primary">Write a Review</Button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((r) => (
              <Card key={r} className="p-10 border-white/5">
                 <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-center">
                       <div className="w-12 h-12 rounded-full glass flex items-center justify-center font-bold text-primary">JD</div>
                       <div>
                          <h4 className="font-semibold">Jonathan Doe</h4>
                          <p className="text-white/20 text-xs mt-1 italic uppercase tracking-wider">Verified Purchase</p>
                       </div>
                    </div>
                    <div className="flex text-primary">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor"/>)}
                    </div>
                 </div>
                 <p className="text-white/60 leading-relaxed italic">"The build quality is unlike anything I've used before. The optical switches are incredibly responsive and the aluminum chassis feels premium and solid on my desk. Highly recommended for professionals."</p>
              </Card>
            ))}
         </div>
      </section>
    </div>
  );
};
