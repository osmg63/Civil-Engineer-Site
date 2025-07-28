import React from "react";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ProjectCard = ({ project, reverse, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animasyon varyantları - daha akıcı ve gecikmeli
  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? 100 : -100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 },
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2 + 0.4, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "center" },
        pl: index % 2 === 1 ? 3 : 0, // 🔹 sadece tek numaralılar için ekstra padding-left
        gap: { xs: 3, md: 10 },
       backgroundColor: index % 2 === 0 ? "#FAFBFC" : "#EEF1F6",
        mb:6
      }}
    >
      {/* Resim */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          flex: "0 0 100%",
          maxWidth: "500px",
          height: "370px",

          overflow: "hidden",
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
            borderRadius: "12px",
          }}
        />
      </motion.div>

      <motion.div
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
          textAlign: "left", // Burayı hep "left" yapıyoruz
        }}
      >
        <Typography
          component="h2"
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "700", color: "#2c3e50" }}
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
      </motion.div>
    </Box>
  );
};

export default React.memo(ProjectCard);
