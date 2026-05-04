import { Box, Container, Typography, Grid } from "@mui/material";
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
        disableGutters
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        <SectionBadge text="Kenapa sih kamu harus training di Skillvate?" />

        <Grid
          container
          spacing={3}
          alignItems="stretch"
          sx={{
            width: "100%",
            mx: "auto",
            justifyContent: "center",
          }}
        >
          {/* LEFT */}
          <Grid item xs={12} md={3} sx={{ display: "flex" }}>
            <Grid container spacing={3} direction="column" sx={{ flex: 1 }}>
              <Grid item sx={{ flex: 1 }}>
                <CardWhy
                  icon="static/images/why/why-icon1.svg"
                  title="Lorem Ipsum"
                />
              </Grid>
              <Grid item sx={{ flex: 1 }}>
                <CardWhy
                  icon="static/images/why/why-icon1.svg"
                  title="Lorem Ipsum"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* CENTER */}
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Box
              sx={{
                flex: 1,
                borderRadius: "28px",
                px: 12,
                py: 5,
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(135deg, #6C5CE7 0%, #8E7CFF 100%)",
                display: "flex",
                flexDirection: "column",
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
                  width: "75%",
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={3} sx={{ display: "flex" }}>
            <Grid container spacing={3} direction="column" sx={{ flex: 1 }}>
              <Grid item sx={{ flex: 1 }}>
                <CardWhy
                  icon="static/images/why/why-icon1.svg"
                  title="Lorem Ipsum"
                />
              </Grid>
              <Grid item sx={{ flex: 1 }}>
                <CardWhy
                  icon="static/images/why/why-icon1.svg"
                  title="Lorem Ipsum"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Why;
