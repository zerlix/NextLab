import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  // State, um das Ankerelement für das Menü zu verfolgen
  const [anchorEl, setAnchorEl] = useState(null);

  // Funktion, um das Menü zu öffnen, indem das Ankerelement gesetzt wird
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Funktion, um das Menü zu schließen, indem das Ankerelement zurückgesetzt wird
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* AppBar oben auf der Seite */}
      <AppBar position="static">

        <Toolbar>
        
          {/* IconButton für das Hamburger-Menü */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        
          {/* Titel der App */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NextLab
          </Typography>
        </Toolbar>
      
      </AppBar>

      {/* Dropdown-Menü, das erscheint, wenn das Hamburger-Menü geklickt wird */}
      <Menu
        anchorEl={anchorEl} // Positioniert das Menü am Ankerelement
        open={Boolean(anchorEl)} // Öffnet das Menü, wenn anchorEl nicht null ist
        onClose={handleMenuClose} // Schließt das Menü, wenn außerhalb geklickt wird
      >
        {/* Einzelne Menüeinträge */}
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
      </Menu>
    </>
  );
}

export default App;
