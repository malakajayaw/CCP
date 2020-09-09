import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import OldSideBar from './components/Dashboard/OldSideBar';
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
import AssignedDesignationsTable from './components/Designation-management/AssignedDesignationsTable';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import ActivityTable from './components/Activity-log/ActivityTable';
import EventReportTable from './components/EventReport-management/EventReportTable';
import EventReportForm from './components/EventReport-management/EventReportForm';
import EventAttendance from './components/EventAttendance-management/EventAttendance';
import AffiliationTable from './components/StudentBranch-management/AffiliationTable';
import StudentForm from './components/StudentBranch-management/StudentForm'
import ManageAffiliation from './components/StudentBranch-management/ManageAffiliation'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
                    <Route path="/AffiliationTable"> <AffiliationTable /> </Route>
                    <Route path="/StudentForm"> <StudentForm /> </Route>
                    <Route path="/ManageAffiliation"> <ManageAffiliation /> </Route>
            </Switch>
            <SideBar/> 
        </Router>
      </div>
      <Footer />
    </div>
);
}

export default App;