import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AppShell from "./components/AppShell.jsx";

// ─── IMPORT YOUR APPS HERE ───────────────────────────────────────────
import TodoApp from "./apps/TodoApp/index.jsx";
import Calculator from "./apps/Calculator/index.jsx";
import CounterApp from "./apps/CounterApp/index.jsx";
import ShoppingCart from "./apps/ShoppingCart";
import Form from "./apps/FormApp/index.jsx";
import GithubFinder from "./apps/GithubFinder/index.jsx";
import Hookss from "./apps/Hookss/index.jsx";
import Theme from "./apps/ThemeToggle/index.jsx";
import CustomHooks from "./apps/CustomHooks/index.jsx";
// ─────────────────────────────────────────────────────────────────────

// ─── REGISTER YOUR APPS HERE ─────────────────────────────────────────
// Add a new object here whenever you create a new app
export const APP_REGISTRY = [
  {
    id: "counter",
    title: "Counter App",
    description: "useState basics — increment, decrement, reset",
    tags: ["useState", "events"],
    color: "#e8ff4d",
    emoji: "🔢",
    component: CounterApp,
  },
  {
    id: "todo",
    title: "Todo App",
    description: "Lists, forms, controlled inputs, and filtering",
    tags: ["useState", "forms", "lists"],
    color: "#4dffb4",
    emoji: "✅",
    component: TodoApp,
  },
  {
    id: "calculator",
    title: "Calculator",
    description: "Event handling, derived state, and logic",
    tags: ["useState", "logic", "events"],
    color: "#ff6b6b",
    emoji: "🧮",
    component: Calculator,
  },
  {
    id: "shoppingcart",
    title: "Shopping Cart",
    description: "useState, array reduce, quantity tracking",
    emoji: "🛒",
    accent: "#fad06d",
    component: ShoppingCart,
  },
  {
    id: "form",
    title: "Form App",
    description: "Controlled components, validation, and submission",
    tags: ["forms", "validation", "submission"],
    color: "#6bffb8",
    emoji: "📝",
    component: Form,
  },
  {
    id: "githubfinder",
    title: "GitHub Finder",
    description: "Fetch API, async/await, and dynamic rendering",
    tags: ["fetch", "async", "dynamic"],
    color: "#ff6b6b",
    emoji: "🔍",
    component: GithubFinder,
  },
  {
    id: "hookss",
    title: "Hookss",
    description: "A collection of mini-apps demonstrating various React hooks",
    tags: ["hooks", "useEffect", "useContext", "useReducer"],
    color: "#6bffb8",
    emoji: "🪝",
    component: Hookss,
  },
  {
    id: "theme-toggle",
    title: "Theme Toggle",
    description: "A simple app to toggle between light and dark themes",
    tags: ["theme", "toggle", "dark mode"],
    color: "#ff6b6b",
    emoji: "🎨",
    component: Theme,
  },
  {
    id: "custom-hooks",
    title: "Custom Hooks",
    description: "A showcase of custom React hooks for reusable logic",
    tags: ["custom hooks", "reusable logic", "useCustomHook"],
    color: "#6bffb8",
    emoji: "🛠️",
    component: CustomHooks,
  }, 
];
// ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {APP_REGISTRY.map((app) => {
        const Component = app.component;
        return (
          <Route
            key={app.id}
            path={`/app/${app.id}`}
            element={
              <AppShell app={app}>
                <Component />
              </AppShell>
            }
          />
        );
      })}
    </Routes>
  );
}
