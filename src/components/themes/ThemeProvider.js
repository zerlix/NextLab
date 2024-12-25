"use client";

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from "react";

// Erstellt einen Context für das Thema (hell/dunkel), um es in der Anwendung zugänglich zu machen
const ThemeContext = createContext();

// Der ThemeProviderComponent wickelt die gesamte App mit einem Theme-Provider, 
// der das aktuelle Thema und die Funktion zum Umschalten des Themas bereitstellt
export function ThemeProviderComponent({ children }) {

  // Initialer Zustand für den Modus (hell oder dunkel) aus dem localStorage oder der System-Präferenz
  const [mode, setMode] = useState(() => {
    if (typeof window !== 'undefined') {

      // Versucht, den gespeicherten Modus aus dem localStorage zu laden
      const savedMode = localStorage.getItem("themeMode");
      if (savedMode) return savedMode; // Wenn ein gespeicherter Modus vorhanden ist, diesen verwenden

      // Andernfalls, prüft, ob der Benutzer einen dunklen Modus bevorzugt (System-Präferenz)
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    return 'light'; // Fallback auf hellen Modus, wenn der Code auf dem Server ausgeführt wird
  });

  // Zustand, um das Hydration-Problem zu vermeiden (um sicherzustellen, dass der Client das Theme korrekt rendern kann)
  const [mounted, setMounted] = useState(false);

  // useEffect sorgt dafür, dass der Code nur im Client ausgeführt wird, nicht während der Server-Seitenhydrierung
  useEffect(() => {
    setMounted(true); // Setzt den Zustand `mounted` auf true, wenn die Komponente im Client gerendert wird
  }, []);

  // Funktion zum Umschalten des Themas (hell zu dunkel und umgekehrt)
  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light"; // Wechselt zwischen hell und dunkel
    setMode(newMode); // Setzt den Zustand auf den neuen Modus
    localStorage.setItem("themeMode", newMode); // Speichert den neuen Modus im localStorage, damit er bei zukünftigen Besuchen erhalten bleibt
  };

  // Erstellt das Material-UI Theme basierend auf dem aktuellen Modus (hell oder dunkel)
  const theme = createTheme({
    palette: {
      mode: mode, // Setzt den Modus für das Theme
    },
  });

  // Wenn die Komponente noch nicht im Client gerendert wurde, gibt sie null zurück, um Hydration-Probleme zu vermeiden
  if (!mounted) {
    return null;
  }

  // Gibt den ThemeContext.Provider mit dem aktuellen Modus und der Umschalt-Funktion zurück
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {/* Wrappen des gesamten Inhalts mit ThemeProvider, um das Theme auf die gesamte Anwendung anzuwenden */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline stellt sicher, dass die grundlegenden CSS-Stile des Themas angewendet werden */}
        <CssBaseline />
        {children} {/* Rendert die Kinder-Komponenten der App */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Der `useTheme` Hook ermöglicht den Zugriff auf den aktuellen Modus und die Funktion zum Umschalten des Themas
export const useTheme = () => useContext(ThemeContext);
