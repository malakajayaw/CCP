import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberRequest from './components/Member-management/MemberRequest';
import MemberAdd from './components/Member-management/MemberAdd';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({event : "none", memberreq : "none", memberadd : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", memberreq : "none", memberadd : "none"});
            break;
            case "Member Request" : setDisplay({memberreq : "", event:"none" , memberadd : "none"});
            break;
            case "Add Member" : setDisplay({memberreq : "none", event:"none" , memberadd : ""});
            break;
        }
    }
      
   return (
    <div className="wrapper">
      <NavBar />
      <SideBar onClick={showContent} />
      <div className="content-wrapper">
        <ContentHeader pageName={page}/>
        <EventTable  display={display.event} />
        <MemberRequest display={display.memberreq}/>
        <MemberAdd display={display.memberadd}/>
        
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;

