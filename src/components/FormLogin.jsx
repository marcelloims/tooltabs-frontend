import React from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import logo from "../assets/images/logo-tooltabs-circle.png";

const FormLogin = () => {
    return (
        <Card className="card-custom mt-5">
            <Card.Body className="">
                <Row>
                    <Col className="text-center">
                        <Image
                            src={logo}
                            roundedCircle={true}
                            width={250}
                            className="text-center"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h3 style={{ color: "#0a2d3d" }}>
                            Welcome to Tooltabs App!
                        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className="mt-3">
                            <Form.Group className="mb-2" controlId="name">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="example@example.com"
                                    name="email"
                                    className="bg-text-custom"
                                    style={{ color: "#0a2d3d" }}
                                />
                            </Form.Group>
                            <Form.Group className="mt-2 " controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="********"
                                    name="password"
                                    style={{ color: "#0a2d3d" }}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                className="mt-3 float-right"
                                type="submit"
                            >
                                Login
                            </Button>
                            <Button
                                className="mt-3 float-right mr-2"
                                type="submit"
                            >
                                About Us
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default FormLogin;
