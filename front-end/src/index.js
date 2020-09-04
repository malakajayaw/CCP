import React from 'react';
import ReactDOM from 'react-dom';
import App from './admin/App';
import WebApp from './web/WebApp';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
            <Switch>
                    <Route path="/index">  <WebApp /> </Route>
                    <Route path="/admin">  <App /> </Route>
            </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

