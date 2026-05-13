import { Box, Typography } from "@mui/material";

const categories = [
  "EC Council",
  "CompTIA",
  "Cisco",
  "Microsoft",
  "AWS",
  "Google Cloud",
  "IBM",
  "Red Hat",
  "Palo Alto Networks",
  "Juniper Networks",
  "VMware",
  "Oracle",
  "Salesforce",
  "Fortinet",
  "Check Point",
  "SANS Institute",
  "ISC²",
];

export default function TrainingSidebar() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: "20px",
        p: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3}>
        Training
      </Typography>

      {categories.map((item, i) => (
        <Box
          key={i}
          sx={{
            py: 2,
            borderBottom: "1px solid #eee",
            cursor: "pointer",
            "&:hover": {
              color: "#6C5DD3",
            },
          }}
        >
          <Typography variant="body1">{item}</Typography>
        </Box>
      ))}
    </Box>
  );
}