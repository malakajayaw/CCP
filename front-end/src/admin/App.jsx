import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import EventReportTable from './components/EventReport-management/EventReportTable';
import EventReportForm from './components/EventReport-management/EventReportForm';
import EventReportApp from './components/EventReport-management/EventReportApp';
import EventAttendance from './components/EventAttendance-management/EventAttendance';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", eventR : "none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
            break;
            case "VReport" : setDisplay({eventR : "", event:"none", eventRAdd : "none", eventRApp : "none", eventAtt : "none"});
            break;
            case "AReport" : setDisplay({eventRAdd : "", eventR : "none", event:"none", eventRApp : "none", eventAtt : "none"});
            break;
            case "EReport" : setDisplay({eventRApp : "", eventR : "none", event:"none", eventRAdd : "none", eventAtt : "none"});
            break;
            case "EAttendance" : setDisplay({eventAtt : "", eventR : "none", event:"none", eventRAdd : "none", eventRApp : "none"});
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
        <EventReportTable display={display.eventR} onClick={showContent}/>
        <EventReportForm display={display.eventRAdd}/>
        <EventReportApp display={display.eventRApp} onClick={showContent}/>
        <EventAttendance display={display.eventAtt}/>
        
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;

