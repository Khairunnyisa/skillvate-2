import { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const FaqItem = ({ text }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        borderRadius: "14px",
        px: 4,
        py: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "0.3s",
      }}
    >
      {/* HEADER (CLICKABLE) */}
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Typography variant="body1" fontWeight={500}>
          {text}
        </Typography>

        <IconButton
          sx={{
            bgcolor: "#6C5CE7",
            color: "#fff",
            width: 40,
            height: 40,
            flexShrink: 0,
            transition: "0.3s",
            "&:hover": {
              bgcolor: "#5a4ed1",
            },
          }}
        >
          {open ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Box>

      {/* CONTENT */}
      <Collapse in={open}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FaqItem;