import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import './../css/App.css';
import Student from './Student';

import Login from './Login';
import NavBar from './NavBar.js';

import './../css/App.css';

class App extends Component {
  render() {
    return (
      <Container className="Container">
        <Route exact path="/" component={Login} />
        <Route path="/student" component={Student} />
      </Container>
    );
  }
}

export default App;
