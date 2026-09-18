import { useEffect, useState } from 'react';
import { Delete } from 'lucide-react';

export default function CalculatorApp() {
  const [display, setDisplay] = useState('0');
  const [previous, setPrevious] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNew, setWaitingForNew] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForNew) {
      setDisplay(digit);
      setWaitingForNew(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForNew) {
      setDisplay('0.');
      setWaitingForNew(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPrevious(null);
    setOperator(null);
    setWaitingForNew(false);
  };

  const toggleSign = () => {
    setDisplay((prev) =>
      prev.startsWith('-') ? prev.slice(1) : prev === '0' ? prev : '-' + prev
    );
  };

  const percent = () => {
    setDisplay((prev) => String(parseFloat(prev) / 100));
  };

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b === 0 ? NaN : a / b;
      default: return b;
    }
  };

  const handleOperator = (nextOp: string) => {
    const current = parseFloat(display);
    if (previous !== null && operator && !waitingForNew) {
      const result = calculate(parseFloat(previous), current, operator);
      setDisplay(String(result));
      setPrevious(String(result));
    } else {
      setPrevious(display);
    }
    setOperator(nextOp);
    setWaitingForNew(true);
  };

  const equals = () => {
    if (operator === null || previous === null) return;
    const result = calculate(parseFloat(previous), parseFloat(display), operator);
    setDisplay(Number.isNaN(result) ? 'Error' : String(result));
    setPrevious(null);
    setOperator(null);
    setWaitingForNew(true);
  };

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key;
      if (key >= '0' && key <= '9') inputDigit(key);
      else if (key === '.') inputDecimal();
      else if (key === '+' || key === '-') handleOperator(key);
      else if (key === '*') handleOperator('*');
      else if (key === '/') { e.preventDefault(); handleOperator('/'); }
      else if (key === 'Enter' || key === '=') { e.preventDefault(); equals(); }
      else if (key === 'Backspace') {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      } else if (key === 'Escape') clear();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  const buttons = [
    { label: 'AC', action: clear, type: 'fn' },
    { label: '+/-', action: toggleSign, type: 'fn' },
    { label: '%', action: percent, type: 'fn' },
    { label: '/', action: () => handleOperator('/'), type: 'op' },
    { label: '7', action: () => inputDigit('7'), type: 'num' },
    { label: '8', action: () => inputDigit('8'), type: 'num' },
    { label: '9', action: () => inputDigit('9'), type: 'num' },
    { label: '*', action: () => handleOperator('*'), type: 'op' },
    { label: '4', action: () => inputDigit('4'), type: 'num' },
    { label: '5', action: () => inputDigit('5'), type: 'num' },
    { label: '6', action: () => inputDigit('6'), type: 'num' },
    { label: '-', action: () => handleOperator('-'), type: 'op' },
    { label: '1', action: () => inputDigit('1'), type: 'num' },
    { label: '2', action: () => inputDigit('2'), type: 'num' },
    { label: '3', action: () => inputDigit('3'), type: 'num' },
    { label: '+', action: () => handleOperator('+'), type: 'op' },
    { label: '0', action: () => inputDigit('0'), type: 'num' },
    { label: '.', action: inputDecimal, type: 'num' },
    { label: '=', action: equals, type: 'op' },
  ];

  const btnClass = (type: string) => {
    const base = 'h-14 rounded-xl font-medium text-lg transition-all hover:scale-105 active:scale-95';
    if (type === 'op') return `${base} bg-gradient-to-br from-accent-500 to-cyan-500 text-white`;
    if (type === 'fn') return `${base} bg-ink-700 text-ink-200`;
    return `${base} bg-ink-800 text-ink-100`;
  };

  return (
    <div className="max-w-xs mx-auto space-y-4">
      <p className="text-sm text-ink-400 text-center">
        Use the buttons or your keyboard. Esc clears, Backspace deletes a digit.
      </p>

      {/* Display */}
      <div className="rounded-2xl bg-ink-900/80 border border-black/10 p-6 text-right">
        {previous !== null && operator && (
          <div className="text-xs text-ink-500 mb-1">
            {previous} {operator}
          </div>
        )}
        <div className="font-display text-4xl font-bold text-ink-100 truncate">
          {display}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={btn.action}
            className={btnClass(btn.type)}
          >
            {btn.label === 'AC' ? <Delete className="w-5 h-5 mx-auto" /> : btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}
