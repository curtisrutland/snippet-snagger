import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import deepOrange from "@material-ui/core/colors/deepOrange"

const palette = {
  primary: blue,
  secondary: deepOrange
}

export const lightTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "light"
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    ...palette,
    type: "dark"
  }
});

export function getTheme(theme) {
  return theme === "light" ? lightTheme : darkTheme;
}