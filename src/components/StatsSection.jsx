import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: <EngineeringIcon sx={{ fontSize: 60, color: "#1976d2" }} />,
    count: 120,
    label: "Tamamlanan Proje",
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 60, color: "#388e3c" }} />,
    count: 80,
    label: "Mutlu Müşteri",
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 60, color: "#fbc02d" }} />,
    count: 10,
    label: "Yıllık Tecrübe",
  },
];

const StatsSection = () => {
  // useInView hook'u ile görünürlük takibi
  const { ref, inView } = useInView({
    threshold: 0.3, // %30 görünür olduğunda tetikle
    triggerOnce: true, // sadece bir kez tetiklenir
  });

  return (
    <Box
      ref={ref}
      sx={{
        maxWidth: 1200,
        mx: "auto",
        py: 8,
        px: 2,
        display: "flex",
        justifyContent: "space-between",
        gap: 3,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {stats.map(({ icon, count, label }) => (
        <Paper
          key={label}
          elevation={6}
          sx={{
            flex: "1 1 0",
            flexBasis: { xs: "100%", md: "0" }, // burada
            p: 4,
            textAlign: "center",
            borderRadius: 4,
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "default",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Box sx={{ mb: 2 }}>{icon}</Box>
          <Typography
            variant="h3"
            component="div"
            fontWeight="bold"
            color="text.primary"
          >
            {inView ? <CountUp end={count} duration={5} /> : 0}
            {count % 1 === 0 ? "+" : ""}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mt: 1, fontWeight: 600 }}
          >
            {label}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default StatsSection;
