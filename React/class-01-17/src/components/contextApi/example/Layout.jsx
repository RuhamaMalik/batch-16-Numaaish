import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ThemeSelector from './component/ThemeSelector'

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>
        <ThemeSelector/>
        <Outlet />
      </div> 
      <Footer />
    </>
  )
}

export default Layout