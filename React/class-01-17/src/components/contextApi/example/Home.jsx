import { useContext } from "react"
import { ThemeContext } from "./context/ThemeProvider"


const Home = () => {
  const { currentStyle } = useContext(ThemeContext)
  const theme = currentStyle.theme;

  return (
    <div className='container-xxl py-3'>
      <h1 className='display-3 fw-bold' style={{ color: "black" }} >Home Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit rerum cupiditate, non ducimus nemo quasi dicta doloremque voluptatibus modi accusantium molestias obcaecati laborum veniam eligendi? Omnis est sit asperiores ipsum.</p>
      <button className='btn p-3 px-5' style={currentStyle.button}  >View More</button>

      <br /><br />

      {
        theme === "light" ? <img src="https://static.vecteezy.com/system/resources/thumbnails/015/397/846/small/beautiful-african-american-woman-using-laptop-flat-illustration-working-from-home-remote-job-online-shopping-vector.jpg" alt="" />

          : theme === "dark" ? <img src="https://static.vecteezy.com/system/resources/thumbnails/037/268/137/small/hacker-in-black-hoodie-cyber-criminal-with-laptop-stealing-user-personal-data-or-hacker-attack-and-web-security-internet-phising-concept-vector.jpg" alt="" />

            : theme === "yellow" ? <img src="https://i.pinimg.com/736x/ae/01/bd/ae01bd89d2d14acd68d92f5f74cef4a0.jpg" alt="" />

              : theme === "blue" ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxeDBH5hVID_tvE54X6Mh-I13xmfjzwFmow&s" alt="" />
                
              : <img src="" alt="https://static.vecteezy.com/system/resources/thumbnails/015/397/846/small/beautiful-african-american-woman-using-laptop-flat-illustration-working-from-home-remote-job-online-shopping-vector.jpg" />
      }

    </div>
  )
}

export default Home