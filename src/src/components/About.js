import "bootstrap/dist/css/bootstrap.css";
import "./About.css";

function About() {
  return (
    <div className="bg-image" id="content">
      <section id="about">
        <div className="container-lg">
          <div className="row min-vh-100 align-items-center align-content-center">
            <div className="col-md-5">
              <div className="about-img text-center"></div>
              <img src="./images/howitworks.png" className="mw-100" />
            </div>
            <div className="col-md-7 order-md-first">
              <div className="about-text">
                <h1 className="how-work mt-5">How Bagibuku Works</h1>
                <p className="about-us mt-5">
                  {" "}
                  Bagibuku bekerja dengan cara membantu para pendonasi <br />
                  buku untuk menemukan pihak penerima pendonasi dengan <br />
                  tepat. <br />
                  Sebagai pendonasi, kamu bisa mencari pihak yang membutuhkan buku <br />
                  dalam List Sekolah BagiBuku. <br />
                  Sebagai pihak penerima, kamu bisa menghubungi pihak <br />
                  BagiBuku untuk mendaftarkan sekolahmu di website <br />
                  BagiBuku, sehingga para pendonasi bisa menemukanmu. <br />
                  Setelah itu, para pendonasi bisa mendonasikan bukunya <br />
                  kepada pihak yang membutuhkan{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
