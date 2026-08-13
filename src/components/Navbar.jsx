import { useEffect, useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Templates",
      href: "#templates",
    },
    {
      name: "How It Works",
      href: "#how-it-works",
    },
    {
      name: "About",
      href: "#about",
    },
  ];

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white border-b border-slate-200"
        }
      `}
    >

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        <div className="flex h-[72px] items-center justify-between">

          {/* ================= LOGO ================= */}

          <a
            href="#home"
            className="flex items-center gap-2.5"
          >

            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                bg-brand-primary
                text-white
              "
            >
              <Sparkles size={18} />
            </div>

            <div className="leading-none">

              <div className="text-[20px] font-extrabold tracking-tight text-brand-dark">
                Career<span className="text-brand-primary">AI</span>
              </div>

              <div className="mt-1 text-[8px] font-medium tracking-wide text-slate-400">
                AI CAREER PLATFORM
              </div>

            </div>

          </a>


          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-8 lg:flex">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="
                  text-[13px]
                  font-medium
                  text-slate-600
                  transition
                  hover:text-brand-primary
                "
              >
                {link.name}
              </a>

            ))}

          </nav>


          {/* ================= ACTIONS ================= */}

          <div className="hidden items-center gap-5 md:flex">

            <a
              href="#login"
              className="
                text-[14px]
                font-semibold
                text-slate-600
                transition
                hover:text-brand-primary
              "
            >
              Login
            </a>

            <a
              href="#get-started"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-brand-primary
                px-5
                py-2.5
                text-[13px]
                font-semibold
                text-white
                shadow-sm
                shadow-blue-200
                transition
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >
              Create Resume

              <ArrowRight size={15} />

            </a>

          </div>


          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="
              rounded-lg
              p-2
              text-slate-600
              hover:bg-slate-100
              md:hidden
            "
            aria-label="Toggle navigation"
          >

            {isOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}

          </button>

        </div>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          overflow-hidden
          border-t
          border-slate-200
          bg-white
          transition-all
          duration-300
          md:hidden
          ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >

        <div className="space-y-1 px-5 py-5">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                block
                rounded-lg
                px-4
                py-3
                text-sm
                font-medium
                text-slate-600
                hover:bg-slate-50
                hover:text-brand-primary
              "
            >
              {link.name}
            </a>

          ))}

          <div className="my-3 h-px bg-slate-200" />

          <div className="grid grid-cols-2 gap-3">

            <a
              href="#login"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                px-4
                py-2.5
                text-sm
                font-semibold
                text-slate-600
              "
            >
              Login
            </a>

            <a
              href="#get-started"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-brand-primary
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
              "
            >
              Create Resume
              <ArrowRight size={14} />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}