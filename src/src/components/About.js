import "bootstrap/dist/css/bootstrap.css";
import "./About.css";

function About() {
  return (
    <div className="bg-image" id="content">
      <section id="about">
        <div class="container-lg">
          <div class="row min-vh-100 align-items-center align-content-center">
            <div class="col-md-5">
              <div class="about-img text-center"></div>
              <img src="./images/howitworks.png" className="mw-100" />
            </div>
            <div class="col-md-7 order-md-first">
              <div class="about-text">
                <h1 class="how-work mt-5">How BagiBuku Works</h1>
                    <p class="about-us mt-5"> BagiBuku bekerja dengan cara membantu para pendonasi <br/>
                    buku untuk menemukan pihak penerima pendonasi dengan <br/>
                    tepat. <br/>
                    Sebagai pendonasi, kamu bisa memasukkan bukumu ke <br/>
                    dalam katalog BagiBuku. <br/>
                    Sebagai pihak penerima, kamu bisa menghubungi pihak <br/>
                    BagiBuku untuk mendaftarkan sekolahmu di website <br/>
                    BagiBuku, sehingga para pendonasi bisa menemukanmu. <br/>
                    Setelah itu, para pendonasi bisa mendonasikan bukunya <br/>
                    kepada pihak yang membutuhkan </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;