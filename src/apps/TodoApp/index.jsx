import { useState } from 'react'
import './styles.css'

const FILTERS = ['All', 'Active', 'Done']

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn useState', done: true },
    { id: 2, text: 'Build a Todo App', done: false },
    { id: 3, text: 'Master React Router', done: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('All')

  const addTodo = () => {
    if (!input.trim()) return
    setTodos(prev => [...prev, { id: Date.now(), text: input.trim(), done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const filtered = todos.filter(t => {
    if (filter === 'Active') return !t.done
    if (filter === 'Done') return t.done
    return true
  })

  return (
    <div className="todo">
      <h1 className="todo-title">Todo App</h1>
      <p className="todo-hint">Concepts: <code>useState</code>, lists, forms, filtering</p>

      <div className="todo-input-row">
        <input
          className="todo-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
        />
        <button className="todo-add-btn" onClick={addTodo}>Add</button>
      </div>

      <div className="todo-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >{f}</button>
        ))}
        <span className="todo-count">{todos.filter(t => !t.done).length} left</span>
      </div>

      <ul className="todo-list">
        {filtered.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.done ? 'done' : ''}`}>
            <button className="todo-check" onClick={() => toggleTodo(todo.id)}>
              {todo.done ? '✓' : ''}
            </button>
            <span className="todo-text">{todo.text}</span>
            <button className="todo-delete" onClick={() => deleteTodo(todo.id)}>×</button>
          </li>
        ))}
        {filtered.length === 0 && (
          <li className="todo-empty">No tasks here!</li>
        )}
      </ul>
    </div>
  )
}
