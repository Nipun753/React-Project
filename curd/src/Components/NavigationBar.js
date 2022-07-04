import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { loginContext, setisLogedInContext } from '../App'

export default function Navigationbar() {
  const login = useContext(loginContext)
  const isLogin = useContext(setisLogedInContext)
  function handleLogout() {
    isLogin(false)
  }
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {console.log(login)}
        <Navbar.Brand ><Link to='/'>Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand ><Link to='/Gallery'>Gallery </Link></Navbar.Brand>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <Link className='text-black p-5' to="/dashboard">DashBoard</Link>
              <NavDropdown.Divider />
              <Link className='text-black  p-5' to="/dashboard">About</Link>
              <NavDropdown.Divider />
              <Link className='text-black  p-5' to="/dashboard">Something</Link>
            </NavDropdown>
          </Nav>

          {login ?
            <Nav>
              <Navbar.Brand ><Link to='/'>  <button onClick={handleLogout}>Logout</button> </Link></Navbar.Brand>
            </Nav>

            : <Nav>
              <Navbar.Brand ><Link to='/registration'>Sign Up</Link></Navbar.Brand>
              <Navbar.Brand >
                <Link to='/Login'>
                  Log In
                </Link>
              </Navbar.Brand>
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
