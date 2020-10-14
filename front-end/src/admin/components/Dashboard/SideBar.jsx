import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Sidebar() {

    return (   <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Brand Logo --> */}
    <a href="index3.html" className="brand-link">
      <img src="/images/IEEE-logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
           style={{opacity: ".8"}}/>
      <span className="brand-text font-weight-light">IEEE Sri Lanka</span>
    </a>
 
    {/* <!-- Sidebar --> */}
    <div className="sidebar">
      {/* <!-- Sidebar user panel (optional) --> */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/images/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                   
            <li className="nav-item pointer_cursor">
            <Link id="eventNav"  className="nav-link" to="/Admin/EventTable">
                    <i className="nav-icon far fa-calendar-alt"></i>
                   Event Management
                    <span className="badge badge-info right"></span>
                    </Link>
            </li>

            <li className="nav-item pointer_cursor">
            <Link id="memberNav" className="nav-link" to="/Admin/MemberRequest">
                    <i className="nav-icon fas fa-users"></i>
                  Member Management
                    <span className="badge badge-info right"></span>
                    </Link>
            </li>

            

          <li className="nav-item pointer_cursor">
          <Link id="affiliationNav"  className="nav-link" to="/Admin/AffiliationTable">
              <i className="nav-icon fas fa-handshake"></i>
              Affiliation Management
                <span className="badge badge-info right">2</span>
            
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

                </ul>

            </nav>
            {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}

    </aside>);
}
