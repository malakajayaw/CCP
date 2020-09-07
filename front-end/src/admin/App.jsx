import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import EventView from './components/Event-management/EventView';
import EventForm from './components/Event-management/EventForm';
import MemberRequest from './components/Member-management/MemberRequest';
import MemberAdd from './components/Member-management/MemberAdd';
import DesignationTable from './components/Designation-management/DesignationTable';
import CreateDesignationForm from './components/Designation-management/CreateDesignationForm';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import AdminLogin from './components/Login/AdminLogin';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  
   return (
    <div className="wrapper">
      <NavBar />
      <div className="content-wrapper">
        <Router>
            <Switch>
                    <Route path="/EventTable"> <EventTable page="Event Management"/> </Route>
                    <Route path="/MemberRequest"> <MemberRequest /> </Route>
                    <Route path="/EventView/:eventId"> <EventView page="Event Management"/> </Route>
                    <Route path="/EventForm"> <EventForm page="Event Management"/> </Route>
                    <Route path="/Admin/EventReportTable"> <EventReportTable/> </Route>
                    <Route path="/Admin/EventReportForm"> <EventReportForm/> </Route>
                    <Route path="/Admin/EventAttendance"> <EventAttendance/> </Route>
            </Switch>
            <SideBar/> 
        </Router>
      </div>
      <Footer />
    </div>
);
}

export default App;