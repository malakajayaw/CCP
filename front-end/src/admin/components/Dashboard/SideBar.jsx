import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sidebar() {

    return (<aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* <!-- Brand Logo --> */}
        <a href="index3.html" className="brand-link">
            <img src="images/IEEE-logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }} />
            <span className="brand-text font-weight-light">IEEE Sri Lanka</span>
        </a>

        {/* <!-- Sidebar --> */}
        <div className="sidebar">
            {/* <!-- Sidebar user panel (optional) --> */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="AdminLTE-3.0.5/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                </div>
            </div>
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon far fa-calendar-alt"></i>
                            <Link to="/EventTable">Event Management</Link>
                            <span className="badge badge-info right"></span>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <Link to="/MemberRequest">Member Management</Link>
                            <span className="badge badge-info right"></span>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon fas fa-handshake"></i>
                            <p>
                            <Link to="/AffiliationTable">Affiliation Management</Link> 
                <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>


                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                <Link to="/DesignationAdmin">Designation Management</Link>
                <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                <Link to="/ActivityLog">Activity log</Link>
                <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                <Link to="/DesignationChair">Designation Management(Chair)</Link>
                <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                </ul>

            </nav>
            {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}

    </aside>);
}
