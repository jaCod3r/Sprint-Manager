import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, ListGroup, ListGroupItem, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import "../css/Pm.css";

class ProgramManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            Names: [
                "John Wallace",
                "Casey Roberts",
                "John Doe",
                "Jane Doe",
                "John Huggett",
                "Casey Smith",
                "John Smith",
                "Jane Smith",
                "Daniel Jones",
                "Mark Anthony",
                "Joe Mul",
                "Jean Grant",
                "Owen Marcus",
                "Lewis Jones",
                "John Wallace",
                "Casey Roberts",
                "John Doe",
                "Jane Doe",
                "John Paul",
                "Casey Jones",
                "John Smith",
                "Jane Smith",
                "Daniel Jones",
                "Mark Anthony",
                "Joe Mul",
                "Jean Grant",
                "Owen Marcus",
                "Lewis Jones",
            ],
            searchQuery: "",
            NameList: [],
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    handleSearch = event => {
        this.setState({
            searchQuery: event.target.value,
        });
    };

    addName = name => {
        const nameList = [...this.state.NameList];
        /** let nameList = [...this.state.NameList];
        console.log(nameList);
        // let nameList = [];
        // nameList.push(name);

        if (!nameList.length) {
            // nameList = [];
            nameList.push(name);
        } else {
            nameList = [...this.state.NameList];
            for (let i = 0; i < nameList.length; i++) {
                console.log("list", nameList[i]);
                console.log("func call", name);
                if (nameList[i] !== name) {
                    nameList.push(name);
                }
                // return;
            }
        } */
        nameList.push(name);
        this.setState({
            NameList: nameList,
        });
    };

    render() {
        const nameSearch = this.state.Names.filter(name => {
            return name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1;
        });
        return (
            <Container>
                <NavBar />

                <Row className="mb-3">
                    <Col>
                        <h3>
                            <span>Project Manager's Name</span>
                        </h3>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col>
                        <Button className="PM-Add" onClick={this.toggle}>
                            Add student
                        </Button>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <h5>Your Students</h5>
                    </Col>
                </Row>

                <Row className="PM-Student-List">
                    <Col>
                        <ListGroup>
                            {this.state.NameList.map((name, index) => {
                                return (
                                    <ListGroupItem key={index}>
                                        <Link className="PM-Student-List--Link" to="/student">
                                            {name}
                                        </Link>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>

                <Modal className="Modal" isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Search Student</ModalHeader>
                    <ModalBody className="Modal-Body">
                        <Row className="mb-3">
                            <Col>
                                <Input type="text" placeholder="Search" value={this.state.searchQuery} onChange={this.handleSearch} />
                            </Col>
                        </Row>
                        <ListGroup className="Modal-Name-List">
                            {nameSearch.map((name, index) => {
                                return (
                                    <ListGroupItem onClick={() => this.addName(name)} tag="button" action key={index}>
                                        {name}
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="Modal-Button" onClick={this.toggle}>
                            Return
                        </Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default ProgramManager;
