const THEME_KEY = "snippetsnagger.theme";

export const theme = {
  set(val) { localStorage.setItem(THEME_KEY, val); },
  get() { return localStorage.getItem(THEME_KEY) || "light"; }
}