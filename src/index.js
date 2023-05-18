import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Routes';
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/css/index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Main/>
    </Router>
  </React.StrictMode>
);

