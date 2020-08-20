import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberTable from './components/Member-management/MemberTable';
import EventReportTable from './components/EventReport-management/EventReportTable';
import EventReportForm from './components/EventReport-management/EventReportForm';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", member : "none", eventR : "none", eventRAdd : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", member : "none", eventR : "none", eventRAdd : "none"});
            break;
            case "Member" : setDisplay({member : "", event:"none", eventR : "none", eventRAdd : "none"});
            break;
            case "VReport" : setDisplay({eventR : "", member : "none", event:"none", eventRAdd : "none"});
            break;
            case "AReport" : setDisplay({eventRAdd : "", eventR : "none", member : "none", event:"none"});
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
        <EventReportTable display={display.eventR} onClick={showContent}/>
        <EventReportForm display={display.eventRAdd}/>
        
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;

