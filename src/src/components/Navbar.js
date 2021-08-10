import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Navbar({ user, Logout }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-Mycolor">
      <div class="container bagibuku">
        <img src="./images/logobagibuku.png" alt="logo bagi buku" width="60px" height="60px" />
        <a class="navbar-brand ms-3" href="http://localhost:3000">
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
            <a class="nav-link tombol px-5" href="http://localhost:3000/about">
              Tentang Kami
            </a>
            {user.name === "" ? (
              <a class="nav-link tombol tombol-2 px-4" href="http://localhost:3000/login">
                Login Sekolah
              </a>
            ) : (
              <button className="nav-link tombol tombol-2 px-4" onClick={Logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
