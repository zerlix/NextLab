"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Erstelle einen Kontext für das Theme
const ThemeContext = createContext();

// Custom Hook, um das Theme zu verwenden
export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderComponent = ({ children }) => {
  // Zustand für den aktuellen Modus (hell oder dunkel)
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem("themeMode");
      if (savedMode) return savedMode; // Wenn ein gespeicherter Modus vorhanden ist, diesen verwenden

      // Andernfalls, prüft, ob der Benutzer einen dunklen Modus bevorzugt (System-Präferenz)
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Fallback 
  });

  // Zustand, um das Hydration-Problem zu vermeiden
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Funktion zum Umschalten des Themas (hell zu dunkel und umgekehrt)
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode); // Speichert den neuen Modus im localStorage
  };

  // Erstellt das Material-UI Theme basierend auf dem aktuellen Modus (hell oder dunkel)
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // Wenn die Komponente noch nicht im Client gerendert wurde, gibt sie null zurück, um Hydration-Probleme zu vermeiden
  if (!mounted) {
    return null;
  }

  // Gibt den ThemeContext.Provider mit dem aktuellen Modus und der Umschalt-Funktion zurück
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};