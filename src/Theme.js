import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";

const theme = (dark) => {
  return responsiveFontSizes(
    createTheme({
      palette: {
        mode: dark ? "dark" : "light",
        primary: {
          main: orange[500],
        },
        secondary: {
          main: dark ? grey[200] : grey[700],
        },
      },
      typography: {
        fontFamily: ["Roboto", "Quicksand"].join(","),
      },
      components: {
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h3: "h1",
            },
          },
          styleOverrides: {
            h3: {
              fontFamily: "Quicksand",
              fontWeight: 300,
            },
            h5: {
              fontFamily: "Roboto Condensed",
              fontWeight: 500,
            },
          },
        },
      },
    })
  );
};

const styles = {
  flex: {
    flex: 1,
  },
  appBarTransparent: {
    boxShadow: 0,
  },
  appsGrid: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 6,
    paddingBottom: 6,
  },
  appsChipStack: {
    paddingLeft: 1,
  },
};

export { theme, styles };
