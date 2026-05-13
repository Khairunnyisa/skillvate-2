import { Box, Typography } from "@mui/material";

const TimelineCard = ({ title, direction }) => {
  return (
    <Box
      sx={{
        width: 430,
        minHeight: 170,
        bgcolor: "#F1F5F9",
        borderRadius: "14px",
        p: 3,
        position: "relative",

        ...(direction === "right" && {
          "&::after": {
            content: '""',
            position: "absolute",
            right: -18,
            top: "50%",
            transform: "translateY(-50%)",
            borderTop: "18px solid transparent",
            borderBottom: "18px solid transparent",
            borderLeft: "18px solid #F1F5F9",
          },
        }),

        ...(direction === "left" && {
          "&::after": {
            content: '""',
            position: "absolute",
            left: -18,
            top: "50%",
            transform: "translateY(-50%)",
            borderTop: "18px solid transparent",
            borderBottom: "18px solid transparent",
            borderRight: "18px solid #F1F5F9",
          },
        }),
      }}
    >
      <Typography
      variant="h4"
        sx={{
         
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TimelineCard;