import { Box, Container } from "@mui/material";
import FaqItem from "../../../cards/cardFaq";

const FaqList = ({ data }) => {
  console.log(data);

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
            alignItems: "start",
          }}
        >
          {data?.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqList;