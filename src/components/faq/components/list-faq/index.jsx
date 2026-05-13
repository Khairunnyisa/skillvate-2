import { Box, Container } from "@mui/material";
import FaqItem from "../../../cards/cardFaq";


const faqData = [
  "Why You choose Skillvate?",
  "Lorem Ipsum",
  "Flexible Learning Options",
  "Expert Instructors",
  "Comprehensive Course Material",
  "Real-world Projects",
  "Networking Opportunities",
  "Affordable Pricing",
  "Career Support Services",
  "Personalized Learning Paths",
  "Access to Exclusive Resources",
  "Community Engagement",
  "Certification and Accreditation",
  "Lifetime Access to Course Content",
];

const FaqList = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#F9FAFB",
      }}
    >
      <Container maxWidth="lg">
        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "1fr 1fr",
    },
    gap: 3,
    alignItems: "start", // 🔥 INI KUNCINYA
  }}
>
          {faqData.map((item, i) => (
            <FaqItem key={i} text={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqList;