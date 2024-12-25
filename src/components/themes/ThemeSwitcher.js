"use client";

import { IconButton, Tooltip, useTheme as useMuiTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@/components/themes/ThemeProvider";

const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark'
};

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useTheme();
  const theme = useMuiTheme();

  return (
    <Tooltip title={mode === THEME_MODES.LIGHT ? "Dark Mode" : "Light Mode"}>
      <IconButton
        sx={{ 
          position: 'fixed',
          bottom: 16,
          right: 16,
          bgcolor: 'background.default',
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
        onClick={toggleTheme}
        color="inherit"
      >
        {mode === THEME_MODES.LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}