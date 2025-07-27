// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Box, Typography, Button, Divider } from '@mui/material';
import SectionTitle from '../components/common/SectionTitle';


const AboutPage = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#f7f9fc', py: 8 }}>
        <Container>
          <SectionTitle title="Hakkımda"  />

          {/* Biyografi */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" gutterBottom>Biyografi</Typography>
            <Typography variant="body1" color="text.secondary">
              2015 yılından bu yana inşaat mühendisliği alanında çeşitli projelerde aktif rol aldım.
              Statik proje çizimi, saha uygulamaları ve yönetim süreçlerinde deneyim sahibiyim.
              Yenilikçi çözümler üretmeyi ve detaylara önem vermeyi prensip edinmiş bir mühendis olarak,
              her projede kaliteyi ön planda tutarım.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Eğitim */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" gutterBottom>Eğitim</Typography>
            <Typography variant="body1" color="text.secondary">
              • Gaziantep Üniversitesi - İnşaat Mühendisliği (2010 - 2014)
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Deneyim */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" gutterBottom>Deneyim</Typography>
            <Typography variant="body1" color="text.secondary">
              • XYZ İnşaat - Proje Mühendisi (2015 - 2018)<br />
              • ABC Yapı - Şantiye Şefi (2018 - 2022)<br />
              • Freelance Statik Proje Danışmanı (2022 - ...)
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Sertifikalar */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" gutterBottom>Sertifikalar</Typography>
            <Typography variant="body1" color="text.secondary">
              • Yapı Denetim Sertifikası<br />
              • AutoCAD & Sta4CAD Uzmanlığı<br />
              • İş Sağlığı ve Güvenliği Eğitimi
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button variant="contained" color="primary" size="large" href="/projects">
              Projelerime Göz At
            </Button>
          </Box>
        </Container>
      </Box>

    </>
  );
};

export default AboutPage;
