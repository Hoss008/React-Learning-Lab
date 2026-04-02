import { Link } from "react-router-dom";
import { APP_REGISTRY } from "../App.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home-noise" />

      <header className="home-header">
        <div className="home-label">⚗️ REACT LEARNING LAB</div>
        <h1 className="home-title">
          My Apps,
          <br />
          <span className="home-title-accent">One Place.</span>
        </h1>
        <p className="home-subtitle">
          Pick an app below to open it. Build a new one by adding a folder in{" "}
          <code>src/apps/</code> and registering it in <code>App.jsx</code>.
        </p>
      </header>

      <main className="home-grid">
        {APP_REGISTRY.map((app, i) => {
          const tags = app.tags ?? [];
          const cardColor = app.color ?? app.accent ?? "#4dffb4";

          return (
            <Link
              to={`/app/${app.id}`}
              key={app.id}
              className="app-card"
              style={{ "--card-color": cardColor, "--delay": `${i * 80}ms` }}
            >
              <div className="app-card-emoji">{app.emoji}</div>
              <div className="app-card-body">
                <h2 className="app-card-title">{app.title}</h2>
                <p className="app-card-desc">{app.description}</p>
                {tags.length > 0 && (
                  <div className="app-card-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="app-card-arrow">→</div>
            </Link>
          );
        })}

        <div className="app-card app-card--new">
          <div className="app-card-emoji">➕</div>
          <div className="app-card-body">
            <h2 className="app-card-title">Add New App</h2>
            <p className="app-card-desc">
              Create a folder in <code>src/apps/YourApp/</code> with an{" "}
              <code>index.jsx</code>, then register it in <code>App.jsx</code>.
            </p>
          </div>
        </div>
      </main>

      <footer className="home-footer">
        <span>React Learning Lab</span>
        <span>·</span>
        <span>{APP_REGISTRY.length} apps built</span>
      </footer>
    </div>
  );
}
