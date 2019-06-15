import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Page from "components/layout/Page";

export default function Example() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <Page title="Example" activeRoute="Example">
      <Typography>Example Counter. Count: {count}</Typography>
      <div style={{display: "flex"}}>
        <Button variant="contained" color="secondary" onClick={decrement}>Decrement</Button>
        <Button variant="contained" color="primary" onClick={increment}>Increment</Button>
      </div>
    </Page>
  )
}