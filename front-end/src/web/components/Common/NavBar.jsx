import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="mb-1 navbar navbar-expand-lg navbar-light scrolling-navbar" >

            <Link to="/" className="navbar-brand ml-5" style={{ color: "white" }} >
                <img src="/images/ieee-icon.png" height="40" alt="IEEE logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent-333">

                <ul className="navbar-nav ml-auto">

                    {/* <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>

      <li className="nav-item dropdown multi-level-dropdown">
        <a href="#" id="menu" data-toggle="dropdown"
          className="nav-link dropdown-toggle">About Us</a>

        <ul className="dropdown-menu mt-2 rounded-0  darken-4 border-0 z-depth-1">
        <a className="dropdown-item" href="#">History</a>
          <a className="dropdown-item" href="#">ExCom 2020/21</a>
          
          <li className="dropdown-item dropdown-submenu pl-0 pr-0">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle dropdown-item">Past Ex Coms </a>
            <ul className="dropdown-menu ml-0 rounded-0  darken-4 border-0 z-depth-1">
              <li className="dropdown-item p-0">
                <a href="#" className="dropdown-item">ExCom 2019/20</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="#" className="dropdown-item">ExCom 2018/19</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="#" className="dropdown-item">ExCom 2017/18</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="#" className="dropdown-item">ExCom 2016/17</a>
              </li>
            </ul>
          </li>
         
          <a className="dropdown-item" href="#">IEEE</a>
          <a className="dropdown-item" href="#">Benefits</a>
          </ul>
      </li>

      <li className="nav-item dropdown" style={{color:"#007bff"}}>
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">News
        </a>
        <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a className="dropdown-item" href="#">Announcements</a>
          <a className="dropdown-item" href="#">Achievements</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Events</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Galleries</a>
      </li>
      <li className="nav-item dropdown" style={{color:"#007bff"}}>
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Community
        </a>
        <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a className="dropdown-item" href="#">Awards</a>
          <a className="dropdown-item" href="#">Chapters</a>
          <a className="dropdown-item" href="#">Student Branches</a>
          <a className="dropdown-item" href="#">YP</a>
          <a className="dropdown-item" href="#">WIE</a>
        </div>
      </li>
      <li className="nav-item dropdown" style={{color:"#007bff"}}>
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">Downloads
        </a>
        <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
          <a className="dropdown-item" href="#">By-Laws</a>
          <a className="dropdown-item" href="#">Guidelines</a>
          <a className="dropdown-item" href="#">Newsletters</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li> */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-333">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>);
}

export default NavBar;