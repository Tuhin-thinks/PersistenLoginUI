import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppPage = ({ LandingPage, SignUpPage, SignInPage }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={LandingPage} />
        <Route exact path="/signup" element={SignUpPage} />
        <Route exact path="/signin" element={SignInPage} />
      </Routes>
    </Router>
  );
};

export default AppPage;
