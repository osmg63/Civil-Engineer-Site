import React from 'react';
import { Grid, Box } from '@mui/material';
import ProjectCard from './ProjectCard';
import insaat1 from '../../images/insaat1.jpeg';
import insaat2 from '../../images/insaat2.jpeg';
import insaat3 from '../../images/insaat3.jpeg';

const sampleProjects = [
  { id: 1, title: 'Konut Projesi A', description: 'Modern konut yapımı', location: 'Gaziantep', date: '2023', image: insaat1 },
  { id: 2, title: 'Köprü Projesi B', description: 'Betonarme köprü', location: 'Şanlıurfa', date: '2022', image: insaat2 },
  { id: 3, title: 'Ofis Binası C', description: 'Çelik yapı tasarımı', location: 'Adana', date: '2021', image: insaat3 },
  { id: 4, title: 'Villa Projesi D', description: 'Lüks villa yapımı', location: 'Mersin', date: '2020', image: insaat1 },
  { id: 5, title: 'Tünel Projesi E', description: 'Tünel altyapı çalışması', location: 'Kahramanmaraş', date: '2019', image: insaat2 },
  { id: 6, title: 'Rezidans F', description: 'Çok katlı rezidans projesi', location: 'Hatay', date: '2018', image: insaat3 },
];

const ProjectsGrid = () => {
  return (
    <Box>
      {sampleProjects.map((project, index) => (
        <Box key={project.id} my={4}>
          <ProjectCard project={project} reverse={index % 2 === 1} />
        </Box>
      ))}
    </Box>
  );
};

export default ProjectsGrid;
