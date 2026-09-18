import { Code2, Heart, ArrowUp, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { icon: MessageCircle, href: 'https://wa.me/254792843405', label: 'WhatsApp' },
  { icon: Github, href: 'https://github.com/kibetenock014', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kibetenock014', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kibetenock014@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-black/10 section-padding mx-auto max-w-7xl">
      <div className="py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg">
              Enock<span className="text-accent-400">.</span>
            </span>
          </button>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-ink-400 hover:text-accent-400 hover:scale-110 hover:border-accent-500/40 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-accent-400 transition-colors group"
          >
            <span className="font-medium">Back to top</span>
            <div className="w-9 h-9 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} Enock Kibet. All rights reserved.
          </p>
          <p className="text-sm text-ink-500 flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-accent-400 fill-accent-400" /> and clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
