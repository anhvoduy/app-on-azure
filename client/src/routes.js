import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Course from './components/course';
import CourseEdit from './components/courseEdit';

const RouteConfig = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/course">
                    <Course />
                </Route>
                <Route exact path="/course/:id">
                    <CourseEdit />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteConfig;