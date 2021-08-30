import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <ParticleBackground />
        <Navigation />
      </MuiThemeProvider>
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
