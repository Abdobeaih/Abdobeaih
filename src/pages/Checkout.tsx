import React from 'react';
import { CreditCard, CheckCircle, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';

export const Checkout: React.FC = () => {
  return (
    <div className="pt-40 pb-20 container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side: Contact & Shipping */}
        <div className="md:w-2/3 flex flex-col gap-10">
           <div className="flex flex-col gap-8">
              <h1 className="text-4xl font-display font-bold flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary text-sm font-bold">1</div>
                 Contact Details
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Input label="Email address" placeholder="Email@domain.com" type="email" />
                 <Input label="Phone number" placeholder="+1 (555) 000-0000" />
              </div>
           </div>

           <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-display font-bold flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary text-sm font-bold">2</div>
                 Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Input label="First Name" placeholder="First Name" />
                 <Input label="Last Name" placeholder="Last Name" />
                 <div className="col-span-1 md:col-span-2">
                    <Input label="Address" placeholder="Street Address" />
                 </div>
                 <Input label="City" placeholder="City" />
                 <Input label="Postal Code" placeholder="Postal Code" />
              </div>
           </div>

           <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-display font-bold flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary text-sm font-bold">3</div>
                 Payment Method
              </h2>
              <Card className="p-8 bg-primary/5 border-primary/20 flex items-center justify-between group">
                 <div className="flex items-center gap-6">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                       <CreditCard size={28} />
                    </div>
                    <div>
                       <h4 className="text-lg font-semibold">Stripe Checkout</h4>
                       <p className="text-white/30 text-sm italic uppercase tracking-wider mt-1">Encrypted & Secure</p>
                    </div>
                 </div>
                 <CheckCircle size={24} className="text-primary" />
              </Card>
           </div>
        </div>

        {/* Right Side: Order Summary Stick */}
        <div className="md:w-1/3">
           <Card className="p-8 border-none bg-white/[0.03] sticky top-32">
              <h3 className="text-2xl mb-8">Order Summary</h3>

              <div className="space-y-6 mb-12">
                 {[1, 2].map((i) => (
                   <div key={i} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 glass rounded-lg shrink-0"></div>
                         <span className="text-white/50">Vortex Keyboard v4 <span className="text-white font-bold text-xs ml-1 font-display">x1</span></span>
                      </div>
                      <span className="text-white font-bold font-display">$249.00</span>
                   </div>
                 ))}
              </div>

              <div className="space-y-4 mb-8 pt-8 border-t border-white/5 text-sm text-white/40">
                 <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold font-display">$498.00</span>
                 </div>
                 <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-500 font-semibold tracking-widest uppercase text-xs">Free</span>
                 </div>
                 <div className="flex justify-between pt-6 border-t border-white/5 text-lg font-bold text-white">
                    <span>Total</span>
                    <span className="font-display">$498.00</span>
                 </div>
              </div>

              <Button className="w-full h-14 rounded-full shadow-xl shadow-primary/30">
                 Pay Securely
              </Button>

              <div className="flex flex-col gap-4 mt-8">
                 <div className="flex items-center gap-3 text-white/30 text-[10px] tracking-widest uppercase">
                    <ShieldCheck size={14} className="text-primary"/>
                    Secure Payment Guarantee
                 </div>
                 <div className="flex items-center gap-3 text-white/30 text-[10px] tracking-widest uppercase">
                    <Truck size={14} className="text-primary"/>
                    Insured International Shipping
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};
