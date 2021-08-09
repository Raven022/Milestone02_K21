import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="bg-image" id="content">
      {/* Awal Navbar (Recode) */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-Mycolor">
        <div class="container bagibuku">
          <img src="./images/logobagibuku.png" alt="logo bagi buku" width="60px" height="60px" />
          <a class="navbar-brand ms-3" href="#home">
            Bagibuku
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link tombol px-5" href="#TentangKami">
                Tentang Kami
              </a>
              <a class="nav-link tombol tombol-2 px-4" href="#LoginSekolah">
                Login Sekolah
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir Navbar */}
      {/*
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
      */}
      {/* Awal Home (Recode) */}
      <section id="home">
        <div class="container-lg">
          <div class="row min-vh-100 align-items-center align-content-center">
            <div class="col-md-5">
              <div class="home-img text-center"></div>
              <img src="./images/givebook.png" className="mw-100" />
            </div>
            <div class="col-md-7 order-md-first">
              <div class="home-text">
                <h1 class="bagi-buku mt-5">Bagibuku</h1>
                <p class="about-us mt-5">Bagibuku adalah sebuah platform untuk membantu para buku menemukan rumah barunya.</p>
                <a class="btn btn-lg btn-primary yuk-donate" href="#Yuk-Donate" role="button">
                  Yuk Donate!
                </a>
                <a class="btn btn-lg how-works px-4" href="#bagaimana-bagibuku-bekerja" role="button">
                  Bagaimana Bagibuku Bekerja
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Home */}
      {/*
      <div>
        <div>
          <h1 class="display-4 bagi-buku">Bagibuku</h1>
          <p class="lead about-us">
            Bagibuku adalah sebuah platform untuk membantu <br /> para buku menemukan rumah barunya.
          </p>
          <a class="btn btn-lg btn-primary yuk-donate" href="#Yuk-Donate" role="button">
            Yuk Donate!
          </a>
          <a class="btn btn-lg how-works" href="#bagaimana-bagibuku-bekerja" role="button">
            <p className="txt tebal">Bagaimana Bagibuku Bekerja</p>
          </a>
        </div>
        
      </div>
       */}
    </div>
  );
}

export default App;
