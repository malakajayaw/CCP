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
import MemberList from './components/Member-management/MemberList';
import DesignationTable from './components/Designation-management/DesignationTable';
import CreateDesignationForm from './components/Designation-management/CreateDesignationForm';
import EditAssignedMemberForm from './components/Designation-management/EditAssignedMemberForm';
import EditDesignation from './components/Designation-management/EditDesignation';
import MemberEdit from './components/Member-management/MemberEdit';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure() 


function App() {

    const [page, setPage] = useState("Event");
    
    return (
      
     
        <div className="wrapper">
            <NavBar />
            <div className="content-wrapper">
                <ContentHeader pageName={page} />

                <Router>
                    <SideBar />
                    <Switch>
                        <Route path="/Admin/EventTable"> <EventTable /> </Route>
                        <Route path="/Admin/MemberRequest"> <MemberRequest /> </Route>
                        <Route path="/Admin/EventView/:eventId"> <EventView /> </Route>
                        <Route path="/Admin/EventForm"> <EventForm /> </Route>
                        <Route path="/DesignationAdmin"> <DesignationTable /> </Route>
                        <Route path="/DesignationChair"> <EditAssignedMemberForm /> </Route>
                        <Route path="/ActivityLog"> <EditDesignation /> </Route>
                        <Route path="/AddDesignation"> <CreateDesignationForm /> </Route>
                        <Route path="/Admin/MemberAdd"> <MemberAdd /> </Route>
                        <Route path="/Admin/MemberList"> <MemberList /> </Route>
                        <Route path="/Admin/MemberEdit"> <MemberEdit /> </Route>
                    </Switch>
                </Router>
                
            </div>
            <Footer />

        </div>
    );
}

export default App;