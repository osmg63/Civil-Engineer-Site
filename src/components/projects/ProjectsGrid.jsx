import React from 'react';
import { Grid, Box } from '@mui/material';
import ProjectCard from './ProjectCard';


const ProjectsGrid = ({ projects }) => {
  return (
    <Box >
      {projects.map((project, index) => (
        <Box key={project.id} my={4}>
          <ProjectCard project={project} reverse={index % 2 === 1}  index={index} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsGrid;
