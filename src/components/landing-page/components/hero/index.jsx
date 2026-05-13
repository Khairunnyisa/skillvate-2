import { Box, Container, Typography, Button } from "@mui/material";
import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#F3F1FF",
        pt: { xs: 12, md: 20 },
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
            mb: 4,
            color: "#666",
            fontSize: { xs: 14, md: 16 },
          }}
        >
          Professional training & certification with hands-on learning experiences
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Button variant="contained">Lorem Ipsum</Button>
          <Button variant="outlined">Learn More</Button>
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
            width: { xs: "100%", sm: 360, md: 550 }, // 🔥 full width di mobile
            maxWidth: 550, // 🔥 biar gak melebar liar
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