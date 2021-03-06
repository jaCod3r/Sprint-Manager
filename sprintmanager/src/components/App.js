import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Student from './Sprint_View/Student';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import ProgramManager from './Pm';
import StudentsProvider from '../contexts/StudentsContext';

import './../css/App.css';

class App extends Component {
  render() {
    return (
      <Container className="Container">
        <StudentsProvider>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/student" component={Student} />
          <Route path="/pm" component={ProgramManager} />
        </StudentsProvider>
      </Container>
    );
  }
}

export default App;
