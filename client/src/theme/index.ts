import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  // interface Theme {}
  // allow configuration using `createTheme`
  // interface ThemeOptions {}
}

const theme = createTheme({});

export default theme;
