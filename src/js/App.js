import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';

import '../css/App.css';


function App() {
    return (
      <Router>
            <Route path="/" component={Login} exact/> 
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Register} />
      </Router>
    );
  }

export default App;
