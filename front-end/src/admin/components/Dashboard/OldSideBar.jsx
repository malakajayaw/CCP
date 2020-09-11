import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function OldSideBar(props) {

   return ( <aside className="main-sidebar sidebar-dark-primary elevation-4">
   {/* <!-- Brand Logo --> */}
   <a href="index3.html" className="brand-link">
     <img src="images/IEEE-logo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
          style={{opacity: ".8"}}/>
     <span className="brand-text font-weight-light">IEEE Sri Lanka</span>
   </a>

   {/* <!-- Sidebar --> */}
   <div className="sidebar">
     {/* <!-- Sidebar user panel (optional) --> */}
     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
       <div className="image">
         <img src="AdminLTE-3.0.5/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User"/>
       </div>
       <div className="info">
         <a href="#" className="d-block">Alexander Pierce</a>
       </div>
     </div>

            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* <!-- Add icons to the links using the .nav-icon className
              with font-awesome or any other icon font library --> */}


              <Router>
                    <li className="nav-item pointer_cursor">
                        <a onClick={() => { props.onClick("Event"); }} className="nav-link">
                            <i className="nav-icon far fa-calendar-alt"></i>
                            <p>
                                Event Management
               <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

          <li className="nav-item pointer_cursor">
           <a onClick={() => {props.onClick("Member Request"); }}  className="nav-link">
             <i className="nav-icon fas fa-users"></i>
             <p>
               Member Management
               <span className="badge badge-info right"></span>
             </p>
           </a>
         </li>

         <li className="nav-item pointer_cursor">
           <a onClick={() => {props.onClick("StudentBranch"); }}  className="nav-link">
             <i className="nav-icon fas fa-users"></i>
             <p>
               Student Branch Management
               <span className="badge badge-info right">2</span>
             </p>
           </a>
         </li>

 
                    <li className="nav-item pointer_cursor">
                        <a onClick={() => { props.onClick("Designation"); }} className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                Designation Management
               <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a onClick={() => { props.onClick("Activity"); }} className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                Activity log
               <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>

                    <li className="nav-item pointer_cursor">
                        <a onClick={() => { props.onClick("DesignationChair"); }} className="nav-link">
                            <i className="nav-icon fas fa-users"></i>
                            <p>
                                Designation Management(Chair)
               <span className="badge badge-info right">2</span>
                            </p>
                        </a>
                    </li>
                    </Router>
                </ul>
            </nav>
            {/* <!-- /.sidebar-menu --> */}
        </div>
        {/* <!-- /.sidebar --> */}
    </aside>);
}


export default OldSideBar;