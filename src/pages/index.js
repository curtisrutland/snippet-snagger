import React from "react";
import { Router } from "@reach/router";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Home from "./Home";
import Example from "./Example";

export const ROUTES = [
  {
    Component: Home,
    Icon: HomeIcon,
    path: "/",
    name: "Home"
  },
  {
    Component: Example,
    Icon: InfoIcon,
    path: "/example",
    name: "Example"
  }
]

export default function Pages() {
  return (
    <Router style={{height: "100%", width: "100%"}}>
      {ROUTES.map(({Component, path}) => (
        <Component path={path} key={path} />
      ))}
    </Router>
  )
}