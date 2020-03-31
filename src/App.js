import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './Component/Header'
import Body from "./Component/Body";

import './App.css';

function App() {
  return (
    <div className="Smoelenboek">
            <header className="SB-header">
                <div>Smoelenboek</div>
                <div>Menu</div>
                <div>Toevoegen</div>
            </header>
            <body className="SB-body">
              <Container></Container>
              <Row>
                <Col xs="3" className="Card">Card 1</Col>
                <Col xs="3" className="Card">Card 2</Col>
                <Col xs="3" className="Card">Card 3</Col>
                <Col xs="3" className="Card">Card 4</Col>
              </Row>
            <Col class="Card">
                <img class="rounded-circle" alt="Photo" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
                <h4>Naam</h4>
                <div>E-mail</div>
                <div>Telephone</div>
            </Col>
            <Col class="Card col-md-3">
            </Col>
            <div class="Card col-md-3">
            </div>
            <div class="Card col-md-3">
            </div>
        </body>

    </div>
  );
}

export default App;
