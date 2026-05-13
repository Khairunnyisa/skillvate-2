import { Box, Typography, Button, Container } from "@mui/material";

const FaqCTA = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#F9FAFB" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            py: { xs: 6, md: 10 },
            px: { xs: 3, md: 8 },
            textAlign: "center",
            backgroundColor: "#F3F0FF", // 🔥 ungu muda banget
          }}
        >
          {/* 🔥 IMAGE BACKGROUND (PALING BAWAH) */}
          <Box
            component="img"
            src="/static/images/gradient-faq.svg" // ganti sesuai asset kamu
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              opacity: 100, // 🔥 biar subtle
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* 🔥 CONTENT */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* TITLE */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "#1F2937",
              }}
            >
              Didn’t find what you were looking for?
            </Typography>

            {/* DESC */}
            <Typography
              sx={{
                maxWidth: "600px",
                mx: "auto",
                color: "#6B7280",
                mb: 5,
              }}
            >
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </Typography>

            {/* BUTTON */}
            <Button
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 500,
                background: "linear-gradient(135deg, #6C5CE7, #7F6BFF)",
                color: "#fff",
                boxShadow: "none",
                "&:hover": {
                  background: "linear-gradient(135deg, #5a4ed1, #6c5ce7)",
                },
              }}
            >
              Speak with an expert
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqCTA;