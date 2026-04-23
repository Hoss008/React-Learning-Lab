import { createContext, useContext, useState, useReducer } from "react";

// ========== THEME CONTEXT ==========
export const ThemeContext = createContext("light");

// ========== AUTH CONTEXT ==========
export const AuthContext = createContext();

// ========== AUTH REDUCER ==========
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.username,
        id: action.payload.id,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return null;
    default:
      return state;
  }
}

function App() {
  const [theme, setTheme] = useState("light");
  const [authState, authDispatch] = useReducer(authReducer, null);

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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <AuthContext.Provider value={{ authState, authDispatch }}>
        <div style={appStyle}>
          <h1>Theme & Auth App</h1>
          <Navbar />

          {authState?.isLoggedIn ? <Dashboard /> : <LoginForm />}
        </div>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

// Notice how Navbar doesn't take any props!
// It's just a middleman, so we leave it alone.
function Navbar() {
  const { theme } = useContext(ThemeContext);
  const { authState } = useContext(AuthContext);

  const navStyle = {
    padding: "20px",
    border: `3px solid ${theme === "dark" ? "#444" : "#ccc"}`,
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
    color: theme === "dark" ? "#ffffff" : "#000000",
    borderRadius: "8px",
    marginBottom: "20px",
    transition: "all 0.3s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <p>
        Navigation Menu {authState?.isLoggedIn && `- Welcome ${authState.user}`}
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <ThemeButton />
        {authState?.isLoggedIn && <AuthButton />}
      </div>
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
      Theme: {theme}
    </button>
  );
}

// ========== AUTH BUTTON ==========
function AuthButton() {
  const { theme } = useContext(ThemeContext);
  const { authDispatch } = useContext(AuthContext);

  const buttonStyle = {
    backgroundColor: "#ff6b6b",
    color: "white",
    padding: "10px 15px",
    border: "2px solid #ff5252",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => authDispatch({ type: "LOGOUT" })}
    >
      Logout
    </button>
  );
}

// ========== LOGIN FORM ==========
function LoginForm() {
  const { theme } = useContext(ThemeContext);
  const { authDispatch } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      authDispatch({
        type: "LOGIN",
        payload: {
          username: username,
          id: Math.random(),
        },
      });
      setUsername("");
      setPassword("");
    }
  };

  const formStyle = {
    border: `2px solid ${theme === "dark" ? "#444" : "#ccc"}`,
    padding: "30px",
    borderRadius: "8px",
    maxWidth: "400px",
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#f5f5f5",
    margin: "30px 0",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: `1px solid ${theme === "dark" ? "#555" : "#ddd"}`,
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    boxSizing: "border-box",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#51cf66",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div style={formStyle}>
      <h2>Login</h2>
      <input
        style={inputStyle}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={buttonStyle} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

// ========== PROTECTED DASHBOARD ==========
function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const { authState } = useContext(AuthContext);

  const dashboardStyle = {
    border: `2px solid ${theme === "dark" ? "#51cf66" : "#51cf66"}`,
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: theme === "dark" ? "#2a2a2a" : "#f8faf9",
    marginTop: "30px",
  };

  const titleStyle = {
    color: "#51cf66",
    fontSize: "24px",
    marginBottom: "20px",
  };

  const infoStyle = {
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: theme === "dark" ? "#1a1a1a" : "#ffffff",
    borderRadius: "5px",
    borderLeft: "4px solid #51cf66",
  };

  return (
    <div style={dashboardStyle}>
      <h2 style={titleStyle}>🎉 Protected Dashboard</h2>
      <div style={infoStyle}>
        <p>
          <strong>User:</strong> {authState?.user}
        </p>
      </div>
      <div style={infoStyle}>
        <p>
          <strong>User ID:</strong> {authState?.id}
        </p>
      </div>
      <div style={infoStyle}>
        <p>
          <strong>Status:</strong> ✅ Authenticated
        </p>
      </div>
      <p style={{ marginTop: "20px", fontSize: "14px", opacity: 0.7 }}>
        This dashboard is protected and only visible when logged in.
      </p>
    </div>
  );
}

export default App;
