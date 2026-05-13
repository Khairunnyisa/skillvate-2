import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const leftTop = [
  "/static/images/trainer/trainer-1.png",
  "/static/images/trainer/trainer-2.png",
  "/static/images/trainer/trainer-3.png",
];

const leftBottom = [
  "/static/images/trainer/trainer-4.png",
  "/static/images/trainer/trainer-5.png",
  "/static/images/trainer/trainer-6.png",
 
];

const rightTop = [
 "/static/images/trainer/trainer-7.png",
  "/static/images/trainer/trainer-8.png",
  "/static/images/trainer/trainer-9.png",
];

const rightBottom = [
   "/static/images/trainer/trainer-10.png",
  "/static/images/trainer/trainer-11.png",
  "/static/images/trainer/trainer-12.png",
];

const centerImage = [
  "/static/images/trainer/trainer-13.png",
];

const Trainer = () => {
  return (
    <Box sx={{ py: 14, overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        
        {/* TITLE */}
        <Typography variant="h2" fontWeight={600} mb={10}>
          Our <span style={{ color: "#6C5CE7" }}>Trainer</span>
        </Typography>

        {/* 🔥 MAIN WRAPPER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          {/* 🔥 LEFT */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            
            {/* TOP ROW */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {leftTop.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  sx={{
                    width: 130,
                    height: 170,
                    borderRadius: "16px",
                    objectFit: "cover",
                    transform: `translateY(${i % 2 === 1 ? "0px" : "40px"})`,
                  }}
                />
              ))}
            </Box>

            {/* BOTTOM ROW */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {leftBottom.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  sx={{
                    width: 130,
                    height: 170,
                    borderRadius: "16px",
                    objectFit: "cover",
                    transform: `translateY(${i % 2 === 0 ? "40px" : "0px"})`,
                  }}
                />
              ))}
            </Box>

          </Box>

          {/* 🔥 CENTER IMAGE */}
          <Box
            component="img"
            src={centerImage}
            sx={{
              width: 130,
              height: 170,
              borderRadius: "20px",
              objectFit: "cover",
              mx: 4,
            }}
          />

          {/* 🔥 RIGHT */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            
            {/* TOP ROW */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {rightTop.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  sx={{
                    width: 130,
                    height: 170,
                    borderRadius: "16px",
                    objectFit: "cover",
                    transform: `translateY(${i % 2 === 1 ? "0px" : "30px"})`,
                  }}
                />
              ))}
            </Box>

            {/* BOTTOM ROW */}
            <Box sx={{ display: "flex", gap: 3 }}>
              {rightBottom.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  sx={{
                    width: 130,
                    height: 170,
                    borderRadius: "16px",
                    objectFit: "cover",
                    transform: `translateY(${i % 2 === 0 ? "30px" : "0px"})`,
                  }}
                />
              ))}
            </Box>

          </Box>

        </Box>

        {/* 🔥 TEXT BAWAH */}
        <Box mt={15}>
          <Typography variant="h2" fontWeight={700}>
            Trusted By <span style={{ color: "#6C5CE7", mb: 4}}>Trainers</span>
          </Typography>

          <Typography variant="h3" sx={{ color: "#6B7280", mb: 4 }}>
            From Various Industries
          </Typography>

        
          <Button variant="contained" component={Link} to="/trainer">More Trainer</Button>
         
   
        </Box>

      </Container>
    </Box>
  );
};

export default Trainer;