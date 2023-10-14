import { Navbar, Container, Nav } from "react-bootstrap";
import Kontak from "../pages/kontak";

const NavigasiBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container className="text-white">
          <Navbar.Brand>MusikPlayer</Navbar.Brand>
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigasiBar;
