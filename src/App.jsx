import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AppShell from "./components/AppShell.jsx";

// ─── IMPORT YOUR APPS HERE ───────────────────────────────────────────
import TodoApp from "./apps/TodoApp/index.jsx";
import Calculator from "./apps/Calculator/index.jsx";
import CounterApp from "./apps/CounterApp/index.jsx";
import ShoppingCart from "./apps/ShoppingCart";
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
