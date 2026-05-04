import { Box, Container, Typography, Grid } from "@mui/material";
import CardWhy from "../../../cards/cardWhy";
import SectionBadge from "../../../badge/sectionBadge";
import CardTraining from "../../../cards/cardTraining";

const TrainingCard = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        bgcolor: "#7560E2",
        py: 12,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center", // biar rapi di mobile & desktop
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: 600,
            color: "white",
          }}
        >
          Jadwal Training Terkini
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mx: "auto",
            opacity: "80%",
            mb: 6,
            fontWeight: 600,
            maxWidth: 900,
            color: "white",
          }}
        >
          Skillvate menawarkan berbagai peluang yang sesuai dengan keterampilan
          dan ambisi Kamu. Daftar hari ini dan ambil langkah berikutnya menuju
          karier Impian. Masa depan Kamu dimulai di sini.
        </Typography>

        <Grid container spacing={3} mt={4} justifyContent="center">
          {[...Array(6)].map((_, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <CardTraining />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingCard;
