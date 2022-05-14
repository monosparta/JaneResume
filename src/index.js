import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Page/Home'
import SignUp from './Page/SignUp'
import SignIn from './Page/SignIn'
import ForgetPassword from './Page/ForgetPassword';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarSignIn from './Components/NavbarSignIn'
import NavbarSignOut from './Components/NavbarSignOut'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavbarSignOut/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
