import React , {useState, useEffect}from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function AdminLogin(props) {
  const [page, setPage] = useState("Event");
  return ( 
        

<body className="hold-transition login-page">
<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>Login</a>
  </div>

  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">IEEE - Sri Lanka Section</p>

      <form action="App.jsx">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email"/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
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
          <Link to='/Dashboard' type="button" className="btn btn-primary btn-block">Sign In</Link>
         

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

      