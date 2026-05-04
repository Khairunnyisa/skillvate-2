import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";

const DetailCard = ({ title, items = [] }) => {
  return (
    <Box
      sx={{
        width: 370,
        height: 500, 
        p: 3,
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: "linear-gradient(135deg, #6C5DD3, #7F6BFF)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <SearchIcon sx={{ color: "#fff", fontSize: 22 }} />
      </Box>

      <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
        {title}
      </Typography>

      <Box sx={{ height: "1px", backgroundColor: "#e0e0e0", mb: 2 }} />

      <Box sx={{ overflow: "hidden" }}> {/* 🔥 BIAR GAK NGE-STRETCH */}
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              py: 1,
              borderBottom:
                index < items.length - 1 ? "1px solid #f0f0f0" : "none",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                pr: 1,
                

                // 🔥 BATASIN TEXT BIAR GAK NGERUSAK HEIGHT
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item}
            </Typography>

            <ArrowForwardIosIcon
              sx={{
                fontSize: 11,
                mt: "3px",
                flexShrink: 0,
                color: "#666",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DetailCard;