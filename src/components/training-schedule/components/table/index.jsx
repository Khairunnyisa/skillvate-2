import { useState } from "react";

import ErrorIcon from "@mui/icons-material/Error";
import SearchIcon from "@mui/icons-material/Search";
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


const data = [
  {
    materi: "Cisco CCNA",
    tanggal: "6-7 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2000.000",
    lokasi: "Jakarta",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2500.000",
    lokasi: "Surabaya",
  },
  {
    materi: "Cisco CCNP",
    tanggal: "13-16 April 2026",
    waktu: "4 Hari (09:00 - 17:00 WIB)",
    harga: "Rp2500.000",
    lokasi: "Surabaya",
  },
];

const TableTraining = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F6FA",
        minHeight: "100vh",
        pt: 20,
        pb: 10,
      }}
    >
      {/* CARD */}
      <Box
        sx={{
          maxWidth: "1300px",
          mx: "auto",
          backgroundColor: "#fff",
          borderRadius: "20px",
          p: 4,
          boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
        }}
      >
        {/* PANDUAN */}
        <Box
          sx={{
            backgroundColor: "#FFF7E6",
            borderRadius: "12px",
            p: 3,
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 1,
              color: "#FFAA00",
            }}
          >
            <ErrorIcon sx={{ fontSize: 40 }} />
            Panduan
          </Typography>

          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            {[...Array(6)].map((_, i) => (
              <li key={i}>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </li>
            ))}
          </ul>
        </Box>

        {/* FILTER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Dropdown
              label="Semua Bulan"
              options={["Januari", "Februari", "Maret", "April"]}
            />
            <Dropdown label="Tersedia" options={["Tersedia", "Penuh"]} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body2">Show 10 entries</Typography>

            <TextField
              size="small"
              placeholder="Search..."
              sx={{ width: "260px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#aaa" }} />
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
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #eee",
          }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
              <TableRow>
                {[
                  "Materi",
                  "Tanggal",
                  "Waktu",
                  "Harga",
                  "Lokasi",
                  "Status",
                  "Aksi",
                ].map((h) => (
                  <TableCell key={h}>
                    <Typography variant="body2" fontWeight={600}>
                      {h}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body2">
                      {item.materi}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">
                      {item.tanggal}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">
                      {item.waktu}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">
                      {item.harga}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">
                      {item.lokasi}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label="Tersedia"
                      size="small"
                      sx={{
                        backgroundColor: "#F0FFF8",
                        color: "#18AB56",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => setOpenModal(true)}
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