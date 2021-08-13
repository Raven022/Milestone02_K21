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
              <div className="about-text container">
                <h1 className="how-work mt-5">How Bagibuku Works</h1>
                <p className="about-us mt-5 text-justify">
                  Bagibuku bekerja dengan cara membantu para pendonasi buku untuk menemukan pihak penerima pendonasi dengan tepat.
                  Sebagai pendonasi, kamu bisa mencari pihak yang membutuhkan buku dalam List Sekolah BagiBuku.
                  Sebagai pihak penerima, kamu bisa menghubungi pihak BagiBuku untuk mendaftarkan sekolahmu di website BagiBuku
                  sehingga para pendonasi bisa menemukanmu. Setelah itu, para pendonasi bisa mendonasikan bukunya kepada pihak yang membutuhkan.
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
