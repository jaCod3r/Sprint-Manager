import React from "react";
import { Col, Row, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "../css/signUp.css";
import lambdaLogo from "../img/Lambda_Logo_Full.png";

class SingUp extends React.Component {
    state = {
        Fields: {
            userName: "",
            password: "",
            confirmPassword: "",
        },
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ Fields: { ...this.state.Fields, [name]: value } });
    };

    handlePassword = () => {
        if (
            this.state.Fields.password === this.state.Fields.confirmPassword &&
            this.state.Fields.password.length &&
            this.state.Fields.confirmPassword.length
        ) {
            return <i className="fas fa-lock" />;
        } else {
            <i className="fas fa-unlock-alt" />;
        }
        return <i className="fas fa-unlock-alt" />;
    };

    render() {
        return (
            <div className="SignUp-Container">
                <img className="SignUp-Logo" src={lambdaLogo} alt="Lambda School Logo" />
                <Row>
                    <Col>
                        <Form className="mr-4 ml-3">
                            <FormGroup>
                                <Row className="SignUp-input">
                                    <Col xs="1">
                                        <i className="fas fa-user-alt" />
                                    </Col>
                                    <Col>
                                        <Input
                                            onChange={this.handleInputChange}
                                            value={this.state.Fields.username}
                                            name="userName"
                                            type="text"
                                            className="form-control"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row className="SignUp-input">
                                    <Col xs="1">{this.handlePassword()}</Col>
                                    <Col>
                                        <Input
                                            onChange={this.handleInputChange}
                                            value={this.state.Fields.password}
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row className="SignUp-input">
                                    <Col xs="1">{this.handlePassword()}</Col>
                                    <Col>
                                        <Input
                                            onChange={this.handleInputChange}
                                            value={this.state.Fields.confirmPassword}
                                            name="confirmPassword"
                                            type="password"
                                            className="form-control"
                                            placeholder="Retype password"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>

                            <Link to="/pm">
                                <Button type="submit">Login</Button>
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SingUp;
