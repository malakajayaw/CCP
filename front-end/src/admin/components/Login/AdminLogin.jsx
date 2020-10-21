import React , {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



  onSubmitForm = async (e) => {
    e.preventDefault();
    sign_controller(this.state.memberShipNo, this.state.uPass)
      .then((result) => {
        console.log(result.data);
        this.props.setCurrentUser(result.data.data.details);
        this.props.history.push("/Admin");
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

              <form onSubmit={(e) => this.onSubmitForm(e)}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Membership Number"
                    name="memberShipNo"
                    onChange={(e) => this.formValueChange(e)}
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
                    onChange={(e) => this.formValueChange(e)}
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
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember"/>
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>

          <div className="col-4">
          <Link to='/Admin' type="button" className="btn btn-primary btn-block">Sign In</Link>
         

          </div>

        </div>
      </form>


      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      
    </div>
  
  </div>
</div>

</body>


  );
}

export default AdminLogin;

      