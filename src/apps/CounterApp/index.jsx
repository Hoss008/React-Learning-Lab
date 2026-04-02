import { useState } from 'react'
import './styles.css'

export default function CounterApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h1 className="counter-title">Counter App</h1>
      <p className="counter-hint">Concepts: <code>useState</code>, event handlers</p>

      <div className="counter-display">{count}</div>

      <div className="counter-controls">
        <button className="btn btn--danger" onClick={() => setCount(c => c - 1)}>− Decrement</button>
        <button className="btn btn--ghost" onClick={() => setCount(0)}>Reset</button>
        <button className="btn btn--success" onClick={() => setCount(c => c + 1)}>+ Increment</button>
      </div>
    </div>
  )
}
