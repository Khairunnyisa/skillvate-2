import { Box, Typography } from "@mui/material";

const SectionBadge = ({ text, variant = "purple", center = true }) => {
  const isPurple = variant === "purple";

  return (
    <Box display="flex" justifyContent={center ? "center" : "flex-start"} mb={8}>
      <Box
        sx={{
          display: "inline-flex", 
          alignItems: "center",
          gap: 1.5,
          bgcolor: isPurple ? "#EDEBFF" : "#FFFFFF",
          px: 4,
          py: 1.5,
          borderRadius: "999px",
        }}
      >
        {/* DOT */}
        <Box
          sx={{
            width: 10,
            height: 10,
            bgcolor: "#6C5CE7",
            borderRadius: "50%",
          }}
        />

        {/* TEXT */}
        <Typography
          sx={{
            color: "#6C5CE7",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionBadge;