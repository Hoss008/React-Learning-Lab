import { createContext, useContext, useState } from "react";

// 1. CREATE YOUR CONTEXT HERE

export const ThemeContext = createContext();
// This creates a "channel" where data can be shared

function App() {
  // This is the data we want to broadcast!
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    // 2. PROVIDE YOUR (data) CONTEXT HERE
    // Hint: Wrap the div below with your Provider and pass currentTheme as the value.
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <h1>My Cool App</h1>
      </div>
      <Navbar />
    </ThemeContext.Provider>
  );
}

// Notice how Navbar doesn't take any props!
// It's just a middleman, so we leave it alone.
function Navbar() {
  return (
    <nav style={{ padding: "20px", border: "3px solid gray" }}>
      <p>Navigation Menu</p>
      <ThemeButton />
    </nav>
  );
}

function ThemeButton() {
    
  // 3. CONSUME YOUR CONTEXT HERE
  // Hint: Use the useContext hook to grab the theme value.
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "black" : "white",
    color: theme === "dark" ? "white" : "black",
    padding: "10px",
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Current Theme: {theme}
    </button>
  );
}

export default App;
