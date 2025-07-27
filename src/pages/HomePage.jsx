import React from 'react';
import { Container, Box } from '@mui/material';
import HeroSection from '../components/common/HeroSection';
import SectionTitle from '../components/common/SectionTitle';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import CTAButton from '../components/common/CTAButton';
import Testimonial from '../components/projects/Testimonial';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <Container sx={{ mt: 8 }}>
        <SectionTitle title="Projelerimizden Bazıları" />
        <ProjectsGrid />
        <Box textAlign="center" mt={4}>
          <CTAButton to="/projects" text="Tüm Projeleri Gör" />
        </Box>
        <Testimonial />
      </Container>
    </Box>
  );
};

export default HomePage;
