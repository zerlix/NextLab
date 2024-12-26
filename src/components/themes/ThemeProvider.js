"use client";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

// Der ThemeProviderComponent wickelt die gesamte App mit einem Theme-Provider, 
// der das aktuelle Theme und die Funktion zum Umschalten des Theme bereitstellt
export function ThemeProviderComponent({ children }) {

  // Initialer Zustand für den Modus (hell oder dunkel) aus dem localStorage oder der System-Präferenz
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children} 
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Der `useTheme` Hook ermöglicht den Zugriff auf den aktuellen Modus und die Funktion zum Umschalten des Themas
export const useTheme = () => useContext(ThemeContext);
