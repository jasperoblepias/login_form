import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from "react-dom";

import Register from './Register';
import Dashboard from './Dashboard';
import Login from './Login';

import '../css/App.css';


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
