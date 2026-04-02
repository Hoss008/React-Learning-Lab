import { useState } from 'react'
import './styles.css'

const BUTTONS = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
]

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [prev, setPrev] = useState(null)
  const [op, setOp] = useState(null)
  const [reset, setReset] = useState(false)

  const handleBtn = (btn) => {
    if (btn === 'C') { setDisplay('0'); setPrev(null); setOp(null); return }
    if (btn === '±') { setDisplay(d => String(-parseFloat(d))); return }
    if (btn === '%') { setDisplay(d => String(parseFloat(d) / 100)); return }

    if (['÷', '×', '−', '+'].includes(btn)) {
      setPrev(parseFloat(display))
      setOp(btn)
      setReset(true)
      return
    }

    if (btn === '=') {
      if (prev === null || !op) return
      const a = prev, b = parseFloat(display)
      const result = op === '+' ? a + b : op === '−' ? a - b : op === '×' ? a * b : a / b
      setDisplay(String(parseFloat(result.toFixed(10))))
      setPrev(null); setOp(null); setReset(false)
      return
    }

    if (btn === '.') {
      if (display.includes('.')) return
      setDisplay(d => d + '.')
      return
    }

    setDisplay(d => {
      if (reset || d === '0') { setReset(false); return btn }
      return d.length < 12 ? d + btn : d
    })
  }

  return (
    <div className="calc-wrap">
      <h1 className="calc-page-title">Calculator</h1>
      <p className="calc-hint">Concepts: <code>useState</code>, logic, event handling</p>

      <div className="calc">
        <div className="calc-screen">
          {op && <div className="calc-op-indicator">{prev} {op}</div>}
          <div className="calc-display">{display}</div>
        </div>
        <div className="calc-buttons">
          {BUTTONS.map((row, r) => (
            <div key={r} className="calc-row">
              {row.map(btn => (
                <button
                  key={btn}
                  className={`calc-btn
                    ${['÷','×','−','+','='].includes(btn) ? 'calc-btn--op' : ''}
                    ${btn === '=' ? 'calc-btn--eq' : ''}
                    ${['C','±','%'].includes(btn) ? 'calc-btn--util' : ''}
                    ${btn === '0' ? 'calc-btn--wide' : ''}
                  `}
                  onClick={() => handleBtn(btn)}
                >{btn}</button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
