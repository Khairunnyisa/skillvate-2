import { Box, Typography, Avatar, IconButton } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function TrainerCard({
  data,
  name,
  role,
  image,
  linkedin,
  facebook,
}) {
  // 🔥 SUPPORT STRAPI DATA
  const trainerName = data?.name || name;
  const trainerRole = data?.role || role;
  const trainerLinkedin = data?.linkedin || linkedin;
  const trainerFacebook = data?.facebook || facebook;

  const trainerImage = data?.image?.url
    ? `http://localhost:1337${data.image.url}`
    : image;

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "345px",
        },

        mx: "auto",

        background: "#FFFFFF",

        borderRadius: "32px",

        overflow: "hidden",

        position: "relative",

        display: "flex",
        flexDirection: "column",

        boxShadow: "0 18px 45px rgba(15,23,42,0.07)",

        transition: "all .35s ease",

        border: "1px solid #F3F4F6",

        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 28px 60px rgba(108,93,211,0.18)",
        },

        "&:hover .trainer-bg": {
          transform: "scale(1.06)",
        },

        "&:hover .trainer-avatar": {
          transform: "translateY(-6px)",
        },

        "&:hover .social-box": {
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* TOP BACKGROUND */}
      <Box
        sx={{
          height: "150px",

          position: "relative",

          overflow: "hidden",

          background:
            "linear-gradient(135deg, #6C5DD3 0%, #8B7FFF 55%, #C4B5FD 100%)",
        }}
      >
        {/* PATTERN */}
        <Box
          className="trainer-bg"
          sx={{
            position: "absolute",
            inset: 0,

            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",

            backgroundSize: "16px 16px",

            transition: "0.5s ease",
          }}
        />

        {/* BLUR GLOW */}
        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 180,

            background: "rgba(255,255,255,0.18)",

            borderRadius: "50%",

            filter: "blur(40px)",

            top: -60,
            right: -40,
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          px: 4,
          pb: 4,

          flex: 1,

          display: "flex",
          flexDirection: "column",

          alignItems: "center",

          textAlign: "center",
        }}
      >
        {/* AVATAR */}
        <Avatar
          src={trainerImage}
          alt={trainerName}
          className="trainer-avatar"
          sx={{
            width: 118,
            height: 118,

            mt: "-58px",
            mb: 2.5,

            border: "5px solid #fff",

            boxShadow: "0 14px 35px rgba(108,93,211,0.22)",

            transition: "0.35s ease",
          }}
        />

        {/* NAME */}
        <Typography
          variant="h4"
          sx={{
            mt: 2,
            color: "#111827",
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {trainerName}
        </Typography>

        {/* ROLE */}
        <Typography
          variant="body2"
          sx={{
            color: "#6B7280",
            lineHeight: 1.7,
            maxWidth: "260px",
            minHeight: "52px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {trainerRole}
        </Typography>

        {/* SOCIAL SECTION */}
        <Box
          className="social-box"
          sx={{
            mt: 1,

            width: "50%",

            background: "linear-gradient(180deg, #FFFFFF 0%, #F8F7FF 100%)",

            border: "1px solid #F1F1F1",

            borderRadius: "24px",

            py: 2,
            px: 2,

            display: "flex",
            justifyContent: "center",
            gap: 2,

            transition: "0.3s ease",

            boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
          }}
        >
          {/* LINKEDIN */}
          <IconButton
            component="a"
            href={trainerLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 65,
              height: 65,

              background: "#fff",

              border: "1px solid #ECECEC",

              color: "#6B7280",

              transition: "all .3s ease",

              "&:hover": {
                background:
                  "linear-gradient(135deg, #6C5DD3, #8B7FFF)",

                color: "#fff",

                transform: "translateY(-4px)",

                boxShadow:
                  "0 12px 24px rgba(108,93,211,0.22)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}