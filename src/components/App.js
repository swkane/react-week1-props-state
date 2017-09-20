import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayListForm from './PlayListForm';
import PlayList from './PlayList';
import {Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <NavBar />
          <Row>
            <Col>
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Play What!?</h2>
              </div>
            </Col>
          </Row>
          <Row className="main">
            <Col className="column" xs='5'>
              <PlayListForm />
            </Col>
            <Col className="column" xs='5'>
              <PlayList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
