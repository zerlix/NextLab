"use client";
import { CssBaseline, Button, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Context erstellen
const ThemeContext = createContext();

// 2. Provider-Komponente
export function ThemeProviderComponent({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode") || "light";
    setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook zum Zugriff auf den Kontext
export function useTheme() {
  return useContext(ThemeContext);
}