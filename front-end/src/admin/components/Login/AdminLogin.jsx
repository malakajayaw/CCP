import React from 'react';

function AdminLogin(props) {
  return ( 

<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <a href="../../index2.html"><b>Admin</b>Login</a>
  </div>

  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">IEEE - Sri Lanka Section</p>

      <form action="App.jsx">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password"/>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember"/>
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>

          <div class="col-4">
            <button class="btn btn-primary btn-block">Sign In</button>
          </div>

        </div>
      </form>


      <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      
    </div>
  
  </div>
</div>

</body>

  );
}

export default AdminLogin;
