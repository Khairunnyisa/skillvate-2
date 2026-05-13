import { Box, Container, Typography } from "@mui/material";
import Bubble from "./bubble-chat";

export default function AboutHero() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "auto", md: "450px" }, // 🔥 fleksibel di mobile
        background: "linear-gradient(135deg, #6C5DD3, #7F73E6)",
        borderBottomLeftRadius: { xs: "80px", md: "180px" }, // 🔥 biar gak terlalu gede di mobile
        pb: { xs: 6, md: 0 }, // 🔥 space bawah mobile
      }}
    >
      {/* Background pattern kanan */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          width: { xs: "100%", md: "50%" },
          height: "100%",
          backgroundImage: "url('/static/images/bg-pattern.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: { xs: "auto", md: "550px" },
            flexDirection: { xs: "column", md: "row" }, // 🔥 KUNCI
            gap: { xs: 6, md: 0 },
          }}
        >
          {/* LEFT */}
          <Box
            sx={{
              flex: 1,
              color: "white",
              width: { xs: "100%", md: "auto" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              Tentang Skillvate
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: "bold", mt: 2 }}>
              Elevate Your Skill
            </Typography>

            <Typography variant="body1" sx={{ mt: 2, maxWidth: 500, mx: { xs: "auto", md: 0 } }}>
              Skillvate turns your technical investments into measurable business results empowering
              every solution within i3 with scalable skills, practical training, and real-world impact.​
            </Typography>
          </Box>

          {/* RIGHT (BUBBLE) */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              height: { xs: "300px", md: "400px" }, // 🔥 tetap proporsional
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Bubble text="Linux Foundation" top="23%" left="20%" />
            <Bubble text="AWS" top="25%" right="10%" />
            <Bubble text="Oracle" top="45%" left="45%" />
            <Bubble text="Google" bottom="30%" right="10%" />
            <Bubble text="Microsoft" bottom="25%" left="20%" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}