import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const CTAButton = ({ to, text }) => {
  return (
    <Button variant="contained" color="primary" component={Link} to={to}>
      {text}
    </Button>
  );
};

export default CTAButton;
