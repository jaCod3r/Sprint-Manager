import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Student from './Student';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

import './../css/App.css';
import ProgramManager from './Pm';

class App extends Component {
  render() {
    return (
      <Container className="Container">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/student" component={Student} />
        <Route path="/pm" component={ProgramManager} />
      </Container>
    );
  }
}

export default App;
