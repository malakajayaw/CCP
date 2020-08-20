import React, { useState } from 'react';
import NavBar from './components/Dashboard/NavBar';
import SideBar from './components/Dashboard/SideBar';
import ContentHeader from './components/Dashboard/ContentHeader';
import Footer from './components/Dashboard/Footer';
import EventTable from './components/Event-management/EventTable';
import MemberTable from './components/Member-management/MemberTable';
import DesignationTable from './components/Designation-management/DesignationTable';
import CreateDesignationForm from './components/Designation-management/CreateDesignationForm';
import ActivityTable from './components/Activity-log/ActivityTable';

function App() {

    const [page, setPage] = useState("Event");
    const [display, setDisplay] = useState({ event: "none", member: "none", designation: "none", activity: "none", createDesignationForm: "none" });

    function showContent(pageName) {
        setPage(pageName);
        switch (pageName) {
            case "Event": setDisplay({ event: "", member: "none", designation: "none", activity: "none", createDesignationForm: "none" });
                break;
            case "Member": setDisplay({ member: "", event: "none", designation: "none", activity: "none", createDesignationForm: "none" });
                break;
            case "Designation": setDisplay({ designation: "", event: "none", member: "none", activity: "none", createDesignationForm: "none" });
                break;
            case "Activity": setDisplay({ activity: "", event: "none", member: "none", designation: "none", createDesignationForm: "none" });
                break;
            case "CreateDesignationForm": setDisplay({ createDesignationForm: "", event: "none", member: "none", designation: "none", activity: "none" });
                break;
        }
    }

    return (
        <div className="wrapper">
            <NavBar />
            <SideBar onClick={showContent} />
            <div className="content-wrapper">
                <ContentHeader pageName={page} />
                <EventTable display={display.event} />
                <MemberTable display={display.member} />
                <DesignationTable display={display.designation} />
                <ActivityTable display={display.activity} onClick={showContent} />
                <CreateDesignationForm display={display.createDesignationForm} />

                {/* {page === "Event" && <EventTable />} */}
                {/* {page === "Member" && <MemberTable />} */}
            </div>
            <Footer />
        </div>
    );
}

export default App;

