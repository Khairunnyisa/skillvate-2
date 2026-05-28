import { Box, Typography, Chip, Button, Stack } from "@mui/material";

const CardTraining = ({
  category = "Lorem Ipsum",
  title = "DevOps",
  participants = "300",
  level = "Basic",
  closingDate = "7 September 2025",
  createdAt = "Dibuat 4 hari yang lalu",
  onClick,
}) => {
  return (
    <Box
      onClick={() => onClick?.(title)}
      sx={{
        bgcolor: "#F5F5F5",
        borderRadius: { xs: "14px", md: "16px" },

        p: { xs: 2.2, sm: 3, md: 4 },

        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        transition: "0.3s ease",
        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* TOP */}
      <Box>
        {/* CATEGORY */}
        <Typography
          color="text.secondary"
          sx={{
            mb: 1,
            fontSize: { xs: 12, md: 14 },
          }}
        >
          {category}
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            fontSize: {
              xs: 20,
              sm: 22,
              md: 26,
            },

            fontWeight: 700,

            lineHeight: {
              xs: 1.2,
              md: 1.3,
            },

            mb: 1,

            // 🔥 biar title panjang gak bikin card aneh
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </Typography>

        {/* PARTICIPANTS */}
        <Typography
          sx={{
            color: "#6C5CE7",
            mb: 2,
            fontSize: { xs: 13, md: 15 },
          }}
        >
          {participants}+ Pendaftar
        </Typography>

        {/* LEVEL */}
        <Stack
          direction="row"
          spacing={1}
          mb={2}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip
            label="Basic"
            size="small"
            sx={{
              bgcolor: level === "Basic" ? "#D1FAE5" : "#E5E7EB",
              color: level === "Basic" ? "#059669" : "#555",

              fontWeight: 500,

              "& .MuiChip-label": {
                px: 1,
                fontSize: {
                  xs: 11,
                  md: 12,
                },
              },
            }}
          />

          <Chip
            label="Intermediate"
            size="small"
            sx={{
              "& .MuiChip-label": {
                fontSize: {
                  xs: 11,
                  md: 12,
                },
              },
            }}
          />

          <Chip
            label="Advanced"
            size="small"
            sx={{
              "& .MuiChip-label": {
                fontSize: {
                  xs: 11,
                  md: 12,
                },
              },
            }}
          />
        </Stack>

        {/* DIVIDER */}
        <Box
          sx={{
            borderTop: "1px solid #ddd",
            my: { xs: 1.5, md: 2 },
          }}
        />

        {/* DATE */}
        <Typography
          sx={{
            fontSize: {
              xs: 12,
              md: 14,
            },
          }}
        >
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
          mt: { xs: 2, md: 3 },

          background:
            "linear-gradient(90deg, #6C5CE7, #8E7CFF)",

          color: "white",

          borderRadius: "10px",

          textTransform: "none",

          fontSize: {
            xs: 12,
            md: 14,
          },

          py: {
            xs: 1,
            md: 1.2,
          },

          "&:hover": {
            background:
              "linear-gradient(90deg, #5E4FD8, #7E6EFF)",
          },
        }}
      >
        {createdAt}
      </Button>
    </Box>
  );
};

export default CardTraining;