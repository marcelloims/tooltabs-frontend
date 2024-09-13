import React, { useEffect } from "react";
import "../../myStyle.css";
import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../../components/auth/FormLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <Container fluid={true} className="container-login">
            <Row>
                <Col xs={7} className="center-custom"></Col>
                <Col sm={12} md={5} lg={5} className="center-custom">
                    <FormLogin />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
