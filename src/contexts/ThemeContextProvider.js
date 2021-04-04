import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [themeState, setThemeState] = useState("normal");
  return (
    <ThemeContext.Provider value={[themeState, setThemeState]}>
      {props.children}
    </ThemeContext.Provider>
  );
};
