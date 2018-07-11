import React from "react";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

import "../css/NavBar.css";
import lambdaLogo from "../img/Lambda_Logo_Full.png";

const NavBar = props => {
    return (
        <Navbar className="NavBar" light expand="md">
            <NavbarBrand>
                <img src={lambdaLogo} alt="Lambda School Logo" />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
                {/* <NavItem>
                    <NavLink href="/">Back</NavLink>
                </NavItem> */}
                <NavItem>
                    <NavLink href="/">Logout</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
