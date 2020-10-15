import React, {Component} from 'react';
import './AffiliationApp.css';

class AffiliationApp extends Component{

   constructor(){
       super();
       this.state = {affiliation : []}
   }

    componentDidMount(){
        fetch('/affiliation')
        .then(res => res.json())
        .then(affiliation => this.setState({affiliation}, () => console.log('Affiliation fetched..',affiliation)));
    };

    render(){
        return ( <div>
            <h1>Affiliation</h1>
            <ul>
             {this.state.affiliation.map(affiliation => <li key={affiliation.id} >{affiliation.fName} {affiliation.lName}</li>)}
            </ul>
          </div>  
        );
    }
}

export default AffiliationApp;
