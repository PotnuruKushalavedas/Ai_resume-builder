import { FileEdit, Briefcase, FileText, BarChart, Cpu, Sparkles } from 'lucide-react';

const Github = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CareerPlatform() {
  const leftFeatures = [
    {
      title: "AI Resume Builder",
      description: "Create professional ATS-friendly resumes tailored dynamically to job listings.",
      icon: FileEdit,
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Job Matching",
      description: "Match your technical and soft skills with thousands of active relevant opportunities.",
      icon: Briefcase,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      title: "LinkedIn Optimizer",
      description: "Build a stronger LinkedIn presence with headlines and experience descriptions.",
      icon: Linkedin,
      color: "text-sky-600 bg-sky-50 border-sky-100"
    }
  ];

  const rightFeatures = [
    {
      title: "GitHub Portfolio",
      description: "Turn your public coding projects into rich, descriptive portfolio content.",
      icon: Github,
      color: "text-slate-700 bg-slate-100 border-slate-200"
    },
    {
      title: "Cover Letter Generator",
      description: "Create highly personalized cover letters highlighting details for each application.",
      icon: FileText,
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      title: "Career Insights",
      description: "Understand your industry strengths, salary metrics, and key technical skill gaps.",
      icon: BarChart,
      color: "text-purple-600 bg-purple-50 border-purple-100"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[700px] h-[700px] bg-blue-50/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-4">
            Everything You Need to Build Your Career
          </h2>
          <p className="text-base sm:text-lg text-brand-textSecondary">
            One intelligent platform for your entire professional identity.
          </p>
        </div>

        {/* Features Layout: Left Cards | Central Visual | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Column features */}
          <div className="space-y-8 flex flex-col justify-center order-2 lg:order-1">
            {leftFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title} 
                  className="group flex gap-4 p-5 rounded-2xl border border-brand-border/60 bg-slate-50/50 hover:bg-white hover:border-brand-primary/25 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border font-bold ${feat.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-brand-textSecondary leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Platform Engine Mockup Visual */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-blue-50 to-indigo-50 border border-brand-border rounded-full flex items-center justify-center shadow-inner glow-ai">
              
              {/* Outer Pulsing Ring */}
              <div className="absolute inset-2 border border-dashed border-blue-200 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute inset-8 border border-blue-100 rounded-full"></div>
              
              {/* Orbiting Nodes (Simulated Core connections) */}
              <div className="absolute top-[8%] left-[25%] bg-white border border-brand-border/80 shadow-sm p-1.5 rounded-lg text-brand-primary">
                <Sparkles size={14} className="animate-pulse" />
              </div>
              <div className="absolute bottom-[10%] right-[18%] bg-white border border-brand-border/80 shadow-sm p-1.5 rounded-lg text-emerald-500">
                <Briefcase size={14} />
              </div>
              <div className="absolute top-[50%] right-[4%] bg-white border border-brand-border/80 shadow-sm p-1.5 rounded-lg text-sky-500">
                <Linkedin size={14} />
              </div>

              {/* Central Core Brain */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full border border-brand-border shadow-md flex flex-col items-center justify-center gap-1.5 z-10 transition-transform duration-300 hover:scale-105">
                <div className="bg-brand-primary text-white p-3 rounded-2xl shadow-md shadow-blue-200">
                  <Cpu size={24} className="animate-pulse" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-dark">
                  CareerAI Core
                </span>
                <span className="text-[8px] font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded-full">
                  v2.0 Engine
                </span>
              </div>
            </div>
          </div>

          {/* Right Column features */}
          <div className="space-y-8 flex flex-col justify-center order-3">
            {rightFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={feat.title} 
                  className="group flex gap-4 p-5 rounded-2xl border border-brand-border/60 bg-slate-50/50 hover:bg-white hover:border-brand-primary/25 hover:shadow-md transition-all duration-300 text-left"
                >
                  <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border font-bold ${feat.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-brand-textSecondary leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
