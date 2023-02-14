import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Form>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </Form>
    </div>
  );
};

export default WelcomePage;
