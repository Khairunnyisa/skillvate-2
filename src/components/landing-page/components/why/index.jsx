import { Box, Container, Typography } from "@mui/material";
import CardWhy from "../../../cards/cardWhy";
import SectionBadge from "../../../badge/sectionBadge";

const Why = () => {
  return (
    <Box
      sx={{
        mt: 15,
        bgcolor: "#F9FAFB",
        py: 12,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        <SectionBadge text="Kenapa sih kamu harus training di Skillvate?" />

        {/* 🔥 MAIN FLEX (INI KUNCI) */}
        <Box
  sx={{
    display: "flex",
    gap: 3,
    alignItems: "stretch",
    justifyContent: "center",

    flexWrap: { xs: "wrap", md: "nowrap" }, // 🔥 KUNCI
  }}
>
  {/* LEFT */}
  <Box
    sx={{
      width: { xs: "100%", md: 260 }, // 🔥 full di mobile
      display: "flex",
      flexDirection: "column",
      gap: 3,
    }}
  >
    <CardWhy
      icon="static/images/why/why-icon1.svg"
      title="Improved team capability & readiness."
    />
    <CardWhy
      icon="static/images/why/why-icon1.svg"
      title="Accelerated technology adoption.​"
    />
  </Box>

  {/* CENTER */}
  <Box
    sx={{
      width: { xs: "100%", md: 500 }, // 🔥 full di mobile
      borderRadius: "28px",
      px: { xs: 4, md: 8 }, // 🔥 padding mobile disesuaikan
      py: { xs: 6, md: 5 },
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      background:
        "linear-gradient(135deg, #6C5CE7 0%, #8E7CFF 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography variant="h2">Why Skillvate?</Typography>

    <Box
      component="img"
      src="static/images/why/why-img (1).png"
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "60%", md: "75%" }, // 🔥 biar gak kegedean di mobile
      }}
    />
  </Box>

  {/* RIGHT */}
  <Box
    sx={{
      width: { xs: "100%", md: 260 }, // 🔥 full di mobile
      display: "flex",
      flexDirection: "column",
      gap: 3,
    }}
  >
    <CardWhy
      icon="static/images/why/why-icon1.svg"
      title="Learn by doing, boost productivity."
    />
    <CardWhy
      icon="static/images/why/why-icon1.svg"
      title="Lorem Ipsum "
    />
  </Box>
</Box>
      </Container>
    </Box>
  );
};

export default Why;