import ErrorIcon from "@mui/icons-material/Error";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Box,
  Typography,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
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
  return (
    // 🌫️ BACKGROUND ABU
    <Box
      sx={{
        backgroundColor: "#F5F6FA",
        minHeight: "100vh",
        pt: 20,
        pb: 10,
      }}
    >
      {/* 🤍 CARD PUTIH */}
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
        {/* 🟡 PANDUAN */}
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
            <ErrorIcon
              sx={{
                fontSize: 40,
                color: "#FFAA00",

                p: "4px",
              }}
            />
            Panduan
          </Typography>

          <ul style={{ margin: 0, paddingLeft: "20px" }}>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* 🔽 FILTER + SEARCH */}
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
          {/* LEFT (dropdown doang) */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Dropdown
              label="Semua Bulan"
              options={["Januari", "Februari", "Maret", "April"]}
            />

            <Dropdown label="Tersedia" options={["Tersedia", "Penuh"]} />
          </Box>

          {/* RIGHT (entries + search) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* 🔥 SHOW ENTRIES */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2">Show</Typography>

              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  px: 2,
                  py: 0.8,
                  minWidth: "60px",
                  textAlign: "center",
                  backgroundColor: "#F5F6FA",
                }}
              >
                <Typography variant="body2">10</Typography>
              </Box>

              <Typography variant="body2">entries</Typography>
            </Box>

            {/* 🔥 SEARCH */}
            <TextField
              size="small"
              placeholder="Search..."
              sx={{
                width: "260px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#Fffff",

                  "& fieldset": {
                    border: "1px solid #ddd",
                  },

                  "&:hover fieldset": {
                    borderColor: "#ccc",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "#7560E2",
                  },
                },
              }}
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

        {/* 📊 TABLE */}
        <Paper
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "none",
            border: "1px solid #eee",
          }}
        >
          <Table>
            <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
              <TableRow>
                <TableCell>Materi</TableCell>
                <TableCell>Tanggal</TableCell>
                <TableCell>Waktu</TableCell>
                <TableCell>Harga</TableCell>
                <TableCell>Lokasi</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Aksi</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.materi}</TableCell>
                  <TableCell>{item.tanggal}</TableCell>
                  <TableCell>{item.waktu}</TableCell>
                  <TableCell>{item.harga}</TableCell>
                  <TableCell>{item.lokasi}</TableCell>

                  <TableCell>
                    <Chip
                      label="Tersedia"
                      size="small"
                      sx={{
                        px: 2,
                        py: 2.5,
                        borderRadius: "6px",
                        backgroundColor: "#F0FFF8",
                        color: "#18AB56",
                        fontWeight: 500,
                      }}
                    />
                  </TableCell>

                  <TableCell>
                    <Button variant="contained" size="small" color="primary">
                      Daftar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Box>
  );
};

export default TableTraining;
