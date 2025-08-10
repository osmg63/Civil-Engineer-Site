import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const ProjectCard = ({ project, reverse, index }) => {
  const theme = useTheme();

  // Küçük telefonlar için genişlik aralığı (320-430px)
  const isSmallPhone = useMediaQuery("(min-width:320px) and (max-width:430px)");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Small telefonlar için animasyonlar (yatay yerine düşey hareket)
  const imageVariantsSmallPhone = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.08 },
    },
  };

  const contentVariantsSmallPhone = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.08 + 0.08 },
    },
  };

  // Büyük ekranlar için animasyonlar (reverse kullanarak x yönü ayarlanıyor)
  const imageVariantsDefault = {
    hidden: { opacity: 0, x: reverse ? 100 : -100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.12 },
    },
  };

  const contentVariantsDefault = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.12 + 0.12, duration: 0.8, ease: "easeOut" },
    },
  };

  // Animasyonları koşula göre seç
  const imageVariants = isSmallPhone ? imageVariantsSmallPhone : imageVariantsDefault;
  const contentVariants = isSmallPhone ? contentVariantsSmallPhone : contentVariantsDefault;

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        pl: index % 2 === 1 ? 3 : 0,
        gap: { xs: 3, md: 10 },
        backgroundColor: index % 2 === 0 ? "#FAFBFC" : "#EEF1F6",
        mb: 6,
      }}
    >
      {/* Resim */}
      <MotionDiv
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          flex: "0 0 100%",
          maxWidth: "500px",
          height: "370px",
          overflow: "hidden",
          borderRadius: 12,
          boxShadow: !isSmallPhone && inView ? "0 15px 30px rgba(0,0,0,0.2)" : "none",
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} - ${project.location}`}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: 12,
          }}
        />
      </MotionDiv>

      {/* İçerik */}
      <MotionDiv
        variants={contentVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          flex: 1,
          maxWidth: "500px",
          marginTop: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "350px",
          textAlign: "left",
        }}
      >
        <Typography component="h2" variant="h5" gutterBottom sx={{ fontWeight: 700, color: "#2c3e50" }}>
          {project.title}
        </Typography>

        <Typography component="p" variant="body1" gutterBottom sx={{ color: "#34495e", lineHeight: 1.6 }}>
          {project.description}
        </Typography>

        {project.location && project.date && (
          <Typography component="p" variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
            📍 {project.location} | 📅 {project.date}
          </Typography>
        )}
      </MotionDiv>
    </Box>
  );
};

export default React.memo(ProjectCard);
