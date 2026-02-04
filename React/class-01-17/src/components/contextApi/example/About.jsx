import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeProvider';

const About = () => {
   const {currentStyle} = useContext(ThemeContext);
  return (
    <div className='container-xxl'>
      <h1>About Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum cupiditate, non ducimus nemo quasi dicta doloremque voluptatibus modi accusantium molestias obcaecati laborum veniam eligendi? Omnis est sit asperiores ipsum.</p>
      <button className='btn p-3 px-5' style={currentStyle.button}>View More</button>
    </div>
  )
}

export default About