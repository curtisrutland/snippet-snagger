import * as monaco from "monaco-editor";

interface ILanguage {
  language: string;
  languageName: string;
}

export declare const languageMap: Map<string, ILanguage>;
export declare const languageList: monaco.languages.ILanguageExtensionPoint[];