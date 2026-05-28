import { Box, Container, Typography } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#F3F1FF",
        pt: { xs: 18, md: 20 },
        pb: { xs: 30, md: 23 },
        overflow: "visible",
      }}
    >
      {/* Background */}
      <Box
        component="img"
        src="/static/images/hero/bg-hero.svg"
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          opacity: 0.5,
        }}
      />

      {/* Icon kiri */}
      <Box
        component="img"
        src="/static/images/hero/icon-heroleft.png"
        sx={{
          position: "absolute",
          left: "8%",
          top: "35%",
          width: { xs: 60, md: 100 },
          zIndex: 1,
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Icon kanan */}
      <Box
        component="img"
        src="/static/images/hero/icon-heroright.png"
        sx={{
          position: "absolute",
          right: "8%",
          top: "40%",
          width: { xs: 60, md: 100 },
          zIndex: 1,
          display: { xs: "none", md: "block" },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontSize: { xs: 22, md: undefined },
          }}
        >
          Helping professionals and organizations stay ahead
        </Typography>

        <Typography
          color="primary"
          sx={{
            mb: 2,
            fontSize: { xs: 38, md: 65 },
            fontWeight: "bold",
            fontFamily: "Raleway, sans-serif",
            lineHeight: 1.2,
          }}
        >
          Elevate Your Skill
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 5,
            color: "#666",
            fontSize: { xs: 14, md: 16 },
          }}
        >
          Professional training & certification with hands-on learning
          experiences
        </Typography>

        {/* SCROLL BUTTON */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            onClick={() => {
              const section = document.getElementById("next-section");

              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
            sx={{
              position: "relative",
              width: 55,
              height: 55,
              borderRadius: "50%",

              background:
                "linear-gradient(135deg, #8B7BFF 0%, #7560E2 50%, #5B43D6 100%)",

              boxShadow: "0 10px 30px rgba(117, 96, 226, 0.35)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.35s ease",
              zIndex: 5,

              "&:hover": {
                transform: "translateY(5px) scale(1.05)",
                boxShadow: "0 14px 40px rgba(117, 96, 226, 0.45)",
              },

              // OUTER PULSE
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "3px solid rgba(117, 96, 226, 0.35)",
                animation: "pulse 2.2s infinite",
              },

              // SECOND PULSE
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "3px solid rgba(168, 149, 255, 0.2)",
                animation: "pulse 2.2s infinite 1.1s",
              },

              "@keyframes pulse": {
                "0%": {
                  transform: "scale(1)",
                  opacity: 1,
                },

                "70%": {
                  opacity: 0.4,
                },

                "100%": {
                  transform: "scale(1.9)",
                  opacity: 0,
                },
              },
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                color: "#fff",
                fontSize: 34,
                zIndex: 2,
                filter: "drop-shadow(0 2px 10px rgba(255,255,255,0.35))",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* ===== HERO VISUAL ===== */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: {
            xs: "translate(-50%, 65%)",
            md: "translate(-50%, 50%)",
          },
          display: "flex",
          gap: { xs: 2, md: 3 },
          alignItems: "flex-end",
          justifyContent: "center",
          width: "100%",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* LEFT IMAGE */}
        <Box
          component="img"
          src="/static/images/hero/hero-left.png"
          sx={{
            width: 250,
            borderRadius: 4,
            display: { xs: "none", md: "block" },
          }}
        />

        {/* SLIDER */}
        <Box
          sx={{
            width: { xs: "100%", sm: 360, md: 550 },
            maxWidth: 550,
            height: { xs: 180, sm: 220, md: 320 },
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <HeroSlider />
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          component="img"
          src="/static/images/hero/hero-right.png"
          sx={{
            width: 250,
            borderRadius: 4,
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
