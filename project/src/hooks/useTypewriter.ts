import { useEffect, useState } from 'react';

const phrases = [
  'Software Developer',
  'Computer Scientist',
  'Problem Solver',
  'Lifelong Learner',
];

export function useTypewriter() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const speed = isDeleting ? 50 : 100;
    const pause = isDeleting ? 400 : 1800;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return text;
}
