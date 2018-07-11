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
                <NavItem>
                    <NavLink href="/components/">Welcome Student</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Logout</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
