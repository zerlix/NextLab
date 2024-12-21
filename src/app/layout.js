"use client"
// These styles apply to every route in the application
import '@/styles/main.css';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// MUI Components
import { CssBaseline, Button, ThemeProvider, createTheme } from '@mui/material';
import { useState, useEffect } from 'react';

// Custom components
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  // Initialisiere den Modus aus localStorage (falls vorhanden)
  const savedMode = localStorage.getItem('themeMode') || 'light';
  const [mode, setMode] = useState(savedMode);

  // Erstelle das MUI-Theme
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  // Funktion zum Umschalten des Themas
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Speichert den neuen Modus
  };

  return (
    <html lang="de">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* Setzt das Baseline-Stylesheet für das Theme */}
          <Navbar />
          <div style={{ padding: '20px' }}>
            <Button variant="contained" color="primary" onClick={toggleTheme}>
              {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </Button>
          </div>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
