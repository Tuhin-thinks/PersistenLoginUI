import React from "react";
import { Button, ButtonGroup, Card, CardGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <h3>Test Jwt Login Landing Page</h3>
      <Form>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.guim.co.uk/img/media/7d18c9440156fc297a3eb9660d07ae1340b0d8c1/0_65_1848_1109/master/1848.jpg?width=620&quality=85&dpr=1&s=none"
            />
            <Card.Body>
              <Card.Title>You can signin or signup here</Card.Title>
              <Card.Text>
                You will be redirected from this page, if already logged in.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex p-2">
              <ButtonGroup>
                <Link className="p-2" to="/signup">
                  <Button variant="primary">Sign Up</Button>
                </Link>
                <Link className="p-2" to="/signin">
                  <Button variant="primary">Sign In</Button>
                </Link>
              </ButtonGroup>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Form>
    </div>
  );
};

export default LandingPage;
