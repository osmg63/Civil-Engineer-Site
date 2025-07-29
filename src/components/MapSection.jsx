// components/MapSection.jsx
import React from 'react';
import { Box } from '@mui/material';

const MapSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '470px',
                mb: 5,
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            <iframe
                title="Harita"
                src="https://www.google.com/maps/d/u/0/embed?mid=1jDJGfQzhBb5jcjT8Uo7GeP6Jkf5a_Z4&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                style={{ border: 0, marginTop: '-70px' }}
                allowFullScreen=""
                loading="lazy"
            />

        </Box>
    );
};

export default MapSection;
