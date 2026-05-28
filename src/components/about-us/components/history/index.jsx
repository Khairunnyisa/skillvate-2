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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        pt: {
          xs: 6,
          md: 10,
        },

        pb: {
          xs: 4,
          md: 8,
        },

        background:
          "linear-gradient(180deg, #F7F8FC 0%, #FFFFFF 100%)",
      }}
    >
      {/* MAIN WRAPPER */}
      <Box
        sx={{
          position: "relative",

          overflow: "hidden",

          background: "#fff",

          borderTopLeftRadius: {
            xs: "36px",
            md: "56px",
          },

          borderTopRightRadius: {
            xs: "36px",
            md: "56px",
          },

          py: {
            xs: 8,
            md: 12,
          },

          boxShadow:
            "0 -10px 40px rgba(15,23,42,0.03)",
        }}
      >
        {/* BACKGROUND GLOW */}
        <Box
          sx={{
            position: "absolute",

            top: -120,
            right: -120,

            width: 300,
            height: 300,

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(124,108,242,0.12) 0%, rgba(124,108,242,0) 70%)",

            zIndex: 0,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* HEADER */}
          <Box
            textAlign="center"
            mb={{
              xs: 8,
              md: 12,
            }}
          >
            {/* MINI BADGE */}
            <Box
              sx={{
                display: "inline-flex",

                alignItems: "center",

                gap: 1,

                px: 2.5,
                py: 1,

                borderRadius: "999px",

                background:
                  "rgba(124,108,242,0.08)",

                border:
                  "1px solid rgba(124,108,242,0.12)",

                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,

                  borderRadius: "50%",

                  background:
                    "linear-gradient(135deg, #7C6CF2, #9B8CFF)",

                  boxShadow:
                    "0 0 14px rgba(124,108,242,0.6)",
                }}
              />

              <Typography
                variant="body2"
                sx={{
                  color: "#6C5DD3",
                  fontWeight: 600,
                }}
              >
                Company Journey
              </Typography>
            </Box>

            {/* TITLE */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,

                color: "#111827",

                letterSpacing: "-0.04em",

                fontSize: {
                  xs: "2.4rem",
                  sm: "3rem",
                  md: "4.8rem",
                },

                lineHeight: 1.05,
              }}
            >
              Our History
            </Typography>

            {/* SUBTEXT */}
            <Typography
              variant="body1"
              sx={{
                mt: 2.5,

                maxWidth: 620,

                mx: "auto",

                color: "#6B7280",

                lineHeight: 1.9,

                fontSize: {
                  xs: "0.95rem",
                  md: "1rem",
                },
              }}
            >
              A journey of growth, innovation, and commitment
              in building impactful technology learning
              experiences.
            </Typography>
          </Box>

          {/* TIMELINE */}
          <Box
            ref={containerRef}
            sx={{
              position: "relative",
            }}
          >
            {/* BASE LINE */}
            <Box
              sx={{
                position: "absolute",

                left: "50%",
                top: 0,

                transform: "translateX(-50%)",

                width: {
                  xs: "3px",
                  md: "5px",
                },

                height: "100%",

                borderRadius: "999px",

                background:
                  "linear-gradient(180deg, #ECECEC 0%, #F4F4F4 100%)",
              }}
            />

            {/* PROGRESS LINE */}
            <Box
              sx={{
                position: "absolute",

                left: "50%",
                top: 0,

                transform: "translateX(-50%)",

                width: {
                  xs: "3px",
                  md: "5px",
                },

                height: `${progress * 100}%`,

                borderRadius: "999px",

                background:
                  "linear-gradient(180deg, #7C6CF2 0%, #A698FF 100%)",

                transition:
                  "height 0.25s ease-out",

                boxShadow:
                  "0 0 20px rgba(124,108,242,0.3)",
              }}
            />

            {historyData.map((item, i) => {
              const isActive =
                progress >
                i / historyData.length;

              return (
                <Box
                  key={i}
                  sx={{
                    position: "relative",

                    display: "grid",

                    gridTemplateColumns: {
                      xs: "1fr",
                      md: "1fr 120px 1fr",
                    },

                    alignItems: "center",

                    mb: {
                      xs: 8,
                      md: 14,
                    },
                  }}
                >
                  {/* LEFT */}
                  <Box
                    sx={{
                      display: "flex",

                      justifyContent: "flex-end",

                      pr: {
                        xs: 0,
                        md: 6,
                      },

                      order: {
                        xs: 2,
                        md: 1,
                      },
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
                          fontWeight: 700,

                          color: "#111827",

                          letterSpacing: "-0.03em",

                          fontSize: {
                            xs: "2rem",
                            md: "3rem",
                          },
                        }}
                      >
                        {item.year}
                      </Typography>
                    )}
                  </Box>

                  {/* CENTER */}
                  <Box
                    sx={{
                      display: "flex",

                      justifyContent: "center",

                      order: {
                        xs: 1,
                        md: 2,
                      },

                      mb: {
                        xs: 3,
                        md: 0,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                      }}
                    >
                      {/* GLOW */}
                      <Box
                        sx={{
                          position: "absolute",

                          inset: -10,

                          borderRadius: "50%",

                          background: isActive
                            ? "rgba(124,108,242,0.18)"
                            : "transparent",

                          filter: "blur(16px)",

                          transition: "0.3s ease",
                        }}
                      />

                      <IconButton
                        sx={{
                          position: "relative",

                          width: {
                            xs: 58,
                            md: 74,
                          },

                          height: {
                            xs: 58,
                            md: 74,
                          },

                          background: isActive
                            ? "linear-gradient(135deg, #7C6CF2 0%, #9D8DFF 100%)"
                            : "#111827",

                          color: "#fff",

                          border:
                            "6px solid #fff",

                          transition:
                            "all .35s ease",

                          boxShadow: isActive
                            ? "0 18px 40px rgba(124,108,242,0.28)"
                            : "0 10px 30px rgba(17,24,39,0.12)",

                          "&:hover": {
                            transform:
                              "translateY(-4px) scale(1.03)",
                          },
                        }}
                      >
                        <KeyboardDoubleArrowDownIcon
                          sx={{
                            fontSize: {
                              xs: 24,
                              md: 34,
                            },
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* RIGHT */}
                  <Box
                    sx={{
                      display: "flex",

                      justifyContent: "flex-start",

                      pl: {
                        xs: 0,
                        md: 6,
                      },

                      order: {
                        xs: 3,
                        md: 3,
                      },
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
                          fontWeight: 700,

                          color: "#111827",

                          letterSpacing: "-0.03em",

                          fontSize: {
                            xs: "2rem",
                            md: "3rem",
                          },
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