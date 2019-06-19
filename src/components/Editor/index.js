import React, { useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MonacoEditor from "react-monaco-editor";
import { useThemeToggle } from "providers/ThemeToggleProvider";
import FlexFill from "components/layout/FlexFill";
import { languageList, languageMap } from "api/languages";

const no_op = _ => { };

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap"
  },
  wrapper: {
    flexGrow: 1,
    width: "100%"
  },
  toolbar: {
    zIndex: 100,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper)
  },
  language: {
    width: 200
  }
}));

export default function Editor({
  value,
  onValueChange = no_op,
  language,
  onLanguageChange = no_op,
  readOnly = false
}) {

  const { theme } = useThemeToggle();
  const classes = useStyles();
  const editorTheme = theme === "light" ? "vs" : "vs-dark";
  const editorRef = useRef(null);

  function handleValueChange(newValue) {
    onValueChange(newValue);
  }

  function handleLanguageChange(e) {
    const l = languageMap.get(e.target.value);
    onLanguageChange(l);
  }

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={1}
        className={classes.toolbar}
      >
        {!readOnly && (
          <Toolbar >
            <FlexFill />
            <FormControl className={classes.language}>
              <InputLabel htmlFor="input-language">Language</InputLabel>
              <Select variant="outlined" inputProps={{ id: "input-language" }} value={language.languageId} onChange={handleLanguageChange}>
                {languageList.map(l => <MenuItem value={l.id} key={l.id}>{l.aliases[0]}</MenuItem>)}
              </Select>
            </FormControl>
          </Toolbar>
        )}
      </AppBar>
      <div className={classes.wrapper}>
        <MonacoEditor
          width="100%"
          height="100%"
          language={language.languageId}
          theme={editorTheme}
          value={value}
          options={{ selectOnLineNumbers: true, readOnly: readOnly }}
          onChange={handleValueChange}
          editorDidMount={handleEditorDidMount}
        />
      </div>
    </div>
  )
}