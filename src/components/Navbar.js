"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import ThemeSwitcher from "@/components/themes/ThemeSwitcher";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
}