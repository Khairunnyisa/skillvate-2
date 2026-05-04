import { Box, Typography, IconButton } from "@mui/material";
import NorthEastIcon from '@mui/icons-material/NorthEast';

const CardWhy = ({ icon, title }) => {
  return (
    
    
    <Box
      sx={{
        bgcolor: "#E9E6FF",
        borderRadius: "20px",
        p: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >

        
      {/* Top */}
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

        <IconButton
          sx={{
            bgcolor: "#DCD6FF",
            borderRadius: "12px",
            width: 43,
            height: 43,
          }}
        >
          <NorthEastIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Box>

      {/* Bottom */}
      <Box mt={4}>
        <Typography fontWeight={700} fontSize={20}>
          {title}
        </Typography>
        <Typography color="text.secondary" fontSize={14}>
          Lorem Ipsum
        </Typography>
      </Box>
    </Box>
  );
};

export default CardWhy;