import { Box, Typography, Avatar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function TrainerCard({
  name,
  role,
  image,
  linkedin,
  facebook,
}) {
  return (
    <Box
      sx={{
        width: "350px",
        minHeight: "420px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        p: 5,
        textAlign: "center",
        boxShadow: "0 15px 30px rgba(0,0,0,0.05)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "&:hover": {
          transform: "translateY(-8px)",
        },
      }}
    >
      {/* TOP */}
      <Box>
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 140,
            height: 140,
            margin: "0 auto",
            mb: 3,
          }}
        />

        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "#6B7A90",
            mt: 1,
            fontSize: "16px",
          }}
        >
          {role}
        </Typography>
      </Box>

      {/* SOCIAL */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 4 }}>
        
        {/* LINKEDIN */}
        <IconButton
          component="a"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: "1px solid #D0D5DD",
            width: 55,
            height: 55,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#6C5DD3",
              color: "#fff",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>

        {/* FACEBOOK */}
        <IconButton
          component="a"
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            border: "1px solid #D0D5DD",
            width: 55,
            height: 55,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#6C5DD3",
              color: "#fff",
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Box>
    </Box>
  );
}