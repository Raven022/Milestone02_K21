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
          Bagibuku
        </Navbar.Brand>
        <Navbar.Collapse className = "justify-content-end">
          <Nav>
            <Nav.Link href="TentangKami" className="tombol">Tentang Kami</Nav.Link>
            <Nav.Link href="LoginSekolah" className="tombol tombol-2">Log in Sekolah</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <div>
        <div>
            <h1 class="display-4 bagi-buku">Bagibuku</h1>
            <p class="lead about-us">Bagibuku adalah sebuah platform untuk membantu <br /> para buku untuk menemukan rumah barunya.</p>
            <a class=" btn-lg tombol-2 yuk-donate" href="#" role="button">Yuk Donate!</a>
            <a class=" btn-lg how-works" href="#" role="button">Bagaimana Bagibuku Bekerja</a>
        </div>
        {/* <img src="./images/student.png" className = "img-fluid stud" fluid/> */}
      </div>










    </div>
  );
}

export default App;
