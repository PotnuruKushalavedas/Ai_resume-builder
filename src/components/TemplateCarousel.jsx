import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { templates } from '../data/templates';

export default function TemplateCarousel() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 270; // Width of a card (256px) + gap (24px)
      const visibleWidth = scrollRef.current.clientWidth;
      // Scroll by 1 card on mobile, or 2 cards on desktop
      const scrollAmount = visibleWidth < 640 ? cardWidth : cardWidth * 2;
      
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Helper to render the resume miniature preview based on template ID
  const renderResumeMiniature = (template) => {
    switch (template.id) {
      case 'entry-level':
        // Simple clean layout, left aligned
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col justify-between text-[6px] text-slate-800 leading-normal select-none">
            <div className="space-y-2">
              <div className="text-left border-b-[0.5px] border-slate-200 pb-1">
                <p className="font-bold text-[8px] leading-tight text-slate-800">{template.name}</p>
                <p className="text-brand-primary font-medium text-[5.5px]">{template.role}</p>
                <p className="text-slate-400 text-[4px] mt-0.5">{template.contact.email} • {template.contact.location}</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-slate-700 text-[6px] uppercase tracking-wide">Summary</p>
                <p className="text-slate-500 text-[5px] line-clamp-2">{template.summary}</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-slate-700 text-[6px] uppercase tracking-wide">Experience</p>
                {template.experience.map((exp, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="flex justify-between font-semibold text-slate-700">
                      <span>{exp.title}</span>
                      <span className="text-slate-400 font-normal">{exp.period.split(' - ')[0]}</span>
                    </div>
                    <p className="text-slate-400 text-[4px]">{exp.company}</p>
                    <p className="text-slate-500 text-[5px] line-clamp-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t-[0.5px] border-slate-100 pt-1 flex justify-between items-center">
              <span className="font-semibold text-slate-600">Education: {template.education[0].school.split(' in ')[0]}</span>
              <span className="text-slate-400 font-medium">{template.education[0].year}</span>
            </div>
          </div>
        );

      case 'classic':
        // Centered traditional resume
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col justify-between text-[6.2px] text-slate-800 leading-normal select-none">
            <div className="space-y-2">
              <div className="text-center border-b-[0.5px] border-slate-300 pb-1">
                <p className="font-bold text-[8.5px] text-slate-800 tracking-wide uppercase">{template.name}</p>
                <p className="text-slate-600 font-medium text-[5.5px] uppercase tracking-widest">{template.role}</p>
                <p className="text-slate-400 text-[4px] mt-0.5">{template.contact.email} | {template.contact.phone} | {template.contact.location}</p>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-slate-500 text-[5px] italic line-clamp-2">"{template.summary}"</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-bold text-slate-800 text-[5.5px] uppercase tracking-widest border-b-[0.25px] border-slate-300 pb-0.5 text-left">Experience</p>
                {template.experience.slice(0, 2).map((exp, i) => (
                  <div key={i} className="text-left space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-700">
                      <span>{exp.title} - {exp.company}</span>
                      <span className="text-slate-400 font-normal">{exp.period}</span>
                    </div>
                    <p className="text-slate-500 text-[5px] line-clamp-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-bold text-slate-800 text-[5.5px] uppercase tracking-widest border-b-[0.25px] border-slate-300 pb-0.5 text-left">Education</p>
              <div className="flex justify-between text-[5px] text-slate-500">
                <span>{template.education[0].degree} - {template.education[0].school}</span>
                <span>{template.education[0].year}</span>
              </div>
            </div>
          </div>
        );

      case 'modern':
        // Blue accents and top colored highlight
        return (
          <div className="w-full h-full bg-white flex flex-col justify-between text-[6px] text-slate-800 leading-normal select-none">
            <div className="h-1.5 w-full bg-brand-primary"></div>
            <div className="p-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-left border-l-2 border-brand-primary pl-2 py-0.5">
                  <p className="font-bold text-[8.5px] text-slate-900">{template.name}</p>
                  <p className="text-brand-primary font-bold text-[6px]">{template.role}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-500 text-[5px] line-clamp-2">{template.summary}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="font-bold text-brand-primary text-[5.5px] uppercase tracking-wider">Professional Path</p>
                  {template.experience.map((exp, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="flex justify-between font-semibold text-slate-800">
                        <span>{exp.title}</span>
                        <span className="text-brand-primary font-normal">{exp.period.split(' - ')[0]}</span>
                      </div>
                      <p className="text-slate-400 text-[4px]">{exp.company}</p>
                      <p className="text-slate-500 text-[5.2px] line-clamp-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-brand-primary text-[5.5px] uppercase tracking-wider">Top Competencies</p>
                <div className="flex flex-wrap gap-1">
                  {template.skills.slice(0, 4).map((skill, i) => (
                    <span key={i} className="bg-blue-50 text-brand-primary font-semibold px-1 rounded-sm text-[4.5px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'professional':
        // Sidebar layout
        return (
          <div className="w-full h-full bg-white flex text-[6px] text-slate-800 leading-normal select-none">
            {/* Left Sidebar */}
            <div className="w-[32%] bg-slate-50 border-r border-slate-200 p-2 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <p className="font-extrabold text-[8px] leading-tight text-slate-850">{template.name.split(' ')[0]}</p>
                  <p className="font-bold text-[8px] leading-tight text-brand-primary">{template.name.split(' ')[1]}</p>
                  <p className="text-slate-400 text-[4px] mt-1 break-all">{template.contact.email}</p>
                  <p className="text-slate-400 text-[4px]">{template.contact.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-slate-700 text-[5.5px] uppercase">Core Skills</p>
                  <div className="flex flex-col gap-0.5">
                    {template.skills.slice(0, 5).map((s, i) => (
                      <span key={i} className="text-slate-650 font-medium text-[4.8px] list-item list-inside">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-slate-700 text-[5px] uppercase">Education</p>
                <p className="text-slate-600 font-bold text-[4.5px] leading-tight">{template.education[0].school.split(' University')[0]}</p>
                <p className="text-slate-400 text-[4px]">{template.education[0].year}</p>
              </div>
            </div>
            {/* Right Main Panel */}
            <div className="flex-1 p-2.5 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="pb-1 border-b border-slate-100">
                  <p className="font-bold text-slate-700 text-[5.5px] uppercase">Executive Summary</p>
                  <p className="text-slate-550 text-[5px] leading-relaxed mt-0.5 line-clamp-3">{template.summary}</p>
                </div>
                <div className="space-y-1.5">
                  <p className="font-bold text-slate-700 text-[5.5px] uppercase">Employment History</p>
                  {template.experience.map((exp, i) => (
                    <div key={i} className="space-y-0.5">
                      <p className="font-bold text-slate-700 text-[5.5px]">{exp.title}</p>
                      <p className="text-slate-450 text-[4px]">{exp.company} | {exp.period}</p>
                      <p className="text-slate-550 text-[5px] line-clamp-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'executive':
        // Elegant minimal layout with amber accents
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col justify-between text-[6.2px] text-slate-800 leading-normal select-none">
            <div className="space-y-2.5">
              <div className="text-center">
                <p className="font-semibold text-[9px] text-amber-700 tracking-widest uppercase">{template.name}</p>
                <p className="text-slate-500 font-medium text-[5px] tracking-widest uppercase">{template.role}</p>
                <div className="w-12 h-[0.5px] bg-amber-600 mx-auto my-1"></div>
                <p className="text-slate-400 text-[3.8px]">{template.contact.email} | {template.contact.location}</p>
              </div>
              <div className="space-y-1 text-center px-1">
                <p className="text-slate-650 text-[4.8px] leading-relaxed line-clamp-2">{template.summary}</p>
              </div>
              <div className="space-y-1.5">
                <p className="font-semibold text-slate-800 text-[5px] tracking-wider uppercase text-left border-b-[0.25px] border-slate-200 pb-0.5">Leadership Milestones</p>
                {template.experience.map((exp, i) => (
                  <div key={i} className="text-left space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-700">
                      <span>{exp.title}</span>
                      <span className="text-slate-400 font-normal">{exp.period.split(' - ')[0]}</span>
                    </div>
                    <p className="text-amber-700 font-semibold text-[4px]">{exp.company}</p>
                    <p className="text-slate-550 text-[4.8px] line-clamp-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-[4.8px] text-slate-500 border-t-[0.25px] border-slate-200 pt-1">
              <span>{template.education[0].degree}</span>
              <span>{template.education[0].year}</span>
            </div>
          </div>
        );

      case 'prime-ats':
        // Plain text layout, strictly minimal, monospaced or clean sans
        return (
          <div className="w-full h-full bg-slate-50 p-2.5 flex flex-col justify-between text-[5.8px] text-slate-900 font-mono leading-normal select-none">
            <div className="space-y-1.5">
              <div>
                <p className="font-bold text-[7.5px]">{template.name.toUpperCase()}</p>
                <p className="font-semibold text-[5.5px]">{template.role.toUpperCase()}</p>
                <p className="text-[4px] text-slate-600 mt-0.5">{template.contact.email} | {template.contact.phone} | {template.contact.location}</p>
              </div>
              <div className="h-[0.25px] bg-slate-400"></div>
              <div className="space-y-0.5">
                <p className="font-bold uppercase text-[5.2px]">[SUMMARY]</p>
                <p className="text-slate-750 text-[4.8px] line-clamp-2">{template.summary}</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold uppercase text-[5.2px]">[EXPERIENCE]</p>
                {template.experience.map((exp, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="flex justify-between font-bold">
                      <span>* {exp.title} @ {exp.company.toUpperCase()}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-slate-700 text-[4.8px] line-clamp-1">- {exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="h-[0.25px] bg-slate-400"></div>
              <p className="font-bold text-[5px]">[SKILLS] {template.skills.slice(0, 6).join(' | ').toUpperCase()}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="templates" className="py-20 bg-slate-50 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-3">
              Choose a Resume Template That Fits You
            </h2>
            <p className="text-base text-brand-textSecondary">
              Professional, modern and ATS-friendly templates designed for every career stage.
            </p>
          </div>

          {/* Carousel Arrows Controls */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => handleScroll('left')}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-brand-border hover:border-slate-350 hover:bg-slate-50 text-brand-dark transition-all shadow-sm"
              aria-label="Previous template"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-brand-border hover:border-slate-350 hover:bg-slate-50 text-brand-dark transition-all shadow-sm"
              aria-label="Next template"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-6 px-1"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {templates.map((template) => (
            <div 
              key={template.id} 
              className="flex-shrink-0 w-[240px] sm:w-[260px] snap-start group relative bg-white border border-brand-border/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Template miniature preview container */}
              <div className="relative aspect-[3/4.2] bg-slate-100 p-2.5 flex items-center justify-center border-b border-brand-border/60">
                
                {/* Embedded miniature mockup */}
                <div className={`w-full h-full rounded-lg border shadow-sm overflow-hidden bg-white transition-transform duration-300 group-hover:scale-[1.01] ${template.colorTheme}`}>
                  {renderResumeMiniature(template)}
                </div>

                {/* Hover overlay with CTA button */}
                <div className="absolute inset-0 bg-brand-dark/45 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 backdrop-blur-[1px]">
                  <button 
                    onClick={() => alert(`Starting setup with template: ${template.type}`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-primary text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <FileText size={12} />
                    Use This Template
                  </button>
                </div>
              </div>

              {/* Template Information Card Footer */}
              <div className="p-4 text-left bg-white">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold text-brand-dark">{template.type}</h4>
                  <span className="text-[10px] font-semibold text-brand-primary bg-blue-50 px-1.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <p className="text-xs text-brand-textSecondary font-medium">{template.badge}</p>
              </div>

            </div>
          ))}
        </div>

        {/* View More Templates Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => alert("Mock Action: Loading additional premium templates...")}
            className="inline-flex items-center gap-1.5 px-6 py-3.5 border-2 border-brand-primary text-brand-primary bg-white hover:bg-brand-primary hover:text-white font-bold text-sm rounded-xl transition-all duration-200 shadow-sm shadow-blue-50/50"
          >
            View More Templates
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
