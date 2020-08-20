import React, {useState} from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberTable from './components/Member-management/MemberTable';
import StudentBranchTable from './components/StudentBranch-management/StudentBranchTable';

function App() {

  const [page, setPage] = useState("Event");
  const [display, setDisplay] = useState({event : "none", member : "none" , studentbranch : "none"});

    function showContent(pageName){
        setPage(pageName);
        switch(pageName){
            case "Event" : setDisplay({event : "", member : "none"});
            break;
            case "Member" : setDisplay({member : "", event:"none"});
            break;
            case "StudentBranch" : setDisplay({studentbranch : "", event:"none" , member : "none"});
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
        <MemberTable display={display.member}/>
        <StudentBranchTable display={display.studentbranch}/>
        
        {/* {page === "Event" && <EventTable />} */}
        {/* {page === "Member" && <MemberTable />} */}
      </div>
      <Footer />
    </div>
);
}

export default App;

