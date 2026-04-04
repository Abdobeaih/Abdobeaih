import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <a href="/" className="text-2xl font-display font-bold text-primary tracking-tighter">
            VORTEX<span className="text-white">CORE</span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/shop" className="hover:text-white transition-colors">Shop</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="p-2 md:flex hidden rounded-full">
            <User size={20} />
          </Button>
          <Button variant="secondary" className="px-4 py-2 text-sm relative">
            <ShoppingCart size={18} />
            <span className="hidden md:inline ml-1">Cart</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] flex items-center justify-center rounded-full">0</span>
          </Button>
          <Button variant="ghost" className="md:hidden p-2">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};
