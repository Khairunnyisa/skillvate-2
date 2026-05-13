import { Box, Typography } from "@mui/material";

const Bubble = ({
  text,
  top,
  left,
  right,
  bottom,
  direction = "left", // 🔥 left / right
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        bgcolor: "#F3F4F6",
        px: 3,
        py: 1,
        borderRadius: "999px",
        display: "inline-flex",
        alignItems: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",

        // 🔥 SEGITIGA
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -10,
          ...(direction === "left"
            ? { left: 40 }
            : { right: 40 }),

          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "12px solid #F3F4F6",

          // 🔥 SHADOW SEGITIGA (trick)
          filter: "drop-shadow(0 6px 6px rgba(0,0,0,0.08))",
        },
      }}
    >
      <Typography fontWeight={600} fontSize={18} color="#1F2937">
        {text}
      </Typography>
    </Box>
  );
};

export default Bubble;