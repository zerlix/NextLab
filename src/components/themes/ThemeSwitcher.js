"use client";

import { IconButton, Tooltip, useTheme as useMuiTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4'; 
import Brightness7Icon from '@mui/icons-material/Brightness7'; 
import { useTheme } from "@/components/themes/ThemeProvider"; 
import { useMemo, useCallback } from 'react';

// Definiert die verschiedenen Modusarten für das Theme
const THEME_MODES = {
  LIGHT: 'light', 
  DARK: 'dark'    
};

// Die ThemeSwitcher-Komponente, die das Umschalten zwischen Licht- und Dunkelmodus ermöglicht
export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useTheme();
  const theme = useMuiTheme();

  // Stile für den IconButton
  const iconButtonStyles = useMemo(() => ({
    position: 'fixed',
    bottom: 16, 
    right: 16, 
    bgcolor: 'background.default',
    border: `1px solid ${theme.palette.divider}`, 
    '&:hover': {
      bgcolor: 'action.hover',
    },
  }), [theme]);

  // Tooltip-Text basierend auf dem aktuellen Modus
  const tooltipTitle = useMemo(() => (
    mode === THEME_MODES.LIGHT ? "Dunkelmodus" : "Hellmodus"
  ), [mode]);

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        sx={iconButtonStyles}
        onClick={toggleTheme}
        color="inherit"
      >
        {mode === THEME_MODES.LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}