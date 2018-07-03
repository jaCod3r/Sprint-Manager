import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, FormGroup, Input, Button } from "reactstrap";

import "../css/Login.css";
import lambdaLogo from "../img/Lambda_Logo_Full.png";

/*
TODO
would like the logo to have sprint-tracker under Lambda
*/

class Login extends React.Component {
    state = {
        Fields: {
            username: "",
            password: "",
        },
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        const fields = this.state.Fields;
        fields[name] = value;
        this.setState({
            Fields: fields,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.Fields.username && this.state.Fields.password) {
            // this.props.login(this.state.Fields);
        }
    };

    render() {
        return (
            <div className="Login-Container">
                <img className="Login-Logo" src={lambdaLogo} alt="Lambda School Logo" />
                <Row>
                    <Col>
                        <Form className="mr-4 ml-3">
                            <FormGroup>
                                <Row className="Login-input">
                                    <Col xs="1">
                                        <i className="fas fa-user-alt" />
                                    </Col>
                                    <Col>
                                        <Input
                                            onChange={this.handleInputChange}
                                            value={this.state.Fields.username}
                                            name="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="User Name"
                                        />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row className="Login-input">
                                    <Col xs="1">
                                        <i className="fas fa-lock" />
                                    </Col>
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
                            <Button type="submit">Login</Button>
                            <p>
                                Not a member? <Link to="/signup">Sign up now</Link>
                                <i className="fas fa-long-arrow-alt-right" />
                            </p>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;
