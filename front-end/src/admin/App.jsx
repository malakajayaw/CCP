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
import MemberList from './components/Member-management/MemberList';
import DesignationTable from './components/Designation-management/DesignationTable';
import AssignedDesignationsTable from './components/Designation-management/AssignedDesignationsTable';
import CreateDesignationForm from './components/Designation-management/CreateDesignationForm';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import ActivityTable from './components/Activity-log/ActivityTable';
import AdminLogin from './components/Login/AdminLogin';
import MemberEdit from './components/Member-management/MemberEdit';
import ManageAffiliation from './components/StudentBranch-management/ManageAffiliation'
import StudentForm from './components/StudentBranch-management/StudentForm'
import AffiliationTable from './components/StudentBranch-management/AffiliationTable';

import EventReportTable from './components/EventReport-management/EventReportTable'
import EventReportForm from './components/EventReport-management/EventReportForm'
import EventAttendance from './components/EventAttendance-management/EventAttendance'
import EventReportView from './components/EventReport-management/EventReportView'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure() 
function App() {
    const [page, setPage] = useState("Event");
              
   return (
    <div className="wrapper">
      <NavBar />
      
      <div className="content-wrapper">
  
        <Router>
            <Switch>
                    <Route path="/Admin/EventTable"> <EventTable page="Event Management"/> </Route>
                    <Route path="/Admin/MemberRequest"> <MemberRequest /> </Route>
                    <Route path="/Admin/EventView/:eventId"> <EventView page="Event Management"/> </Route>
                    <Route path="/Admin/EventForm"> <EventForm page="Event Management"/> </Route>
                    <Route path="/Admin/MemberList"> <MemberList /> </Route>
                    <Route path="/Admin/MemberAdd"> <MemberAdd /> </Route>
                    <Route path="/Admin/MemberEdit/:id"> <MemberEdit /> </Route>
                    <Route path="/DesignationAdmin"> <DesignationTable /> </Route>
                    <Route path="/DesignationChair"> <AssignedDesignationsTable /> </Route>
                    <Route path="/ActivityLog"> <ActivityTable /> </Route>
                    <Route path="/AddDesignation"> <CreateDesignationForm /> </Route>
                    <Route path="/EditDesignation/:desId"> <EditDesignation /> </Route>
                    <Route path="/AssignMember"> <EditAssignedMemberForm /> </Route>
                    <Route path="/Admin/EventReportTable"> <EventReportTable/> </Route>
                    <Route path="/Admin/EventReportForm"> <EventReportForm/> </Route>
                    <Route path="/Admin/EventAttendance"> <EventAttendance/> </Route>
                    <Route path="/Admin/EventReportView/:id"> <EventReportView/> </Route>
                    <Route path="/ManageAffiliation"> <ManageAffiliation /> </Route>
                    <Route path="/StudentForm"> <StudentForm /> </Route>
                    <Route path="/AffiliationTable"> <AffiliationTable /> </Route>
            </Switch>
            <SideBar/> 
        </Router>
                    
      </div>
      <Footer />
    </div>
);
}

export default App;