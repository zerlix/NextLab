"use client";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProviderComponent({ children }) {
  // Initialer Zustand aus localStorage oder System-Präferenz
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("themeMode");
      if (savedMode) return savedMode;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Hydration-Problem vermeiden
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Funktion zum Umschalten des Themas
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  // Erstellen des Themas basierend auf dem aktuellen Modus
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // Rendere nichts, bis die Client-seitige Hydration abgeschlossen ist
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Hook zum Verwenden des Themas
export const useTheme = () => useContext(ThemeContext);