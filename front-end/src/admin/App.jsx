import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
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
import EventReportTable from './components/EventReport-management/EventReportTable';
import EventReportForm from './components/EventReport-management/EventReportForm';
import EventReportApp from './components/EventReport-management/EventReportApp';
import EventAttendance from './components/EventAttendance-management/EventAttendance';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});

    function showContent(pageName) {
        setPage(pageName);
        switch (pageName) {
            case "Event": setDisplay({ event: "", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "Member Request": setDisplay({ event: "none", memberreq: "", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "EventView": setDisplay({ event: "none", memberreq: "none", eventView: "", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "EventForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "Add Member": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "Designation": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "Activity": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "CreateDesignationForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "DesignationChair": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "EditAssignedMemberForm": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "EditDesignation": setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "ManageStudentBranch" : setDisplay({managestudentbranch : "", event:"none", studentbranch : "none" , studentbranchForm : "none" , eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "StudentBranchForm" : setDisplay({studentbranchForm : "", event:"none", studentbranch : "none" , managestudentbranch : "none" ,eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "StudentBranch" : setDisplay({studentbranch : "", event:"none", studentbranchForm : "none" , managestudentbranch : "none" , eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none",eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
                break;
            case "VReport" : setDisplay({eventR : "", event:"none", eventRAdd : "none", eventRApp : "none", eventAtt : "none",event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
            break;
            case "AReport" : setDisplay({eventRAdd : "", eventR : "none", eventRApp : "none", eventAtt : "none",event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
            break;
            case "EReport" : setDisplay({eventRApp : "", eventR : "none", eventRAdd : "none", eventAtt : "none",event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
            break;
            case "EAttendance" : setDisplay({eventAtt : "", eventR : "none", eventRAdd : "none", eventRApp : "none",event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none"});
            break;
            default: setDisplay({ event: "none", memberreq: "none", eventView: "none", eventForm: "none", memberadd: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" , studentbranch : "none" , studentbranchForm : "none", managestudentbranch : "none" ,eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
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
        <EventAttendance display={display.eventAtt}/>
        <EventReportApp display={display.eventRApp} onClick={showContent}/>
        <EventReportForm display={display.eventRAdd}/>
        <EventReportTable display={display.eventR} onClick={showContent}/>
        
        <EventView display={display.eventView} onClick={showContent}/>
        <EventForm display={display.eventForm} onClick={showContent}/>
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;