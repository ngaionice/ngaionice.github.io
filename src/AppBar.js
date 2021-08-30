import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
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

const ScrolledAppBar = withStyles(styles)(
  class extends Component {
    state = {
      scrolling: false,
      scrollTop: 0,
    };

    onScroll = (e) => {
      this.setState((state) => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling: e.target.documentElement.scrollTop > state.scrollTop,
      }));
    };

    shouldComponentUpdate(props, state) {
      return this.state.scrolling !== state.scrolling;
    }

    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }

    render() {
      const { classes, title } = this.props;
      return (
        <Fragment>
          <Slide in={!this.state.scrolling}>
            <AppBar>
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
                  <IconButton
                    color="inherit"
                    component={RouterLink}
                    to="/resume"
                  >
                    <DescriptionIcon />
                  </IconButton>
                </Tooltip>
              </Toolbar>
            </AppBar>
          </Slide>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const AppBar2 = withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root}>
    <ScrolledAppBar {...props} />
  </div>
));
export { AppBar2 as AppBar };
