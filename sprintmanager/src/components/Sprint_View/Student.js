import React, { Component } from "react";
import { ListGroup, Row, Col, Container } from "reactstrap";

import NavBar from "../NavBar";
import "../../css/Student.css";
import SprintView from "./sprintView";

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1",
        };
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    };

    render() {
        return (
            <Container className="Student-Container">
                <NavBar />
                <Row className="Student-Name">
                    <Col>
                        <h3>
                            <span>Student Name</span>
                        </h3>
                    </Col>
                </Row>

                <Row className="Student-Sprint">
                    <Col>
                        <ListGroup className="Student-Sprint-Challenge">
                            {["Sprint Challenge #1", "Sprint Challenge #2", "Sprint Challenge #3"].map((sprint, index) => {
                                return <SprintView index={index} sprint={sprint} activeTab={this.state.activeTab} toggle={this.toggle} />;
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
