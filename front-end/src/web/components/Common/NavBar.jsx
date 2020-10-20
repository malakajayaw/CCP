import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser, SignOut } from "../Redux/Action/authAction";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      loginState: false,
    };

    // this.check_auth()
  }

  signoutuser = () => {
    this.props.SignOut && this.props.SignOut();

    this.setState({
      loginState: false,
    });

    this.props.history.push("/");
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({
        loginState: true,
      });
    }
  }

  render() {
    return (
      <nav className="mb-1 navbar navbar-expand-lg navbar-light scrolling-navbar">
        <Link to="/" className="navbar-brand ml-5" style={{ color: "white" }}>
          <img src="/images/ieee-icon.png" height="40" alt="IEEE logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-333"
        >
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
  <Link className="nav-link" to="#">Home
    <span className="sr-only">(current)</span>
 </Link>
</li>

<li className="nav-item dropdown multi-level-dropdown">
  <Link to="#" id="menu" data-toggle="dropdown"
    className="nav-link dropdown-toggle">About Us</a>

  <ul className="dropdown-menu mt-2 rounded-0  darken-4 border-0 z-depth-1">
  <Link className="dropdown-item" to="#">History</a>
    <Link className="dropdown-item" to="#">ExCom 2020/21</a>
    
    <li className="dropdown-item dropdown-submenu pl-0 pr-0">
      <Link to="#" data-toggle="dropdown" className="dropdown-toggle dropdown-item">Past Ex Coms</Link>
      <ul className="dropdown-menu ml-0 rounded-0  darken-4 border-0 z-depth-1">
        <li className="dropdown-item p-0">
          <Link to="#" className="dropdown-item">ExCom 2019/20</a>
        </li>
        <li className="dropdown-item p-0">
          <Link to="#" className="dropdown-item">ExCom 2018/19</a>
        </li>
        <li className="dropdown-item p-0">
          <Link to="#" className="dropdown-item">ExCom 2017/18</a>
        </li>
        <li className="dropdown-item p-0">
          <Link to="#" className="dropdown-item">ExCom 2016/17</a>
        </li>
      </ul>
    </li>
   
    <Link className="dropdown-item" to="#">IEEE</a>
    <Link className="dropdown-item" to="#">Benefits</a>
    </ul>
</li>

<li className="nav-item dropdown" style={{color:"#007bff"}}>
  <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">News
 </Link>
  <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
    <Link className="dropdown-item" to="#">Announcements</a>
    <Link className="dropdown-item" to="#">Achievements</a>
  </div>
</li>
<li className="nav-item">
  <Link className="nav-link" to="#">Events</a>
</li>
<li className="nav-item">
  <Link className="nav-link" to="#">Galleries</a>
</li>
<li className="nav-item dropdown" style={{color:"#007bff"}}>
  <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Community
 </Link>
  <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
    <Link className="dropdown-item" to="#">Awards</a>
    <Link className="dropdown-item" to="#">Chapters</a>
    <Link className="dropdown-item" to="#">Student Branches</a>
    <Link className="dropdown-item" to="#">YP</a>
    <Link className="dropdown-item" to="#">WIE</a>
  </div>
</li>
<li className="nav-item dropdown" style={{color:"#007bff"}}>
  <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">Downloads
 </Link>
  <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
    <Link className="dropdown-item" to="#">By-Laws</a>
    <Link className="dropdown-item" to="#">Guidelines</a>
    <Link className="dropdown-item" to="#">Newsletters</a>
  </div>
</li>
<li className="nav-item">
  <Link className="nav-link" to="#">Contact Us</a>
</li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user"></i>
             </Link>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                {this.state.loginState == true ? (
                  <Link
                    className="dropdown-item"
                    onClick={() => this.signoutuser()}
                  >
                    Logout
                 </Link>
                ) : (
                  <Link className="dropdown-item" to="/MemberLogin">
                    Login
                 </Link>
                )}
                {this.state.loginState == true ? (
                  <Link className="dropdown-item" to="/UserProfile">
                    My Account
                 </Link>
                ) : (
                  <Link className="dropdown-item" to="/Registration">
                  Register
               </Link>
                )}
                {this.state.loginState == true ? (
                  <Link className="dropdown-item" to="#">
                    Something else here
                 </Link>
                ) : (
                  ""
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth || {},
});

const mapDispatchToProps = {
  SignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
