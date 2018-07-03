import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";

import Login from "./Login";
import NavBar from "./NavBar.js";

import "./../css/App.css";

class App extends Component {
    render() {
        return (
            <Container className="Container">
                <NavBar />
                <Route exact path="/" component={Login} />
            </Container>
        );
    }
}

export default App;
