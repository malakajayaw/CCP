import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Sidebar() {

return (

<aside className="main-sidebar sidebar-dark-info elevation-4">
  {/*
  <!-- Brand Logo --> */}
  <Link className="brand-link">
    <img src="/images/ieee.png" alt="AdminLTE Logo" className="brand-image"
      style={{opacity: "10"}} />
    <span className="brand-text font-weight-light">IEEE - Sri Lanka</span>
  </Link>

  {/*
  <!-- Sidebar --> */}
  <div className="sidebar" >
    {/*
    <!-- Sidebar user panel (optional) --> */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/images/user.jpg" className="img-circle" alt="User" />
      </div>
      <div className="info">
        <a className="d-block">Alexander Pierce <br/><sub style={{color:'Green'}}> Online </sub> </a>
        
      </div>
   
    </div>


    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <li className="nav-item pointer_cursor">
          <Link id="eventNav" className="nav-link" to="/Admin/EventTable">
          <i className="nav-icon far fa-calendar-alt"></i>
          Event Management
          <span className="badge badge-info right"></span>
          </Link>
        </li>


        <li class="nav-item has-treeview">
          <Link class="nav-link" data-toggle="collapse" data-target="#member" >
            <i class="nav-icon fas fa-users"></i>
            <p>
              Member Management
              <i class="right fas fa-angle-left"></i>
            </p>
          </Link>

          <div id="member" class="collapse">
            <ul>
              <li class="nav-item">
                <Link className="nav-link" to="/Admin/MemberList">
                  <p>Active Members</p>
                  </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link" to="/Admin/MemberRequest">
                  <p>Requests</p>
                  </Link>
              </li>

              <li class="nav-item">
                  <Link className="nav-link" to="/Admin/MemberAdd">
                  <p>Create Profile</p>
                  </Link>
            
              </li>
            </ul>
          </div>
        </li>



        <li className="nav-item pointer_cursor">
          <Link id="affiliationNav" className="nav-link" to="/Admin/AffiliationTable">
          <i className="nav-icon fas fa-handshake"></i>
          Affiliation Management
          <span className="badge badge-info right"></span>

          </Link>
        </li>

        <li className="nav-item pointer_cursor">
          <Link id="affiliationNav" className="nav-link" to="/Admin/Affiliationview">
          <i className="nav-icon fas fa-user-graduate"></i>
          Affiliation View
          <span className="badge badge-info right"></span>

          </Link>
        </li>

        <li className="nav-item pointer_cursor">
          <Link id="eventNav" className="nav-link" to="/Admin/DesignationAdmin">
          <i className="nav-icon fa fa-address-card"></i>
          Designation Management
          <span className="badge badge-info right"></span>
          </Link>
        </li>

        <li className="nav-item pointer_cursor">
          <Link id="eventNav" className="nav-link" to="/Admin/ActivityLog">
          <i className="nav-icon fa fa-briefcase"></i>
          Activity log
          <span className="badge badge-info right"></span>
          </Link>
        </li>

        <li className="nav-item pointer_cursor">
          <Link id="eventNav" className="nav-link" to="/Admin/DesignationChair">
          <i className="nav-icon fa fa-address-card"></i>
          Designation Management(Chair)
          <span className="badge badge-info right"></span>
          </Link>
        </li>


        <li class="nav-item has-treeview">
          <Link class="nav-link" data-toggle="collapse" data-target="#admin" >
            <i class="nav-icon fa fa-key"></i>
            <p>
              Admin
              <i class="right fas fa-angle-left"></i>
            </p>
          </Link>

          <div id="admin" class="collapse">
            <ul>

            <li class="nav-item">
              <Link className="nav-link" to="/Admin/AdminList" >
                  <p>Active Admins</p>
                  </Link>
              </li>

              <li class="nav-item">
              <Link className="nav-link" to="/Admin/Admin">
                  <p>Add Admin</p>
                  </Link>
              </li>

            </ul>
          </div>
        </li>



      </ul>

    </nav>
    </div>
    {/*
    <!-- /.sidebar-menu --> */}
  {/*
  <!-- /.sidebar --> */}

</aside>);
}