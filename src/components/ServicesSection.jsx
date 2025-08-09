import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";
import BuildIcon from "@mui/icons-material/Build";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LayersIcon from "@mui/icons-material/Layers";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import FoundationIcon from "@mui/icons-material/Foundation";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const services = [
  {
    icon: <SpeedIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
    title: "Performans Analizi",
    description:
      "Mevcut yapıların deprem ve dayanıklılık performansını teknik analizlerle değerlendiriyoruz.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 60, color: "#388e3c" }} />,
    title: "Güçlendirme Proje ve Uygulama",
    description:
      "Binalarınızı yönetmeliklere uygun şekilde güçlendirme projeleri hazırlayıp uyguluyoruz.",
  },
  {
    icon: <ArchitectureIcon sx={{ fontSize: 60, color: "#fbc02d" }} />,
    title: "Statik Proje",
    description:
      "Güvenli, dayanıklı ve ekonomik yapılar için statik proje tasarımı yapıyoruz.",
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
    title: "Müteahhitlik",
    description:
      "Anahtar teslim inşaat projelerinde profesyonel müteahhitlik hizmeti sunuyoruz.",
  },
  {
    icon: <LayersIcon sx={{ fontSize: 60, color: "#009688" }} />,
    title: "FRP Güçlendirme",
    description:
      "Fiber takviyeli polimer sistemlerle yapılarınızın dayanımını artırıyoruz.",
  },
  {
    icon: <BuildCircleIcon sx={{ fontSize: 60, color: "#ff9800" }} />,
    title: "Çelik Güçlendirme",
    description:
      "Çelik elemanlarla bina taşıyıcı sistemlerini güçlendiriyoruz.",
  },
  {
    icon: <FoundationIcon sx={{ fontSize: 60, color: "#795548" }} />,
    title: "Betonarme Mantolama",
    description:
      "Mevcut kolon ve kirişleri betonarme kaplama yöntemi ile güçlendiriyoruz.",
  },
  {
    icon: <AccountTreeIcon sx={{ fontSize: 60, color: "#607d8b" }} />,
    title: "Alt Yapı ve Üst Yapı İnşaat",
    description:
      "Yol, kanalizasyon, bina ve diğer tüm alt/üst yapı projelerini hayata geçiriyoruz. Ve taahhüt sunuyoruz.",
  },
];


const MotionPaper = motion(Paper); // framer-motion ile animasyon eklenebilir Paper

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 1200,
        mx: "auto",
        px: { xs: 2, md: 3 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        mb={6}
        sx={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          color: "#2E3B55",
          letterSpacing: 1.2,
        }}
      >
        Hizmetlerimiz
      </Typography>

      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={{ xs: 4, md: 3 }}
      >
        {services.map(({ icon, title, description }, idx) => {
          // useInView hook'u her kart için
          const [ref, inView] = useInView({
            triggerOnce: true, // sadece bir kere animasyon çalışsın
            threshold: 0.1, // %10 görünürlükte tetiklesin
          });

          return (
            <MotionPaper
              key={title}
              ref={ref}
              elevation={6}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.4 }}
              sx={{
                width: {
                  xs: "100%", // Mobilde tam genişlik
                  sm: "48%", // Küçük tabletlerde 2'li
                  md: "23%", // Desktop 4'lü
                },
                p: 4,
                borderRadius: 3,
                backgroundColor: "#fff",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.2)",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: 280,
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ mb: 3 }}>{icon}</Box>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 1,
                  color: "#1976d2",
                  width: "100%",
                  textAlign: "center",
                  minHeight: { xs: 40, md: 60 }, // Responsive minHeight
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.6 }}
              >
                {description}
              </Typography>
            </MotionPaper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ServicesSection;
