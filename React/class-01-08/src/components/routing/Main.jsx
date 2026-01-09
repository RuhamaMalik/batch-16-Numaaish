import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'

const Main = () => {
  return (
    <>

      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

    </>
  )
}

export default Main