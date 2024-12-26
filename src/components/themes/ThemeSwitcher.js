"use client";

import { IconButton, Tooltip, useTheme as useMuiTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { useTheme } from "@/components/themes/ThemeProvider"; 

// Definiert die verschiedenen Modusarten für das Theme
const THEME_MODES = {
  LIGHT: 'light', 
  DARK: 'dark'    
};

// Die ThemeSwitcher-Komponente, die das Umschalten zwischen Licht- und Dunkelmodus ermöglicht
export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useTheme();
  const theme = useMuiTheme();

  return (
    // Tooltip zeigt den Namen des Modus an, je nachdem, ob der aktuelle Modus Hell- oder Dunkelmodus ist
    <Tooltip title={mode === THEME_MODES.LIGHT ? "Dunkelmodus" : "Hellmodus"}>
      <IconButton
        sx={{ 
          // Positioniert den Button fest unten rechts auf der Seite
          position: 'fixed',
          bottom: 16, 
          right: 16, 
          bgcolor: 'background.default',
          border: `1px solid ${theme.palette.divider}`, 
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
        // Funktion, die aufgerufen wird, wenn der Button geklickt wird, um das Thema umzuschalten
        onClick={toggleTheme}
        color="inherit" // Setzt die Farbe des Icons auf die des übergeordneten Themes
      >
        {/* Zeigt das passende Icon je nach dem aktuellen Modus */}
        {mode === THEME_MODES.LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}
