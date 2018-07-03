import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Student from './Student';
import Login from '../components/Login';

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
