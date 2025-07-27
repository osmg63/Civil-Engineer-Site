import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ title }) => {
  return (
    <Box mb={4}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
