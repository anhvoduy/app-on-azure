import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Employee from './components/employee';
import EmployeeEdit from './components/employeeEdit';

const RouteConfig = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/course">
                    <Employee />
                </Route>
                <Route exact path="/course/:id">
                    <EmployeeEdit />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteConfig;