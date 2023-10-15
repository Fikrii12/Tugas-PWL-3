import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigasiBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container className="text-white">
          <Navbar.Brand>BudiStore</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tentang">About</Nav.Link>
            <Nav.Link as={Link} to="/kontak">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigasiBar;
