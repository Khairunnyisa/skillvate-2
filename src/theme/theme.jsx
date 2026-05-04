import { createTheme } from "@mui/material/styles";
import { Bold } from "lucide-react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7560E2",
    },
    secondary: {
      main: "#F1EFFC",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#666",
    },
    background: {
      default: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h1: {
      fontFamily: "Raleway, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Raleway, sans-serif",
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Raleway, sans-serif",
      fontSize: 32,
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Raleway, sans-serif",
      fontSize: 20,
      fontWeight: 600,
    },
    
    body1: {
      fontSize: 18,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.6,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 20,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          padding: "10px 20px",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
  },
});

export default theme;