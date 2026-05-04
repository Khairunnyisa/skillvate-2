import React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingPage from "../landing-page";
import TrainingPage from "../training";
import ListTraining from "../list-training";

const Navbar = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "50px",
            px: 2,
            py: 1,
            color: "#000",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Toolbar sx={{ position: "relative" }}>
            {/* Logo */}
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Skillvate
            </Typography>

            {/* Menu */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                whiteSpace: "nowrap",
                flexWrap: "nowrap",
              }}
            >
              <Button
                component={Link}
                to="/"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                Home
              </Button>
              <Button
              component={Link}
                to="/training"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                Training
              </Button>
              <Button
              component={Link}
                to="/training-list"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                Jadwal Training
              </Button>
              <Button
              component={Link}
                to="/faq"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                FAQs
              </Button>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontSize: "16px",
                  width: "200",
                  fontFamily: "Inter, sansserif",
                }}
              >
                Trainer
              </Button>
            </Box>

            {/* Button kanan */}
            <Box sx={{ marginLeft: "auto" }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  px: 3,
                  backgroundColor: "#7560E2",
                  textTransform: "none",
                }}
              >
                Daftar Training
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Navbar;
