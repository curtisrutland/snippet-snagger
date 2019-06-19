import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Page from "components/layout/Page";
import EditorCard from "components/Editor/EditorCard";
import { languageMap } from "api/languages";

const useStyles = makeStyles({
  card: {
    margin: 20,
    height: 500,
    width: 500
  }
});

const ts = languageMap.get("typescript");

export default function Example() {
  // const [value, setValue] = useState("'use strict';\nconsole.log('hello world');");
  // const [language, setLanguage] = useState("javascript");
  const classes = useStyles();
  return (
    <Page title="Example" activeRoute="Example">
      {/* <Editor
        readOnly
        value={value}
        onValueChange={setValue}
        language={language}
        onLaguageChange={setLanguage}
      /> */}
      <EditorCard
        className={classes.card}
        title="Example"
        language={ts}
        value={"console.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\nconsole.log('hello world');\n"} />
    </Page>
  )
}