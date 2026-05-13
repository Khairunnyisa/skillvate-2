import { Box, Typography, IconButton } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const CardWhy = ({ icon, title }) => {
  return (
    <Box
      sx={{
        bgcolor: "#E9E6FF",
        borderRadius: "20px",
        p: 3,

        height: "100%",
        minHeight: 180,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      {/* TOP */}
      <Box display="flex" justifyContent="space-between">
        <Box
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#6C5CE7",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component="img" src={icon} sx={{ width: 30, height: 30 }} />
        </Box>

        {/* <IconButton
          sx={{
            bgcolor: "#DCD6FF",
            borderRadius: "12px",
            width: 43,
            height: 43,
          }}
        >
          <NorthEastIcon sx={{ fontSize: 18 }} />
        </IconButton> */}
      </Box>

      {/* BOTTOM */}
      <Box
        mt={3}
        sx={{
          width: "100%", 
          textAlign: "left", 
        }}
      >
        <Typography
     
          sx={{
            mb: 2,
            fontSize: 25,
            fontWeight: 700,
            fontFamily: "Raleway, sans-serif",
          }}
        >
          {title}
        </Typography>

        {/* <Typography
          color="text.secondary"
          fontSize={14}
          sx={{
            textAlign: "left", // 🔥 ini juga
          }}
        >
          Lorem Ipsum
        </Typography> */}
      </Box>
    </Box>
  );
};

export default CardWhy;
