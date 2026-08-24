import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function Themeprovider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
