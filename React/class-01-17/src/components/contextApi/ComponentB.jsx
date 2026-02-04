import { useContext } from 'react'
import ComponentC from './ComponentC'
import { ThemeContext } from './Boss';

const ComponentB = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  console.log(theme);

  return (

    <>
      <h1>ComponentB</h1>
      <button onClick={() => setTheme("dark")} >Update Theme</button>
      <hr />
      <ComponentC />
    </>
  )
}

export default ComponentB