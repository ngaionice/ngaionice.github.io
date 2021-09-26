import React, { useEffect, useState } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "./Theme";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";
import { AppBar } from "./AppBar";

const App = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);
  const [home, setHome] = useState(location.pathname === "/");

  useEffect(() => {
    const existingPreference = localStorage.getItem("darkMode");
    if (existingPreference) {
      existingPreference === "dark" ? setDark(true) : setDark(false);
    } else {
      setDark(true);
      localStorage.setItem("darkMode", "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    setHome(location.pathname === "/");
  }, [location]);

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme(dark)}>
        <CssBaseline />
        <AppBar home={home} darkControl={[dark, setDark]} />
        <Navigation />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { App };
