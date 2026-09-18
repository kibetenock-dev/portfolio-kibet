import { GraduationCap, Lightbulb, Target, BookOpen } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const stats = [
  { value: '4+', label: 'Years Coding' },
  { value: '20+', label: 'Projects Built' },
  { value: '∞', label: 'Curiosity' },
];

const traits = [
  {
    icon: GraduationCap,
    title: 'Computer Scientist',
    desc: 'Studied at Kirinyaga University — grounded in algorithms, data structures, and systems thinking.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Problem Solver',
    desc: 'I enjoy breaking down complex challenges into clean, maintainable, and efficient solutions.',
  },
  {
    icon: Target,
    title: 'Detail-Oriented',
    desc: 'Every line of code matters. I care about performance, readability, and user experience.',
  },
  {
    icon: BookOpen,
    title: 'Lifelong Learner',
    desc: 'Technology evolves fast — I stay curious, read deeply, and ship often.',
  },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="relative py-28 section-padding mx-auto max-w-7xl">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        {/* Section header */}
        <div className="mb-16">
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            The person behind the code
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: bio */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-ink-300 leading-relaxed">
              I'm <span className="text-accent-400 font-medium">Enock Kibet</span>, a
              software developer and computer scientist who loves building things that
              work beautifully. My journey started with curiosity about how computers
              think, and it grew into a passion for crafting software that solves real
              problems.
            </p>
            <p className="text-lg text-ink-400 leading-relaxed">
              I studied at <span className="text-ink-200 font-medium">Kirinyaga University</span>,
              where I developed a strong foundation in computer science — from algorithms
              and data structures to software engineering and system design. I believe
              great software comes from understanding both the machine and the people
              who use it.
            </p>
            <p className="text-lg text-ink-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, reading about
              the latest in computer science, or thinking about how to make things just a
              little bit better.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 text-center hover:border-accent-500/30 transition-colors"
                >
                  <div className="font-display text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-400 mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: trait cards */}
          <div className="lg:col-span-2 space-y-4">
            {traits.map((trait, i) => (
              <div
                key={trait.title}
                className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-accent-500/30 hover:translate-x-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center">
                  <trait.icon className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-100 mb-1">{trait.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{trait.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
