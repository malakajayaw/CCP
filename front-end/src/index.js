import React from 'react';
import ReactDOM from 'react-dom';
import AdminLogin from './admin/components/Login/AdminLogin';
import App from './admin/App';
import WebApp from './web/WebApp';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

ReactDOM.render(
       <Router>
            <Switch>
                    <Route path="/adminlogin">  <AdminLogin /> </Route>
                    <Route path="/admin">  <App /> </Route>
                    <Route path="/">  <WebApp /> </Route>
                    
            </Switch>
        </Router>,
  document.getElementById('root')
);

