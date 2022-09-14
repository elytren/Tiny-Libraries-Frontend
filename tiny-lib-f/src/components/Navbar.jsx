import React from 'react'
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <>
      <h1>Free Trade Adventures</h1>  
      <Nav className="justify-content-end" activeKey="/home">
        
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href='/#about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href='/#start'>Start Your Journey</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navbar