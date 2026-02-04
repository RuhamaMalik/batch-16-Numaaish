import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      <div className="container-xxl d-flex min-vh-100  ">

        <aside className=' bg-dark text-light  px-3 flex-shrink-0 ' style={{ width: "300px !important" }}  >
          <h1 className='display-3'>User Profile</h1>

          <nav className='d-flex flex-column gap-5 fs-1 mt-5 pt-5 '>
            <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/home" >Home</NavLink>
            <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/user/settings" >Settings</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/user/posts" >Posts</NavLink>

            
            <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } >Logout</NavLink>
          </nav>
        </aside>

        <main className=''>
          <Outlet />
        </main>

      </div>
    </>
  )
}

export default UserLayout