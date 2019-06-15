import React from "react";
import AppProvider from "providers/AppProvider";
import Pages from "pages";

export default function App() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  )
}