# ⚗️ React Learning Lab

A single Vite + React project where you collect all your practice apps — **one `npm install`, forever**.

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173 — you'll see the home screen with all your apps.

---

## ➕ How to Add a New App

### 1. Create the folder & file
```
src/apps/YourAppName/
  index.jsx     ← your app goes here
  styles.css    ← optional
```

### 2. Register it in `src/App.jsx`

At the top, import it:
```js
import YourAppName from './apps/YourAppName/index.jsx'
```

Then add an entry to `APP_REGISTRY`:
```js
{
  id: 'your-app',           // URL slug: /app/your-app
  title: 'Your App Name',
  description: 'What this app teaches',
  tags: ['useState', 'useEffect'],  // React concepts used
  color: '#ff6b6b',         // card accent color (any CSS color)
  emoji: '🚀',
  component: YourAppName,
},
```

That's it! Your app appears on the home screen automatically.

---

## 📁 Project Structure

```
my-react-learning/
├── src/
│   ├── App.jsx              ← app registry & router
│   ├── main.jsx
│   ├── index.css            ← global styles & CSS variables
│   ├── components/
│   │   ├── Home.jsx         ← home screen
│   │   └── AppShell.jsx     ← nav bar wrapper for each app
│   └── apps/
│       ├── CounterApp/      ← example: useState basics
│       ├── TodoApp/         ← example: lists & forms
│       └── Calculator/      ← example: logic & events
├── package.json
└── vite.config.js
```

## 💡 App Ideas to Build Next

- **Weather App** — useEffect + fetch API
- **Color Picker** — controlled inputs
- **Timer / Stopwatch** — useEffect + setInterval
- **Markdown Previewer** — controlled inputs + third party lib
- **Quiz App** — complex state, multiple components
- **Shopping Cart** — useContext or prop drilling practice
