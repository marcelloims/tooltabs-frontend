import React from "react";
import "../myStyle.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import FormLogin from "../components/FormLogin";

const Login = () => {
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
