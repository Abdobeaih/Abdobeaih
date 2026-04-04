import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const CART_ITEMS = [
  { id: 1, name: 'Vortex Keyboard v4', price: 249, category: 'Keyboards', quantity: 1 },
  { id: 2, name: 'Nova Mouse Pro', price: 129, category: 'Mice', quantity: 2 },
];

export const Cart: React.FC = () => {
  const subtotal = CART_ITEMS.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="pt-40 pb-20 container mx-auto px-6 max-w-6xl">
      <div className="flex items-center gap-4 mb-16">
         <Button variant="ghost" className="p-0 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} />
         </Button>
         <h1 className="text-5xl font-display font-bold">Your Bag</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Items List */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           <AnimatePresence>
             {CART_ITEMS.map((item, index) => (
               <motion.div
                 key={item.id}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
               >
                 <Card className="p-6 border-white/5 flex gap-8 group">
                    <div className="w-24 h-24 glass rounded-2xl flex items-center justify-center shrink-0">
                       <div className="w-12 h-12 bg-primary/20 blur-[30px] rounded-full"></div>
                       <ShoppingBag size={32} className="text-white/20 group-hover:text-primary transition-colors"/>
                    </div>

                    <div className="flex-1 flex flex-col md:flex-row justify-between">
                       <div className="mb-4 md:mb-0">
                          <h3 className="text-xl mb-1">{item.name}</h3>
                          <p className="text-white/30 text-sm font-bold uppercase tracking-widest">{item.category}</p>
                       </div>

                       <div className="flex items-center gap-8">
                          <div className="flex items-center glass rounded-full p-1 border-white/10">
                             <button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all"><Minus size={14} /></button>
                             <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                             <button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all"><Plus size={14} /></button>
                          </div>
                          <div className="text-xl font-display font-bold text-white w-24 text-right">
                             ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <button className="text-white/20 hover:text-red-500/70 transition-colors p-2">
                             <Trash2 size={18} />
                          </button>
                       </div>
                    </div>
                 </Card>
               </motion.div>
             ))}
           </AnimatePresence>
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-4">
           <Card className="p-8 border-none bg-gradient-to-br from-white/[0.04] to-transparent sticky top-32">
              <h2 className="text-2xl mb-8">Summary</h2>

              <div className="space-y-6 mb-8 text-white/50 text-sm">
                 <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold font-display">${subtotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-500 font-semibold tracking-widest uppercase text-xs">Calculated at next step</span>
                 </div>
                 <div className="flex justify-between">
                    <span>Sales Tax</span>
                    <span className="text-white font-semibold font-display">$0.00</span>
                 </div>
                 <div className="pt-6 border-t border-white/5 flex justify-between text-lg text-white font-bold">
                    <span>Order Total</span>
                    <span className="font-display">${subtotal.toFixed(2)}</span>
                 </div>
              </div>

              <Button className="w-full h-14 rounded-full group shadow-2xl shadow-primary/40">
                 Checkout Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform"/>
              </Button>

              <p className="text-center text-white/20 text-[10px] mt-6 leading-relaxed">
                 Fast, secure delivery. Secure payments with PCI-DSS compliance.
              </p>
           </Card>
        </div>
      </div>
    </div>
  );
};
