import { Box, Container, Typography } from "@mui/material";

const logos = [
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
  "/static/images/partnership/bank-mega.svg",
];

const Partnership = () => {
  return (
    <Box
      sx={{
        mt:35,
        py: 10,
        backgroundImage: "url('/static/images/partnership/bg-partnership.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center", // biar rapi di mobile & desktop
        }}>
        {/* TITLE */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 600,
          }}
        >
          Our{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Partnership
          </Box>
        </Typography>

        {/* LOGO GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 6,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {logos.map((logo, index) => (
            <Box
              key={index}
              component="img"
              src={logo}
              sx={{
                height: 40,
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.7,
                transition: "0.3s",
                "&:hover": {
                  filter: "grayscale(0%)",
                  opacity: 1,
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partnership;