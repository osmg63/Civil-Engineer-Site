import React from 'react';
import { Container, Typography } from '@mui/material';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { sampleProjects } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
        Tüm Projeler
      </Typography>

      <ProjectsGrid projects={sampleProjects} /> {/* 🔹 tüm projeler */}
    </Container>
  );
};

export default ProjectsPage;
