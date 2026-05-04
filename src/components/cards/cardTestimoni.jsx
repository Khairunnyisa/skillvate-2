import { Box, Typography, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const TestimonialCard = () => {
  return (
    <Box
      sx={{
        p: 4,
        borderRadius: "24px",
        background: "#F3F4F6",
        color: "#1F2937",
        height: "100%",
        minHeight: "340px",
        width: 360,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          background: "linear-gradient(135deg, #6C63FF, #8E7CFF)",
          color: "#fff",

          "& .star": {
            color: "#fff",
          },

          "& .role": {
            color: "rgba(255,255,255,0.8)",
          },
        },
      }}
    >
      <Typography sx={{ fontSize: "14px", lineHeight: 1.7 }}>
        "Skillvate JOSS BANGET GAN, udah training paling murah dan
        bergaransi..."
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="star" sx={{ color: "#6C63FF" }} />
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
          <Avatar sx={{ width: 48, height: 48 }} />
          <Box>
            <Typography fontWeight={600}>Zhafran Fakhrudin</Typography>
            <Typography
              className="role"
              variant="body2"
              sx={{ color: "#6B7280" }}
            >
              Student
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
