import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ShoppingBag, Users, Settings, TrendingUp, DollarSign, Activity, ArrowUpRight, Search, Bell } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

const STATS = [
  { label: 'Total Revenue', value: '$124,592.00', change: '+12.5%', icon: DollarSign, color: 'text-green-500' },
  { label: 'Active Orders', value: '156', change: '+8.2%', icon: ShoppingBag, color: 'text-primary' },
  { label: 'Total Customers', value: '8,432', change: '+15.3%', icon: Users, color: 'text-accent-purple' },
  { label: 'Average Session', value: '4:32m', change: '-2.1%', icon: Activity, color: 'text-white' },
];

const RECENT_ORDERS = [
  { id: '#VX-1024', customer: 'Alex Rivers', status: 'Delivered', amount: '$249.00', date: '2 mins ago' },
  { id: '#VX-1023', customer: 'Sarah Chen', status: 'In Transit', amount: '$129.00', date: '15 mins ago' },
  { id: '#VX-1022', customer: 'Marcus Thorne', status: 'Processing', amount: '$799.00', date: '1 hr ago' },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="flex pt-20 h-[calc(100vh-80px)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-8 hidden lg:flex flex-col justify-between">
         <div className="flex flex-col gap-10">
            <div className="space-y-2">
               {[
                 { icon: LayoutDashboard, label: 'Overview', active: true },
                 { icon: ShoppingBag, label: 'Inventory' },
                 { icon: Users, label: 'Customers' },
                 { icon: TrendingUp, label: 'Sales' },
                 { icon: Activity, label: 'Reports' },
               ].map((item, i) => (
                 <button key={i} className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${item.active ? 'bg-primary/10 text-primary border border-primary/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                    <item.icon size={20} />
                    <span className="font-semibold text-sm">{item.label}</span>
                 </button>
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-4">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all">
               <Settings size={20} />
               <span className="font-semibold text-sm">Settings</span>
            </button>
            <div className="glass p-4 rounded-2xl">
               <div className="text-xs text-white/30 uppercase tracking-widest mb-3">System Health</div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary"></div>
               </div>
               <p className="text-[10px] text-primary mt-2 font-bold tracking-widest uppercase">Operational</p>
            </div>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto bg-white/[0.01]">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
               <h1 className="text-4xl mb-2">Nexus Analytics</h1>
               <p className="text-white/30 text-sm font-medium">Real-time performance metrics across your global stores.</p>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
               <div className="relative flex-1 md:w-64 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={16}/>
                  <input type="text" placeholder="Search data..." className="w-full glass rounded-xl py-2.5 pl-11 pr-4 outline-none focus:border-primary/50 text-sm transition-all"/>
               </div>
               <Button variant="ghost" className="p-2.5 glass border-white/5 hover:border-white/20 rounded-xl relative">
                  <Bell size={20} className="text-white/60"/>
                  <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
               </Button>
            </div>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 border-white/5 group hover:border-white/10">
                   <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-2xl glass flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                         <stat.icon size={24} />
                      </div>
                      <div className={`text-xs font-bold px-2 py-1 glass rounded-lg ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                         {stat.change}
                      </div>
                   </div>
                   <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                   <div className="text-3xl font-display font-bold text-white tracking-tighter">{stat.value}</div>
                </Card>
              </motion.div>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sales Chart Placeholder */}
            <div className="lg:col-span-8">
               <Card className="p-8 h-full border-white/5">
                  <div className="flex justify-between items-center mb-10">
                     <h3 className="text-xl">Revenue Forecast</h3>
                     <div className="flex gap-2">
                        {['7d', '30d', '90d'].map(t => (
                          <button key={t} className={`px-3 py-1 rounded-lg text-xs font-bold tracking-widest uppercase transition-all ${t === '30d' ? 'bg-primary text-white' : 'glass text-white/30 hover:text-white'}`}>{t}</button>
                        ))}
                     </div>
                  </div>
                  <div className="h-64 w-full bg-primary/[0.02] rounded-3xl border border-white/5 flex items-end p-8 gap-4 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                     {[40, 60, 45, 85, 75, 90, 65, 80, 55, 95, 70, 85].map((h, i) => (
                       <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 + 0.5, type: 'spring', stiffness: 50 }}
                        className="flex-1 bg-gradient-to-t from-primary to-primary-light rounded-t-lg relative group"
                       >
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                             ${(h * 12).toFixed(0)}
                          </div>
                       </motion.div>
                     ))}
                  </div>
               </Card>
            </div>

            {/* Recent Activity Table */}
            <div className="lg:col-span-4">
               <Card className="p-8 h-full border-none bg-gradient-to-br from-white/[0.03] to-transparent">
                  <div className="flex justify-between items-center mb-10">
                     <h3 className="text-xl">Recent Orders</h3>
                     <Button variant="ghost" className="p-0 text-primary text-xs font-bold tracking-widest uppercase">View All</Button>
                  </div>
                  <div className="space-y-6">
                     {RECENT_ORDERS.map((order, i) => (
                       <div key={i} className="flex justify-between items-center group cursor-pointer">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/30 group-hover:text-primary group-hover:border-primary/20 transition-all">
                                <ShoppingBag size={18} />
                             </div>
                             <div>
                                <h4 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">{order.customer}</h4>
                                <p className="text-white/20 text-[10px] uppercase font-bold tracking-widest mt-1">{order.id} • {order.date}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-sm font-bold font-display text-white">{order.amount}</div>
                             <div className="text-[10px] text-green-500 font-bold uppercase tracking-widest mt-1">{order.status}</div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-white/5">
                     <Button variant="outline" className="w-full text-xs font-bold tracking-widest uppercase py-4 rounded-2xl border-white/10 hover:border-primary group">
                        Export Report <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                     </Button>
                  </div>
               </Card>
            </div>
         </div>
      </main>
    </div>
  );
};
