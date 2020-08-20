import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberTable from './components/Member-management/MemberTable';
import EventView from './components/Event-management/EventView';
import EventForm from './components/Event-management/EventForm';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", member : "none", eventView : "none",eventForm : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", member : "none",eventView : "none",eventForm : "none"});
            break;
            case "Member" : setDisplay({member : "", event:"none",eventView : "none",eventForm : "none"});
            break;
            case "EventView" : setDisplay({eventView : "", event:"none", member : "none",eventForm : "none"});
            break;
            case "EventForm" : setDisplay({eventForm : "", eventView : "none", event:"none", member : "none"});
            break;
            default :  setDisplay({event : "none", member : "none",eventView : "none",eventForm : "none"});
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
        <MemberTable display={display.member}/>
        
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

