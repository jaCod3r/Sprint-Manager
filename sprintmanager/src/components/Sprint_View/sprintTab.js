import React from "react";

import { Card, TabContent, TabPane, Button, CardTitle, CardText, Row, Col, Input } from "reactstrap";

export default function(props) {
    return (
        <TabContent activeTab={props.activeTab}>
            <TabPane tabId="1">
                <Row>
                    <Col>
                        <Card body>
                            <CardTitle>Student Review Full</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button className="Student-Sprint-Link">Github Link to Sprint</Button>
                        </Card>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                        <form onSubmit={props.handleSubmit}>
                            <Card body>
                                <CardTitle>PM Review Full</CardTitle>
                                <CardText>{props.Reviews.review}</CardText>
                                <Row>
                                    <Col className="Student-Sprint-Input mb-3 d-flex justify-content-center" xs="12">
                                        <Input
                                            onChange={props.handleInputChange}
                                            type="textarea"
                                            value={props.Reviews.input}
                                            name="input"
                                            className="form-control"
                                            placeholder="Input Review Comments"
                                            style={{ height: 150, width: "76%" }}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button onClick={() => props.handleEdit()} className="Student-Sprint-Link PM">
                                            Edit
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button type="submit" className="Student-Sprint-Link PM">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </form>
                    </Col>
                </Row>
            </TabPane>
        </TabContent>
    );
}
