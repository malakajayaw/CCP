import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";


function NavBar() {
   return (<nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="index3.html" className="nav-link">Home</a>
        </li>
      </ul>


      {/* <!-- Right navbar links --> */}
      <ul className="navbar-nav ml-auto">
     
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown">
          <i class="fas fa-angle-down"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
            <Link className="dropdown-item" to="/AdminLogin">
               <i class="fas fa-sign-out-alt"> &emsp;</i>
               Logout
            </Link>
  
          </div>
        </li>
      </ul>
    </nav>);
}

export default NavBar;
