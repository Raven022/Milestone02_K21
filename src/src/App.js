import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar } from "react-bootstrap"

function App() {
  return (
    <div className ="bg-image" id="content">
      <Navbar bg="Mycolor" sticky="top" expand="lg">
        <Navbar.Brand className="bagibuku">
          <img src="./images/logobagibuku.png" alt="logo bagi buku" width="80px" height="80px"/>
          Bagibuku
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="TentangKami" className="tombol">Tentang Kami</Nav.Link>
          <Nav.Link href="LoginSekolah" className="tombol">Log in Sekolah</Nav.Link>
        </Nav>
      </Navbar>


      <div>
        <div>
            <h1 class="display-4 bagi-buku">Bagibuku</h1>
            <p class="lead about-us">Bagibuku adalah sebuah platform untuk membantu <br /> para buku untuk menemukan rumah barunya.</p>
            <a class="btn btn-primary btn-lg yuk-donate" href="#" role="button">Yuk Donate!</a>
            <a class="btn btn-primary btn-lg how-works" href="#" role="button">Bagaimana Bagibuku Bekerja</a>
        </div>
        <img src="./images/student.png" className = "stud"/>
      </div>










    </div>
  );
}

export default App;
