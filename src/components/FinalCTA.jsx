import React from 'react';
import { ArrowRight, Sparkles, Files } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Wrapper */}
        <div className="relative bg-brand-dark rounded-3xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center shadow-xl border border-slate-800">
          
          {/* Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Decorative Float Sparkles */}
          <div className="absolute top-[20%] left-[10%] text-blue-400 opacity-60 animate-bounce" style={{ animationDuration: '4s' }}>
            <Sparkles size={24} />
          </div>
          <div className="absolute bottom-[25%] right-[12%] text-blue-300 opacity-50 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles size={18} />
          </div>
          <div className="absolute top-[12%] right-[22%] text-indigo-400 opacity-30 animate-spin" style={{ animationDuration: '10s' }}>
            <Sparkles size={14} />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl mx-auto relative z-10">
            
            {/* Sparkle icon */}
            <div className="inline-flex p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-brand-primary mb-6 justify-center">
              <Sparkles size={20} className="text-blue-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Your Next Opportunity<br/>Starts Here.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
              Create a stronger professional profile with AI-powered career tools.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto">
              <a
                href="#templates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-brand-primary text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shadow-blue-900/30"
              >
                Create My Resume
                <ArrowRight size={16} />
              </a>
              <a
                href="#templates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-350 text-sm font-bold rounded-xl hover:bg-slate-850 hover:text-white transition-colors"
              >
                <Files size={15} />
                Explore Templates
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
