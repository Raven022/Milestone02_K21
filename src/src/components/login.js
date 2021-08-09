import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

function Login() {
  return (
    <div className="bg-image" id="content">
      <section id="home">
        <div class="container-lg">
          <div class="row min-vh-100 align-items-center align-content-center">
            <div class="col-md-7 order-md-first">
              <div class="home-img text-center"></div>
              <img src="./images/givebook.png" className="mw-100" />
            </div>
            <div class="login_box">
            <img class ="icon-img" src="./images/user.png" alt="icon"/>
            <form>
                <div className="form-group" class="isi-email">
                  <label class="email-address">Email Address</label>
                    <input type="email" className="form-control form-control-lg" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label class="password">Password</label>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label Remember-me" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="button" class="btn btn-primary btn-lg btn-block submit-button" onclick="location.href = '#ProfileSekolah';">Login</button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;