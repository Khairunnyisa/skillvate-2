import { Box, Typography } from "@mui/material";
import { useRef } from "react";

const CardWhy = ({ icon, title }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
  const card = cardRef.current;

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // 🔥 lebih sensitif
  const rotateX = ((y - centerY) / centerY) * -12;
  const rotateY = ((x - centerX) / centerX) * 12;

  // 🔥 glow ikut cursor
  const glowX = (x / rect.width) * 100;
  const glowY = (y / rect.height) * 100;

  card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.02)
  `;

  card.style.background = `
    radial-gradient(
      circle at ${glowX}% ${glowY}%,
      rgba(255,255,255,0.9),
      rgba(238,234,254,1) 35%,
      rgba(231,227,255,1) 100%
    )
  `;
};

const handleMouseLeave = () => {
  const card = cardRef.current;

  card.style.transform = `
    perspective(1000px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;

  card.style.background =
    "linear-gradient(135deg, #EEEAFE 0%, #E7E3FF 100%)";
};

  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: "relative",
        overflow: "hidden",

        // 🔥 UKURAN TETEP PERSIS
        bgcolor: "#E9E6FF",
        borderRadius: "20px",
        p: 3,

        height: "100%",
        minHeight: 180,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

        // 🔥 UPGRADE DESIGN
        border: "1px solid rgba(108,92,231,0.08)",

        background:
          "linear-gradient(135deg, #EEEAFE 0%, #E7E3FF 100%)",

       transition:
  "transform 0.08s linear, box-shadow 0.35s ease, background 0.2s ease",

        transformStyle: "preserve-3d",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.7), transparent 35%)",
          pointerEvents: "none",
        },

        "&:hover": {
          boxShadow: "0 18px 40px rgba(108,92,231,0.16)",

          "& .icon-box": {
            transform:
              "translateZ(25px) rotate(-8deg) scale(1.06)",
          },

          "& .title": {
            transform: "translateZ(20px)",
          },

          "& .glow": {
            opacity: 1,
            transform: "scale(1.2)",
          },
        },
      }}
    >
      {/* GLOW EFFECT */}
      <Box
        className="glow"
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(108,92,231,0.16) 0%, rgba(108,92,231,0) 70%)",

          bottom: -50,
          right: -50,

          opacity: 0.4,

          transition: "0.4s ease",
        }}
      />

      {/* TOP */}
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          className="icon-box"
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#6C5CE7",
            borderRadius: "14px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            transition: "0.35s ease",

            boxShadow:
              "0 10px 20px rgba(108,92,231,0.25)",
          }}
        >
          <Box
            component="img"
            src={icon}
            sx={{
              width: 30,
              height: 30,
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* BOTTOM */}
      <Box
        mt={3}
        sx={{
          width: "100%",
          textAlign: "left",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          className="title"
          sx={{
            mb: 2,
            fontSize: 25,
            fontWeight: 700,
            fontFamily: "Raleway, sans-serif",

            color: "#1A1A1A",

            lineHeight: 1.2,

            transition: "0.35s ease",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardWhy;