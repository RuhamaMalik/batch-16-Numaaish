import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { ThemeContext } from '../context/ThemeProvider';

const ThemeSelector = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log(theme);
  
  return (
    <>
      <div className="container-xxl d-flex justify-content-end gap-2 py-5">

        <Button onClick={()=>setTheme("blue")} variant="primary">Blue</Button>
        <Button onClick={()=>setTheme("grey")} variant="secondary">Grey</Button>
        <Button onClick={()=>setTheme("green")} variant="success">Green</Button>
        <Button onClick={()=>setTheme("yellow")} variant="warning">Yellow</Button>
        <Button onClick={()=>setTheme("red")} variant="danger">Red</Button>
        <Button onClick={()=>setTheme("aqua")} variant="info">Aqua</Button>
        <Button onClick={()=>setTheme("light")} variant="light">White</Button>
        <Button onClick={()=>setTheme("dark")} variant="dark">Dark</Button>

      </div>
    </>
  )
}

export default ThemeSelector