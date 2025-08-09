import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Slide
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Anasayfa", path: "/" },
  { label: "Hakkımda", path: "/about" },
  { label: "Projeler", path: "/projects" },
  { label: "İletişim", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Scroll yönü kontrolü
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // aşağı kaydırıyorsa navbar gizlensin, yukarı kaydırıyorsa gösterilsin
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: "#2E3B55", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ color: "white" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Slide direction="down" in={!hideNavbar}>
        <AppBar
          sx={{
            background: scrolled ? "#2E3B55" : "rgba(0,0,0,0.4)",
            boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            height: { xs: 70, md: 80 },
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 1150,
              mx: "auto",
              px: { xs: 2, md: 0 },
              display: "flex",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                userSelect: "none",
              }}
            >
              C1 İnşaat 
            </Typography>

            {!isMobile && (
              <Box>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{ ml: 2 }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleDrawer(true)}
                aria-label="menu"
                size="large"
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </Slide>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { bgcolor: "#2E3B55", color: "white" },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
