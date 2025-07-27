// components/MapSection.jsx
import React from 'react';
import { Box } from '@mui/material';

const MapSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '400px',
        mb: 5,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <iframe
        title="Harita"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.740258845728!2d37.37806421521283!3d37.06622097989462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e66eeb9f3fd3%3A0xa1ebfbd17b542a01!2sGaziantep!5e0!3m2!1str!2str!4v1621423794253!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </Box>
  );
};

export default MapSection;
