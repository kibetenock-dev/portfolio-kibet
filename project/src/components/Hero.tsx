import { ArrowDown, Github, Linkedin, MessageCircle, Sparkles } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
  const typed = useTypewriter();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-700/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 section-padding mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-accent-400" />
          <span className="text-xs font-medium text-ink-300 tracking-wide">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Hi, I'm <span className="text-gradient-animated">Enock Kibet</span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center justify-center gap-1 mb-8 h-8">
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-ink-300">
            {typed}
          </span>
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-accent-400 animate-blink">
            |
          </span>
        </div>

        {/* Bio */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink-400 leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          I'm a software developer and computer scientist passionate about crafting
          elegant, performant solutions to complex problems. Studied at Kirinyaga
          University, always exploring the intersection of theory and practice.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <button
            onClick={() => scrollTo('#projects')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent-500/30 transition-all hover:scale-105 w-full sm:w-auto"
          >
            View my work
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-3.5 rounded-xl glass text-ink-100 font-semibold text-sm hover:border-accent-500/40 transition-all hover:scale-105 w-full sm:w-auto"
          >
            Contact me
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <a
            href="https://wa.me/254792843405"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-ink-300 hover:text-accent-400 hover:scale-110 hover:border-accent-500/40 transition-all"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/kibetenock014"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-ink-300 hover:text-accent-400 hover:scale-110 hover:border-accent-500/40 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kibetenock014"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl glass flex items-center justify-center text-ink-300 hover:text-accent-400 hover:scale-110 hover:border-accent-500/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400 hover:text-accent-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-ink-400 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-accent-400 animate-scroll-hint" />
        </div>
        <ArrowDown className="w-3 h-3" />
      </button>
    </section>
  );
}
