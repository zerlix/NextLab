"use client";

import { Button } from "@mui/material";
import { useTheme } from "@/components/themes/ThemeProvider";

export default function ThemeSwitcher() {
  const { mode, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "20px" }}>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        {mode === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    </div>
  );
}