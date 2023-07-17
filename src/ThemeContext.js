import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "clear-sky-day",
  setTheme: () => {},
});
