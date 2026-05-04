import { Box, Typography } from "@mui/material";
import { useState } from "react";

const categories = [
  "Cloud",
  "Cyber Security",
  "Data Management",
  "DevOps",
  "Infrastucture",
  "Middleware",
  "Quality Assurance",
  "Others",
];

const CategoryFilter = ({ onChange }) => {
  const [active, setActive] = useState("Semua");

  const handleClick = (item) => {
    setActive(item);
    if (onChange) onChange(item);
  };

  return (
   <Box
  sx={{
    borderBottom: "1px solid #eee",
    mb: 2,
  }}
>
  {/* 🔥 WRAPPER CENTER */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center", // 👉 bikin ke tengah
    }}
  >
    {/* 🔥 SCROLL AREA */}
    <Box
      sx={{
        display: "flex",
        gap: 0.2,

        flexWrap: "nowrap",
        overflowX: "auto",
        overflowY: "hidden",

        height: "50px",
        alignItems: "flex-end",

        maxWidth: "100%", // biar gak overflow keluar

        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((item) => {
        const isActive = active === item;

        return (
          <Box
            key={item}
            onClick={() => handleClick(item)}
            sx={{
              px: 2,
              py: 1.2,
              cursor: "pointer",
              whiteSpace: "nowrap",
              borderRadius: "8px 8px 0 0",

              position: "relative",
              zIndex: isActive ? 2 : 1,

              backgroundColor: isActive ? "#fff" : "#F9F9F9",
              color: isActive ? "#7560E2" : "#555",

              border: "1px solid #ddd",

              marginBottom: isActive ? "-1px" : "0px",

              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {item}
            </Typography>
          </Box>
        );
      })}
    </Box>
  </Box>
</Box>
  );
};

export default CategoryFilter;
