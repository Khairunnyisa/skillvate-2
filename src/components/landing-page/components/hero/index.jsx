import { Box, Container, Typography, Button } from "@mui/material";
import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#F3F1FF",
        pt: 20,
        pb: 23,
        overflow: "visible",
      }}
    >
      <Box
        component="img"
        src="public/static/images/hero/bg-hero.svg"
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
        src="public/static/images/hero/icon-heroleft.png"
        sx={{
          position: "absolute",
          left: "8%",
          top: "35%",
          width: 100,
          zIndex: 1,
        }}
      />

      {/* Icon Kanan */}
      <Box
        component="img"
        src="public/static/images/hero/icon-heroright.png"
        sx={{
          position: "absolute",
          right: "8%",
          top: "40%",
          width: 100,
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center", // biar rapi di mobile & desktop
        }}
      >
        <Typography variant="h2" sx={{ mb: 2 }}>
          Upgrade Your Skill
        </Typography>

        <Typography
          color="primary"
          sx={{
            mb: 2,
            fontSize: 56,
            fontWeight: "bold",
            fontFamily: "Raleway, sans-serif",
          }}
        >
          One Training At A Time
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "#666" }}>
          Skillvate menghadirkan berbagai training...
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="contained">Lorem Ipsum</Button>
          <Button variant="outlined">Learn More</Button>
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 50%)",
          display: "flex",
          gap: 3,
          alignItems: "flex-end", // 🔥 FIX
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/static/images/hero/hero-left.png"
          sx={{ width: 250, borderRadius: 4 }}
        />

        <Box
          sx={{
            width: 550,
            height: 320,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          <HeroSlider />
        </Box>

        <Box
          component="img"
          src="/static/images/hero/hero-right.png"
          sx={{ width: 250, borderRadius: 4 }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
