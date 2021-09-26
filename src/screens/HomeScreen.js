import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Stack,
  Link,
  Tooltip,
  Typography,
  IconButton,
  Snackbar,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";

const ColorText = ({ text }) => {
  return (
    <Typography display="inline" color="primary" variant="inherit">
      {text}
    </Typography>
  );
};

const HomeScreen = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleResumeClick = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const closeSnackbar = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleSnackbarClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <>
      <Box
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        display="flex"
        minHeight="100vh"
      >
        <Stack spacing={1}>
          <Typography variant="h3">hi, I'm Julian.</Typography>
          <Typography variant="h5">
            I like to make things with <ColorText text="Java" /> and{" "}
            <ColorText text="React" />.
          </Typography>
          <Stack direction="row" justifyContent="center">
            <Tooltip title="GitHub" arrow>
              <IconButton component={Link} href="https://github.com/ngaionice">
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Things I've made" arrow>
              <IconButton color="inherit" component={RouterLink} to="/things">
                <AppsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Resume" arrow>
              <IconButton color="inherit" onClick={handleResumeClick}>
                {/*<IconButton color="inherit" component={RouterLink} to="/resume">*/}
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Resume not yet available, check back later!"
        action={closeSnackbar}
      />
    </>
  );
};

export { HomeScreen };
