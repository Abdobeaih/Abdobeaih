import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Cpu, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const CATEGORIES = [
  { name: 'Keyboards', icon: Cpu, count: 12 },
  { name: 'Audio', icon: Zap, count: 8 },
  { name: 'Displays', icon: Sparkles, count: 5 },
  { name: 'Accessories', icon: Shield, count: 24 },
];

const TRENDING = [
  { id: 1, name: 'Vortex Keyboard v4', price: '$249', tag: 'Mechanical', imageColor: 'bg-primary/20' },
  { id: 2, name: 'Nova Mouse Pro', price: '$129', tag: '8k Polling', imageColor: 'bg-accent-purple/20' },
  { id: 3, name: 'Obsidian Monitor', price: '$799', tag: '240Hz OLED', imageColor: 'bg-white/10' },
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>

         <div className="container mx-auto px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="px-4 py-1.5 glass rounded-full text-xs font-bold tracking-widest text-primary uppercase mb-8"
            >
               The New Era of Hardware
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl leading-[0.9] gradient-text mb-8"
            >
               Architecting <br /> the Workspace
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/50 max-w-2xl leading-relaxed mb-12"
            >
               Minimalist design meets extreme performance. Precision-crafted peripherals for creators, developers, and digital architects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
               <Button className="group">
                  Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
               </Button>
               <Button variant="secondary">View Ecosystem</Button>
            </motion.div>
         </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col items-center gap-4 py-10 group">
                   <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <cat.icon size={28} />
                   </div>
                   <div className="text-center">
                      <h4 className="text-lg">{cat.name}</h4>
                      <p className="text-white/30 text-sm mt-1">{cat.count} Items</p>
                   </div>
                </Card>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-6">
         <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-4xl mb-4 leading-tight">Trending Now</h2>
               <p className="text-white/40">The most sought-after gear in the community.</p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary-light">Explore All</Button>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TRENDING.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-4">
                   <div className={`aspect-square rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center ${product.imageColor}`}>
                      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{product.tag}</div>
                      <div className="w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
                      <span className="text-white/20 font-display font-bold text-5xl italic tracking-tighter -rotate-12 select-none uppercase">{product.name.split(' ')[0]}</span>
                   </div>
                   <div className="px-2">
                      <h3 className="text-xl mb-1">{product.name}</h3>
                      <div className="flex justify-between items-center mt-4">
                         <span className="text-2xl font-display text-white">{product.price}</span>
                         <Button size="sm" variant="secondary" className="px-4 py-2 border-white/10 hover:border-primary/40">Add to Cart</Button>
                      </div>
                   </div>
                </Card>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Brand Storytelling */}
      <section className="container mx-auto px-6">
         <div className="glass-card p-12 md:p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="flex-1">
               <h2 className="text-5xl md:text-6xl mb-8 leading-[1.1]">The Engineering <br /> Philosophy.</h2>
               <p className="text-white/50 text-lg mb-10 leading-relaxed max-w-xl">
                 We believe that the tools you use every day should be as thoughtful as the work you create with them. Our hardware is built on the intersection of industrial minimalism and futuristic utility.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <div className="text-4xl font-display text-white mb-2">0.1ms</div>
                     <p className="text-white/30 text-sm">Input Latency</p>
                  </div>
                  <div>
                     <div className="text-4xl font-display text-white mb-2">99.9%</div>
                     <p className="text-white/30 text-sm">Recyclable Aluminum</p>
                  </div>
               </div>
            </div>
            <div className="flex-1 w-full aspect-video md:aspect-square glass rounded-3xl relative overflow-hidden flex items-center justify-center p-12">
               <div className="w-full h-full border border-white/5 rounded-2xl flex items-center justify-center relative">
                  <div className="w-32 h-32 bg-primary/40 blur-[80px] rounded-full animate-pulse-slow"></div>
                  <Cpu size={120} className="text-white/10 absolute animate-bounce" style={{ animationDuration: '3s' }}/>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};
