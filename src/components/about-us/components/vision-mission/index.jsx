import { Box, Typography, Container } from "@mui/material";

const VisionMission = () => {
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
                lineHeight: 1.15,
                color: "#000",
                mb: 4,
                maxWidth: "620px",
              }}
            >
              Sejuta digital talent untuk Indonesia
            </Typography>

            {/* DESC */}
            <Typography
            variant="body1"
              sx={{
                
                lineHeight: 1.9,
                color: "#1F2937",
                maxWidth: "650px",
              }}
            >
              Visi kami adalah untuk menghasilkan sejuta digital talent
              untuk Indonesia melalui pendidikan vokasi digital.
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

            {/* TITLE */}
            <Typography
            variant="h1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#000",
                mb: 4,
                maxWidth: "700px",
              }}
            >
              "To train, certify, and connect youth to jobs"
            </Typography>

            {/* DESC */}
            <Typography
            variant="body1"
              sx={{
                
                lineHeight: 1.9,
                color: "#1F2937",
                maxWidth: "700px",
              }}
            >
              Itulah misi kami. Dengan proses pembelajaran yang menarik
              dan efektif, siapapun dapat belajar digital skills,
              mendapatkan sertifikasi, dan tentunya siap kerja!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMission;