import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Page/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
