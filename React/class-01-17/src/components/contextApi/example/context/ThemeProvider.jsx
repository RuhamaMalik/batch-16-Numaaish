import { createContext, useState } from "react";
import { styles } from "../settings/ThemeStyle";



export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme]= useState("light");
  const currentStyle = styles[theme];
  
  
  return (
    <ThemeContext.Provider value={{theme, setTheme,currentStyle}}  >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider