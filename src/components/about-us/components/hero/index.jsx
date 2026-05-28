import { Box, Container, Typography } from "@mui/material";
import Bubble from "./bubble-chat";

export default function AboutHero(data) {
  console.log(data)
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        pt: {
          xs: 14,
          md: 0,
        },

        height: {
          xs: "auto",
          md: "450px",
        },

        background: "linear-gradient(135deg, #6C5DD3, #7F73E6)",

        borderBottomLeftRadius: {
          xs: "80px",
          md: "180px",
        },

        pb: {
          xs: 6,
          md: 0,
        },
      }}
    >
      {/* BACKGROUND PATTERN */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,

          width: {
            xs: "100%",
            md: "50%",
          },

          height: "100%",

          backgroundImage: "url('/static/images/bg-pattern.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

          opacity: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            justifyContent: {
              xs: "center",
              md: "space-between",
            },

            minHeight: {
              xs: "auto",
              md: "550px",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: {
              xs: 6,
              md: 0,
            },
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              flex: 1,

              color: "white",

              width: {
                xs: "100%",
                md: "auto",
              },

              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                opacity: 0.8,
              }}
            >
              Tentang Skillvate
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",

                mt: 2,

                lineHeight: 1.1,
              }}
            >
              {data.data?.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,

                maxWidth: 500,

                mx: {
                  xs: "auto",
                  md: 0,
                },

                lineHeight: {
                  xs: 1.7,
                  md: 1.9,
                },
              }}
            >
              {data.data?.description}
            </Typography>
          </Box>

          {/* RIGHT BUBBLE */}
          <Box
            sx={{
              flex: 1,

              position: "relative",

              height: "400px",

              display: {
                xs: "none",
                md: "block",
              },
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