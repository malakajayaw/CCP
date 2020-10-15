import React from 'react';
import { useState ,useEffect} from 'react';
import {useParams } from "react-router-dom";
import {get_responses, get_event} from "../../controllers/event.controller";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import 'jquery/dist/jquery.min.js';
import $ from "jquery"


function ResponsesView(){

    const [responses, setResponses] = useState([]);  
    const [event, setEvent] = useState({event:['']});   
    let { eventId } = useParams();

    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      var responseResults = await get_responses(eventId);
      var eventResults = await get_event(eventId);
      setResponses(responseResults.data.data);
      setEvent(eventResults.data.data);
      $("#responseTable").dataTable();
    }


    const loadFields = () => {
      if(event.fieldNames != null){
      return event.fieldNames.map((field, index) => {

          return (
            <div className="card " key={index}>
            <div className="card-header bg-success" style={{fontWeight:"bold"}}>
              {field}
            </div>
            <ul className="list-group list-group-flush">
                {loadResponses(index)}
            </ul>
          </div>
        );
      }); 
    }
    };

    const loadResponses = (number) => {
      return responses.map((response, index) => {

          return (
          <li className="list-group-item" key={index}>{response.formData[number]}</li> 
        );
      }); 
    };

   return (<div className="container">
          {loadFields()}
   </div>
 );
}

export default ResponsesView;

