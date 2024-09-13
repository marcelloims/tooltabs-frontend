import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import logo from "../../assets/images/logo-tooltabs-circle.png";
import Axios from "../../api/Axios";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // *"use for Validation"*
    const [validateEmail, setValidateEmail] = useState("");
    const [validatePassword, setValidatePassword] = useState("");

    const navigate = useNavigate();

    const proceedLogin = async (e) => {
        e.preventDefault();

        await Axios.post("/auth/login", { email, password })
            .then((response) => {
                localStorage.setItem("token", response.data.response.token);
                setEmail("");
                setPassword("");
                navigate("/dashboard");
            })
            .catch((error) => {
                setValidateEmail(error.response.data.request.email);
                setValidatePassword(error.response.data.request.password);
            });
    };

    useEffect(() => {}, [email, password, validateEmail, validatePassword]);

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
                        <Form className="mt-3" onSubmit={proceedLogin}>
                            <Form.Group className="mb-2" controlId="name">
                                <Form.Label>Email</Form.Label>
                                {validateEmail && (
                                    <p className="validation-custom">
                                        {validateEmail}
                                    </p>
                                )}
                                <Form.Control
                                    type="email"
                                    placeholder="example@example.com"
                                    name="email"
                                    className={
                                        "bg-text-custom " +
                                        (validateEmail ? "is-invalid" : "")
                                    }
                                    style={{ color: "#0a2d3d" }}
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mt-2 " controlId="password">
                                <Form.Label>Password</Form.Label>
                                {validatePassword && (
                                    <p className="validation-custom">
                                        {validatePassword}
                                    </p>
                                )}
                                <Form.Control
                                    type="password"
                                    placeholder="********"
                                    name="password"
                                    className={
                                        "bg-text-custom " +
                                        (validatePassword ? "is-invalid" : "")
                                    }
                                    style={{ color: "#0a2d3d" }}
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
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
