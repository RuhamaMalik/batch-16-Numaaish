import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Services from './Services'
import Home from './Home'
import Header from './Header'
import PageNotFound from './PageNotFound'
import Post from './Post'
import ProductDetail from './ProductDetail'
import { Route } from 'react-router-dom'
import Layout from './Layout'
import UserLayout from './UserLayout'

const Main = () => {

  //   smit.com/about
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home />,
  //     children:[
  //       {
  //         path:"/home",
  //         element:<Home />,
  //       },{
  //         path:"/about",
  //         element:<About />,
  //       },{
  //         path:"/services",
  //         element:<Services />,
  //       },
  //       {
  //         path:"/contact",
  //         element:<Contact />,
  //       },
  //       {
  //         path:"*",
  //         element:<PageNotFound />
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/posts' element={<Post />} />
        </Route>

        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="*" element={<PageNotFound />} />

        <Route path='/user' element={<UserLayout />}  >
          <Route path='user' element={<h1>User Dashboard</h1>} />
          <Route path='settings' element={<h1 className='display-2'>Settings Page</h1>} />
          <Route path='posts' element={<h1 className='display-2'>User Posts Page</h1>} />
        </Route>

      </>

    )
  )


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default Main