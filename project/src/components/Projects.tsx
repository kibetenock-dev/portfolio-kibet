import { useState } from 'react';
import { ExternalLink, Star, Play } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import ProjectModal from '@/components/projects/ProjectModal';
import WeatherApp from '@/components/projects/WeatherApp';
import TodoApp from '@/components/projects/TodoApp';
import CalculatorApp from '@/components/projects/CalculatorApp';
import LandingPage from '@/components/projects/LandingPage';
import QuizApp from '@/components/projects/QuizApp';
import PortfolioPreview from '@/components/projects/PortfolioPreview';

const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A responsive portfolio site built with React and Tailwind CSS, featuring smooth animations, dark mode, and a contact form.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    featured: true,
    gradient: 'from-accent-500/20 to-cyan-500/20',
    component: PortfolioPreview,
  },
  {
    id: 'weather',
    title: 'Weather App',
    description:
      'A simple weather application that fetches live data from a public API and displays current conditions and a short forecast.',
    tags: ['JavaScript', 'API', 'HTML/CSS'],
    featured: false,
    gradient: 'from-cyan-500/20 to-accent-500/20',
    component: WeatherApp,
  },
  {
    id: 'todo',
    title: 'Todo List App',
    description:
      'A clean task manager with add, edit, delete, and filter functionality. Data persists in the browser using local storage.',
    tags: ['React', 'Local Storage', 'CSS'],
    featured: false,
    gradient: 'from-accent-500/20 to-cyan-500/20',
    component: TodoApp,
  },
  {
    id: 'calculator',
    title: 'Calculator App',
    description:
      'A simple calculator that handles basic arithmetic operations with keyboard support and a minimal, user-friendly interface.',
    tags: ['JavaScript', 'HTML/CSS'],
    featured: false,
    gradient: 'from-cyan-500/20 to-accent-500/20',
    component: CalculatorApp,
  },
  {
    id: 'landing',
    title: 'Landing Page',
    description:
      'A modern marketing landing page with a hero section, feature highlights, and a call-to-action — fully responsive and animated.',
    tags: ['React', 'Tailwind CSS'],
    featured: false,
    gradient: 'from-accent-500/20 to-cyan-500/20',
    component: LandingPage,
  },
  {
    id: 'quiz',
    title: 'Quiz App',
    description:
      'An interactive multiple-choice quiz that tracks the score, shows feedback on each answer, and displays a final result screen.',
    tags: ['React', 'TypeScript', 'CSS'],
    featured: true,
    gradient: 'from-cyan-500/20 to-accent-500/20',
    component: QuizApp,
  },
];

export default function Projects() {
  const { ref, isVisible } = useReveal();
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="projects" className="relative py-28 section-padding mx-auto max-w-7xl">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Things I've built
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-cyan-500 rounded-full" />
          </div>
          <p className="text-ink-400 max-w-md text-sm">
            A selection of projects that showcase my approach to building software —
            thoughtful design, clean code, and real-world impact. Click any project to try it live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`group relative glass rounded-2xl overflow-hidden hover:border-accent-500/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Gradient header */}
              <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-ink-900/80 backdrop-blur text-xs font-medium text-accent-300">
                    <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
                    Featured
                  </div>
                )}
                {/* Play badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-900/80 backdrop-blur text-sm font-medium text-accent-300">
                    <Play className="w-4 h-4 fill-accent-400 text-accent-400" />
                    Try it live
                  </div>
                </div>
                {/* Hover icons */}
                <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="w-9 h-9 rounded-lg bg-ink-900/80 backdrop-blur flex items-center justify-center text-ink-200 hover:text-accent-400 transition-colors"
                    aria-label="View source"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-ink-100 mb-2 group-hover:text-accent-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-ink-800/60 text-xs font-medium text-ink-300 border border-black/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project modal */}
      {activeProject && (
        <ProjectModal
          title={activeProject.title}
          onClose={() => setActiveProject(null)}
        >
          <activeProject.component />
        </ProjectModal>
      )}
    </section>
  );
}
