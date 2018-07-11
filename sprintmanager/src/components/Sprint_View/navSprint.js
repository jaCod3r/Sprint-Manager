import React from "react";
import classnames from "classnames";
import Rating from "react-rating";

import { NavItem, NavLink, Nav } from "reactstrap";

export default function(props) {
    return (
        <Nav className="Student-Sprint-Toggle-Review" tabs>
            <NavItem>
                <NavLink
                    className={classnames({
                        active: props.activeTab === "1",
                    })}
                    onClick={() => {
                        props.toggle("1");
                    }}
                >
                    Your Review
                    <Rating stop={3} initialRating={props.index + 1} readonly />
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({
                        active: props.activeTab === "1",
                    })}
                    onClick={() => {
                        props.toggle("2");
                    }}
                >
                    PM
                    <Rating stop={3} initialRating={props.index + 1} />
                </NavLink>
            </NavItem>
        </Nav>
    );
}
