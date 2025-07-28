import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    comment:
      "Proje süresince tüm aşamalarda profesyonel destek aldık. Tavsiye ederim!",
  },
  {
    name: "Merve Karaca",
    comment: "İşini titizlikle yapan, güvenilir bir mühendis.",
  },
  {
    name: "Ali Demir",
    comment:
      "Çalışmaları zamanında ve yüksek kalitede teslim etti. Kesinlikle tekrar çalışırım.",
  },
  {
    name: "Selin Kaya",
    comment: "Detaylara önem veren ve güvenilir çalışma arkadaşı.",
  },
  
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;
  const sliderRef = useRef(null);

  // 🔹 2’şer 2’şer otomatik kaydır
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2 >= totalSlides ? 0 : prev + 2));
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Gap ve container genişliği için değerler
  const gapPx = 16; // MUI'de gap=2 → 16px
  const containerWidth = 1350;

  // 🔹 Kayma mesafesini gap ile hesapla
  const translateValue = `calc(-${currentIndex * 50}% - ${
    currentIndex * (gapPx / containerWidth) * 100
  }%)`;

  return (
    <Box mt={4} maxWidth={1250} mx="auto">
      <Typography
        variant="h5"
        gutterBottom
        textAlign="center"
        mb={4}
        fontWeight={700}
      >
        Müşteri Yorumları
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              transform: `translateX(${translateValue})`,
              transition: "transform 0.8s ease-in-out",
              width: `${(totalSlides / 2) * 100}%`,
              gap: 2,
            }}
          >
            {testimonials.map((t, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: "0 0 calc(50% - 8px)",
                  bgcolor: "#ffffff", // Temiz ve sade beyaz arka plan
                  p: 3,
                  my: 5,
                  borderRadius: 4, // Hafif yuvarlatılmış köşeler
                  minHeight: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#333",
                  boxSshadow: "0px 2px 15px rgba(0, 0, 0, 0.1)",
                  // Hover efektine hazır
                }}
              >
                {/* Açılış tırnağı */}
                <Typography
                  sx={{
                    fontSize: 48,
                    lineHeight: 0.8,
                    color: "#d4af37",
                    fontWeight: "bold",
                  }}
                >
                  “
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", mb: 2, px: 1, flexGrow: 1 }}
                >
                  {t.comment}
                </Typography>

                {/* Kapanış tırnağı */}
                <Typography
                  sx={{
                    fontSize: 48,
                    lineHeight: 0.8,
                    color: "#d4af37",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  ”
                </Typography>

                <Typography
                  variant="subtitle2"
                  align="right"
                  sx={{ fontWeight: 600 }}
                >
                  — {t.name}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </motion.div>

      {/* 🔹 Navigasyon Noktaları */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, gap: 1 }}>
        {Array.from({ length: Math.ceil(totalSlides / 2) }).map((_, idx) => (
          <Box
            key={idx}
            onClick={() => setCurrentIndex(idx * 2)}
            sx={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              bgcolor: currentIndex === idx * 2 ? "#d4af37" : "#ccc",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonial;
