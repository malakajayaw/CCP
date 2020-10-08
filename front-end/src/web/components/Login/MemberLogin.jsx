import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import Background from "../../images/Login.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import {sign_controller} from "../../controllers/memeber.controller"

class MemberLogin extends Component {

  constructor() {
    super();

    this.state = {
      // user login details
      memberShipNo: "",
      uPass: "",
    };
  }

  formValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

onSubmitForm = async (e) => {
  e.preventDefault()
  var status = await sign_controller(this.state.memberShipNo, this.state.uPass)
  console.log(status);
  if(status.code == 200){
    this.props.history.push("/Dashboard");
  }

}



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

                  <form onSubmit={(e)=>this.onSubmitForm(e)}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Membership Number"
                        name="memberShipNo"
                        onChange={(e)=> this.formValueChange(e)}
                        value={this.state.memberShipNo}
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
                        name="uPass"
                        value={this.state.uPass}
                        onChange={(e)=> this.formValueChange(e)}

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
                        <button type="submit"> Sign In</button>
                         
                        
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
export default withRouter( MemberLogin);
