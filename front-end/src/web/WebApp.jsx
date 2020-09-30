import React from 'react';
import './App.css';
import NavBar from './components/Common/NavBar';
import Footer from './components/Common/Footer';
import UpcomingEvents from './components/Events/UpcomingEvents';
import UpComingAll from './components/Events/UpComingAll';
import ClosedAll from './components/Events/ClosedAll';
import EventView from './components/Events/EventView';
import Registration from './components/Member/Registration';
import MemberLogin from './components/Login/MemberLogin';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return ( <div>
     { <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"></link>}
    <Router>
        <Switch>
              <Route path="/upcomingAll">  <UpComingAll /> </Route>
              <Route path="/closedAll">  <ClosedAll /> </Route>
              <Route path="/view/:eventId">  <EventView /> </Route>
              <Route path="/Registration">  <Registration /> </Route>
              <Route path="/MemberLogin">  <MemberLogin /> </Route>
              <Route path="/">  <UpcomingEvents /> </Route>
        </Switch>
    </Router>
  </div> 
  );
}

export default App;
