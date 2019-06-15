import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Test from "./Test";

export default function Pages() {
  return (
    <Router style={{height: "100%", width: "100%"}}>
      <Home path="/" />
      <Test path="/test/:message" />
    </Router>
  )
}