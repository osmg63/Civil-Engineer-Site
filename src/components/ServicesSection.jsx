import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import TerrainIcon from "@mui/icons-material/Terrain";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const services = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
    title: "Statik Proje Tasarımı",
    description:
      "Dayanıklı ve güvenilir yapılar için ekonomiyi gözeten statik proje çözümleri sunuyoruz.",
  },
  {
    icon: <ConstructionIcon sx={{ fontSize: 60, color: "#388e3c" }} />,
    title: "İnşaat Yönetimi",
    description:
      "Projelerinizin her aşamasında planlama, kontrol ve koordinasyon hizmetleri sağlıyoruz.",
  },
  {
    icon: <TerrainIcon sx={{ fontSize: 60, color: "#fbc02d" }} />,
    title: "Zemin Etüdü",
    description:
      "Güvenli temeller için zemin analizleri ve raporlama desteği sunuyoruz.",
  },
  {
    icon: <HomeWorkIcon sx={{ fontSize: 60, color: "#d32f2f" }} />,
    title: "Kentsel Dönüşüm ",
    description:
      "Kentsel dönüşüm süreçlerinizde yönetim ve danışmanlık hizmetleri ile yanınızdayız.",
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
