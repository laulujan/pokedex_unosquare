import React from 'react';
import Search from './Components/Search/Search';
import {Container, Row, Col} from 'reactstrap'


import './App.css';

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <h1>Pokedex</h1>
        <Search/>
        </Col>
      </Row>
      
    </Container>
    </>
  );
}

export default App;
