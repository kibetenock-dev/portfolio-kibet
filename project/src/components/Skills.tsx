import { Code2, Database, Cloud, Cpu, Terminal, Layers } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const categories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    icon: Layers,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vite'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    skills: ['Node.js', 'PostgreSQL', 'Supabase', 'REST APIs', 'MongoDB', 'Prisma'],
  },
  {
    icon: Cloud,
    title: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Linux', 'CI/CD'],
  },
];

const bars = [
  { label: 'Problem Solving', level: 95 },
  { label: 'Frontend Development', level: 88 },
  { label: 'Backend Development', level: 85 },
  { label: 'Database Design', level: 82 },
  { label: 'System Architecture', level: 78 },
];

export default function Skills() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="relative py-28 section-padding mx-auto max-w-7xl">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
        <div className="mb-16">
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Skills & Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Tools of my trade
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: skill categories */}
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="glass rounded-2xl p-6 hover:border-accent-500/30 hover:-translate-y-1 transition-all duration-300 group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="font-semibold text-ink-100 mb-3">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-ink-800/60 text-xs font-medium text-ink-300 border border-black/10 hover:border-accent-500/30 hover:text-accent-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: proficiency bars */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-accent-400" />
              <h3 className="font-display font-semibold text-lg">Proficiency</h3>
            </div>
            <div className="space-y-5">
              {bars.map((bar, i) => (
                <div key={bar.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-ink-300 font-medium">{bar.label}</span>
                    <span className="text-sm text-accent-400 font-semibold">
                      {bar.level}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-ink-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500 transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${bar.level}%` : '0%',
                        transitionDelay: `${i * 120}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
