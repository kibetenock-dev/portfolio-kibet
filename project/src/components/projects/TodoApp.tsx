import { useEffect, useState } from 'react';
import { Plus, Trash2, Check, Pencil, ListTodo } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Filter = 'all' | 'active' | 'done';

const STORAGE_KEY = 'portfolio-todos';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {
        // ignore
      }
    } else {
      setTodos([
        { id: 1, text: 'Learn React basics', done: true },
        { id: 2, text: 'Build a todo app', done: false },
        { id: 3, text: 'Master TypeScript', done: false },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), done: false },
    ]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === editingId ? { ...t, text: editText.trim() } : t))
    );
    setEditingId(null);
    setEditText('');
  };

  const filtered = todos.filter((t) =>
    filter === 'all' ? true : filter === 'active' ? !t.done : t.done
  );

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-ink-300">
        <ListTodo className="w-5 h-5 text-accent-400" />
        <span className="text-sm">
          {remaining} task{remaining !== 1 ? 's' : ''} remaining
        </span>
      </div>

      {/* Add */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-ink-800/60 border border-black/10 text-ink-100 placeholder-ink-500 text-sm focus:outline-none focus:border-accent-500/40 transition-all"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-accent-500/30 transition-all flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {(['all', 'active', 'done'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
              filter === f
                ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                : 'bg-ink-800/60 text-ink-400 border border-black/10 hover:text-ink-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <div className="text-center py-8 text-sm text-ink-500">
            No tasks here. Add one above!
          </div>
        )}
        {filtered.map((todo) => (
          <div
            key={todo.id}
            className="group flex items-center gap-3 rounded-xl bg-ink-800/60 border border-black/10 px-4 py-3 hover:border-accent-500/20 transition-colors"
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`shrink-0 w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                todo.done
                  ? 'bg-accent-500 text-white'
                  : 'border-2 border-ink-500 hover:border-accent-400'
              }`}
            >
              {todo.done && <Check className="w-3 h-3" />}
            </button>

            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEdit();
                  if (e.key === 'Escape') setEditingId(null);
                }}
                onBlur={saveEdit}
                autoFocus
                className="flex-1 bg-transparent text-sm text-ink-100 focus:outline-none border-b border-accent-500/40"
              />
            ) : (
              <span
                className={`flex-1 text-sm ${
                  todo.done ? 'line-through text-ink-500' : 'text-ink-200'
                }`}
              >
                {todo.text}
              </span>
            )}

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => startEdit(todo)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-400 hover:text-accent-400 transition-colors"
                aria-label="Edit"
              >
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-ink-400 hover:text-red-400 transition-colors"
                aria-label="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
