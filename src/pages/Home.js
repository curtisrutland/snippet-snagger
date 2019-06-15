import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import Page from "components/layout/Page";

export default function Home() {
  return (
    <Page title="Home">
      <Typography>Hello World</Typography>
      <Button component={Link} to="/test/my%20message">Test</Button>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
      <Typography style={{ margin: 200 }}>Hello World</Typography>
    </Page>
  )
}