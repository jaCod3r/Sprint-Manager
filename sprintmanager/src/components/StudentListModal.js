import React from "react";

import { Row, Col, Modal, ModalHeader, ModalBody, Input, ListGroup, ListGroupItem, ModalFooter, Button } from "reactstrap";

class StudentListModal extends React.Component {
    state = {
        searchQuery: "",
    }

    handleSearch = event => {
        this.setState({
            searchQuery: event.target.value,
        });
    };

    render() {
        return (
            <Modal className="Modal" isOpen={this.props.modal} fade={false} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Search Student</ModalHeader>
                <ModalBody className="Modal-Body">
                    <Row className="mb-3">
                        <Col>
                            <Input type="text" placeholder="Search" value={this.props.searchQuery} onChange={this.handleSearch} />
                        </Col>
                    </Row>
                    <ListGroup className="Modal-Name-List">
                        {this.props.nameSearch.map((name, index) => {
                            return (
                                <ListGroupItem onClick={() => this.props.addName(name)} tag="button" action key={index}>
                                    {name}
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    <Button className="Modal-Button" onClick={this.props.toggle}>
                        Return
                        </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default StudentListModal;

