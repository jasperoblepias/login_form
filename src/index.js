import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Register from './js/Register';
import Home from './js/Home';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Register/>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);
