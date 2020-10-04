import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import Background from "../../images/Login.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class MemberLogin extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div>
          <body
            className="hold-transition login-page"
            style={{
              background: `url(${Background})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >

            <div className="login-box">
              <div className="login-logo">
                <a href="/MemberLogin" style= {{color:'white'}}>
                  <b>Member Login</b>
                </a>
              </div>

              <div className="card">
                <div className="card-body login-card-body">
                  <p className="login-box-msg">IEEE - Sri Lanka Section</p>

                  <form action="App.jsx">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope"></span>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-lock"></span>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="col-7">
                        <div className="icheck-primary">
                          <input type="checkbox" id="remember" />
                          <label for="remember">Remember Me</label>
                        </div>
                      </div>

                      <div className="col-5">
                        <Link
                          to="/Dashboard"
                          type="button"
                          className="btn btn-primary btn-block"
                        >
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </form>

                  <p className="mb-2">
                    <br></br>
                    <a href="forgot-password.html">I forgot my password</a>
                  </p>
                  <p className="mb-2">
                    <a href="/Registration">Don't have an Accout? Create New</a>
                  </p>
                </div>
              </div>
            </div>
          </body>
        </div>
        <Footer />
      </div>
    );
  }
}
export default MemberLogin;
