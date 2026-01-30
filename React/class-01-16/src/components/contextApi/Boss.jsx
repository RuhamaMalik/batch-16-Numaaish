import { createContext, useState } from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext();
export const ThemeContext = createContext();

const Boss = () => {
  //create 
  const [theme, setTheme] = useState("light");

  const [user, setUser] = useState({
    name: "Hooria",
    email: "hooria@gmail.com",
    contact: "02983847837"
  });




  return (

    // provide
    <ThemeContext.Provider value={{theme,setTheme}}  >
      <UserContext.Provider value={{ user, setUser }}  >
        <div>
          <h1>Boss File</h1>
          <ComponentA />
        </div>

      </UserContext.Provider>
    </ThemeContext.Provider>


  )
}

export default Boss