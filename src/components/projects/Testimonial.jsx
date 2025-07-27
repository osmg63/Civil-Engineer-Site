import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment: "Proje süresince tüm aşamalarda profesyonel destek aldık. Tavsiye ederim!",
  },
  {
    name: "Merve Karaca",
    comment: "İşini titizlikle yapan, güvenilir bir mühendis.",
  },
];

const Testimonial = () => {
  return (
    <Box mt={8}>
      <Typography variant="h5" gutterBottom>
        Müşteri Yorumları
      </Typography>
      <Stack spacing={3}>
        {testimonials.map((t, index) => (
          <Paper key={index} sx={{ p: 3 }}>
            <Typography variant="body1" gutterBottom>“{t.comment}”</Typography>
            <Typography variant="subtitle2" color="text.secondary">— {t.name}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonial;
