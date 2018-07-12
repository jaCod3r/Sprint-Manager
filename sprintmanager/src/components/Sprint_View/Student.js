import React, { Component } from "react";
import { ListGroup, Row, Col, Container, Button } from "reactstrap";

import NavBar from "../NavBar";
import SprintView from "./sprintView";

import "../../css/Student.css";

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeTab: "1",
            collapseAll: false,
        };
    }

    // toggle = tab => {
    //     if (this.state.activeTab !== tab) {
    //         this.setState({
    //             activeTab: tab,
    //         });
    //     }
    // };

    // toggleTab = tab => {
    //     this.setState({ activeTab: tab });
    // };

    forceCollapseAll = () => {
        this.setState({
            collapseAll: !this.state.collapseAll,
        });
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

                <Row className="Student-Sprint mb-3">
                    <Col>
                        <ListGroup className="Student-Sprint-Challenge">
                            {["Sprint Challenge #1", "Sprint Challenge #2", "Sprint Challenge #3"].map((sprint, index) => {
                                return (
                                    <SprintView
                                        index={index}
                                        sprint={sprint}
                                        activeTab={this.state.activeTab}
                                        forceCollapseAll={this.forceCollapseAll}
                                        collapseAll={this.state.collapseAll}
                                    />
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                <Button className="Student-Sprint-Link Collapse" onClick={this.forceCollapseAll}>
                    Collapse All
                </Button>
            </Container>
        );
    }
}
