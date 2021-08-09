import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";

function Home() {
  return (
    <div className="bg-image" id="content">
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
                <p class="about-us mt-5">
                  Bagibuku adalah sebuah platform untuk membantu para buku menemukan rumah barunya.
                </p>
                <a class="btn btn-lg btn-primary yuk-donate" href="#Yuk-Donate" role="button">
                  Yuk Donate!
                </a>
                <a
                  class="btn btn-lg how-works px-4"
                  href="#bagaimana-bagibuku-bekerja"
                  role="button"
                >
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
