import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { setCurrentUser } from "../Redux/Action/authAction";
import { connect } from "react-redux";
import { sign_controller } from "../../controllers/memeber.controller";
import { toast } from "react-toastify";
class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      // user login details
      memberShipNo: "",
      uPass: "",
    };
  }

  setErrorToast(msg) {
    toast.error(msg, {
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }

  formValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = async (e) => {
    e.preventDefault();
    sign_controller(this.state.memberShipNo, this.state.uPass)
      .then((result) => {
        this.props.setCurrentUser(result.data.data.details);
        this.props.history.push("/UserProfile");
      })
      .catch((err) => {
        console.log(err.code);
        this.setErrorToast("Invalid Credentials");
      });
  };
  render() {
    return (
      <body className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a>
              <b>Admin</b>Login
            </a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">IEEE - Sri Lanka Section</p>

              <form action="App.jsx">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Membership Number"
                    name="memberShipNo"
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
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label for="remember">Remember Me</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <Link
                      to="/Admin"
                      type="button"
                      className="btn btn-primary btn-block"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default connect(null, { setCurrentUser })(withRouter(AdminLogin));
