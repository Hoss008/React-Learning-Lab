import { useState } from 'react'
import AppShell from '../../components/AppShell'
import './ColorPicker.css'

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return { r, g, b }
}

function toHsl(hex) {
  let { r, g, b } = hexToRgb(hex)
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2
  if (max === min) { h = s = 0 }
  else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

const PRESETS = ['#7c6dfa', '#fa6d8c', '#6dfabd', '#fad06d', '#6db8fa', '#fa9a6d', '#c86dfa', '#6dfaf0']

export default function ColorPicker() {
  const [color, setColor] = useState('#7c6dfa')
  const [copied, setCopied] = useState(false)

  const rgb = hexToRgb(color)
  const hsl = toHsl(color)

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <AppShell title="Color Picker" emoji="🎨">
      <div className="cp-wrap">
        <div className="cp-preview" style={{ background: color }}>
          <span className="cp-preview-label" style={{ color }}>
            {color.toUpperCase()}
          </span>
        </div>

        <input
          type="color"
          className="cp-native"
          value={color}
          onChange={e => setColor(e.target.value)}
        />

        <div className="cp-values">
          {[
            { label: 'HEX', value: color.toUpperCase() },
            { label: 'RGB', value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
            { label: 'HSL', value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
          ].map(({ label, value }) => (
            <button key={label} className="cp-value-row" onClick={() => copy(value)}>
              <span className="cp-value-label">{label}</span>
              <span className="cp-value-text">{value}</span>
              <span className="cp-value-copy">copy</span>
            </button>
          ))}
        </div>

        {copied && <div className="cp-toast">Copied!</div>}

        <div className="cp-presets">
          {PRESETS.map(p => (
            <button
              key={p}
              className={`cp-preset ${color === p ? 'active' : ''}`}
              style={{ background: p }}
              onClick={() => setColor(p)}
            />
          ))}
        </div>

        <div className="todo-concepts">
          <span>Concepts: </span>useState · color input · string formatting · clipboard API
        </div>
      </div>
    </AppShell>
  )
}
