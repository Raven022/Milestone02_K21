import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="Mycolor" variant="light">
      <Container>
        <Navbar.Brand className="bagibuku" href="http://localhost:3000">
          <img src="./images/logobagibuku.png" alt="logo bagi buku" width="60px" height="60px" />
          <a class="navbar-brand ms-3" href="http://localhost:3000">
            Bagibuku
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="tombol px-4" href="http://localhost:3000/about">
              Tentang Kami
            </Nav.Link>
            <Nav.Link className="tombol tombol-2 px-4" eventKey={2} href="http://localhost:3000/login" type="button">
              Login Sekolah
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
