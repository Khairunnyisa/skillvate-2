import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import SectionBadge from "../../../badge/sectionBadge";

const TrainerHero = (data) => {
  console.log(data)
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #6C5DD3, #7F6BFF)",
        color: "#fff",
        pt: 18,
        pb: 5,
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* 🔥 PATTERN BACKGROUND (optional biar mirip) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/static/images/bg-pattern.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />

      {/* 🔥 CONTENT */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            transform: "translateY(30px)", // 👈 geser turun
          }}
        >
          <SectionBadge text="List Trainer" variant="white" />
        </Box>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 1,
          }}
        >
          Meet Our Trainer
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "900px",
            mx: "auto",
            opacity: 0.9,
            mb: 5,
          }}
        >
          Skillvate training center is your ultimate destination to empower IT professionals with the skills and knowledge to unlock their full potential and advance their careers with top-notch training resources and expert guidance.
        </Typography>

        {/* 🔥 FILTER BOX */}
        
        </Box>
      </Box>
  
  );
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#fff",

    "& fieldset": {
      border: "none",
    },
  },
};

export default TrainerHero;
