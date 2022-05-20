import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { userIsAuthenticated } from './helpers/auth'

// bootstrap components
import { Navbar, Nav, Container } from 'react-bootstrap'

const PageNavBar = () => {

  const Navigate = useNavigate()

  const handleLogOut = () => {
    window.localStorage.removeItem('sei-63-breadbored')
    Navigate('/login')
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          </Nav>

          {userIsAuthenticated() ?
            <>
              {/* <Nav.Link as={Link} to="/cities/add">Add a City</Nav.Link> */}
              <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
            </>
            :
            <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar