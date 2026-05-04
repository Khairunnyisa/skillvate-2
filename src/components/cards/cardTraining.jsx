import { Box, Typography, Chip, Button, Stack } from "@mui/material";

const CardTraining = ({
  category = "Lorem Ipsum",
  title = "DevOps",
  participants = "300",
  level = "Basic",
  closingDate = "7 September 2025",
  createdAt = "Dibuat 4 hari yang lalu",
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#F5F5F5",
        borderRadius: "16px",
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* TOP */}
      <Box>
        <Typography color="text.secondary" mb={1}>
          {category}
        </Typography>

        <Typography fontSize={26} fontWeight={700} mb={1}>
          {title}
        </Typography>

        <Typography sx={{ color: "#6C5CE7", mb: 2 }}>
          {participants}+ Pendaftar
        </Typography>

        {/* LEVEL */}
        <Stack direction="row" spacing={1} mb={2}>
          <Chip
            label="Basic"
            sx={{
              bgcolor: level === "Basic" ? "#D1FAE5" : "#E5E7EB",
              color: level === "Basic" ? "#059669" : "#555",
              fontWeight: 500,
            }}
          />
          <Chip label="Intermediate" />
          <Chip label="Advanced" />
        </Stack>

        <Box
          sx={{
            borderTop: "1px solid #ddd",
            my: 2,
          }}
        />

        <Typography fontSize={14}>
          Penutupan:{" "}
          <Box component="span" sx={{ color: "red" }}>
            {closingDate}
          </Box>
        </Typography>
      </Box>

      {/* BUTTON */}
      <Button
        fullWidth
        sx={{
          mt: 3,
          background: "linear-gradient(90deg, #6C5CE7, #8E7CFF)",
          color: "white",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        {createdAt}
      </Button>
    </Box>
  );
};

export default CardTraining;