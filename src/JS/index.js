import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import Greeting from './pages/greeting'


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/greeting" component={Greeting} />
            </div>
    </Router>, 
    document.getElementById('app')
)
