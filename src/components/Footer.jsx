import { Sparkles } from 'lucide-react';

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

const Instagram = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Resume Builder", href: "#templates" },
      { name: "ATS Analyzer", href: "#analyzer" },
      { name: "Job Matching", href: "#features" },
      { name: "LinkedIn Generator", href: "#features" },
      { name: "GitHub Portfolio", href: "#features" },
      { name: "Cover Letter", href: "#features" }
    ],
    resources: [
      { name: "Templates", href: "#templates" },
      { name: "Resume Examples", href: "#templates" },
      { name: "Career Guide", href: "#guide" },
      { name: "Help Center", href: "#help" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" }
    ]
  };

  return (
    <footer className="bg-brand-dark text-slate-400 pt-16 pb-12 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 pb-12 border-b border-slate-850 text-left">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="bg-brand-primary text-white p-1.5 rounded-lg">
                <Sparkles size={16} />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Career<span className="text-brand-primary">AI</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              AI-powered career tools for students, professionals and job seekers. Optimize your portfolio, pass ATS checks, and get hired faster.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Product Links Column */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Product</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links Column */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links Column */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500 gap-4">
          <span>© 2026 CareerAI. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <a href="#terms" className="hover:underline">Terms of Service</a>
            <a href="#cookies" className="hover:underline">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
