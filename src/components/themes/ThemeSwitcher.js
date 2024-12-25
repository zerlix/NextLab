"use client";

// Importiert notwendige Komponenten und Hooks aus Material-UI und dem eigenen ThemeProvider
import { IconButton, Tooltip, useTheme as useMuiTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icon für den Dunkelmodus
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icon für den Hellmodus
import { useTheme } from "@/components/themes/ThemeProvider"; // Eigener Hook für das Wechseln des Themas

// Definiert die verschiedenen Modusarten für das Theme
const THEME_MODES = {
  LIGHT: 'light',  // Heller Modus
  DARK: 'dark'     // Dunkler Modus
};

// Die ThemeSwitcher-Komponente, die das Umschalten zwischen Licht- und Dunkelmodus ermöglicht
export default function ThemeSwitcher() {
  // Holt sich den aktuellen Modus und die Funktion zum Umschalten des Themas aus dem ThemeProvider
  const { mode, toggleTheme } = useTheme();
  
  // Holt sich das MUI-Theme, um auf Theme-Variablen zuzugreifen
  const theme = useMuiTheme();

  return (
    // Tooltip zeigt den Namen des Modus an, je nachdem, ob der aktuelle Modus Hell- oder Dunkelmodus ist
    <Tooltip title={mode === THEME_MODES.LIGHT ? "Dunkelmodus" : "Hellmodus"}>
      <IconButton
        sx={{ 
          // Positioniert den Button fest unten rechts auf der Seite
          position: 'fixed',
          bottom: 16, // Abstand vom unteren Rand
          right: 16,  // Abstand vom rechten Rand
          bgcolor: 'background.default', // Hintergrundfarbe des Buttons basierend auf dem aktuellen Theme
          border: `1px solid ${theme.palette.divider}`, // Umrandung des Buttons basierend auf dem aktuellen Theme
          // Ändert das Aussehen des Buttons beim Hover
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
