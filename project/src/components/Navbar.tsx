import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-2xl shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="section-padding mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Enock<span className="text-accent-400">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-ink-300 hover:text-accent-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-400 group-hover:w-6 transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleClick('#contact')}
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-accent-500/30 transition-all hover:scale-105"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg glass text-ink-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="glass rounded-2xl p-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-ink-300 hover:text-accent-400 hover:bg-black/5 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
