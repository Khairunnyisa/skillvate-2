import { Box, Typography } from "@mui/material";

const TimelineCard = ({ title, direction }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: 320,
          md: 430,
        },

        minHeight: {
          xs: "auto",
          md: 170,
        },

        bgcolor: "#F1F5F9",

        borderRadius: {
          xs: "12px",
          md: "14px",
        },

        p: {
          xs: 2,
          md: 3,
        },

        position: "relative",

        ...(direction === "right" && {
          "&::after": {
            content: '""',
            position: "absolute",
            right: {
              xs: -12,
              md: -18,
            },
            top: "50%",
            transform: "translateY(-50%)",

            borderTop: {
              xs: "12px solid transparent",
              md: "18px solid transparent",
            },

            borderBottom: {
              xs: "12px solid transparent",
              md: "18px solid transparent",
            },

            borderLeft: {
              xs: "12px solid #F1F5F9",
              md: "18px solid #F1F5F9",
            },
          },
        }),

        ...(direction === "left" && {
          "&::after": {
            content: '""',
            position: "absolute",
            left: {
              xs: -12,
              md: -18,
            },
            top: "50%",
            transform: "translateY(-50%)",

            borderTop: {
              xs: "12px solid transparent",
              md: "18px solid transparent",
            },

            borderBottom: {
              xs: "12px solid transparent",
              md: "18px solid transparent",
            },

            borderRight: {
              xs: "12px solid #F1F5F9",
              md: "18px solid #F1F5F9",
            },
          },
        }),
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.1rem",
            md: "1.5rem",
          },

          lineHeight: {
            xs: 1.5,
            md: 1.7,
          },

          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TimelineCard;