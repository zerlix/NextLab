import React, { useState } from "react";
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, Box, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useSession } from "next-auth/react";

// Liste der Navigationslinks mit Titel und Pfad
const navigationLinks = [
  { title: 'Home', path: '/' },
  { title: 'Login', path: '/user/login' },
  { title: 'Profil', path: '/user/' }
];

function Navbar({ title = "NextLab" }) {
  // Benutzersitzung und Router für die Navigation
  const { data: session, status } = useSession();
  
  // State, um das Ankerelement für das Menü zu verfolgen
  const [anchorEl, setAnchorEl] = useState(null);

  // Theme und MediaQuery, um zu überprüfen, ob die Ansicht mobil ist
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Funktion, um das Menü zu öffnen, indem das Ankerelement gesetzt wird
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Funktion, um das Menü zu schließen, indem das Ankerelement zurückgesetzt wird
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Filtere die Navigation-Links basierend auf dem Anmeldestatus
  const filteredLinks = navigationLinks.filter(link => {
    if (status === "authenticated" && link.title === 'Login') return false;
    if (status !== "authenticated" && link.title === 'Logout') return false;
    return true;
  });

  return (
    <>
      {/* AppBar oben auf der Seite */}
      <AppBar position="static">
        <Toolbar>
          {/* Titel der App, linksbündig */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          {isMobile ? (
            // Hamburger-Menü nur auf mobilen Geräten anzeigen
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Links nur auf Desktop-Geräten anzeigen
            <Box sx={{ display: 'flex', gap: 2 }}>
              {filteredLinks.map((link) => (
                <Button 
                  key={link.path} // Eindeutiger Schlüssel für jedes Element
                  color="inherit"
                  href={link.path} // Zielpfad des Links
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Dropdown-Menü, das auf mobilen Geräten erscheint */}
      <Menu
        anchorEl={anchorEl} // Positioniert das Menü am Ankerelement
        open={Boolean(anchorEl)} // Öffnet das Menü, wenn anchorEl nicht null ist
        onClose={handleMenuClose} // Schließt das Menü, wenn außerhalb geklickt wird
      >
        {filteredLinks.map((link) => (
          <MenuItem 
            key={link.path} // Eindeutiger Schlüssel für jedes Element
            onClick={handleMenuClose} // Menü schließen, wenn ein Eintrag geklickt wird
            component="a"
            href={link.path} // Zielpfad des Links
          >
            {link.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

// Proptypes für die Komponente
Navbar.propTypes = {
  title: PropTypes.string // Der Titel der App, optional
};

export default Navbar;