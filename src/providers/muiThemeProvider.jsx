"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "'Inter'",
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      "Arial",
    ].join(","),
  },
});
const MuiThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>;
};
export default MuiThemeProvider;
