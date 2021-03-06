import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbars({ user, Logout }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="Mycolor" variant="light" className="fixed-top">
      <Container>
        <Navbar.Brand className="bagibuku" href="/">
          <img src="https://cdn.discordapp.com/attachments/777233158130892873/875599644086898698/logobagibuku.png" alt="logo bagi buku" width="60px" height="60px" />
          <a class="navbar-brand ms-3" href="/">
            Bagibuku
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="tombol px-4" href="/about">
              Tentang Kami
            </Nav.Link>
            {user.name == "" ? (
              <Nav.Link className="tombol tombol-2 px-4" eventKey={2} href="/login" type="button">
                Login Sekolah
              </Nav.Link>
            ) : (
              <NavDropdown className="px-4 tombol" title="Akun" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/edit_sekolah" id="editProfile">
                    Edit Profile
                  </NavLink>
                </NavDropdown.Item>
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
