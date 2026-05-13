import {
  Box,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TimelineCard from "../../../cards/cardTimeline";

const historyData = [
  {
    year: "2015",
    side: "left",
    title: "Founded as a Training provider",
  },
  {
    year: "2017",
    side: "right",
    title:
      "Transformed into an IT service company with training as part of the services",
  },
  {
    year: "2018-2021",
    side: "left",
    title:
      "Red Hat Training Partner of the Year (2018, 2019, 2020, 2021).",
  },
  {
    year: "2025",
    side: "right",
    title: "Established Skillvate (i3 Training Center).",
  },
];

const HistorySection = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.5;
      const end = windowHeight * 0.8;

      const progressRaw =
        (start - rect.top) / (rect.height + (end - start));

      let percent = Math.max(0, Math.min(1, progressRaw));

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box sx={{ pt: 10, bgcolor: "#F5F6FA" }}>
      <Box
        sx={{
          bgcolor: "#fff",
          borderTopLeftRadius: "48px",
          borderTopRightRadius: "48px",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          {/* HEADER */}
          <Box textAlign="center" mb={12}>
            <Box
              sx={{
                width: 120,
                height: 14,
                borderRadius: "999px",
                bgcolor: "#7C6CF2",
                mx: "auto",
                mb: 5,
              }}
            />

            <Typography variant="h1">Our History</Typography>
          </Box>

          {/* TIMELINE */}
          <Box ref={containerRef} sx={{ position: "relative" }}>
            {/* BASE LINE */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: "5px",
                height: "100%",
                bgcolor: "#ECECEC",
              }}
            />

            {/* PROGRESS LINE */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: "5px",
                height: `${progress * 100}%`,
                bgcolor: "#7C6CF2",
                transition: "height 0.2s ease-out",
              }}
            />

            {historyData.map((item, i) => {
              const isActive = progress > i / historyData.length;

              return (
                <Box
                  key={i}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "1fr 120px 1fr",
                    },
                    alignItems: "center",
                    mb: { xs: 8, md: 14 }, // 🔥 responsive spacing
                  }}
                >
                  {/* LEFT */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      pr: { xs: 2, md: 6 }, // 🔥 responsive padding
                    }}
                  >
                    {item.side === "left" ? (
                      <TimelineCard
                        direction="right"
                        title={item.title}
                      />
                    ) : (
                      <Typography
                        sx={{
                          fontSize: { xs: 20, md: 34 }, // 🔥 responsive font
                          fontWeight: 700,
                        }}
                      >
                        {item.year}
                      </Typography>
                    )}
                  </Box>

                  {/* CENTER ICON */}
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                      sx={{
                        width: { xs: 50, md: 70 }, // 🔥 responsive size
                        height: { xs: 50, md: 70 },
                        bgcolor: isActive ? "#7C6CF2" : "#111827",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        boxShadow: isActive
                          ? "0 15px 40px rgba(124,108,242,0.35)"
                          : "none",
                      }}
                    >
                      <KeyboardDoubleArrowDownIcon
                        sx={{ fontSize: { xs: 24, md: 34 } }} // 🔥 responsive icon
                      />
                    </IconButton>
                  </Box>

                  {/* RIGHT */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      pl: { xs: 2, md: 6 }, // 🔥 responsive padding
                    }}
                  >
                    {item.side === "right" ? (
                      <TimelineCard
                        direction="left"
                        title={item.title}
                      />
                    ) : (
                      <Typography
                        sx={{
                          fontSize: { xs: 20, md: 34 }, // 🔥 responsive font
                          fontWeight: 700,
                        }}
                      >
                        {item.year}
                      </Typography>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HistorySection;