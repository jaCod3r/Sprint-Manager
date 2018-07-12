import React from "react";
import classnames from "classnames";

import { NavItem, NavLink, Nav, Row, Col } from "reactstrap";

class NavSprint extends React.Component {
    state = {
        frownFlag: true,
        mehFlag: true,
        smileFlag: true,
    };

    setRating = rating => {
        if (rating === 1) {
            this.state.frownFlag = !this.state.frownFlag;
        } else if (rating === 2) {
            this.state.mehFlag = !this.state.mehFlag;
        } else {
            this.state.smileFlag = !this.state.smileFlag;
        }
    };

    render() {
        // console.log(this.state.mehFlag);
        // console.log(this.state.smileFlag);
        // console.log(this.state.frownFlag);
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
                                {this.state.frownFlag ? (
                                    <i className="far fa-frown fa-2x" onClick={() => this.setRating(1)} />
                                ) : (
                                    <i className="fas fa-frown fa-2x" onClick={() => this.setRating(1)} />
                                )}
                                {this.state.mehFlag ? (
                                    <i className="far fa-meh fa-2x" onClick={() => this.setRating(2)} />
                                ) : (
                                    <i className="fas fa-meh fa-2x" onClick={() => this.setRating(2)} />
                                )}
                                {this.state.smileFlag ? (
                                    <i className="far fa-smile fa-2x" onClick={() => this.setRating(3)} />
                                ) : (
                                    <i className="fas fa-smile fa-2x" onClick={() => this.setRating(3)} />
                                )}
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
                                {this.state.frownFlag ? (
                                    <i className="far fa-frown fa-2x" onClick={() => this.setRating(1)} />
                                ) : (
                                    <i className="fas fa-frown fa-2x" onClick={() => this.setRating(1)} />
                                )}
                                {this.state.mehFlag ? (
                                    <i className="far fa-meh fa-2x" onClick={() => this.setRating(2)} />
                                ) : (
                                    <i className="fas fa-meh fa-2x" onClick={() => this.setRating(2)} />
                                )}
                                {this.state.smileFlag ? (
                                    <i className="far fa-smile fa-2x" onClick={() => this.setRating(3)} />
                                ) : (
                                    <i className="fas fa-smile fa-2x" onClick={() => this.setRating(3)} />
                                )}
                            </Row>
                        </Col>
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default NavSprint;
