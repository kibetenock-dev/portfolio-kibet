import { MessageCircle, Github, Linkedin, Mail, Send, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '0792843405',
    href: 'https://wa.me/254792843405',
    color: 'hover:text-green-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'kibetenock014',
    href: 'https://github.com/kibetenock014',
    color: 'hover:text-accent-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'kibetenock014',
    href: 'https://www.linkedin.com/in/kibetenock014',
    color: 'hover:text-cyan-400',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kibetenock014@gmail.com',
    href: 'mailto:kibetenock014@gmail.com',
    color: 'hover:text-accent-400',
  },
];

export default function Contact() {
  const { ref, isVisible } = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 section-padding mx-auto max-w-7xl">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
        <div className="mb-16 text-center">
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's build something together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-full mx-auto" />
          <p className="max-w-xl mx-auto text-ink-400 mt-6 text-sm">
            Have a project in mind, a question, or just want to connect? My inbox is
            always open — I'll get back to you as soon as I can.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: contact cards */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent-500/30 hover:translate-x-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon className={`w-5 h-5 text-ink-300 ${info.color} transition-colors`} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-ink-400 tracking-wide uppercase font-medium">
                    {info.label}
                  </div>
                  <div className="text-ink-100 font-medium truncate">{info.value}</div>
                </div>
                <Send className="w-4 h-4 text-ink-500 ml-auto group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            {/* Location card */}
            <div className="flex items-center gap-4 glass rounded-2xl p-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-ink-300" />
              </div>
              <div>
                <div className="text-xs text-ink-400 tracking-wide uppercase font-medium">
                  Based in
                </div>
                <div className="text-ink-100 font-medium">Kenya</div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-ink-400 mb-2 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-400 mb-2 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-400 mb-2 tracking-wide">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-400 mb-2 tracking-wide">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                className="w-full px-4 py-3 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 focus:ring-1 focus:ring-accent-500/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent-500/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <Send className="w-4 h-4" />
                  Message sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send message
                </>
              )}
            </button>
            {sent && (
              <p className="text-center text-sm text-accent-400 animate-fade-in">
                Thanks for reaching out — I'll get back to you soon!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
