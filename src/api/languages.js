import * as monaco from "monaco-editor";

export const languageList = monaco.languages.getLanguages();
export const languageMap = new Map();
languageList.forEach(l => languageMap.set(l.id, { language: l.id, languageName: l.aliases[0]}));
