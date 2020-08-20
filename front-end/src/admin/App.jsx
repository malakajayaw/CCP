import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import EventView from './components/Event-management/EventView';
import EventForm from './components/Event-management/EventForm';
import MemberRequest from './components/Member-management/MemberRequest';
import MemberAdd from './components/Member-management/MemberAdd';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", member : "none", eventView : "none",eventForm : "none"});
    const [display, setDisplay] = useState({event : "none", memberreq : "none", memberadd : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", member : "none",eventView : "none",eventForm : "none"});
            break;
            case "Member Request" : setDisplay({memberreq : "", event:"none" , memberadd : "none"});
            break;
            case "EventView" : setDisplay({eventView : "", event:"none", member : "none",eventForm : "none"});
            break;
            case "EventForm" : setDisplay({eventForm : "", eventView : "none", event:"none", member : "none"});
            break;
            default :  setDisplay({event : "none", member : "none",eventView : "none",eventForm : "none"});
            break;
            case "Add Member" : setDisplay({memberreq : "none", event:"none" , memberadd : ""});
            break;
            case "AdminLogin" : setDisplay({memberreq : "none", event:"none" , memberadd : ""});
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

