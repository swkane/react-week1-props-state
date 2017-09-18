import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayListForm from './PlayListForm';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <NavBar />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Play What!?</h2>
          </div>
          <Row>
            <Col className="column" xs='6'>
              <PlayListForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
