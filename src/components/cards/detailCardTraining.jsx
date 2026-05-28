import { Box, Typography } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";

const DetailCard = ({ title, items = [], onClick }) => {
  console.log(items, "item");
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: 320,
          md: 370,
        },

        minHeight: {
          xs: "auto",
          md: 500,
        },

        p: {
          xs: 2,
          sm: 2.5,
          md: 3,
        },

        borderRadius: {
          xs: "22px",
          md: "30px",
        },

        position: "relative",

        overflow: "hidden",

        background: "linear-gradient(180deg, #FFFFFF 0%, #FCFCFF 100%)",

        border: "1px solid rgba(108,93,211,0.08)",

        boxShadow: "0 20px 45px rgba(15,23,42,0.06)",

        display: "flex",
        flexDirection: "column",

        transition: "all .35s ease",

        "&:hover": {
          transform: "translateY(-8px)",

          boxShadow: "0 28px 60px rgba(108,93,211,0.14)",
        },

        "&:hover .card-glow": {
          opacity: 1,
        },

        "&:hover .top-icon": {
          transform: "rotate(-6deg) scale(1.05)",
        },
      }}
    >
      {/* GLOW EFFECT */}
      <Box
        className="card-glow"
        sx={{
          position: "absolute",

          top: -120,
          right: -120,

          width: 260,
          height: 260,

          background:
            "radial-gradient(circle, rgba(127,107,255,0.18) 0%, rgba(127,107,255,0) 70%)",

          opacity: 0,

          transition: "0.4s ease",

          pointerEvents: "none",
        }}
      />

      {/* TOP */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          mb: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {/* ICON */}
        <Box
          className="top-icon"
          sx={{
            width: {
              xs: 42,
              md: 52,
            },

            height: {
              xs: 42,
              md: 52,
            },

            borderRadius: {
              xs: "14px",
              md: "18px",
            },

            background: "linear-gradient(135deg, #6C5DD3 0%, #8B7FFF 100%)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxShadow: "0 14px 30px rgba(108,93,211,0.28)",

            transition: "0.35s ease",
          }}
        >
          <SearchIcon
            sx={{
              color: "#fff",

              fontSize: {
                xs: 20,
                md: 24,
              },
            }}
          />
        </Box>

        {/* MINI BADGE */}
        <Box
          sx={{
            px: 1.6,
            py: 0.7,

            borderRadius: "999px",

            background: "rgba(108,93,211,0.08)",

            border: "1px solid rgba(108,93,211,0.08)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#6C5DD3",

              fontWeight: 600,

              fontSize: {
                xs: "11px",
                md: "12px",
              },
            }}
          >
            Training
          </Typography>
        </Box>
      </Box>

      {/* TITLE */}
      <Typography
        variant="h3"
        sx={{
          lineHeight: {
            xs: 1.15,
            md: 1.2,
          },

          mb: {
            xs: 2,
            md: 2.5,
          },

          letterSpacing: "-0.03em",

          color: "#111827",

          position: "relative",

          zIndex: 2,
        }}
      >
        {title}
      </Typography>

      {/* DIVIDER */}
      <Box
        sx={{
          height: "1px",

          background:
            "linear-gradient(90deg, rgba(108,93,211,0.12), rgba(108,93,211,0))",

          mb: {
            xs: 1,
            md: 2,
          },
        }}
      />

      {/* ITEMS */}
      <Box
        sx={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",

          gap: 0.5,
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            onClick={() => onClick(item.documentId)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              px: {
                xs: 1.2,
                md: 1.5,
              },

              py: {
                xs: 1.2,
                md: 1.5,
              },

              borderRadius: "16px",

              cursor: "pointer",

              transition: "all .25s ease",

              position: "relative",

              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(108,93,211,0.08), rgba(108,93,211,0.02))",
              },

              "&:hover .item-text": {
                color: "#6C5DD3",
                transform: "translateX(3px)",
              },

              "&:hover .item-icon": {
                color: "#6C5DD3",
                transform: "translateX(4px)",
              },
            }}
          >
            {/* LEFT */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",

                gap: 1.2,

                flex: 1,
              }}
            >
              {/* DOT */}
              <Box
                sx={{
                  width: 7,
                  height: 7,

                  borderRadius: "50%",

                  background: "linear-gradient(135deg, #6C5DD3, #8B7FFF)",

                  mt: "8px",

                  flexShrink: 0,
                }}
              />

              <Typography
                className="item-text"
                variant="body2"
                sx={{
                  color: "#374151",

                  transition: "all .25s ease",

                  lineHeight: {
                    xs: 1.45,
                    md: 1.6,
                  },

                  display: "-webkit-box",

                  WebkitLineClamp: 2,

                  WebkitBoxOrient: "vertical",

                  overflow: "hidden",
                }}
              >
                {item.name}
              </Typography>
            </Box>

            {/* ICON */}
            <ArrowForwardIosIcon
              className="item-icon"
              sx={{
                fontSize: {
                  xs: 11,
                  md: 12,
                },

                color: "#9CA3AF",

                flexShrink: 0,

                transition: "all .25s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DetailCard;
