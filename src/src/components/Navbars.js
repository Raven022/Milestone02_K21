import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

function Navbars({ user, Logout }) {
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
            <Nav.Link className="tombol px-4" href="about">
              Tentang Kami
            </Nav.Link>
            {user.name == "" ? (
              <Nav.Link className="tombol tombol-2 px-4" eventKey={2} href="login" type="button">
                Login Sekolah
              </Nav.Link>
            ) : (
              <NavDropdown className="px-4 tombol" title="Akun" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Edit Profil Sekolah</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey={2} onClick={Logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
