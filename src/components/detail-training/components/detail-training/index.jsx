import { Box, Typography, Chip, Divider } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function TrainingDetailContent({ title }) {
  return (
    <>
      {/* 🔥 CARD UTAMA */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: "20px",
          p: 4,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
          mb: 4, // kasih jarak ke bawah
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h3"
          lineHeight={1.5}
          fontWeight={700}
          textAlign="center"
          mb={2}
        >
          {title}
        </Typography>

        {/* BADGE */}
        <Box sx={{ display: "flex", justifyContent: "center",  }}>
          <Chip
            label="Cloud"
            sx={{
              bgcolor: "#6C5DD3",
              color: "#fff",
              px: 2,
              fontWeight: 500,
            }}
          />
        </Box>

        {/* INFO ROW */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            mb: 4,
            flexWrap: "wrap",
          }}
        >
          <InfoItem icon={<PersonIcon />} label="Trainer" value="Basic" />
          <InfoItem icon={<BarChartIcon />} label="Tingkatan" value="Basic" />
          <InfoItem icon={<AccessTimeIcon />} label="Durasi" value="3 Jam" />
          <InfoItem icon={<CheckCircleIcon />} label="Sertifikat" value="Yes" />
        </Box>

        {/* IMAGE */}
        <Box
          component="img"
          src="/static/images/training/detailtraining-img.png"
          alt="training"
          sx={{
            width: "100%",
            borderRadius: "16px",
          }}
        />
      </Box>

     
      <Box py={3}>
        {/* SECTION 1 */}
        <Typography variant="h5" fontWeight={700} mb={2}>
          Mengapa Harus Training CCNA Enterprise di Skillvate?
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Training ini dirancang untuk membantu peserta memahami konsep jaringan
          secara mendalam, mulai dari dasar hingga implementasi nyata di dunia
          kerja. Dengan kurikulum yang terstruktur dan mentor berpengalaman,
          kamu akan mendapatkan pengalaman belajar yang relevan dan aplikatif.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* SECTION 2 */}
        <Typography variant="h5" fontWeight={700} mb={2}>
          Pengenalan Training
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Program ini mencakup materi fundamental hingga advanced terkait cloud
          dan network operations. Peserta akan dibimbing untuk memahami
          infrastruktur modern serta best practice yang digunakan di industri.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* SECTION 3 */}
        <Typography variant="h5" fontWeight={700} mb={2}>
          Benefits
        </Typography>
        <Typography color="text.secondary" mb={3}>
          Dengan mengikuti training ini, kamu akan mendapatkan peningkatan skill
          teknis, akses ke materi eksklusif, serta peluang networking dengan
          profesional di bidang yang sama.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* SECTION 4 */}
        <Typography variant="h5" fontWeight={700} mb={2}>
          Testimoni dari para Trainer
        </Typography>
        <Typography color="text.secondary">
          Banyak peserta sebelumnya telah merasakan manfaat dari training ini,
          mulai dari peningkatan kompetensi hingga peluang karir yang lebih
          baik. Trainer kami siap membimbing kamu hingga benar-benar memahami
          materi.
        </Typography>
      </Box>
    </>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <Box sx={{ minWidth: 120 }}>
    <Box sx={{ mb: 1 }}>{icon}</Box>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Typography fontWeight={600}>{value}</Typography>
  </Box>
);