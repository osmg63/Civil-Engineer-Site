import React from 'react';
import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp'; // X için Twitter ikonu
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#2E3B55',
        color: '#fff',
        py: 5,
        px: { xs: 3, md: 8 },
        mt: 6,
        borderTop: '4px solid #1B2433',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        spacing={{ xs: 4, md: 0 }}
        maxWidth="1200px"
        mx="auto"
        alignItems="flex-start"
      >
        {/* Hakkımızda ve Slogan */}
        <Box sx={{ maxWidth: 320 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            C1 İnşaat 
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Güvenilir, kaliteli ve yenilikçi inşaat mühendisliği çözümleriyle projelerinizi geleceğe taşıyoruz.
          </Typography>
        </Box>

        {/* İletişim Bilgileri */}
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            İletişim
          </Typography>
          <Stack spacing={1} direction="column">
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Adres: Okan Towers Gaziantep, Türkiye
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Telefon: +90 506 934 8329
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              E-posta: mustafagumus@okantowers.com
            </Typography>
          </Stack>
        </Box>

        {/* Hızlı Linkler */}
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Hızlı Linkler
          </Typography>
          <Stack spacing={1}>
            <Link href="/" color="inherit" underline="hover">
              Anasayfa
            </Link>
            <Link href="/about" color="inherit" underline="hover">
              Hakkımda
            </Link>
            <Link href="/projects" color="inherit" underline="hover">
              Projeler
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              İletişim
            </Link>
          </Stack>
        </Box>

        {/* Sosyal Medya */}
        <Box>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            Sosyal Medya
          </Typography>
          <Stack direction="row" spacing={1}>
        
            <IconButton
              component="a"
              href="https://www.instagram.com/gumus6641?igsh=NGlqcXFoMGcwZ2c1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{ color: '#fff' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://wa.me/905069348329"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              sx={{ color: '#fff' }}
            >
              <WhatsappIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com/mustafa.gumus.31149"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              sx={{ color: '#fff' }}
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      <Typography
        variant="body2"
        align="center"
        mt={5}
        sx={{ opacity: 0.6 }}
      >
        © {new Date().getFullYear()} C1 İnşaat - Tüm Hakları Saklıdır.
      </Typography>
    </Box>
  );
};

export default Footer;
