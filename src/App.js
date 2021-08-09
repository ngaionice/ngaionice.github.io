import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline, Typography } from "@material-ui/core";

import theme from "./Theme";
import Navigation from "./Navigation";
import ParticleBackground from "./ParticleBackground";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParticleBackground />
        <Navigation />
        <Container>
          <Typography variant={"subtitle1"}>hi there</Typography>
        </Container>
      </ThemeProvider>
    );
  }
}

// const App = withStyles(styles)(({ classes }) => (
//   <ThemeProvider theme={theme}>
//     <div className={classes.root}>
//       <Navigation />
//     </div>
//   </ThemeProvider>
// ));

// const App = withStyles(styles)(({ classes }) => (
//
// ));

export default withStyles(styles)(App);
