import React from "react";
import { Container, Box } from "@mui/material";
import HeroSection from "../components/common/HeroSection";
import SectionTitle from "../components/common/SectionTitle";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import CTAButton from "../components/common/CTAButton";
import Testimonial from "../components/projects/Testimonial";
import { sampleProjects } from "../data/projectsData";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <Container sx={{ mt: 8 }}>
        <SectionTitle title="Projelerimizden Bazıları" />
        <ProjectsGrid projects={sampleProjects.slice(0, 4)} />{" "}
        {/* 🔹 sadece ilk 4 proje */}
        <Box textAlign="center" mt={4}>
          <CTAButton to="/projects" text="Tüm Projeleri Gör" />
        </Box>
        <StatsSection />
        <Testimonial />
      </Container>
    </Box>
  );
};

export default HomePage;
