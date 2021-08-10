import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

function Home() {
  return (
    <div className="bg-image" id="content">
      <section id="home">
        <div className="container-lg">
          <div className="row min-vh-100 align-items-center align-content-center">
            <div class="col-md">
              <div class="home-img"></div>
              <img src="./images/givebook.png" className="mw-100" />
            </div>
            <div className="col-md order-md-first">
              <div className="home-text">
                <h1 className="bagi-buku mt-5">Bagibuku</h1>
                <p className="about-us mt-5">Bagibuku adalah sebuah platform untuk membantu buku-buku menemukan rumah barunya.</p>
                <a className="btn btn-lg btn-primary yuk-donate" href="#Yuk-Donate" role="button">
                  Yuk Donate!
                </a>
                <a className="btn btn-lg how-works" href="http://localhost:3000/about" role="button">
                  Bagaimana Bagibuku Bekerja
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
