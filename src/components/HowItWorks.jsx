import React from 'react';
import { User, Target, Sparkles, Send } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Build Your Profile",
      description: "Add your education, skills, projects, experience and achievements.",
      icon: User,
      bgColor: "bg-blue-50 text-brand-primary border-blue-100"
    },
    {
      number: "02",
      title: "Choose Your Goal",
      description: "Select your target job role or career path to focus the optimization.",
      icon: Target,
      bgColor: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      number: "03",
      title: "Let AI Optimize",
      description: "Improve your resume bullets, LinkedIn description, and portfolio assets.",
      icon: Sparkles,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
      number: "04",
      title: "Apply With Confidence",
      description: "Download your polished documents and launch your applications.",
      icon: Send,
      bgColor: "bg-amber-50 text-amber-655 border-amber-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50 border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            From Profile to Job-Ready in Minutes
          </h2>
          <p className="text-base text-brand-textSecondary">
            Our step-by-step assistant handles the heavy lifting so you can focus on interviewing.
          </p>
        </div>

        {/* Timeline representation */}
        
        {/* Desktop View: Horizontal Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          
          {/* Connecting line */}
          <div className="absolute top-[35px] left-[12%] right-[12%] h-[2px] bg-slate-200 border-dashed border-t -z-10"></div>
          
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center flex flex-col items-center group">
                
                {/* Circle Icon Badge */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 bg-white relative shadow-sm group-hover:scale-105 transition-transform duration-300 ${step.bgColor}`}>
                  <Icon size={24} />
                  {/* Step Number Badge */}
                  <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-brand-dark text-white text-[9px] font-black rounded-md tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-brand-dark mt-6 mb-2 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-sm text-brand-textSecondary leading-relaxed max-w-[220px]">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet View: Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-10 relative pl-6 border-l-2 border-dashed border-slate-200 ml-4 md:ml-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col sm:flex-row gap-4 items-start text-left group">
                
                {/* Timeline node */}
                <div className={`absolute -left-[43px] sm:-left-[43px] w-10 h-10 rounded-full flex items-center justify-center border bg-white shadow-sm ${step.bgColor}`}>
                  <Icon size={16} />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                      Step {step.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                    <h3 className="text-base font-extrabold text-brand-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-brand-textSecondary leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
