import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  IconButton,
  Link as MuiLink,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import insaatBg from "../../assets/insaat-bg.jpg";

const maxContentWidth = 1200;

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
    position: "relative",
    color: "white",
    minHeight: { xs: "450px", md: "600px" },
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundImage: `url(${insaatBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    mt: "-64px", // ✅ Resmi yukarı taşır
    
    // parlaklık azaltıldı
    "&::before": {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bgcolor: "rgba(0,0,0,0.10)",
  zIndex: 1,
  pointerEvents: "none",  // İşte bu satır eklendi
},

  }}
>
  <Container
    maxWidth={false}
    sx={{
      maxWidth: `${maxContentWidth}px`,
      mx: "auto",
      px: { xs: 3, md: 3 },
      
    }}
  >
    <Box
      sx={{
        width: "100%",
        textAlign: "left",
        pt: { xs: 12, sm: 14, md: 16 }, // ✅ İçerik navbarın altından başlar
      }}
    >
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              mb: 3,
              lineHeight: 1.2,
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" }, // ✅ Responsive
               textShadow: "0 0 3px rgba(0,0,0,0.6)",
    color: "#fff",
            }}
          >
            İnşaat Mühendisi Osman Gümüş
          </Typography>

          <Typography
            variant="h6"
            paragraph
            sx={{
              maxWidth: "600px",
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
              mb: 4,
              lineHeight: 1.6,
              opacity: 0.9,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" }, // ✅ Responsive
              
            }}
          >
            Sağlam yapılar, güvenilir çözümler. 10+ yıllık tecrübe ile altyapı ve
            üstyapı projelerinde yanınızdayım.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="flex-start"
            mb={5}
          >
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2E3B55",
                  borderColor: "white",
                },
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Projelerimi Gör
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              İletişime Geç
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            justifyContent="flex-start"
            aria-label="Sosyal medya hesapları"
            flexWrap="wrap"
            sx={{ gap: { xs: 1, sm: 3 } }}
          >
            <IconButton
              component={MuiLink}
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              sx={{
                color: "white",
                "&:hover": { color: "#E1306C" },
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={MuiLink}
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              sx={{
                color: "white",
                "&:hover": { color: "#0A66C2" },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={MuiLink}
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              sx={{
                color: "white",
                "&:hover": { color: "#1877F2" },
              }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>

            <IconButton
              component={MuiLink}
              href="https://wa.me/905XXXXXXXXX"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              sx={{
                color: "white",
                "&:hover": { color: "#25D366" },
              }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
