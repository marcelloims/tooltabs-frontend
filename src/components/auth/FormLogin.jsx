import { useEffect, useState } from "react";
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
    const [userInvalid, setUserInvalid] = useState("");

    const navigate = useNavigate();

    const proceedLogin = async (e) => {
        e.preventDefault();

        await Axios.post("/auth/login", { email, password })
            .then((response) => {
                localStorage.setItem("token", response.data.response.token);
                localStorage.setItem("user_id", response.data.response.user.id);
                localStorage.setItem(
                    "department_per_position_id",
                    response.data.response.user.department_per_position_id
                );
                setEmail("");
                setPassword("");
                navigate("/main/dashboard");
                navigate(0);
            })
            .catch((error) => {
                if (error.response.data.code === 401) {
                    setUserInvalid(error.response.data.message);
                }
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
                        {userInvalid && (
                            <div className="alert alert-danger alert-dismissible fade show">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mr-2"
                                >
                                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                </svg>
                                <strong>Error!</strong> {userInvalid}
                            </div>
                        )}
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
