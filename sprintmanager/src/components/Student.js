import React, { Component } from 'react';
import Rating from 'react-rating';
import {
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
  Card,
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Button, 
  CardTitle, 
  CardText, 
  Row, 
  Col
} from 'reactstrap';
import classnames from 'classnames';


import '../css/Student.css';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return <div className="Student-Container">
            <h3 className="Student-Name">Student Name</h3>
            <ListGroup>
                {['Sprint Challenge #1', 'Sprint Challenge #2', 'Sprint Challenge #3'].map(
                (sprint, index) => {
                  return (
                    <React.Fragment>
                      <ListGroupItem id={ `toggler${index + 1}`}>
                        {sprint}
                      </ListGroupItem>
                          <UncontrolledCollapse toggler={`#toggler${index + 1}`}>
                        <Nav tabs>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === '1',
                              })}
                              onClick={() => {
                                this.toggle('1');
                              }}
                            >
                            Your Review <Rating
                                stop={3}
                                initialRating={index + 1}
                                readonly
                            />
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.activeTab === '2',
                              })}
                              onClick={() => {
                                this.toggle('2');
                              }}
                            >
                            PM  <Rating
                                stop={3}
                                initialRating={index + 1}
                                readonly
                            />
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="1">
                            <Row>
                              <Col sm="12">
                                <Card body>
                                  <CardTitle>
                                    Student Review Full
                                  </CardTitle>
                                  <CardText>
                                    With supporting text below as a
                                    natural lead-in to additional
                                    content.
                                  </CardText>
                                  <Button className="Student-Sprint-Link">Go somewhere</Button>
                                </Card>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                              <Col sm="12">
                                <Card body>
                                  <CardTitle>
                                    PM Review Full
                                  </CardTitle>
                                  <CardText>
                                    With supporting text below as a
                                    natural lead-in to additional
                                    content.
                                  </CardText>
                                  <Button className="Student-Sprint-Link">Go somewhere</Button>
                                  <Button className="">Go somewhere</Button>
                                </Card>
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </UncontrolledCollapse>
                    </React.Fragment>
                  );
                },
              )}
            </ListGroup>
          </div>;
    }
}