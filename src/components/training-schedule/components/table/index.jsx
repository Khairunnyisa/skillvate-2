import { useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Box,
  Typography,
  Paper,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
} from "@mui/material";

import CategoryFilter from "../category";
import Dropdown from "../../../dropdown/dropdown";
import RegisterModal from "../register-modal";

const guidelines = [
  "Training registration will be closed 7 days prior to the training date.",
  "Reschedule requests must be submitted no later than H-7 before the training date.",
  "A 100% cancellation fee will be applied for cancellations made within 3 days prior to the training date.",
  "Skillvate also provides private and in-house training programs with customizable schedules and training locations based on your organization’s needs.",
  "Training materials, schedules, and instructors are subject to adjustment based on operational requirements.",
  "Certification availability may vary depending on the selected training program.",
  "If you cannot find your preferred training schedule, please contact us.",
];

const data = [
  {
    materi: "Cisco CCNA",
    tanggal: "6-7 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.000.000",
    lokasi: "Jakarta",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2.500.000",
    lokasi: "Surabaya",
  },
];

const TableTraining = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #F8F8FC 0%, #F4F5FB 100%)",

        minHeight: "100vh",

        pt: 20,
        pb: 10,

        px: {
          xs: 2,
          md: 3,
        },
      }}
    >
      {/* MAIN CARD */}
      <Box
        sx={{
          maxWidth: "1300px",

          mx: "auto",

          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FCFCFF 100%)",

          borderRadius: {
            xs: "15px",
            md: "15px",
          },

          p: {
            xs: 2.5,
            md: 4,
          },

          border: "1px solid #ECECF3",

          boxShadow:
            "0 20px 60px rgba(15, 23, 42, 0.05)",
        }}
      >
        {/* TOP HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: 2,

            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                mb: 1,
                color: "#111827",
              }}
            >
              Training Schedule
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
                maxWidth: "580px",
                lineHeight: 1.8,
              }}
            >
              Explore available training schedules and register for
              upcoming programs tailored to your professional growth.
            </Typography>
          </Box>

          <Box
            sx={{
              px: 2,
              py: 1,

              borderRadius: "999px",

              background:
                "linear-gradient(135deg, #F4F1FF, #EEE9FF)",

              border: "1px solid #E8E0FF",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#6C5DD3",
                fontWeight: 600,
              }}
            >
              {data.length} Trainings Available
            </Typography>
          </Box>
        </Box>

        {/* GUIDELINES */}
        <Box
          sx={{
            position: "relative",

            overflow: "hidden",

            background:
              "linear-gradient(135deg, #FFF9EA 0%, #FFFDF7 100%)",

            border: "1px solid #FFE7B0",

            borderRadius: "10px",

            p: {
              xs: 2.5,
              md: 3.5,
            },

            mb: 4,
          }}
        >
          {/* GLOW */}
          <Box
            sx={{
              position: "absolute",

              width: 220,
              height: 220,

              borderRadius: "50%",

              background:
                "rgba(255, 193, 7, 0.10)",

              filter: "blur(60px)",

              top: -100,
              right: -80,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,

                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,

                  borderRadius: "10px",

                  background:
                    "linear-gradient(135deg, #FFB800, #FFC93C)",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  boxShadow:
                    "0 10px 24px rgba(255,184,0,0.25)",
                }}
              >
                <ErrorIcon
                  sx={{
                    color: "#fff",
                    fontSize: 22,
                  }}
                />
              </Box>

              <Typography
                variant="h4"
                sx={{
                  color: "#B7791F",
                }}
              >
                Training Guidelines
              </Typography>
            </Box>

            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.5,
              }}
            >
              {guidelines.map((item, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    mb: 1.2,
                    color: "#7C5A14",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.8,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* FILTER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "stretch",
              md: "center",
            },

            flexDirection: {
              xs: "column",
              md: "row",
            },

            gap: 2.5,

            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 2,

              flexWrap: "wrap",
            }}
          >
            <Dropdown
              label="Semua Bulan"
              options={["Januari", "Februari", "Maret", "April"]}
            />

            <Dropdown
              label="Tersedia"
              options={["Tersedia", "Penuh"]}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "stretch",
                sm: "center",
              },

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 2,

              width: {
                xs: "100%",
                md: "auto",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
              }}
            >
              Show 10 entries
            </Typography>

            <TextField
              size="small"
              placeholder="Search training..."
              sx={{
                width: {
                  xs: "100%",
                  sm: "260px",
                },

                "& .MuiOutlinedInput-root": {
                  borderRadius: "14px",

                  backgroundColor: "#fff",

                  transition: "0.25s ease",

                  "& fieldset": {
                    borderColor: "#ECECF3",
                  },

                  "&:hover fieldset": {
                    borderColor: "#D8D5FF",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#6C5DD3",
                    boxShadow:
                      "0 0 0 4px rgba(108,93,211,0.08)",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color: "#9CA3AF",
                        fontSize: 20,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <CategoryFilter onChange={(val) => console.log(val)} />

        {/* TABLE */}
        <Paper
          sx={{
            mt: 3,

            borderRadius: "26px",

            overflow: "hidden",

            border: "1px solid #ECECF3",

            backgroundColor: "#fff",

            boxShadow:
              "0 10px 40px rgba(15,23,42,0.04)",

            "& .MuiTableCell-root": {
              typography: "body2",

              borderColor: "#F3F4F6",

              py: 2.2,

              color: "#374151",
            },
          }}
        >
          <Table>
            {/* HEAD */}
            <TableHead>
              <TableRow
                sx={{
                  background:
                    "linear-gradient(180deg, #FAFAFD 0%, #F7F7FB 100%)",
                }}
              >
                {[
                  "Materi",
                  "Tanggal",
                  "Waktu",
                  "Harga",
                  "Lokasi",
                  "Status",
                  "Aksi",
                ].map((h) => (
                  <TableCell
                    key={h}
                    sx={{
                      fontWeight: 700,
                      color: "#111827",
                      borderBottom:
                        "1px solid #ECECF3",
                    }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* BODY */}
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    transition: "0.25s ease",

                    "&:hover": {
                      backgroundColor: "#FAFAFF",
                    },
                  }}
                >
                  {/* MATERI */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                        color: "#111827",
                      }}
                    >
                      {item.materi}
                    </Typography>
                  </TableCell>

                  {/* TANGGAL */}
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <CalendarTodayOutlinedIcon
                        sx={{
                          fontSize: 16,
                          color: "#9CA3AF",
                        }}
                      />

                      {item.tanggal}
                    </Box>
                  </TableCell>

                  {/* WAKTU */}
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <AccessTimeOutlinedIcon
                        sx={{
                          fontSize: 16,
                          color: "#9CA3AF",
                        }}
                      />

                      {item.waktu}
                    </Box>
                  </TableCell>

                  {/* HARGA */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                        color: "#6C5DD3",
                      }}
                    >
                      {item.harga}
                    </Typography>
                  </TableCell>

                  {/* LOKASI */}
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <LocationOnOutlinedIcon
                        sx={{
                          fontSize: 16,
                          color: "#9CA3AF",
                        }}
                      />

                      {item.lokasi}
                    </Box>
                  </TableCell>

                  {/* STATUS */}
                  <TableCell>
                    <Chip
                      label="Tersedia"
                      size="small"
                      sx={{
                        height: "32px",

                        borderRadius: "999px",

                        background:
                          "linear-gradient(135deg, #ECFDF3, #F3FFF8)",

                        color: "#16A34A",

                        border:
                          "1px solid rgba(34,197,94,0.15)",

                        "& .MuiChip-label": {
                          typography: "body2",
                          fontWeight: 600,
                          px: 1.5,
                        },
                      }}
                    />
                  </TableCell>

                  {/* BUTTON */}
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => setOpenModal(true)}
                      sx={{
                        height: "38px",

                        px: 2.5,

                        borderRadius: "12px",

                        textTransform: "none",

                        typography: "body2",

                        fontWeight: 600,

                        background:
                          "linear-gradient(135deg, #6C5DD3, #8575FF)",

                        boxShadow:
                          "0 10px 20px rgba(108,93,211,0.18)",

                        "&:hover": {
                          transform: "translateY(-2px)",

                          background:
                            "linear-gradient(135deg, #5D4CC8, #7666FF)",

                          boxShadow:
                            "0 14px 28px rgba(108,93,211,0.24)",
                        },
                      }}
                    >
                      Daftar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>

      {/* MODAL */}
      <RegisterModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Box>
  );
};

export default TableTraining;