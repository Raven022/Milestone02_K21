import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-Mycolor">
      <div class="container bagibuku">
        <img src="./images/logobagibuku.png" alt="logo bagi buku" width="60px" height="60px" />
        <a class="navbar-brand ms-3" href="#home">
          Bagibuku
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
  );
}

export default Navbar;
