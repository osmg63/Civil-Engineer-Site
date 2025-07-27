import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ProjectsPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Projeler
      </Typography>
      <Box>
        <Typography variant="body1">
          Tamamlanan projeler listelenecek... (yakında eklenecek ProjectCard bileşenleri burada yer alacak.)
        </Typography>
      </Box>
    </Container>
  );
};

export default ProjectsPage;
