import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberTable from './components/Member-management/MemberTable';
import StudentBranchTable from './components/StudentBranch-management/StudentBranchTable';
import StudentBranchForm from './components/StudentBranch-management/StudentBranchForm';
import ManageStudentBranch from './components/StudentBranch-management/ManageStudentBranch';
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

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});

    function showContent(pageName) {
        setPage(pageName);
        switch (pageName) {
            case "Event": setDisplay({ event: "", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "Member Request": setDisplay({ event: "none", memberreq: "", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "EventView": setDisplay({ event: "none", memberreq: "none", eventView: "", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "EventForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "Add Member": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "Designation": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "Activity": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "CreateDesignationForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "DesignationChair": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "EditAssignedMemberForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "EditDesignation": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
                break;
            case "ManageStudentBranch" : setDisplay({managestudentbranch : "", event:"none" , member : "none" , studentbranch : "none" , studentbranchForm : "none" , eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none"});
                break;
            case "StudentBranchForm" : setDisplay({studentbranchForm : "", event:"none" , member : "none" , studentbranch : "none" , managestudentbranch : "none" ,eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none"});
                break;
            case "StudentBranch" : setDisplay({studentbranch : "", event:"none" , member : "none" , studentbranchForm : "none" , managestudentbranch : "none" , eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none"});
                break;
            default: setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberreq: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none" });
                break;
        }

            
    }
      
   return (
    <div className="wrapper">
      <NavBar />
      <SideBar onClick={showContent} />
      <div className="content-wrapper">
        <ContentHeader pageName={page}/>
        <EventTable  display={display.event} onClick={showContent}/>
        <MemberRequest display={display.memberreq} onClick={showContent}/>
        <MemberAdd display={display.memberadd} onClick={showContent}/>
                <DesignationTable display={display.designation} onClick={showContent} />
                <ActivityTable display={display.activity}/>
                <CreateDesignationForm display={display.createDesignationForm} />
                <AssignedDesignationsTable display={display.designationChair} onClick={showContent} />
                <EditAssignedMemberForm display={display.editAssigned} />
                <EditDesignation display={display.editDesignation} />
        <ManageStudentBranch display={display.managestudentbranch}/>
        <StudentBranchForm display={display.studentbranchForm}/>
        <StudentBranchTable display={display.studentbranch} onClick={showContent}/>
        
        <EventView display={display.eventView}/>
        <EventForm display={display.eventForm}/>
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;