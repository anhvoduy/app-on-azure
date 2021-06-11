import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Employee from './components/employee';
import EmployeeEdit from './components/employeeEdit';
import Course from './components/course';
import CourseEdit from './components/courseEdit';
import Video from './components/video';
import VideoEdit from './components/videoEdit';
import Player from './components/player';
import Camera from './components/camera';

const RouteConfig = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/employee">
                    <Employee />
                </Route>
                <Route exact path="/employee/:id">
                    <EmployeeEdit />
                </Route>
                <Route exact path="/course">
                    <Course />
                </Route>
                <Route exact path="/course/:id">
                    <CourseEdit />
                </Route>
                <Route exact path="/video">
                    <Video />
                </Route>
                <Route exact path="/video/:id">
                    <VideoEdit />
                </Route>
                <Route exact path="/player/:id">
                    <Player />
                </Route>
                <Route exact path="/camera">
                    <Camera />
                </Route>
            </Switch>
        </Router>
    );
}

export default RouteConfig;