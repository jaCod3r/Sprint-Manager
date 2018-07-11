import React, { Component } from "react";
import { ListGroup, Row, Col, Container, Button, Collapse } from "reactstrap";

import NavBar from "../NavBar";
import SprintView from "./sprintView";

import "../../css/Student.css";

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeTab: "1",
            collapse: false,
        };
    }
    // WIP to get collapse all functioning

    // toggle = tab => {
    //     if (this.state.activeTab !== tab) {
    //         this.setState({
    //             activeTab: tab,
    //         });
    //     }
    // };

    // toggleCollapse = () => {
    //     this.setState({
    //         collapse: false,
    //     });
    // };

    // toggleAllSprints = () => {
    //     this.setState({ collapse: !this.state.collapse });
    // };

    // toggleTab = tab => {
    //     this.setState({ activeTab: tab });
    // };

    render() {
        console.log("from student", this.state.collapse);
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
                                        toggleAllSprints={this.toggleAllSprints}
                                        collapse={this.state.collapse}
                                    />
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                {/* TODO make this work */}
                {/* <Button className="Student-Sprint-Link Collapse" onClick={this.toggleCollapse}>
                    Collapse All
                </Button> */}
            </Container>
        );
    }
}
