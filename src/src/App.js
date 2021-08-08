import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar, Container } from "react-bootstrap"


function App() {
  return (
    <div className ="bg-image" id="content">
      <Navbar bg="Mycolor" sticky="top" expand="lg">
        <Container className="bagibuku">
        <Navbar.Brand className="bagibuku">
          <img src="./images/logobagibuku.png" alt="logo bagi buku" width="80px" height="80px"/>
          <h1 className="judul">Bagibuku</h1>
        </Navbar.Brand>
        <Navbar.Collapse className = "justify-content-end">
          <Nav>
            <Nav.Link href="TentangKami" className="tombol">Tentang Kami</Nav.Link>
            <Nav.Link href="LoginSekolah" className="tombol tombol-2"><p className="txt">Log in Sekolah</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <div>
        <div>
            <h1 class="display-4 bagi-buku">Bagibuku</h1>
            <p class="lead about-us">Bagibuku adalah sebuah platform untuk membantu <br /> para buku menemukan rumah barunya.</p>
            <a class="btn btn-lg btn-primary yuk-donate" href="#Yuk-Donate" role="button">Yuk Donate!</a>
            <a class="btn btn-lg how-works" href="#bagaimana-bagibuku-bekerja" role="button"><p className="txt tebal">Bagaimana Bagibuku Bekerja</p></a>
        </div>
        {/* <img src="./images/student.png" className = "img-fluid stud" fluid/> */}
      </div>










    </div>
  );
}

export default App;
