import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import useGetPartner from "../../../../hooks/getPartner";

const Partnership = () => {
  const { data, isLoading } = useGetPartner({
    condition: true,
  });

  console.log(data);

  return (
    <Box
      id="next-section"
      sx={{
        mt: 35,
        py: 10,
        backgroundImage:
          "url('/static/images/partnership/bg-partnership.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, md: 4 },
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 600,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{ color: "primary.main" }}
          >
            Partnership
          </Box>
        </Typography>

        {/* LOGO GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {data?.map((item) => (
            <Box
              key={item.id}
              component="img"
              src={`http://localhost:1337${item.logo?.url}`}
              sx={{
                height: { xs: 100, md: 110 },
                objectFit: "contain",
                // filter: "grayscale(100%)",
                opacity: 1,
                transition: "0.3s",

                "&:hover": {
                  filter: "grayscale(0%)",
                  opacity: 1,
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Partnership;