import React from "react";
import "./index.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgetPassword from "./Pages/ForgetPassword";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarSignIn from "./Components/NavbarSignIn";
import NavbarSignOut from "./Components/NavbarSignOut";
function App() {
  const userToken = localStorage.getItem("token");
  const userName = localStorage.getItem("name");

  return (
    <Router>
      {userToken ? <NavbarSignIn /> : <NavbarSignOut />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}
export default App;
