import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: '#2E3B55', color: 'white', py: 8 }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          İnşaat Mühendisi Osman Gümüş
        </Typography>
        <Typography variant="h6" paragraph>
          Sağlam yapılar, güvenilir çözümler. 10+ yıllık tecrübe ile altyapı ve üstyapı projelerinde yanınızdayım.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/contact"
        >
          İletişime Geç
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
