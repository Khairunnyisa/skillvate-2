import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "@fontsource/inter";
import "@fontsource/raleway";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.jsx";

import { RouterProvider } from "react-router-dom";
import router from "./components/router/index.jsx";
import {QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  </QueryClientProvider>
);
