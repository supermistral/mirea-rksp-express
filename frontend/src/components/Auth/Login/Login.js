import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userAuthenticated } from "../../../redux/slices/auth";
import authService from "../../../services/auth";
import { getNameAndValue } from "../../../utils/dom";


const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = getNameAndValue(e.target);
        setData(prev => ({...prev, [name]: value}));
    }

    const handleClick = (e) => {
        authService.login(data)
            .then(res => {
                console.log(res);
                dispatch(userAuthenticated({
                    email: res.data.user.email,
                    role: res.data.user.role,
                }));
            })
            .catch(err => alert(err));
    }

    return (
        <Container className="vh-100">
            <Row style={{height: '100%', color: '#000'}} className="d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-primary"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                <p className=" mb-5">Please enter your login and password</p>
                                <div className="mb-3">
                                    <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
                                        <Form.Label className="text-center">
                                            Email address
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email" 
                                            name="email"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                    <div className="d-grid">
                                        <Button onClick={handleClick} variant="primary" type="submit">
                                        Login
                                        </Button>
                                    </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <Link to="/auth/signup" className="text-primary fw-bold">
                                            Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;
