import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark" expanded={expanded} className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          Bhabani Sahu | MERN Developer
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
            <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;