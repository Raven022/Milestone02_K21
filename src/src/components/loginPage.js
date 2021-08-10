import "bootstrap/dist/css/bootstrap.css";
import "./loginPage.css";
import { useState } from "react";

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="bg-image" id="content">
      <section id="home">
        <div className="container-lg">
          <div className="row min-vh-100 align-items-center align-content-center">
            <div className="col-md-7 order-md-first">
              <div className="home-img text-center"></div>
              <img src="./images/givebook.png" className="mw-100" />
            </div>
            <div className="login_box">
              <img class="icon-img" src="./images/user.png" alt="icon" />
              {/* Form Login */}
              <form onSubmit={submitHandler}>
                <div className="form-group" className="isi-email">
                  <label className="email-address">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    value={details.email}
                  />
                </div>
                <div className="form-group">
                  <label className="password">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    onChange={(e) => setDetails({ ...details, password: e.target.value })}
                    value={details.password}
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label Remember-me" htmlFor="customCheck1">
                      Remember me
                    </label>
                  </div>
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-lg btn-block submit-button"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
