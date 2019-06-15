import React from "react";
import Typography from "@material-ui/core/Typography";
import Page from "components/layout/Page";

export default function Test({ message }) {
  return (
    <Page>
      <Typography>Test {message}</Typography>
    </Page>
  )
}