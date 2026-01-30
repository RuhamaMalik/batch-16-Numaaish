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
          <Navbar.Brand href="/">RGMCoders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-4  ">

              <NavLink className={({isActive})=> ` text-decoration-none 
              ${isActive ? "  text-danger " : "  text-info "}` } to="/">Home</NavLink>
             
              <NavLink className={({isActive})=> ` text-decoration-none 
              ${isActive ? "  text-danger " : "  text-info "}` } to="/about">About</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/contact">Contact</NavLink>

              <NavLink className={({ isActive }) => `
              text-decoration-none
              ${isActive ? "   text-danger" : "  text-info"}
              `  } to="/services">Services</NavLink>

          
             

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