import { Box, Container } from "@mui/material";
import TrainingSidebar from "./components/sidebar";
import TrainingDetailContent from "./components/detail-training";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../landing-page/components/footer";

export default function TrainingDetailPage() {
  const { slug } = useParams();
  const location = useLocation();

  const title = location.state?.title;

  return (
    <Box sx={{ bgcolor: "#F5F6FA", minHeight: "100vh" }}>
      <Navbar isOverlay={false} />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDEBAR */}
          <Box
            sx={{
              width: "320px",
              flexShrink: 0,
            }}
          >
            <TrainingSidebar />
          </Box>

          {/* RIGHT CONTENT */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
            }}
          >
            <TrainingDetailContent title={title || slug} />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
