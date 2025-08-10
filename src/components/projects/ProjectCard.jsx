import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const ProjectCard = ({ project, index }) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const baseDelay = index * 0.3; // Delay arttı, daha yavaş sıra efekti için

  // Daha yumuşak ve şık bir easing fonksiyonu cubic bezier
  const easing = [0.42, 0, 0.58, 1]; // easeInOut benzeri, yumuşak geçiş

  const imageVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: easing, delay: baseDelay },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: easing, delay: baseDelay + 0.3 },
    },
  };

  let maxWidthImage = "100%";
  let maxWidthContent = "100%";
  let heightImage = 250;

  if (isSm) {
    maxWidthImage = "450px";
    maxWidthContent = "450px";
    heightImage = 300;
  } else if (isMd) {
    maxWidthImage = "480px";
    maxWidthContent = "480px";
    heightImage = 340;
  } else if (isLg || isXl) {
    maxWidthImage = "500px";
    maxWidthContent = "500px";
    heightImage = 370;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        gap: { xs: 3, md: 8 },
        backgroundColor: index % 2 === 0 ? "#FAFBFC" : "#EEF1F6",
        mb: 6,
        px: { xs: 2, md: 0 },
      }}
    >
      <MotionDiv
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: "0 0 auto",
          maxWidth: maxWidthImage,
          width: "100%",
          height: heightImage,
          overflow: "hidden",
          borderRadius: 12,
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
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

      <MotionDiv
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          flex: 1,
          maxWidth: maxWidthContent,
          marginTop: { xs: 2, md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: heightImage,
          textAlign: "left",
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 700, color: "#2c3e50" }}
        >
          {project.title}
        </Typography>

        <Typography
          component="p"
          variant="body1"
          gutterBottom
          sx={{ color: "#34495e", lineHeight: 1.6 }}
        >
          {project.description}
        </Typography>

        {project.location && project.date && (
          <Typography
            component="p"
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            📍 {project.location} | 📅 {project.date}
          </Typography>
        )}
      </MotionDiv>
    </Box>
  );
};

export default React.memo(ProjectCard);
