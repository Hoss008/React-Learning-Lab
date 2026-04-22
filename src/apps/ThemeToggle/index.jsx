import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  const appStyle = {
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  return (
    // 2. PROVIDE YOUR (data) CONTEXT HERE
    // Hint: Wrap the div below with your Provider and pass currentTheme as the value.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={appStyle}>
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
}

// Notice how Navbar doesn't take any props!
// It's just a middleman, so we leave it alone.
function Navbar() {
  const { theme } = useContext(ThemeContext);

  const navStyle = {
    padding: "20px",
    border: `3px solid ${theme === "dark" ? "#444" : "#ccc"}`,
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
    color: theme === "dark" ? "#ffffff" : "#000000",
    borderRadius: "8px",
    marginTop: "20px",
    transition: "all 0.3s ease",
  };

  return (
    <nav style={navStyle}>
      <ThemeButton />
    </nav>
  );
}

function ThemeButton() {
  // 3. CONSUME YOUR CONTEXT HERE
  // Hint: Use the useContext hook to grab the theme value. destructe and read data
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#444" : "#ddd",
    color: theme === "dark" ? "#ffffff" : "#000000",
    padding: "10px 15px",
    border: `2px solid ${theme === "dark" ? "#666" : "#999"}`,
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}

export default App;
