import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeToggleProvider, useThemeToggle } from "./ThemeToggleProvider";
import { getTheme } from "theme";

function MaterialThemeProvider({ children }) {
  const { theme } = useThemeToggle();
  return (
    <ThemeProvider theme={getTheme(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default function AppProvider({ children }) {
  return (
    <ThemeToggleProvider>
      <MaterialThemeProvider>
        {children}
      </MaterialThemeProvider>
    </ThemeToggleProvider>
  )
}