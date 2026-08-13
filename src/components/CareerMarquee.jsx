import React from 'react';
import { Code, Database, Shield, Layout, Cloud, BarChart3, Briefcase, DollarSign, TrendingUp } from 'lucide-react';

export default function CareerMarquee() {
  const categories = [
    { name: 'Software Engineering', icon: Code },
    { name: 'Data Science', icon: Database },
    { name: 'Cybersecurity', icon: Shield },
    { name: 'UI/UX Design', icon: Layout },
    { name: 'Cloud Computing', icon: Cloud },
    { name: 'Business Analytics', icon: BarChart3 },
    { name: 'Product Management', icon: Briefcase },
    { name: 'Finance', icon: DollarSign },
    { name: 'Marketing', icon: TrendingUp }
  ];

  // Double the array to ensure perfect seamless looping in horizontal marquee
  const marqueeItems = [...categories, ...categories, ...categories];

  return (
    <div className="w-full bg-white border-y border-brand-border py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-textSecondary">
          Built for every career path
        </p>
      </div>

      {/* Marquee viewport */}
      <div className="marquee-container relative w-full flex items-center overflow-x-hidden">
        {/* Left and right fade gradients for premium feel */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Sliding contents */}
        <div className="marquee-content flex gap-8 whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="inline-flex items-center gap-2.5 bg-slate-50 border border-brand-border/60 hover:border-brand-primary/40 hover:bg-blue-50/20 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <div className="text-brand-primary bg-blue-50 p-1.5 rounded-md">
                  <Icon size={16} />
                </div>
                <span className="text-sm font-semibold text-brand-dark">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
