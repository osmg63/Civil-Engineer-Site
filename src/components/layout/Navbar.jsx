import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          İnşaat Mühendisi
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Anasayfa</Button>
          <Button color="inherit" component={Link} to="/about">Hakkımda</Button>
          <Button color="inherit" component={Link} to="/projects">Projeler</Button>
          <Button color="inherit" component={Link} to="/contact">İletişim</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
