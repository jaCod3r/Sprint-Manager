import React from "react";
import classnames from "classnames";

import { NavItem, NavLink, Nav, Row, Col } from "reactstrap";

import StudentRating from "./StudentRating";
import PmRating from "./PmRating";

class NavSprint extends React.Component {
    state = {};

    render() {
        return (
            <Nav className="Student-Sprint-Toggle-Review" tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: this.props.activeTab === "1",
                        })}
                        onClick={() => {
                            this.props.toggle("1");
                        }}
                    >
                        Your Review
                        <Col className="mr-1">
                            <Row className="d-flex justify-content-between">
                                <StudentRating />
                            </Row>
                        </Col>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active: this.props.activeTab === "1",
                        })}
                        onClick={() => {
                            this.props.toggle("2");
                        }}
                    >
                        PM
                        <Col className="mr-1">
                            <Row className="d-flex justify-content-between">
                                <PmRating />
                            </Row>
                        </Col>
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default NavSprint;
