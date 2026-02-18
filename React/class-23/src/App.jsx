import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'
import Products from './pages/Products'
// import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const getProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');

      await new Promise((resolve) => setTimeout(resolve, 2000))

      return res.data.products;

    } catch (error) {
      console.log("ERROR in get all products", error);
    }
  }





  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route loader={getProducts} path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider   router={router} />
    </>
  )
}

export default App
