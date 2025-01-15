import { createContext, useContext } from "react";

export const Mode = createContext({
  mode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const useMode = () => {
  return useContext(Mode);
};

export const ModeProvider = Mode.Provider;
