import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Public"; // Globe icon
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState("English"); // Default language
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState("Services"); // Default active page

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check for screens smaller than 'md'

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    handleMenuClose();
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          style={{ display: "flex", alignItems: "center", flexGrow: 1 }}
        >
          <img src="/careeemlogo.avif" alt="Careem Logo" style={{ height: "30px" }} />
        </Typography>

        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: "10px",
            flexGrow: 1,
            justifyContent: "flex-start",
          }}
        >
          {["Services", "Partners", "Careem Plus", "About Us"].map((page) => (
            <Button
              key={page}
              color="inherit"
              onClick={() => setActivePage(page)}
              sx={{
                position: "relative",
                fontWeight: activePage === page ? "bold" : "normal",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "2px",
                  backgroundColor: activePage === page ? "#006E51" : "transparent", // Green underline for active
                  transition: "all 0.3s ease",
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Menu Icon for Smaller Screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" , color: "#00EB79"} }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Drawer for Small Screens */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            {["Services", "Partners", "Careem Plus", "About Us"].map((page) => (
              <ListItem
                button
                key={page}
                onClick={() => {
                  setActivePage(page);
                  setDrawerOpen(false); // Close the drawer after selection
                }}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Updated Language Selector - Only for Larger Screens */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
            }}
            onClick={handleMenuOpen}
          >
            <LanguageIcon style={{ color: "#006E51" }} /> {/* Green globe icon */}
            <Typography variant="body1" style={{ fontWeight: 500, color: "#006E51" }}>
              {language}
            </Typography>
            <ArrowDropDownIcon style={{ color: "#006E51" }} />
          </Box>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => handleLanguageChange("English")}>English</MenuItem>
          <MenuItem onClick={() => handleLanguageChange("Urdu")}>Urdu</MenuItem>
        </Menu>

        {/* Conditional Button */}
        {isMobile ? (
          <Button
            variant="contained"
            style={{ backgroundColor: "#00EB79", color: "#2D2E2E", marginLeft: "10px" }}
          >
            Download the App
          </Button>
        ) : (
          <Button
            variant="contained"
            style={{ backgroundColor: "#00EB79", color: "#2D2E2E", marginLeft: "10px" ,textTransform: "none" }}
            
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
