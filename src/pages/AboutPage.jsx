// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Box, Typography, Button, Card, CardContent } from '@mui/material';
import SectionTitle from '../components/common/SectionTitle';
import projectsBg from "../assets/chat.png"; // arka plan görseli ekle

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f7fa', fontFamily: "'Poppins', sans-serif" }}>
      {/* Üst Kapak Resmi */}
      <Box
        sx={{
          width: '100%',
          height: { xs: 200, md: 550 },
          backgroundImage: `url(${projectsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center-top',
           mt: "-64px", // ✅ Resmi yukarı taşır
        }}
      />

      {/* İçerik */}
      <Container sx={{ mt: -10, mb: 8 }}>
        <Card
          sx={{
            maxWidth: 900,
            mx: 'auto',
            borderRadius: 3,
            boxShadow: 4,
            p: { xs: 2, md: 4 },
            backgroundColor: '#ffffffee',
          }}
        >
          <CardContent>
            {/* Başlık ortalanıyor */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <SectionTitle
                title="Hakkımda"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  fontFamily: "'Poppins', sans-serif",
                }}
              />
            </Box>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.9,
                mt: 2,
                fontFamily: "'Poppins', sans-serif",
                textAlign: 'justify',
              }}
            >
              2010 yılında Gaziantep Üniversitesi İnşaat Mühendisliği bölümünden mezun olduktan sonra,
              2015 yılından itibaren çeşitli inşaat projelerinde aktif olarak görev aldım.
              XYZ İnşaat’ta Proje Mühendisi, ardından ABC Yapı’da Şantiye Şefi olarak çalıştım.
              2022’den bu yana ise freelance olarak statik proje danışmanlığı yapmaktayım.
              Statik proje çizimi, saha uygulamaları ve şantiye yönetimi konularında geniş bir deneyime sahibim.
              Yapı Denetim Sertifikası, AutoCAD & Sta4CAD uzmanlığı ve İş Sağlığı ve Güvenliği eğitimi gibi
              profesyonel yetkinliklerimle, her projede kalite ve güvenliği ön planda tutarım.
              Teknik bilgiyle estetiği birleştirerek yenilikçi çözümler üretmek,
              detaylara gösterdiğim özen ve mühendislik disiplinimle değer yaratmak temel prensibimdir.
            </Typography>

           
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutPage;
