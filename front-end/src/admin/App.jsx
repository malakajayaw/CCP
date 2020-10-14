import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import EventView from './components/Event-management/EventView';
import RegistrationForm from './components/Event-management/RegistrationForm';
import ResponsesView from './components/Event-management/ResponsesView';
import IndividualResponses from './components/Event-management/IndividualResponses';
import EventForm from './components/Event-management/EventForm';
import EventUpdate from './components/Event-management/EventUpdate';
import MemberRequest from './components/Member-management/MemberRequest';
import MemberAdd from './components/Member-management/MemberAdd';
import MemberList from './components/Member-management/MemberList';
import DesignationTable from './components/Designation-management/DesignationTable';
import AssignedDesignationsTable from './components/Designation-management/AssignedDesignationsTable';
import PastDesignations from './components/Designation-management/PastDesignations';
import PastSpecDesignations from './components/Designation-management/PastSpecDesignations';
import CreateDesignationForm from './components/Designation-management/CreateDesignationForm';
import CreateRecord from './components/Designation-management/CreateRecord';
import CreateRecordForAff from './components/Designation-management/CreateRecordForAff';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import EditPastDes from './components/Designation-management/EditPastDes';
import EditPastDesForAff from './components/Designation-management/EditPastDesForAff';
import ActivityTable from './components/Activity-log/ActivityTable';
import AdminLogin from './components/Login/AdminLogin';
import MemberEdit from './components/Member-management/MemberEdit';
import EventReportTable from './components/EventReport-management/EventReportTable'
import EventReportForm from './components/EventReport-management/EventReportForm'
import EventAttendance from './components/EventAttendance-management/EventAttendance'
import EventReportView from './components/EventReport-management/EventReportView'
import ManageAffiliation from './components/StudentBranch-management/ManageAffiliation'
import StudentForm from './components/StudentBranch-management/StudentForm'
import AffiliationTable from './components/StudentBranch-management/AffiliationTable';
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
                <ContentHeader pageName={page} />
                <Router>
                    <SideBar />
                    <Switch>
                        <Route path="/Admin/EventTable"> <EventTable /> </Route>
                        <Route path="/Admin/MemberRequest"> <MemberRequest /> </Route>
                        <Route path="/Admin/EventView/:eventId"> <EventView /> </Route>
                        <Route path="/Admin/RegistrationForm/:eventId"> <RegistrationForm /> </Route>
                        <Route path="/Admin/EventUpdate/:eventId"> <EventUpdate /> </Route>
                        <Route path="/Admin/Responses/:eventId"> <ResponsesView /> </Route>
                        <Route path="/Admin/IndividualResponses/:eventId"> <IndividualResponses /> </Route>
                        <Route path="/Admin/EventForm"> <EventForm /> </Route>
                        <Route path="/Admin/DesignationAdmin"> <DesignationTable /> </Route>
                        <Route path="/Admin/DesignationChair"> <AssignedDesignationsTable /> </Route>
                       <Route path="/Admin/PastDesignations"> <PastDesignations /> </Route>
                       <Route path="/Admin/PastSpecDesignations"> <PastSpecDesignations /> </Route>
                        <Route path="/Admin/ActivityLog"> <ActivityTable /> </Route>
                        <Route path="/Admin/AddDesignation"> <CreateDesignationForm /> </Route>
                       <Route path="/Admin/AddPastDesignation"> <CreateRecord /> </Route>
                       <Route path="/Admin/AddPastDesignationForAff/:aff"> <CreateRecordForAff /> </Route>
                        <Route path="/Admin/EditDesignation/:desId"> <EditDesignation /> </Route>
                        <Route path="/Admin/EditAssigned/:AssId"> <EditAssignedMemberForm /> </Route>
                       <Route path="/Admin/EditPastDes/:Id"> <EditPastDes /> </Route>
                       <Route path="/Admin/EditPastDesForAff/:Id"> <EditPastDesForAff /> </Route>
                        <Route path="/Admin/MemberAdd"> <MemberAdd /> </Route>
                        <Route path="/Admin/MemberList"> <MemberList /> </Route>
                        <Route path="/Admin/MemberEdit/:id"> <MemberEdit /> </Route>
                        <Route path="/Admin/EventReportTable"> <EventReportTable/> </Route>
                        <Route path="/Admin/EventReportForm"> <EventReportForm/> </Route>
                    <Route path="/Admin/EventAttendance"> <EventAttendance/> </Route>
                    <Route path="/Admin/EventReportView/:id"> <EventReportView/> </Route>
                      <Route path="/Admin/ManageAffiliation"> <ManageAffiliation /> </Route>
                    <Route path="/Admin/StudentForm"> <StudentForm /> </Route>
                    <Route path="/Admin/AffiliationTable"> <AffiliationTable /> </Route>
    
                    </Switch>
                </Router> 
            </div>
            <Footer />
        </div>

    );
                  
}

export default App;