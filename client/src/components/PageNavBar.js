import React from 'react'

import { Link } from 'react-router-dom'

// bootstrap components
import { Navbar, Nav, Container } from 'react-bootstrap'

const PageNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand as={Link} to="/login" className='navBarLinks'>Login</Navbar.Brand>
            <Navbar.Brand as={Link} to="/Register" className='navBarLinks'>Register</Navbar.Brand>
            <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar