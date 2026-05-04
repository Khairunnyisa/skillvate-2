import { Box, Typography, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import SectionBadge from "../../../badge/sectionBadge";

const TrainingHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        background: "linear-gradient(135deg, #6C5DD3, #7F6BFF)",
        color: "#fff",
        pt: 18,
        pb: 12,
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
          <SectionBadge text="List Training" variant="white" />
        </Box>

        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 1,
          }}
        >
          Pilih Training yang anda ingin ikuti!
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            mx: "auto",
            opacity: 0.9,
            mb: 5,
          }}
        >
          Skillvate menghadirkan berbagai training dengan informasi yang jelas
          biar kamu fokus belajar, bukan cari-cari detail.
        </Typography>

        {/* 🔥 FILTER BOX */}
        <Box
          sx={{
            maxWidth: "900px",
            mx: "auto",
            display: "flex",
            gap: 2,
            p: 2,
            borderRadius: "16px",
            backgroundColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {/* Posisi */}
          <TextField
            placeholder="Posisi"
            size="small"
            fullWidth
            sx={inputStyle}
          />

          {/* Terpopuler */}
          <TextField
            placeholder="Terpopuler"
            size="small"
            fullWidth
            sx={inputStyle}
          />

          {/* Level */}
          <TextField
            placeholder="Level"
            size="small"
            fullWidth
            sx={inputStyle}
          />

          {/* Bidang */}
          <TextField
            placeholder="Bidang"
            size="small"
            fullWidth
            sx={inputStyle}
          />

          {/* Button */}
          <Button
            sx={{
              minWidth: "50px",
              borderRadius: "10px",
              backgroundColor: "#fff",
              color: "#6C5DD3",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <SearchIcon />
          </Button>
        </Box>
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

export default TrainingHero;
