import { createContext, useContext, useState } from "react";

const themes = {
  dark: {
    color: "#fefefe",
    background: "#242424",
  },
  light: {
    color: "#0a0a0a",
    background: "#fefefe",
  },
};

const ThemeContext = createContext(themes.dark);

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const value = {
    colorSchema: theme,
    theme: themes[theme],
    toggleTheme: () =>
      theme === "dark" ? setTheme("light") : setTheme("dark"),
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, useTheme };
