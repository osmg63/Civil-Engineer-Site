// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f9fc', py: 8 }}>
      <Container>
        <SectionTitle title="Hakkımda" />

        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.9 }}>
          2010 yılında Gaziantep Üniversitesi İnşaat Mühendisliği bölümünden mezun olduktan sonra,
          2015 yılından itibaren çeşitli inşaat projelerinde aktif olarak görev aldım.
          XYZ İnşaat’ta Proje Mühendisi, ardından ABC Yapı’da Şantiye Şefi olarak çalıştım. 2022’den bu yana
          ise freelance olarak statik proje danışmanlığı yapmaktayım. Statik proje çizimi, saha uygulamaları
          ve şantiye yönetimi konularında geniş bir deneyime sahibim. Yapı Denetim Sertifikası, AutoCAD & Sta4CAD
          uzmanlığı ve İş Sağlığı ve Güvenliği eğitimi gibi profesyonel yetkinliklerimle, her projede kalite
          ve güvenliği ön planda tutarım. Teknik bilgiyle estetiği birleştirerek yenilikçi çözümler üretmek,
          detaylara gösterdiğim özen ve mühendislik disiplinimle değer yaratmak temel prensibimdir.
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" color="primary" size="large" href="/projects">
            Projelerime Göz At
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
