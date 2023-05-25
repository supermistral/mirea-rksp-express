import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import authService from "../../../services/auth";
import { getNameAndValue } from "../../../utils/dom";


const Signup = () => {
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const { name, value } = getNameAndValue(e.target);
        setData(prev => ({...prev, [name]: value}));
    }

    const handleClick = (e) => {
        console.log(data);
        authService.signup(data)
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
                                <h2 className="fw-bold mb-2 text-uppercase ">Signup</h2>
                                <p className=" mb-5">Enter email, name, password</p>
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
                                    <Form.Group className="mb-3" controlId="formBasicName" onChange={handleChange}>
                                        <Form.Label className="text-center">
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter name" 
                                            name="name"
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
                                        Signup
                                        </Button>
                                    </div>
                                    </Form>
                                    <div className="mt-3">
                                        <p className="mb-0  text-center">
                                            Already have an account?{" "}
                                            <Link to="/auth/login" className="text-primary fw-bold">
                                            Login
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

export default Signup;
