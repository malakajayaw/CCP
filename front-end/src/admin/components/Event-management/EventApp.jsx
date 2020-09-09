import React, {Component} from 'react';
import './EventApp.css';

class EventApp extends Component{

   constructor(){
       super();
       this.state = {events : []}
   }

    componentDidMount(){
        fetch('/events')
        .then(res => res.json())
        .then(events => this.setState({events}, () => console.log('Events fetched..',events)));
    };

    render(){
        return ( <div>
            <h1>Events</h1>
            <ul>
             {this.state.events.map(events => <li key={events.id} >{events.fName} {events.lName}</li>)}
            </ul>
          </div>  
        );
    }
}

export default EventApp;
