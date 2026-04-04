import React from 'react';
import { Twitter, Instagram, Github, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-24 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          <div className="text-3xl font-display font-bold text-primary tracking-tighter mb-6">
            VORTEX<span className="text-white">CORE</span>
          </div>
          <p className="text-white/40 mb-8 leading-relaxed">
            Revolutionizing digital interaction through precision-engineered hardware.
            Join the movement towards a more elegant workspace.
          </p>
          <div className="flex gap-4">
             {[Twitter, Instagram, Github].map((Icon, i) => (
               <a key={i} href="#" className="w-10 h-10 glass flex items-center justify-center rounded-xl hover:text-primary transition-all">
                 <Icon size={18} />
               </a>
             ))}
          </div>
        </div>

        <div>
           <h4 className="text-white mb-6">Shop</h4>
           <ul className="space-y-4 text-white/40">
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Keyboards <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Mice <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Monitors <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
             <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">Accessories <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all"/></a></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white mb-6">Explore</h4>
           <ul className="space-y-4 text-white/40">
             <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
             <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
           </ul>
        </div>

        <div>
           <h4 className="text-white mb-6">Newsletter</h4>
           <p className="text-white/40 mb-6">Get early access to drops and updates.</p>
           <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-white/5 border border-white/10 rounded-full px-5 py-3 flex-1 focus:outline-none focus:border-primary/50 text-sm transition-colors"/>
              <button className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-all">
                 <ArrowUpRight size={18}/>
              </button>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
         &copy; 2024 VORTEXCORE ARCHIVE. Designed for the Future.
      </div>
    </footer>
  );
};
