import { Code2, Mail, Github, ArrowDown, Sparkles } from 'lucide-react';

export default function PortfolioPreview() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-ink-400 text-center">
        A mini preview of a portfolio landing page — this is what a simple
        personal site could look like.
      </p>

      {/* Mini hero */}
      <div className="text-center py-10 rounded-2xl bg-gradient-to-br from-accent-500/10 to-cyan-500/10 border border-black/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent-500/20 rounded-full blur-[60px]" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-ink-300 mb-4">
            <Sparkles className="w-3 h-3 text-accent-400" />
            Available for work
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-display text-2xl font-bold text-ink-100 mb-2">
            Jane Developer
          </h3>
          <p className="text-sm text-ink-400 max-w-xs mx-auto mb-5">
            Frontend engineer crafting beautiful, accessible web experiences.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-accent-500/30 transition-all">
              View work
            </button>
            <button className="px-5 py-2 rounded-xl glass text-ink-200 text-sm font-medium hover:border-accent-500/40 transition-all">
              Contact
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-5">
            <a className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-300 hover:text-accent-400 transition-colors" href="#">
              <Github className="w-4 h-4" />
            </a>
            <a className="w-9 h-9 rounded-lg glass flex items-center justify-center text-ink-300 hover:text-accent-400 transition-colors" href="#">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mini about */}
      <div className="rounded-2xl bg-ink-800/40 border border-black/10 p-5">
        <h4 className="font-display font-semibold text-ink-100 mb-2">About</h4>
        <p className="text-sm text-ink-400 leading-relaxed">
          I'm a developer who loves clean design and clean code. I specialize in
          React, TypeScript, and turning ideas into polished products.
        </p>
      </div>

      {/* Mini projects */}
      <div>
        <h4 className="font-display font-semibold text-ink-100 mb-3">Projects</h4>
        <div className="grid grid-cols-2 gap-3">
          {['Todo App', 'Weather App', 'Quiz App', 'Calculator'].map((p) => (
            <div
              key={p}
              className="rounded-xl bg-ink-800/60 border border-black/10 p-4 hover:border-accent-500/20 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mb-2">
                <Code2 className="w-4 h-4 text-accent-400" />
              </div>
              <h5 className="text-sm font-medium text-ink-200">{p}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-1 text-xs text-ink-500">
        <ArrowDown className="w-3 h-3" />
        <span>Scroll for more in a real site</span>
      </div>
    </div>
  );
}
