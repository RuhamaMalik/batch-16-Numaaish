import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Services from './Services'
import Home from './Home'
import Header from './Header'
import PageNotFound from './PageNotFound'
import Post from './Post'
import ProductDetail from './ProductDetail'

const Main = () => {
  return (
    <>

    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/blog' element={<Blog /> } />
        <Route path='/services' element={<Services /> } />
        <Route path='/posts' element={<Post /> } />
        <Route path='/posts/:id' element={<ProductDetail /> } />
        <Route path='*' element={<PageNotFound /> } />
      </Routes>

    </>
  )
}

export default Main