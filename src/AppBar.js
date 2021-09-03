import React, { Component, Fragment } from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import AppMenu from "./AppMenu";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
});

const AppBar = withStyles(styles)(
  class extends Component {
    render() {
      const { classes, title } = this.props;
      return (
        <Fragment>
          <MuiAppBar>
            <Toolbar>
              <Typography
                variant="subtitle1"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
              <Tooltip title="Home" aria-label="home">
                <IconButton color="inherit" component={RouterLink} to="/">
                  <HomeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Misc. React Apps" aria-label="quick apps">
                <AppMenu />
              </Tooltip>
              <Tooltip title="Resume" aria-label="resume">
                <IconButton color="inherit" component={RouterLink} to="/resume">
                  <DescriptionIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </MuiAppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const AppBar2 = withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root}>
    <AppBar {...props} />
  </div>
));
export { AppBar2 as AppBar };
