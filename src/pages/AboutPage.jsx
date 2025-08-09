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
                title="Hakkımızda"
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
2019 yılında kurulan firmamız, kurulduğu günden bu yana çeşitli inşaat projelerinde aktif olarak görev alarak sektörde güvenilir bir çözüm ortağı olmuştur. Statik proje çizimi, saha uygulamaları, güçlendirme proje ve uygulamaları, FRP ve çelik güçlendirme çalışmaları ile betonarme mantolama konularında kapsamlı deneyime sahibiz. Ayrıca alt yapı ve üst yapı inşaat projelerinde taahhüt ve müteahhitlik hizmetleri sunmaktayız.

Yapı Denetim Sertifikası, İdecad, Sta4CAD ve AutoCAD uzmanlığı ile İş Sağlığı ve Güvenliği eğitimleri gibi profesyonel yetkinliklerimiz sayesinde, her projede kalite ve güvenliği ön planda tutuyoruz. Teknik bilgi ile estetiği birleştirerek yenilikçi çözümler üretmek, detaylara gösterdiğimiz özen ve mühendislik disiplinimizle projelerimize değer katmak temel prensibimizdir.

Kadromuzda deneyimli mimar ve mühendislerden oluşan güçlü bir ekip yer almakta olup, disiplinler arası iş birliği ile projelerimizde bütüncül ve kaliteli çözümler sunmaktayız.            </Typography>


          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutPage;
