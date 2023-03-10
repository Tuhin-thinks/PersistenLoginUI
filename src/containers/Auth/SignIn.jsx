import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInPage = () => {
  console.log("SignInPage");
  return (
    <div>
      <h1>Sign In</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/signup">Sign Up</Link>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default SignInPage;
