import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FaqItem = ({ text }) => {
  return (
    <Box
      sx={{
        width: "100%", // 🔥 FIX BIAR SEMUA SAMA LEBAR
        bgcolor: "#fff",
        borderRadius: "14px",
        px: 4,
        py: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography fontSize={18} fontWeight={500}>
        {text}
      </Typography>

      <IconButton
        sx={{
          bgcolor: "#6C5CE7",
          color: "#fff",
          width: 40,
          height: 40,
          flexShrink: 0, // 🔥 biar icon gak ngepush layout
          "&:hover": {
            bgcolor: "#5a4ed1",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default FaqItem;