import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        bgcolor: '#2E3B55',
        color: '#fff',
        textAlign: 'center',
        py: 3,
        mt: 4
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} İnşaat Mühendisi - Tüm Hakları Saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
