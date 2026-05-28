import { useState } from "react";

import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
  TextField,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";

export default function RegisterModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);

  const link = "https://forms.cloud.microsoft/r/7QAmcy9tJg";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          overflow: "hidden",
          borderRadius: {
            xs: "28px",
            md: "34px",
          },

          background:
            "linear-gradient(180deg, #B18BFF 0%, #F7F4FF 55%, #FFFFFF 100%)",

          backdropFilter: "blur(20px)",

          boxShadow: "0 30px 80px rgba(108,93,211,0.25)",

          position: "relative",
        },
      }}
    >
      {/* BLUR ORBS */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -80,

          width: 240,
          height: 240,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(255,255,255,0.7), transparent 70%)",

          filter: "blur(10px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: -100,

          width: 260,
          height: 260,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(125,98,255,0.15), transparent 70%)",

          filter: "blur(20px)",
        }}
      />

      <DialogContent
        sx={{
          p: {
            xs: 3,
            md: 5,
          },

          position: "relative",
          zIndex: 2,
        }}
      >
        {/* CLOSE */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: {
              xs: 18,
              md: 24,
            },

            top: {
              xs: 18,
              md: 24,
            },

            color: "#fff",

            backgroundColor: "rgba(255,255,255,0.15)",

            backdropFilter: "blur(10px)",

            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.25)",
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>

        {/* ICON */}
        <Box
          sx={{
            width: {
              xs: 70,
              md: 84,
            },

            height: {
              xs: 70,
              md: 84,
            },

            borderRadius: "24px",

            mx: "auto",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(135deg, #7B61FF, #9B8CFF)",

            boxShadow: "0 10px 30px rgba(123,97,255,0.35)",

            mb: 3,
          }}
        >
          <AutoAwesomeRoundedIcon
            sx={{
              color: "#fff",
              fontSize: {
                xs: 34,
                md: 42,
              },
            }}
          />
        </Box>

        {/* BADGE */}
        <Box
          sx={{
            width: "fit-content",

            mx: "auto",

            px: 2,
            py: 0.8,

            borderRadius: "999px",

            backgroundColor: "rgba(255,255,255,0.65)",

            backdropFilter: "blur(12px)",

            border: "1px solid rgba(255,255,255,0.7)",

            mb: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#555",
            }}
          >
            Join Skillvate Training
          </Typography>
        </Box>

        {/* TITLE */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",

            fontSize: {
              xs: 30,
              md: 42,
            },

            lineHeight: 1.1,

            mb: 2,

            color: "#1F1F1F",
          }}
        >
          Register Your
          <br />
          Training Session
        </Typography>

        {/* DESC */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",

            maxWidth: 500,

            mx: "auto",

            color: "#666",

            mb: 4,

            lineHeight: 1.8,

            fontSize: {
              xs: 15,
              md: 18,
            },
          }}
        >
          Access the registration form instantly and secure your spot for the
          upcoming training session.
        </Typography>

        {/* LINK CARD */}
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.7)",

            border: "1px solid rgba(255,255,255,0.8)",

            backdropFilter: "blur(12px)",

            borderRadius: "24px",

            p: {
              xs: 2,
              md: 2.5,
            },

            mb: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 1.5,
              color: "#666",
            }}
          >
            Your invite link
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,

              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TextField
              fullWidth
              value={link}
              InputProps={{
                readOnly: true,

                startAdornment: (
                  <LinkRoundedIcon
                    sx={{
                      color: "#888",
                      mr: 1,
                    }}
                  />
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: 56,

                  borderRadius: "18px",

                  backgroundColor: "#fff",

                  fontSize: 14,

                  "& fieldset": {
                    border: "1px solid #ECECEC",
                  },
                },
              }}
            />

            <Tooltip
              title={copied ? "Copied!" : "Copy"}
              open={copied}
              disableHoverListener
            >
              <Button
                onClick={handleCopy}
                sx={{
                  minWidth: {
                    xs: "100%",
                    sm: 150,
                  },

                  height: 56,

                  borderRadius: "18px",

                  background:
                    "linear-gradient(135deg, #1F1F1F, #2F2F2F)",

                  color: "#fff",

                  textTransform: "none",

                  fontSize: 15,
                  fontWeight: 600,

                  gap: 1,

                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #2A2A2A, #111)",
                  },
                }}
              >
                <ContentCopyRoundedIcon fontSize="small" />
                Copy Link
              </Button>
            </Tooltip>
          </Box>
        </Box>

        

        {/* SHARE BUTTONS */}
<Box sx={{ mt: 3 }}>
  <Typography
    variant="body2"
    sx={{
      color: "#666",
      mb: 1.5,
    }}
  >
    Share via
  </Typography>

  <Box
    sx={{
      display: "flex",
      gap: 1.5,

      flexDirection: {
        xs: "column",
        sm: "row",
      },
    }}
  >
    {/* WHATSAPP */}
    <Button
      fullWidth
      component="a"
      href={`https://wa.me/?text=${encodeURIComponent(link)}`}
      target="_blank"
      sx={{
        height: 58,

        borderRadius: "18px",

        backgroundColor: "rgba(255,255,255,0.7)",

        border: "1px solid rgba(255,255,255,0.8)",

        backdropFilter: "blur(12px)",

        textTransform: "none",

        display: "flex",
        justifyContent: "flex-start",

        px: 2,

        gap: 1.5,

        transition: "0.25s ease",

        "&:hover": {
          backgroundColor: "#fff",
          transform: "translateY(-2px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,

          borderRadius: "12px",

          backgroundColor: "#F5F5F5",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src="/static/images/training/whatsapp-logo.svg"
          alt="WhatsApp"
          sx={{
            width: 22,
            height: 22,
          }}
        />
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#111",
            fontWeight: 600,
          }}
        >
          WhatsApp
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#777",
          }}
        >
          Share instantly
        </Typography>
      </Box>
    </Button>

    {/* EMAIL */}
    <Button
      fullWidth
      component="a"
      href={`mailto:?subject=Skillvate Training Registration&body=${encodeURIComponent(
        `Register here: ${link}`
      )}`}
      sx={{
        height: 58,

        borderRadius: "18px",

        backgroundColor: "rgba(255,255,255,0.7)",

        border: "1px solid rgba(255,255,255,0.8)",

        backdropFilter: "blur(12px)",

        textTransform: "none",

        display: "flex",
        justifyContent: "flex-start",

        px: 2,

        gap: 1.5,

        transition: "0.25s ease",

        "&:hover": {
          backgroundColor: "#fff",
          transform: "translateY(-2px)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,

          borderRadius: "12px",

          backgroundColor: "#F5F5F5",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src="/static/images/training/gmail-logo.svg"
          alt="Email"
          sx={{
            width: 22,
            height: 22,
          }}
        />
      </Box>

      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="body2"
          sx={{
            color: "#111",
            fontWeight: 600,
          }}
        >
          Email
        </Typography>

        <Typography
          variant="caption"
          sx={{
            color: "#777",
          }}
        >
          Send via Gmail
        </Typography>
      </Box>
    </Button>
  </Box>
</Box>
      </DialogContent>
    </Dialog>
  );
}