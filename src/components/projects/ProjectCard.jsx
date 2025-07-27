import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const ProjectCard = ({ project, reverse }) => {
  return (
    <Grid
      container
      spacing={4}
      direction={reverse ? 'row-reverse' : 'row'}
      alignItems="center"
      sx={{ mb: 5 }}
    >
      <Grid item xs={12} md={6}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            textAlign: reverse ? 'left' : 'right',
            pr: reverse ? 0 : 4,
            pl: reverse ? 4 : 0,
          }}
        >
          <Typography variant="h5" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {project.description}
          </Typography>
          {project.location && project.date && (
            <Typography variant="body2" color="text.secondary">
              📍 {project.location} | 📅 {project.date}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
