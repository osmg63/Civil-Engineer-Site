import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { sampleProjects } from '../data/projectsData';
import projectsBg from "../assets/projectbg2.jpg"; // arka plan görseli ekle

const ProjectsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f7fa' }}>
      {/* Üst Kapak Resmi */}
      <Box
        sx={{
          width: '100%',
          
          height: { xs: 200, md: 550 },
          backgroundImage: `url(${projectsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
           mt: "-64px", // ✅ Resmi yukarı taşır
        }}
      >
        
      </Box>

      {/* İçerik */}
      <Container sx={{ mt: 2, mb: 3 }}>
        <Typography
          variant="h3"
          sx={{
           
            px: 3,
            py: 1,
            borderRadius: 2,
            fontWeight: 700,
           
          }}
        >
          Tüm Projeler
        </Typography>
        <ProjectsGrid projects={sampleProjects} />
      </Container>
    </Box>
  );
};

export default ProjectsPage;
