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
import AssignedDesignationsTable from './components/Designation-management/AssignedDesignationsTable';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import ActivityTable from './components/Activity-log/ActivityTable';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", memberreq : "none", eventView : "none",eventForm : "none", memberreq : "none", memberadd : "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none"});

    function showContent(pageName) {
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", memberreq : "none",eventView : "none",eventForm : "none", memberadd : "none"});
            break;
            case "Member Request" : setDisplay({memberreq : "", event:"none" , memberadd : "none",eventView : "none",eventForm : "none"});
            break;
            case "EventView" : setDisplay({eventView : "", event:"none", memberreq : "none",eventForm : "none", memberadd : "none"});
            break;
            case "EventForm" : setDisplay({eventForm : "", eventView : "none", event:"none", memberreq : "none", memberadd : "none"});
            break;
            default :  setDisplay({event : "none", memberreq : "none",eventView : "none",eventForm : "none", memberadd : "none"});
            break;
            case "Add Member" : setDisplay({memberreq : "none", event:"none" , memberadd : "",eventView : "none",eventForm : "none"});
            break;
            case "Designation": setDisplay({ designation: "", event: "none", member: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" });
                break;
            case "Activity": setDisplay({ activity: "", event: "none", member: "none", designation: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" });
                break;
            case "CreateDesignationForm": setDisplay({ createDesignationForm: "", event: "none", member: "none", designation: "none", activity: "none", designationChair: "none", editAssigned: "none", editDesignation: "none" });
                break;
            case "DesignationChair": setDisplay({ designationChair: "", event: "none", member: "none", designation: "none", activity: "none", createDesignationForm: "none", editAssigned: "none", editDesignation: "none" });
                break;
            case "EditAssignedMemberForm": setDisplay({ editAssigned: "", event: "none", member: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editDesignation: "none" });
                break;
            case "EditDesignation": setDisplay({ editDesignation: "", event: "none", member: "none", designation: "none", activity: "none", createDesignationForm: "none", designationChair: "none", editAssigned: "none" });
                break;
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

