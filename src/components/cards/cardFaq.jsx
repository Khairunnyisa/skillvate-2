import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        borderRadius: "14px",
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 2.3 },
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        borderLeft: "3px solid #6C5CE7",
      }}
    >
      {/* HEADER */}
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "18px" },
            fontWeight: 500,
            color: "#1E1B4B",
            lineHeight: 1.4,
          }}
        >
          {question}
        </Typography>

        <IconButton
          sx={{
            width: 32,
            height: 32,
            bgcolor: "#6C5CE7",
            color: "#fff",
            flexShrink: 0,
            transition: "0.3s",

            "&:hover": {
              bgcolor: "#5B4CC4",
            },

            "& svg": {
              fontSize: 20,
              transition: "0.3s",
              transform: open
                ? "rotate(180deg)"
                : "rotate(0deg)",
            },
          }}
        >
          <KeyboardArrowDownRoundedIcon />
        </IconButton>
      </Box>

      {/* CONTENT */}
      <Collapse in={open}>
        <Box
          sx={{
            pt: 1.5,
            pr: { xs: 0, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "13px", md: "14px" },
              color: "#7C7C8A",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FaqItem;