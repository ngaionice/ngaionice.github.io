import React, { Fragment } from "react";
import { Menu, MenuItem, Tooltip } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import IconButton from "@material-ui/core/IconButton";

const AppMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Fragment>
      <Tooltip title="Misc. React Apps">
        <IconButton
          color="inherit"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <AppsIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() =>
            window.location.replace("https://ionice.me/course-finder")
          }
        >
          UofT Course Finder
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default AppMenu;
