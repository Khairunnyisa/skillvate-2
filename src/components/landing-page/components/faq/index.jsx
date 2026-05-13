import { Box, Container, Typography, Grid, Button } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FaqItem from "../../../cards/cardFaq";
import SectionBadge from "../../../badge/sectionBadge";

const faqData = [
  "Networking Opportunities",
  "Affordable Pricing",
  "Career Support Services",
  "Personalized Learning Paths",
  "Access to Exclusive Resources",
  "Community Engagement",
];

const Faq = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "#F9FAFB",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        {/* CARD WRAPPER */}
        <Box
          sx={{
            bgcolor: "#F1EFFC",
            borderRadius: "20px",
            p: { xs: 4, md: 8 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 🔥 BACKGROUND IMAGE */}
          <Box
            component="img"
            src="/static/images/gradient-faq.svg" // ganti sesuai asset lo
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              opacity: 0.3,
              pointerEvents: "none",
            }}
          />

          {/* 🔥 HEADER */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            mb={6}
          >
            {/* LEFT */}
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <SectionBadge text="FAQ" variant="white" />
              </Box>

              <Typography variant="h2" mb={2}>
                Frequently Ask Question
              </Typography>

              <Typography
                sx={{
                  color: "#6B7280",
                  maxWidth: 500,
                }}
              >
                Siker menawarkan berbagai peluang yang sesuai dengan
                keterampilan dan ambisi Kamu. Daftar hari ini dan ambil langkah
              </Typography>
            </Grid>

            {/* RIGHT BUTTON */}
            <Grid item xs={12} md="auto">
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "#000",
                  borderRadius: "12px",
                  px: 3,
                  py: 1.5,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                  },
                }}
              >
                View More
              </Button>
            </Grid>
          </Grid>

          {/* 🔥 FAQ GRID */}
          <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: 3,
    alignItems: "start", // 🔥 INI KUNCINYA
  }}
>
            {faqData.map((item, i) => (
              <FaqItem key={i} text={item} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Faq;
