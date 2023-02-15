import React, { useState, useRef } from "react";
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch} from "react-redux";
import { register } from "../../redux/actions/auth";
import { Navigate, useNavigate  } from 'react-router-dom';




const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    dispatch(register(username, email, password))
      .then(() => {
        setSuccessful(true);
        //navigate("/login");
      })
      .catch(() => {
        setSuccessful(false);
      });
    
  };

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Tracker
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleRegister} ref={form}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">UserName</Form.Label>
                        <Form.Control type="text" id="username" placeholder="Enter UserName" data-testid="username" 
                        value={username}
                        onChange={onChangeUsername} 
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email"
                        id="email" 
                        placeholder="Enter email"
                        data-testid="email"
                        value={email}
                        onChange={onChangeEmail} 
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        id="password"
                        data-testid="password"
                        value={password}
                        onChange={onChangePassword}  
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <a href="/login" id= "signup" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;