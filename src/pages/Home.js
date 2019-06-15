import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Page from "components/layout/Page";
import { useThemeToggle } from "providers/ThemeToggleProvider";

export default function Home() {
  const { toggleTheme } = useThemeToggle();
  return (
    <Page title="Home" activeRoute="Home">
      <Typography>Hello World</Typography>
      <Button variant="contained" color="primary" onClick={toggleTheme}>Toggle</Button>
    </Page>
  )
}