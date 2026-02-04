import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Services from "./Services"
import ThemeProvider from "./context/ThemeProvider"


const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}  >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </>
    )
  )
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>

      
    </>
  )
}

export default Main