import { Box, Typography, Container } from "@mui/material";

const VisionMission = (data) => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#F9FAFB",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 8, md: 12 },
            alignItems: "start",
          }}
        >
          {/* VISI */}
          <Box>
            {/* LABEL */}
            <Typography
              variant="h2"
              sx={{
                color: "#7C6CF2",
                mb: 3,
              }}
            >
              Visi
            </Typography>

            {/* TITLE */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#000",
                mb: 4,
                maxWidth: "620px",
              }}
            >
              {data.data?.vision}
            </Typography>
          </Box>

          {/* MISI */}
          <Box>
            {/* LABEL */}
            <Typography
              variant="h2"
              sx={{
                color: "#7C6CF2",
                mb: 3,
              }}
            >
              Misi
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {data.data?.mission
                ?.split("\n")
                .filter((item) => item.trim() !== "")
                .map((item, index) => (
                  <Typography
                    key={index}
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.5,
                      color: "#000",
                      maxWidth: "620px",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMission;
