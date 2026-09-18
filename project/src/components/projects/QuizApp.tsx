import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Home Tool Markup Language',
      'Hyperlink Text Mark Language',
    ],
    correct: 0,
  },
  {
    question: 'Which programming language is primarily used for web styling?',
    options: ['JavaScript', 'Python', 'CSS', 'Java'],
    correct: 2,
  },
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
    correct: 2,
  },
  {
    question: 'Which data structure uses FIFO (First In First Out)?',
    options: ['Stack', 'Queue', 'Tree', 'Hash Map'],
    correct: 1,
  },
  {
    question: 'What does "API" stand for?',
    options: [
      'Application Programming Interface',
      'Advanced Programming Integration',
      'Application Protocol Interface',
      'Automated Programming Interface',
    ],
    correct: 0,
  },
];

export default function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = questions[current];
  const progress = ((current + (answered ? 1 : 0)) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
    setTimeout(() => setShowResult(true), 800);
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
      setAnswered(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
    setFinished(false);
    setAnswered(false);
  };

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    const message =
      percentage === 100
        ? 'Perfect score! You\'re a pro!'
        : percentage >= 60
        ? 'Great job! You know your stuff.'
        : 'Keep learning — you\'ll get there!';

    return (
      <div className="text-center py-8 space-y-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500/20 to-cyan-500/20 flex items-center justify-center mx-auto">
          <Trophy className="w-10 h-10 text-accent-400" />
        </div>
        <div>
          <h4 className="font-display text-3xl font-bold text-ink-100 mb-2">
            {score} / {questions.length}
          </h4>
          <p className="text-sm text-ink-400">{message}</p>
          <p className="text-2xl font-display font-bold text-gradient mt-2">
            {percentage}%
          </p>
        </div>
        <button
          onClick={restart}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-ink-400 mb-2">
          <span>
            Question {current + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="h-1.5 rounded-full bg-ink-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accent-500 to-cyan-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div>
        <h4 className="font-display text-lg font-semibold text-ink-100 mb-4">
          {question.question}
        </h4>
        <div className="space-y-2">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = index === selected;
            let style = 'bg-ink-800/60 border-black/10 text-ink-200 hover:border-accent-500/30';

            if (answered) {
              if (isCorrect) {
                style = 'bg-accent-500/15 border-accent-500/40 text-accent-200';
              } else if (isSelected) {
                style = 'bg-red-500/15 border-red-500/40 text-red-200';
              } else {
                style = 'bg-ink-800/40 border-black/10 text-ink-500';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${style}`}
              >
                {option}
                {answered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-accent-400" />
                )}
                {answered && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Next button */}
      {showResult && (
        <button
          onClick={nextQuestion}
          className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all animate-fade-in"
        >
          {current + 1 < questions.length ? 'Next question' : 'See results'}
        </button>
      )}
    </div>
  );
}
