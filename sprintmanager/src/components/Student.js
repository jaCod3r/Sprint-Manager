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
  Col,
  Container,
  Navbar,
  NavbarBrand
} from 'reactstrap';
import classnames from 'classnames';

import lambdaLogo from "../img/Lambda_Logo_Full.png";
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
      return <Container className="Student-Container">
        <Navbar className="NavBar" light expand="md">
          <NavbarBrand>
            <img src={lambdaLogo} alt="logo"/>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Welcome Student</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Logout</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Row className="Student-Name">
          <Col>
            <h3>
              <span>Student Name</span>
            </h3>
          </Col>
        </Row>

        <Row className="Student-Sprint">
          <Col>
            <ListGroup className="Student-Sprint--Challenge">
              {["Sprint Challenge #1", "Sprint Challenge #2", "Sprint Challenge #3"].map((sprint, index) => {
                return (
                  <React.Fragment key={`#${index + 1}`}>
                    <ListGroupItem id={`toggler${index + 1}`}>{sprint}</ListGroupItem>
                    <UncontrolledCollapse toggler={`#toggler${index + 1}`}>
                      <Nav className="Student-Sprint-Toggle-Review" tabs>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "1",
                            })}
                            onClick={() => {
                              this.toggle("1");
                            }}
                          >
                            Your Review <Rating stop={3} initialRating={index + 1} readonly />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.activeTab === "2",
                            })}
                            onClick={() => {
                              this.toggle("2");
                            }}
                          >
                            PM <Rating stop={3} initialRating={index + 1} readonly />
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                          <Row>
                            <Col>
                              <Card body>
                                <CardTitle>Student Review Full</CardTitle>
                                <CardText>
                                  With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button className="Student-Sprint-Link">Github Link to Sprint</Button>
                              </Card>
                            </Col>
                          </Row>
                        </TabPane>
                        <TabPane tabId="2">
                          <Row>
                            <Col sm="12">
                              <Card body>
                                <CardTitle>PM Review Full</CardTitle>
                                <CardText>
                                  With supporting text below as a natural lead-in to additional content.
                                </CardText>
                                <Button className="Student-Sprint-Link">Edit</Button>
                                <Button className="Student-Sprint-Link">Submit</Button>
                              </Card>
                            </Col>
                          </Row>
                        </TabPane>
                      </TabContent>
                    </UncontrolledCollapse>
                  </React.Fragment>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    }
}