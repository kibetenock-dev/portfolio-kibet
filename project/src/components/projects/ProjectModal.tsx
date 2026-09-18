import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProjectModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function ProjectModal({ title, onClose, children }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-ink-900/90 backdrop-blur-xl border-b border-black/10">
          <h3 className="font-display font-semibold text-lg text-ink-100">{title}</h3>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-400 hover:text-ink-100 hover:bg-white/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
