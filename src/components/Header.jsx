// src/components/Header.jsx
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  // Helper: Scroll to section if on the same page
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeNavbar();
  };

  return (
    <Navbar expand="lg" sticky="top" bg="dark" variant="dark" expanded={expanded} className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          Bhabani Sahu | MERN Developer
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={() => { scrollToSection('#home'); closeNavbar(); }}>
              Home
            </Nav.Link>
            <Nav.Link as="button" onClick={() => scrollToSection('#about')}>
              About
            </Nav.Link>
            <Nav.Link as="button" onClick={() => scrollToSection('#skills')}>
              Skills
            </Nav.Link>
            <Nav.Link as="button" onClick={() => scrollToSection('#projects')}>
              Projects
            </Nav.Link>
            <Nav.Link as="button" onClick={() => scrollToSection('#experience')}>
              Experience
            </Nav.Link>
            <Nav.Link as="button" onClick={() => scrollToSection('#contact')}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;