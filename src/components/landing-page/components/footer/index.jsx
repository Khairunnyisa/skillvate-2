import { Box, Container, Typography, Divider } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1E1B3A",
        color: "#fff",
        pt: 12,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* TOP */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.2fr 1fr 1fr 1.8fr",
            },
            gap: 6,
          }}
        >
          {/* LOGO */}
          <Box>
            <Typography fontSize={28} fontWeight={700}>
              Skillvate
            </Typography>
          </Box>

          {/* MENU 1 */}
          <Box>
            {[
              "Application Security",
              "Dynamic Security",
              "Mobile Security",
              "Container Security",
              "Infrastructure Security",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: 14,
                  mb: 1.8,
                  opacity: 0.8,
                  cursor: "pointer",
                  "&:hover": { opacity: 1 },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* MENU 2 */}
          <Box>
            {[
              "Articles",
              "Documentation",
              "FAQs",
              "Vulnerability Database",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: 14,
                  mb: 1.8,
                  opacity: 0.8,
                  cursor: "pointer",
                  "&:hover": { opacity: 1 },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* CONTACT */}
          <Box>
            <Typography sx={{ mb: 1.5, fontSize: 14 }}>
              Contact us
            </Typography>

            <Typography sx={{ fontSize: 14, opacity: 0.8 }}>
              info@clearants.com
            </Typography>

            <Typography sx={{ fontSize: 14, opacity: 0.8, mb: 2 }}>
              (+62) 21 290 23393
            </Typography>

            <Typography fontWeight={600} sx={{ mb: 1 }}>
              PT Inovasi Informatika Indonesia (i3)
            </Typography>

            <Typography sx={{ fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>
              Graha BIP 6th FloorJl Jend. Gatot Subroto Kav.23 Jakarta 12930,
              Indonesia
            </Typography>
          </Box>
        </Box>

        {/* LINE */}
        <Divider
  sx={{
    my: 6,
    borderColor: "white",
  }}
/>

        {/* BOTTOM */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          {/* LEFT */}
          <Box sx={{ maxWidth: 600 }}>
            <Typography sx={{ fontSize: 14, opacity: 0.8 }}>
              ©2025 Clearants Inc., All Rights Reserved | Terms of Service |
              Privacy Policy
            </Typography>

            <Typography
              sx={{
                fontSize: 13,
                opacity: 0.6,
                mt: 2,
                lineHeight: 1.6,
              }}
            >
              Clearants is an end-to-end platform that integrates security
              testing tools and DevSecOps tools into a single dashboard. With
              its commercial modular capabilities and easy enhancement managing
              DevSecOps to assist companies across a variety of industries in
              protecting their business right from the development process.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", gap: 2, mt: { xs: 2, md: 0 } }}>
            <YouTubeIcon sx={{ opacity: 0.8, cursor: "pointer" }} />
            <FacebookIcon sx={{ opacity: 0.8, cursor: "pointer" }} />
            <InstagramIcon sx={{ opacity: 0.8, cursor: "pointer" }} />
            <LinkedInIcon sx={{ opacity: 0.8, cursor: "pointer" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;