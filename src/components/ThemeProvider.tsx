"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeContext);

function applyTheme(next: Theme) {
  const root = document.documentElement;

  // Add transitioning class so all elements animate together
  root.classList.add("theme-transitioning");

  // Synchronously flip the theme class — no useEffect round-trip
  root.classList.toggle("dark", next === "dark");

  try {
    localStorage.setItem("theme", next);
  } catch {
    // ignore
  }

  // Remove the transitioning class after the transition completes
  const tid = window.setTimeout(() => root.classList.remove("theme-transitioning"), 300);
  return tid;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default to "dark"; the inline script in <head> has already set the correct
  // class on <html> before React hydrates, so CSS is always correct from frame 1.
  const [theme, setTheme] = useState<Theme>("dark");

  // On mount, sync React state with whatever the inline script applied
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
