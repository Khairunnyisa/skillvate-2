import React, { useState } from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import RegisterModal from "../training-schedule/components/register-modal";



const Navbar = ({ isOverlay = true }) => {
  const [open, setOpen] = useState(false);

  // 🔥 modal state
  const [openModal, setOpenModal] = useState(false);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Training", to: "/training" },
    { label: "Jadwal Training", to: "/training-list" },
    { label: "FAQs", to: "/faq" },
    { label: "About Us", to: "/about-us" },
    { label: "Trainer", to: "/trainer" },
  ];

  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 4,

          position: isOverlay ? "absolute" : "relative",

          top: isOverlay ? 0 : "auto",

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
              {/* LOGO */}
              <Box
                component="img"
                src="/static/images/skillvate-logo.svg"
                alt="Skillvate"
                sx={{ height: 33 }}
              />

              {/* MENU DESKTOP */}
              <Box
                sx={{
                  position: "absolute",

                  left: "50%",

                  transform: "translateX(-50%)",

                  display: { xs: "none", md: "flex" },

                  whiteSpace: "nowrap",

                  flexWrap: "nowrap",

                  gap: { md: 1, lg: 2 },
                }}
              >
                {menuItems.map((item, i) => (
                  <Button
                    key={i}
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#000",

                      textTransform: "none",

                      fontSize: {
                        md: "14px",
                        lg: "16px",
                      },

                      fontFamily: "Inter, sans-serif",

                      position: "relative",

                      fontWeight: 400,

                      px: {
                        md: 1,
                        lg: 2,
                      },

                      "&::after": {
                        content: '""',

                        position: "absolute",

                        left: "20%",

                        bottom: 6,

                        width: "60%",

                        height: "2px",

                        backgroundColor: "#6C5DD3",

                        transform: "scaleX(0)",

                        transition: "transform 0.25s ease",
                      },

                      "&:hover": {
                        color: "#6C5DD3",

                        fontWeight: 600,

                        backgroundColor: "transparent",
                      },

                      "&:hover::after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              {/* RIGHT */}
              <Box
                sx={{
                  marginLeft: "auto",

                  display: "flex",

                  gap: 1,
                }}
              >
                {/* 🔥 OPEN MODAL */}
                <Button
                  variant="contained"
                  onClick={() => setOpenModal(true)}
                  sx={{
                    borderRadius: "30px",

                    px: 3,

                    backgroundColor: "#7560E2",

                    textTransform: "none",

                    display: {
                      xs: "none",
                      md: "inline-flex",
                    },

                    "&:hover": {
                      backgroundColor: "#644DDB",
                    },
                  }}
                >
                  Daftar Training
                </Button>

                {/* MOBILE MENU */}
                <IconButton
                  onClick={() => setOpen(true)}
                  sx={{
                    display: {
                      xs: "flex",
                      md: "none",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      {/* 🔥 MOBILE DRAWER */}
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            pt: 5,
            textAlign: "center",
          }}
        >
          {menuItems.map((item, i) => (
            <Button
              key={i}
              component={Link}
              to={item.to}
              onClick={() => setOpen(false)}
              sx={{
                display: "block",

                width: "100%",

                mb: 1.5,

                color: "#000",

                textTransform: "none",

                fontSize: 16,
              }}
            >
              {item.label}
            </Button>
          ))}

          {/* 🔥 MOBILE OPEN MODAL */}
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setOpen(false);
              setOpenModal(true);
            }}
            sx={{
              mt: 2,

              borderRadius: "30px",

              backgroundColor: "#7560E2",

              textTransform: "none",

              "&:hover": {
                backgroundColor: "#644DDB",
              },
            }}
          >
            Daftar Training
          </Button>
        </Box>
      </Drawer>

      {/* 🔥 MODAL */}
      <RegisterModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Navbar;