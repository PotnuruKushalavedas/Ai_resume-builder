import React from 'react';
import { ArrowRight, BarChart, CheckCircle2, AlertTriangle, Lightbulb, FileSearch } from 'lucide-react';

export default function ATSAnalyzer() {
  const matchedSkills = ["Python", "SQL", "Pandas", "Excel", "Machine Learning"];
  const missingSkills = ["Power BI", "Tableau"];

  return (
    <section id="analyzer" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center font-sans">
          
          {/* Left Column: Context copy */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
              <FileSearch size={13} />
              <span>Real-Time Scanning</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Know Your Resume Score<br />
              <span className="text-brand-primary">Before You Apply.</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-lg">
              See how well your resume matches a job description and discover what you can improve. Our algorithm scans keyword density, structural parsing, and role requirements in seconds.
            </p>

            <button 
              onClick={() => alert("Mock Analyzer: Please drag and drop your file into the dashboard simulator.")}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-200"
            >
              Analyze My Resume
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: High Fidelity ATS Dashboard Simulator */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
              
              {/* Dashboard Top bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-850 bg-slate-950/60">
                <div className="flex items-center gap-2.5">
                  <div className="bg-brand-primary/10 text-brand-primary p-2 rounded-lg">
                    <FileSearch size={16} />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">ATS Optimizer</span>
                    <span className="text-xs font-bold text-slate-200">Analysis Dashboard</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-success animate-pulse"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Scan</span>
                </div>
              </div>

              {/* Dashboard Grid Content */}
              <div className="p-6 space-y-6 text-left">
                
                {/* Target Role & Big Dial Block */}
                <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center bg-slate-950/40 p-4 border border-slate-800/60 rounded-xl">
                  <div className="text-left space-y-1">
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block">Target Role Match</span>
                    <span className="text-lg font-extrabold text-white">Data Analyst</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Scanned against Senior Data Analyst spec v3</span>
                  </div>
                  
                  {/* ATS Score Dial */}
                  <div className="flex items-center gap-4 bg-slate-900 border border-slate-850 p-2.5 rounded-lg w-full sm:w-auto justify-center sm:justify-start">
                    <div className="relative flex items-center justify-center">
                      <svg className="w-14 h-14">
                        <circle className="text-slate-800" strokeWidth="4" stroke="currentColor" fill="transparent" r="24" cx="28" cy="28" />
                        <circle className="text-brand-primary" strokeWidth="4.5" strokeDasharray="150" strokeDashoffset="19" strokeLinecap="round" stroke="currentColor" fill="transparent" r="24" cx="28" cy="28" />
                      </svg>
                      <span className="absolute text-[12px] font-extrabold text-white">87</span>
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Overall ATS Score</span>
                      <span className="text-[10px] font-bold text-brand-success">87 / 100 (Excellent)</span>
                    </div>
                  </div>
                </div>

                {/* Submetrics row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Job Match", value: "92%", color: "bg-emerald-500" },
                    { label: "Keyword Match", value: "91%", color: "bg-blue-500" },
                    { label: "Skill Match", value: "94%", color: "bg-indigo-500" }
                  ].map((metric) => (
                    <div key={metric.label} className="bg-slate-950/40 border border-slate-800/40 p-3 rounded-xl flex flex-col justify-between">
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mb-1">{metric.label}</span>
                      <span className="text-lg font-extrabold text-white">{metric.value}</span>
                      <div className="w-full bg-slate-800 h-[3px] rounded-full mt-2">
                        <div className={`h-[3px] rounded-full ${metric.color}`} style={{ width: metric.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills breakdown panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Matched skills */}
                  <div className="bg-slate-950/20 border border-slate-800/40 p-4 rounded-xl space-y-3">
                    <span className="text-[9px] text-brand-success font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <CheckCircle2 size={12} />
                      Matched Skills ({matchedSkills.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedSkills.map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-[9px] rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Missing skills */}
                  <div className="bg-slate-950/20 border border-slate-800/40 p-4 rounded-xl space-y-3">
                    <span className="text-[9px] text-rose-450 font-bold uppercase tracking-widest flex items-center gap-1.5 text-amber-500">
                      <AlertTriangle size={12} className="text-amber-500" />
                      Missing Skills ({missingSkills.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {missingSkills.map(skill => (
                        <span key={skill} className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold text-[9px] rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendation Banner */}
                <div className="flex gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1 bg-brand-primary/10 rounded-bl-xl text-brand-primary">
                    <Lightbulb size={12} className="animate-pulse" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] text-blue-400 font-bold uppercase tracking-wider block mb-1">AI Recommendation</span>
                    <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                      "Add <span className="text-white font-bold">Power BI</span> and <span className="text-white font-bold">Tableau</span> to strengthen your profile by matching the reporting requirements."
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
