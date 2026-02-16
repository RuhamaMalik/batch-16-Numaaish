import React from 'react'
import Header from './Header'
import { Outlet , useNavigation } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const navigation = useNavigation();

console.log( navigation.state);

  return (
    <>
      <Header />
      {
        navigation.state === "loading" && (
          <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
            <div className="text-7xl text-white animate-pulse">Loading...</div>
          </div>
        )
      }

      <Outlet />
      <Footer />
    </>
  )
}

export default Layout