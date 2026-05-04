import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";
import TestimonialCard from "../../../cards/cardTestimoni";

const Testimoni = () => {
  const [swiper, setSwiper] = useState(null);
  const [progress, setProgress] = useState(0);

  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },

            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              What Our <br /> Customer Are Saying
            </Typography>

            {/* NAVIGATION */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 4, gap: 2 }}>
              <IconButton onClick={() => swiper?.slidePrev()}>
                <ArrowBackIcon />
              </IconButton>

              {/* PROGRESS BAR */}
              <Box
                sx={{
                  width: 120,
                  height: 6,
                  background: "#E5E7EB",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${progress}%`, // 🔥 DINAMIS
                    height: "100%",
                    background: "#6C63FF",
                    transition: "0.3s",
                  }}
                />
              </Box>

              <IconButton onClick={() => swiper?.slideNext()}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box sx={{ overflow: "hidden" }}>
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(s) => {
                const total = s.slides.length - 1;
                const current = s.activeIndex;
                setProgress((current / total) * 100);
              }}
              spaceBetween={24}
              slidesPerView={"auto"}
            >
              {[...Array(10)].map((_, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <TestimonialCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimoni;
