import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link as RouterLink } from "react-router-dom";
import { styles } from "./Theme";

const AppBar = ({ title, darkControl, home }) => {
  const sv = styles;
  const [dark, setDark] = darkControl;

  return (
    <>
      <MuiAppBar color="transparent" position="fixed" sx={sv.appBarTransparent}>
        <Toolbar>
          <Typography variant="body1" sx={sv.flex}>
            {title}
          </Typography>

          {home ? null : (
            <>
              <Tooltip title="Home" aria-label="home" arrow>
                <IconButton color="inherit" component={RouterLink} to="/">
                  <HomeIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Resume" aria-label="resume">
                <IconButton
                  color="inherit"
                  component={RouterLink}
                  to="/resume"
                  arrow
                  disabled
                >
                  <DescriptionIcon />
                </IconButton>
              </Tooltip>
            </>
          )}

          <Tooltip title={"Toggle theme"} arrow>
            <IconButton
              color="inherit"
              aria-label="toggle theme"
              onClick={() => setDark(!dark)}
            >
              {dark ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </MuiAppBar>
    </>
  );
};

export { AppBar };
