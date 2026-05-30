// import {createContext} from 'react'
import React, { createContext, useContext, useState } from "react";

// export const theme = createContext()

function CreatContext() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>React createContext Example</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default CreatContext



// 1️⃣ Create a Context with an optional default value
const ThemeContext = createContext("light");

// 2️⃣ Create a Provider component
function ThemeProvider({ children }) {
    
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // The value provided to consumers
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Create a component that consumes the context
function ThemeButton() {
    
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "1px solid black",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

