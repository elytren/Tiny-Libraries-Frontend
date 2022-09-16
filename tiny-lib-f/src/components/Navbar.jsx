import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const FTANavbar = () => {
  return (
      <Navbar id='navbar'collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand id='brandtitle' href=""><img id='logo' className='center' src='/ftalogo3.png' alt='logo'/>Free Trade Adventures</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link id='homelink' href="/">Home</Nav.Link>
            <Nav.Link id='aboutlink' href="/#about">About</Nav.Link>
            <Nav.Link id='startlink' href="/#start">Get Started</Nav.Link>
            <Nav.Link id='startlink' href="/#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default FTANavbar