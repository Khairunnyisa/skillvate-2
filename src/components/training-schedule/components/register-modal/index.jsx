import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Tooltip,
  InputAdornment,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function RegisterModal({ open, onClose }) {
  const [copied, setCopied] = useState(false);

  const link = "https://bit.ly/form-training";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "10px",
          p: 2,
        },
      }}
    >
      <DialogContent sx={{ p: 3 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h3">Register for Training</Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Use the link below to register for this training
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* CARD SECTION */}
        <Box
          sx={{
            backgroundColor: "#F8F9FB",
            borderRadius: "16px",
            p: 3,
          }}
        >
          {/* TITLE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography variant="body1">Link to share</Typography>
              <Typography variant="body2">
                Anyone with the link can access
              </Typography>
            </Box>
          </Box>

          {/* INPUT + COPY */}
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              value={link}
              size="small"
              InputProps={{
                readOnly: true,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#fff",
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
                  minWidth: "90px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid #eee",
                  backgroundColor: "#fff",
                  textTransform: "none",
                  display: "flex",
                  gap: 1,
                }}
              >
                <ContentCopyIcon fontSize="small" />
                Copy
              </Button>
            </Tooltip>
          </Box>
        </Box>

        {/* SHARE BUTTONS */}
        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Share via
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
            }}
          >
            <Button
              fullWidth
              sx={{
                flex: 1,
                textTransform: "none",
                background: "#F8F9FB",
                //   border: "1px solid #eee",
                py: 1.5,
                borderRadius: "10px",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src="/static/images/training/whatsapp-logo.svg"
                alt="wa"
                sx={{ width: 30, height: 30 }}
              />
              WhatsApp
            </Button>

            <Button
              fullWidth
              sx={{
                flex: 1,
                textTransform: "none",
                background: "#F8F9FB",
                //   border: "1px solid #eee",
                py: 1.5,
                borderRadius: "10px",
                justifyContent: "flex-start",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src="/static/images/training/gmail-logo.svg"
                alt="gmail"
                sx={{ width: 30, height: 30 }}
              />
              Gmail
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
