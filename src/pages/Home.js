import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";
import Page from "components/layout/Page";
import Navigation from "components/layout/Navigation";

export default function Home() {
  return (
    <Page>
      <Navigation>
        <Typography>Hello World</Typography>
        <Button component={Link} to="/test/my%20message">Test</Button>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
        <Typography style={{margin: 200}}>Hello World</Typography>
      </Navigation>
    </Page>
  )
}