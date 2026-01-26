// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, NavLink } from 'react-router-dom';

// const Header = () => {
//   return (
//     <>
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="/home">ReactRouting1</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto gap-4  ">
//               <Link className='text-decoration-none text-info' to="/home" >Home</Link>
//               {/* <Nav.Link href="/home">Home</Nav.Link> */}
//               <Link className='text-decoration-none text-info' to="/about">About</Link>
//               <Link className='text-decoration-none text-info' to="/blog">Blog</Link>

//               <NavLink className={({isActive})=> isActive ? "text-decoration-none   text-danger": " text-decoration-none  text-info" }  to="/services">Services</NavLink>
//               <NavLink className={({isActive})=> isActive ? "text-decoration-none   text-danger": " text-decoration-none  text-info" } to="/contact">Contact</NavLink>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// export default Header





import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">ReactRouting1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4  ">

              {/* <Nav.Link href="/home">Home</Nav.Link> */}
              <NavLink className={({ isActive }) => ` text-decoration-none 
              ${isActive ? "  text-danger " : "  text-info "}`} to="/about">About</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/blog">Blog</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/services">Services</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/products">Posts</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/user">Profile</NavLink>


              {/* <HashLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/about#h3">Heading 3</HashLink> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header