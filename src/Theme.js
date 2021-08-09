import { createTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: grey[900],
    },
    secondary: {
      main: orange[500],
    },
    typography: {
      allVariants: {
        color: "#FAFAFA",
      },
    },
    text: {
      primary: "#000000",
    },
  },
});

export default theme;
