import { Link } from "react-router-dom";
import "./AppShell.css";

export default function AppShell({ app, children }) {
  const tags = app?.tags ?? [];

  return (
    <div className="shell">
      <nav className="shell-nav">
        <Link to="/" className="shell-back">
          ← Back to Lab
        </Link>
        <div className="shell-app-name">
          <span>{app?.emoji ?? "🧩"}</span>
          <span>{app?.title ?? "App"}</span>
        </div>
        <div className="shell-tags">
          {tags.map((t) => (
            <span key={t} className="shell-tag">
              {t}
            </span>
          ))}
        </div>
      </nav>
      <main className="shell-content">{children}</main>
    </div>
  );
}
